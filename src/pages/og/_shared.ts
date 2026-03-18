// @ts-nocheck
/**
 * Shared utilities for OG image generation with Satori + resvg-wasm.
 * Fonts are cached in memory, WASM initialized once.
 */

import satori from 'satori';
import { initWasm, Resvg } from '@resvg/resvg-wasm';
import fs from 'node:fs/promises';
import { createRequire } from 'node:module';
import { join } from 'node:path';

let wasmInitialized = false;
let fontData: ArrayBuffer | null = null;
let fontDataBold: ArrayBuffer | null = null;
const require = createRequire(import.meta.url);

async function readLocalFileAsArrayBuffer(filePath: string | URL): Promise<ArrayBuffer> {
  const buf = await fs.readFile(filePath);
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
}

async function getKatexFontCandidates(filename: string): Promise<Array<string | URL>> {
  const candidates: Array<string | URL> = [
    join(process.cwd(), 'node_modules/katex/dist/fonts', filename),
  ];

  try {
    const bunStoreEntries = await fs.readdir(join(process.cwd(), 'node_modules/.bun'), {
      withFileTypes: true,
    });

    for (const entry of bunStoreEntries) {
      if (!entry.isDirectory() || !entry.name.startsWith('katex@')) {
        continue;
      }

      candidates.push(
        join(process.cwd(), 'node_modules/.bun', entry.name, 'node_modules/katex/dist/fonts', filename),
      );
    }
  } catch {
    // Bun store not present; keep root node_modules candidate only.
  }

  return candidates;
}

async function readFirstAvailableArrayBuffer(paths: Array<string | URL>): Promise<ArrayBuffer> {
  for (const filePath of paths) {
    try {
      return await readLocalFileAsArrayBuffer(filePath);
    } catch {
      // Try the next candidate path.
    }
  }

  throw new Error(`Unable to load local OG font from any known path: ${paths.join(', ')}`);
}

async function loadFonts() {
  if (!fontData) {
    fontData = await readFirstAvailableArrayBuffer(await getKatexFontCandidates('KaTeX_SansSerif-Regular.ttf'));
  }
  if (!fontDataBold) {
    fontDataBold = await readFirstAvailableArrayBuffer(await getKatexFontCandidates('KaTeX_SansSerif-Bold.ttf'));
  }
  return { fontData: fontData!, fontDataBold: fontDataBold! };
}

async function ensureWasm() {
  if (!wasmInitialized) {
    try {
      try {
        await initWasm(
          fetch('https://unpkg.com/@resvg/resvg-wasm@2.6.2/index_bg.wasm')
        );
      } catch {
        const wasmPath = require.resolve('@resvg/resvg-wasm/index_bg.wasm');
        const wasmBytes = await fs.readFile(wasmPath);
        await initWasm(wasmBytes);
      }
    } catch {
      // Already initialized, or initialized by another callsite.
    }
    wasmInitialized = true;
  }
}

export async function generateOgImage(element: any): Promise<Response> {
  const fonts = await loadFonts();
  await ensureWasm();

  const svg = await satori(element, {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Geist', data: fonts.fontData, weight: 600, style: 'normal' as const },
      { name: 'Geist', data: fonts.fontDataBold, weight: 700, style: 'normal' as const },
    ],
  });

  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  return new Response(pngBuffer, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=86400, s-maxage=604800',
    },
  });
}
