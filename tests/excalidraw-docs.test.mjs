import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const themedDocs = [
  'src/content/docs/docs/getting-started/introduction.mdx',
  'src/content/docs/docs/guides/auth.mdx',
  'src/content/docs/docs/guides/middleware.mdx',
  'src/content/docs/fr/docs/getting-started/introduction.mdx',
  'src/content/docs/fr/docs/guides/auth.mdx',
  'src/content/docs/fr/docs/guides/middleware.mdx',
  'src/content/docs/zh/docs/getting-started/introduction.mdx',
  'src/content/docs/zh/docs/guides/auth.mdx',
  'src/content/docs/zh/docs/guides/middleware.mdx',
];

describe('MCP server docs diagrams', () => {
  it('routes themed diagrams through ExcalidrawDiagram', () => {
    for (const relativePath of themedDocs) {
      const content = readFileSync(resolve(process.cwd(), relativePath), 'utf8');

      expect(
        content,
        `${relativePath} should import ExcalidrawDiagram`,
      ).toMatch(/import ExcalidrawDiagram from ['"][^'"]+['"]/);
      expect(
        content.includes('<img src="/diagrams/mcp-server/'),
        `${relativePath} should not embed raw dark SVG diagrams`,
      ).toBe(false);
    }
  });
});
