import type { APIRoute } from 'astro';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export const prerender = true;

function stripJsxBlocks(content: string): string {
  // Iteratively remove JSX component blocks (handles nesting by repeating until stable)
  let prev = '';
  let result = content;
  while (result !== prev) {
    prev = result;
    // Remove paired JSX tags and their content (PascalCase components)
    result = result.replace(/<([A-Z][A-Za-z0-9.]*)[^>]*>[\s\S]*?<\/\1>/g, '');
    // Remove self-closing JSX tags
    result = result.replace(/<[A-Z][A-Za-z0-9.]*[^>]*\/>/g, '');
  }
  // Remove any orphaned closing tags like </CardGrid> that were left behind
  result = result.replace(/<\/[A-Z][A-Za-z0-9.]*>/g, '');
  // Remove opening tags without closing (e.g. <Aside type="note"> on its own line)
  result = result.replace(/<[A-Z][A-Za-z0-9.]*[^/>]*>/g, '');
  return result;
}

function stripMdx(content: string): string {
  let result = content;
  result = result.replace(/^---[\s\S]*?---\n*/m, ''); // remove frontmatter
  result = result.replace(/^import .*$/gm, ''); // remove import statements
  result = result.replace(/<[a-z]+\s[^>]*\/>/g, ''); // remove self-closing lowercase JSX e.g. <img ... />
  result = result.replace(/<img[^>]*>/g, ''); // remove <img> tags (not self-closing)
  // Handle multi-line JSX opening tags (e.g. <Mermaid chart={`...`} />) by collapsing them first
  result = result.replace(/<([A-Z][A-Za-z0-9.]*)[^>]*$/gm, (match) => match.replace(/\n/g, ' '));
  // Remove Mermaid and other components with template-literal props spanning multiple lines
  result = result.replace(/<Mermaid[\s\S]*?\/>/g, '');
  result = stripJsxBlocks(result); // remove JSX components (handles nesting)
  result = result.replace(/\n{3,}/g, '\n\n'); // collapse multiple blank lines
  return result.trim();
}

function readDoc(docsRoot: string, relativePath: string, sectionTitle: string): string {
  const filePath = join(docsRoot, relativePath);
  const raw = readFileSync(filePath, 'utf-8');
  const cleaned = stripMdx(raw);
  return `## ${sectionTitle}\n\n${cleaned}`;
}

export const GET: APIRoute = () => {
  // Path to the EN docs directory, relative to project root
  const docsRoot = join(process.cwd(), 'src/content/docs/docs');

  const sections: string[] = [];

  // ─── MCP Platform ───────────────────────────────────────────────────────────
  sections.push('# Casys MCP Platform\n\n> Source: https://casys.ai | Full docs: https://casys.ai/llms-full.txt\n');
  sections.push(readDoc(docsRoot, 'platform/overview.mdx', 'MCP Platform — Overview'));
  sections.push(readDoc(docsRoot, 'platform/architecture.mdx', 'MCP Platform — Architecture'));
  sections.push(readDoc(docsRoot, 'platform/quickstart.mdx', 'MCP Platform — Quick Start'));

  // ─── @casys/mcp-server ──────────────────────────────────────────────────────
  sections.push('\n# @casys/mcp-server\n');
  sections.push(readDoc(docsRoot, 'getting-started/introduction.mdx', 'Introduction'));
  sections.push(readDoc(docsRoot, 'getting-started/installation.mdx', 'Installation'));
  sections.push(readDoc(docsRoot, 'getting-started/quickstart.mdx', 'Quick Start'));
  sections.push(readDoc(docsRoot, 'guides/middleware.mdx', 'Guide — Middleware Pipeline'));
  sections.push(readDoc(docsRoot, 'guides/auth.mdx', 'Guide — Authentication (OAuth2)'));
  sections.push(readDoc(docsRoot, 'guides/configuration.mdx', 'Guide — Configuration (YAML)'));
  sections.push(readDoc(docsRoot, 'guides/mcp-apps.mdx', 'Guide — MCP Apps (UI Resources)'));
  sections.push(readDoc(docsRoot, 'api/concurrent-mcp-server.mdx', 'API Reference — McpApp'));
  sections.push(readDoc(docsRoot, 'api/auth-providers.mdx', 'API Reference — Auth Providers'));
  sections.push(readDoc(docsRoot, 'api/standalone-components.mdx', 'API Reference — Standalone Components'));

  // ─── @casys/mcp-bridge ──────────────────────────────────────────────────────
  sections.push('\n# @casys/mcp-bridge\n');
  sections.push(readDoc(docsRoot, 'mcp-bridge/introduction.mdx', 'Introduction'));
  sections.push(readDoc(docsRoot, 'mcp-bridge/quickstart.mdx', 'Quick Start'));
  sections.push(readDoc(docsRoot, 'mcp-bridge/architecture.mdx', 'Architecture'));
  sections.push(readDoc(docsRoot, 'mcp-bridge/telegram.mdx', 'Telegram Adapter'));
  sections.push(readDoc(docsRoot, 'mcp-bridge/line.mdx', 'LINE Adapter'));
  sections.push(readDoc(docsRoot, 'mcp-bridge/security.mdx', 'Security Model'));
  sections.push(readDoc(docsRoot, 'mcp-bridge/api-resource-server.mdx', 'API Reference — Resource Server'));
  sections.push(readDoc(docsRoot, 'mcp-bridge/api-bridge-client.mdx', 'API Reference — Bridge Client'));

  // ─── @casys/mcp-compose ─────────────────────────────────────────────────────
  sections.push('\n# @casys/mcp-compose\n');
  sections.push(readDoc(docsRoot, 'mcp-compose/introduction.mdx', 'Introduction'));
  sections.push(readDoc(docsRoot, 'mcp-compose/quickstart.mdx', 'Quick Start'));
  sections.push(readDoc(docsRoot, 'mcp-compose/collector.mdx', 'Guide — Collector'));
  sections.push(readDoc(docsRoot, 'mcp-compose/composer.mdx', 'Guide — Composer & Layouts'));
  sections.push(readDoc(docsRoot, 'mcp-compose/renderer.mdx', 'Guide — Renderer'));
  sections.push(readDoc(docsRoot, 'mcp-compose/sync-rules.mdx', 'Guide — Sync Rules'));
  sections.push(readDoc(docsRoot, 'mcp-compose/api-reference.mdx', 'API Reference'));

  const output = sections.join('\n\n---\n\n') + '\n';

  return new Response(output, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
