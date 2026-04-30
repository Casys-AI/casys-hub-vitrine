import type { APIRoute } from 'astro';

export const prerender = true;

const body = `# Casys MCP Platform Documentation

> Source: https://casys.ai
> Full docs: https://casys.ai/llms-full.txt

## Packages

- @casys/mcp-server v0.14.0 — Production MCP server framework
- @casys/mcp-bridge v0.2.0 — MCP apps to messaging platforms
- @casys/mcp-compose v0.4.0 — Compose MCP UIs into dashboards

## Documentation sections

- /docs/platform/overview — MCP Platform overview
- /docs/getting-started/introduction — mcp-server introduction
- /docs/guides/zitadel-claude-mcp-runbook — Zitadel + Claude.ai MCP OAuth runbook
- /docs/mcp-bridge/introduction — mcp-bridge introduction
- /docs/mcp-compose/introduction — mcp-compose introduction
`.trimEnd();

export const GET: APIRoute = () => {
  return new Response(body + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
