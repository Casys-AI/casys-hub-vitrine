#!/usr/bin/env node
/**
 * Post-build script for Vercel --prebuilt deployments.
 *
 * WHY THIS EXISTS:
 * When deploying with `vercel deploy --prebuilt`, Vercel reads routing from
 * `.vercel/output/config.json` (Build Output API v3), NOT from `vercel.json`.
 * Astro's @astrojs/vercel adapter generates config.json but doesn't support
 * hostname-based rewrites and the deployed Build Output won't honor `vercel.json`
 * for these proxy routes. This script patches config.json after build.
 *
 * WHAT IT DOES:
 * 1. Injects Umami proxy rewrites and hostname-based rewrites into config.json
 *    BEFORE the "handle": "filesystem" route, so analytics and subdomain
 *    routing work in the deployed Build Output
 * 2. Resolves pnpm workspace symlinks in .vercel/output/ that break Vercel uploads
 * 3. Patches generated Chinese SEO metadata for Starlight/sitemap output
 * 4. Copies built UI component HTML files from @casys/mcp-std into static output,
 *    injecting an auto-resize script so the catalog can display interactive previews
 *    without any API dependency
 *
 * ROUTING STRATEGY:
 * Each subdomain (mcp-server, mcp-std, engine, mcp-bridge) rewrites requests to its
 * corresponding /prefix/ path in the Astro build output. The negative lookahead
 * in each regex prevents double-prefixing: if a URL already starts with the
 * target prefix (e.g. /mcp-std/catalog), it passes through without rewrite.
 * This is critical for internal links within sub-sites.
 *
 * DEPLOY COMMAND:
 *   pnpm run build && vercel deploy --prebuilt --prod --archive=tgz
 *
 * AFTER DEPLOY (until domain assignment is fixed):
 *   vercel alias set <deployment-url> mcp-std.casys.ai
 *   vercel alias set <deployment-url> mcp-server.casys.ai
 *   vercel alias set <deployment-url> engine.casys.ai
 *   vercel alias set <deployment-url> mcp-bridge.casys.ai
 *   vercel alias set <deployment-url> casys.ai
 *   vercel alias set <deployment-url> www.casys.ai
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync, lstatSync, readlinkSync, rmSync, cpSync, renameSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join, dirname } from 'node:path';

const CONFIG_PATH = '.vercel/output/config.json';

// --- 1. Inject hostname rewrites ---

// Subdomain → Astro page prefix mapping
const SUBDOMAIN_MAP = [
  { host: 'mcp-server.casys.ai', prefix: 'mcp-server' },
  { host: 'mcp-std.casys.ai', prefix: 'mcp-std' },
  { host: 'engine.casys.ai', prefix: 'engine' },
  { host: 'mcp-bridge.casys.ai', prefix: 'mcp-bridge' },
];

const LOCALES = ['fr', 'zh', 'zh-TW'];

const UMAMI_PROXY_REWRITES = [
  {
    src: '^/u/script\\.js$',
    dest: 'https://analytics.casys.ai/script.js',
  },
  {
    src: '^/u/api/send$',
    dest: 'https://analytics.casys.ai/api/send',
  },
];

// Build rewrite rules for each subdomain.
// Order matters: locale-specific rules MUST come before the catch-all,
// otherwise /fr (without trailing slash) slips past the negative lookahead
// and gets rewritten to /{prefix}/fr instead of /fr/{prefix}.
const HOSTNAME_REWRITES = SUBDOMAIN_MAP.flatMap(({ host, prefix }) => [
  // 1) Locale-prefixed paths: /fr → /fr/{prefix}, /fr/catalog → /fr/{prefix}/catalog
  //    Excludes /fr/docs/... which are shared Starlight pages (not sub-site prefixed).
  {
    src: `^/(${LOCALES.join('|')})(?:/(?!docs(?:/|$))(.*))?$`,
    has: [{ type: 'host', value: host }],
    dest: `/$1/${prefix}/$2`,
  },
  // 2) Catch-all: rewrite everything else to /{prefix}/...
  //    Negative lookahead prevents double-prefixing and skips static assets.
  {
    src: `^/(?!_astro/|_vercel/|api/|ui/|icons/|fonts/|images/|pagefind/|docs/|${LOCALES.join('/|')}/|${prefix}/)(.*)$`,
    has: [{ type: 'host', value: host }],
    dest: `/${prefix}/$1`,
  },
]);

const config = JSON.parse(readFileSync(CONFIG_PATH, 'utf-8'));
const fsIdx = config.routes.findIndex((r) => r.handle === 'filesystem');

if (fsIdx === -1) {
  console.error('[post-build] Could not find "handle": "filesystem" in config.json');
  process.exit(1);
}

// Insert rewrites before filesystem handler
config.routes.splice(fsIdx, 0, ...UMAMI_PROXY_REWRITES, ...HOSTNAME_REWRITES);
writeFileSync(CONFIG_PATH, JSON.stringify(config, null, '\t'));
console.log(`[post-build] Injected ${UMAMI_PROXY_REWRITES.length + HOSTNAME_REWRITES.length} rewrites into config.json (${UMAMI_PROXY_REWRITES.length} Umami + ${HOSTNAME_REWRITES.length} hostname)`);

// --- 2. Resolve pnpm symlinks ---
// pnpm uses symlinks for workspace dependencies (e.g. @casys/design-system).
// Astro's Vercel adapter copies node_modules into .vercel/output/ preserving
// these symlinks, but Vercel's upload breaks on symlinks pointing outside the
// output directory. We resolve each symlink to a real copy.

const symlinks = execSync('find .vercel/output -type l', { encoding: 'utf-8' }).trim();
if (symlinks) {
  for (const link of symlinks.split('\n')) {
    const target = readlinkSync(link);
    const dir = dirname(link);
    const resolved = join(dir, target);
    rmSync(link);
    cpSync(resolved, link, { recursive: true });
  }
  console.log(`[post-build] Resolved ${symlinks.split('\n').length} pnpm symlinks`);
} else {
  console.log('[post-build] No symlinks found');
}

// --- 3. Patch generated Chinese SEO metadata ---
// Custom layouts use zh-CN for /zh, but Starlight and @astrojs/sitemap derive
// generated metadata from Astro's internal locale key (`zh`). We keep the
// internal key stable for application code, then patch generated output.

const STATIC_OUTPUT_DIRS = ['dist/client', '.vercel/output/static'];
const CANONICAL_ZH_TW_DIR = 'zh-TW';
const DUPLICATE_ZH_TW_DOC_DIRS = [
  'fr/zh-tw',
  'zh/zh-tw',
  'zh-TW/zh-tw',
];

function walkFiles(root, extensions, files = []) {
  if (!existsSync(root)) return files;

  for (const entry of readdirSync(root, { withFileTypes: true })) {
    const fullPath = join(root, entry.name);
    if (entry.isDirectory()) {
      walkFiles(fullPath, extensions, files);
    } else if (extensions.some((extension) => entry.name.endsWith(extension))) {
      files.push(fullPath);
    }
  }

  return files;
}

function resolveExactPath(root, relativePath) {
  let current = root;

  for (const part of relativePath.split('/')) {
    if (!existsSync(current)) return null;

    const exactEntry = readdirSync(current, { withFileTypes: true })
      .find((entry) => entry.name === part);
    if (!exactEntry) return null;

    current = join(current, exactEntry.name);
  }

  return current;
}

function normalizeRootZhTwDir(root) {
  const rootEntries = readdirSync(root, { withFileTypes: true });
  const exactCanonical = rootEntries.find((entry) =>
    entry.isDirectory() && entry.name === CANONICAL_ZH_TW_DIR
  );
  if (exactCanonical) return false;

  const lowercaseTaiwanDir = rootEntries.find((entry) =>
    entry.isDirectory() && entry.name === 'zh-tw'
  );
  if (!lowercaseTaiwanDir) return false;

  const currentPath = join(root, lowercaseTaiwanDir.name);
  const temporaryPath = join(root, `.tmp-${lowercaseTaiwanDir.name}-${Date.now()}`);
  renameSync(currentPath, temporaryPath);
  renameSync(temporaryPath, join(root, CANONICAL_ZH_TW_DIR));
  return true;
}

function patchChineseSeoMetadata(root) {
  if (!existsSync(root)) return { htmlPatched: 0, sitemapPatched: 0, dirsRemoved: 0, dirsNormalized: 0 };

  let htmlPatched = 0;
  let sitemapPatched = 0;
  let dirsRemoved = 0;
  let dirsNormalized = 0;

  if (normalizeRootZhTwDir(root)) {
    dirsNormalized++;
  }

  for (const relativeDir of DUPLICATE_ZH_TW_DOC_DIRS) {
    const duplicateDir = resolveExactPath(root, relativeDir);
    if (duplicateDir && existsSync(duplicateDir)) {
      rmSync(duplicateDir, { recursive: true, force: true });
      dirsRemoved++;
    }
  }

  for (const htmlFile of walkFiles(root, ['.html'])) {
    let html = readFileSync(htmlFile, 'utf-8');
    const original = html;

    html = html
      .replaceAll('<html lang="zh"', '<html lang="zh-CN"')
      .replaceAll('hreflang="zh"', 'hreflang="zh-CN"')
      .replaceAll('property="og:locale" content="zh"', 'property="og:locale" content="zh_CN"');

    if (html !== original) {
      writeFileSync(htmlFile, html);
      htmlPatched++;
    }
  }

  for (const sitemapFile of walkFiles(root, ['.xml'])) {
    if (!sitemapFile.includes('sitemap')) continue;

    let xml = readFileSync(sitemapFile, 'utf-8');
    const original = xml;

    xml = xml
      .replace(/<url><loc>[^<]*\/zh-tw\/[^<]*<\/loc>.*?<\/url>/g, '')
      .replaceAll('hreflang="zh"', 'hreflang="zh-CN"');

    if (xml !== original) {
      writeFileSync(sitemapFile, xml);
      sitemapPatched++;
    }
  }

  return { htmlPatched, sitemapPatched, dirsRemoved, dirsNormalized };
}

let seoHtmlPatched = 0;
let seoSitemapPatched = 0;
let seoDirsRemoved = 0;
let seoDirsNormalized = 0;
for (const outputDir of STATIC_OUTPUT_DIRS) {
  const result = patchChineseSeoMetadata(outputDir);
  seoHtmlPatched += result.htmlPatched;
  seoSitemapPatched += result.sitemapPatched;
  seoDirsRemoved += result.dirsRemoved;
  seoDirsNormalized += result.dirsNormalized;
}

console.log(`[post-build] Patched Chinese SEO metadata (${seoHtmlPatched} HTML, ${seoSitemapPatched} sitemap files, ${seoDirsRemoved} duplicate zh-tw dirs removed, ${seoDirsNormalized} root zh-TW dirs normalized)`);

// --- 4. Copy UI component HTML files from @casys/mcp-std ---
// Each component in lib/std/src/ui/dist/<name>/index.html is a self-contained
// Preact + Tailwind single-file bundle (~350-450KB). We copy them into the
// Vercel static output so the catalog can load them as iframe src without any
// API call. We also inject an auto-resize script that reports content height
// to the parent via postMessage('mcp-app-resize').

const UI_DIST_DIR = join(dirname(new URL(import.meta.url).pathname), '..', '..', 'std', 'src', 'ui', 'dist');
const UI_OUTPUT_DIR = '.vercel/output/static/ui';

const AUTO_RESIZE_SCRIPT = `
<script data-mcp-auto-resize>
(function() {
  var lastHeight = 0;
  var debounceTimer = null;

  function getContentHeight() {
    var height = 0;
    var children = document.body.children;
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      if (child.hasAttribute && child.hasAttribute('data-mcp-auto-resize')) continue;
      var rect = child.getBoundingClientRect();
      var bottom = rect.top + rect.height + window.scrollY;
      if (bottom > height) height = bottom;
    }
    var bodyStyle = getComputedStyle(document.body);
    height += parseInt(bodyStyle.paddingBottom || '0', 10);
    height += parseInt(bodyStyle.marginBottom || '0', 10);
    return Math.max(height, 50);
  }

  function reportHeight() {
    var height = getContentHeight();
    if (height !== lastHeight && height > 0) {
      lastHeight = height;
      window.parent.postMessage({ type: 'mcp-app-resize', height: height, uri: location.href }, '*');
    }
  }

  function debouncedReport() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(reportHeight, 50);
  }

  if (document.readyState === 'complete') {
    setTimeout(reportHeight, 100);
  } else {
    window.addEventListener('load', function() { setTimeout(reportHeight, 100); });
  }

  if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(debouncedReport).observe(document.body);
  }

  setInterval(reportHeight, 2000);
})();
</script>
`;

if (existsSync(UI_DIST_DIR)) {
  let uiCount = 0;
  for (const entry of readdirSync(UI_DIST_DIR, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const srcFile = join(UI_DIST_DIR, entry.name, 'index.html');
    if (!existsSync(srcFile)) continue;

    const destDir = join(UI_OUTPUT_DIR, entry.name);
    mkdirSync(destDir, { recursive: true });

    let html = readFileSync(srcFile, 'utf-8');

    // Inject auto-resize script before </body>
    if (html.includes('</body>')) {
      html = html.replace('</body>', AUTO_RESIZE_SCRIPT + '</body>');
    } else if (html.includes('</html>')) {
      html = html.replace('</html>', AUTO_RESIZE_SCRIPT + '</html>');
    } else {
      html += AUTO_RESIZE_SCRIPT;
    }

    writeFileSync(join(destDir, 'index.html'), html);
    uiCount++;
  }
  console.log(`[post-build] Copied ${uiCount} UI components to static/ui/ with auto-resize script`);
} else {
  console.warn('[post-build] UI dist not found at ' + UI_DIST_DIR + ' — run "deno task build:ui" in lib/std first');
}
