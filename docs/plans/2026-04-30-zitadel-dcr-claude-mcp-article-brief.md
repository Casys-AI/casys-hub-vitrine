# Brief article — Zitadel, DCR, and Claude.ai MCP auth

Date: 2026-04-30

## Repo state

- `../einvoice-platform`: pulled with `git pull --ff-only` on 2026-04-30. Local `main` now matches `origin/main`. No tracked diff. Untracked files: `.DS_Store`, `.claude/commands/`.
- `../mcp-einvoice`: pulled with `git pull --ff-only` on 2026-04-30. Local `main` now matches `origin/main`. No tracked diff. Untracked files: `.DS_Store`, `.idea/`, `docs/.DS_Store`, `packages/.DS_Store`, and three `"* 2.ts"` copies.
- `casys-hub-vitrine`: local `main` matches `origin/main`. Existing untracked files before this brief: `.serena/`, `AGENTS.md`.

## Article angle

Working title:

> Build a multi-tenant remote MCP server for Claude.ai with Zitadel OAuth

The article should not be another generic OAuth tutorial. The existing blog already has `src/content/blog/{en,fr,zh,zh-TW}/mcp-authentication-claude-ai-oauth2.mdx`, centered on Auth0 + Claude.ai OAuth2.

This piece should be the Zitadel + multi-tenant counterpart to the Auth0 article: a hands-on tutorial for building a remote MCP server where each tenant has its own subdomain, credentials, MCP app instance, and Zitadel org mapping.

The production story behind `einvoice-platform` is the narrative hook: the MCP server already returned a valid 401 + RFC 9728 Protected Resource Metadata, but Claude.ai still could not show the login button because Zitadel did not expose `registration_endpoint` in its authorization-server metadata. The fix was a small DCR proxy over Zitadel's Management API, plus an authorization-server metadata proxy that keeps Zitadel as the issuer.

`@casys/mcp-server` should be explicit in the article, not hidden implementation detail. It provided the reusable MCP auth/provider/middleware surface (`McpApp`, `createOIDCAuthProvider`, `createMultiTenantMiddleware`, PRM handling, JWKS validation, tool registration), so the tutorial can focus on the multi-tenant wiring and Zitadel-specific gaps instead of reimplementing the MCP protocol.

## DataForSEO positioning

DataForSEO checked on 2026-04-30 using Google Ads search volume and Google SERP live.

US / English monthly volume signals:

| Keyword | Volume | CPC | Competition index |
| --- | ---: | ---: | ---: |
| `mcp` | 90,500 | 9.59 | 8 |
| `mcp server` / `mcp servers` | 60,500 | 6.41 | 20 |
| `model context protocol` | 22,200 | 8.80 | 27 |
| `claude mcp` | 5,400 | 23.74 | 9 |
| `claude mcp server` | 1,300 | 20.82 | 8 |
| `zitadel` | 1,300 | 19.08 | 7 |
| `mcp authentication` | 880 | 11.22 | 25 |
| `remote mcp server` | 720 | 9.21 | 19 |
| `mcp oauth` | 480 | 11.00 | 16 |
| `mcp server tutorial` | 320 | 5.82 | 34 |
| `dynamic client registration` | 170 | 0.66 | 4 |
| `mcp server typescript` | 110 | 7.71 | 10 |
| `rfc 7591` / `rfc 9728` | 70 each | n/a | 0-1 |

France / French monthly volume signals:

| Keyword | Volume | CPC | Competition index |
| --- | ---: | ---: | ---: |
| `mcp` | 14,800 | 2.86 | 1 |
| `mcp server` / `mcp servers` | 5,400 | 2.45 | 7 |
| `model context protocol` | 1,900 | 6.27 | 15 |
| `serveur mcp` | 1,600 | 2.22 | 4 |
| `claude mcp` | 720 | 1.70 | 1 |
| `zitadel` | 480 | 5.90 | 2 |
| `mcp authentication` | 90 | 8.17 | 16 |
| `remote mcp server` | 50 | n/a | 14 |
| `mcp oauth` | 40 | 10.21 | 11 |

SEO conclusion:

- Do **not** lead with `zitadel dynamic client registration` or `mcp multi tenant`; those are near-zero volume by themselves.
- Lead with `MCP server`, `remote MCP server`, `Claude MCP`, `MCP authentication`, then make the concrete tutorial about multi-tenancy + Zitadel.
- Good title shape: `Build a multi-tenant remote MCP server for Claude.ai with Zitadel OAuth`.
- Good French title shape: `Créer un serveur MCP multi-tenant pour Claude.ai avec Zitadel OAuth`.
- Use H2/H3s for the long-tail: `MCP authentication`, `remote MCP server`, `Zitadel OAuth`, `Dynamic Client Registration`, `Protected Resource Metadata`, `RFC 9728`, `RFC 7591`.
- SERP gap: `multi tenant mcp server` currently has Reddit/GitHub/Medium/marketing pages, not many concrete implementation tutorials. This is the opening.
- SERP competition for `mcp server authentication` is mostly official spec/docs, Red Hat, Solo.io, Reddit. A production tutorial with code can differentiate.

## Current external spec context

- Claude's current connector docs say remote custom connectors support OAuth with DCR, CIMD, Anthropic-held credentials, and no-auth. User-pasted static bearer tokens are still not supported.
  Source: https://claude.com/docs/connectors/building/authentication
- Claude's current connector docs list `https://claude.ai/api/mcp/auth_callback` as the hosted-surface callback URL and mention token refresh behavior.
  Source: https://claude.com/docs/connectors/building/authentication
- The latest MCP auth spec is now `2025-11-25`, not only `2025-06-18`. It says MCP servers must implement RFC 9728 PRM, authorization servers must provide metadata discovery, and client registration priority is now: preregistered credentials, CIMD, DCR fallback, then prompt for client info.
  Source: https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization
- DCR is still supported, but in the latest spec it is framed as fallback/backward-compatible rather than the preferred future path. If the article says "Claude requires DCR", qualify it historically: this was true for the 2026-04-15 implementation path and still works, but current Claude also supports custom credentials and CIMD.
- Zitadel DCR is still not native as of the checked GitHub issue: `zitadel/zitadel#9810` remains open, status "Gathering community feedback", no assignee or milestone.
  Source: https://github.com/zitadel/zitadel/issues/9810

## Local source map

Primary `einvoice-platform` remote files to read from `origin/main`:

- `docs/adr/0001-mcp-dcr-proxy-over-idp-migration.md`
  Decision record: DCR proxy over Zitadel instead of Keycloak/Authentik/Auth0 migration or waiting for native DCR.
- `docs/plans/mcp-dcr-proxy/00-overview.md`
  Slim problem/decision/scope overview. Says Niveau 1 has been in production since 2026-04-16.
- `docs/architecture/dcr-proxy.md`
  Main technical source: end-to-end flow, RFC 7591/7592 endpoints, AS metadata proxy, client type handling, threat model, DCR env vars.
- `docs/plans/mcp-dcr-proxy/checklist.md`
  Implementation state. Important lines: Claude.ai web login button visible, guest login reaches tools, DCR registers audited, E2E green from 2026-04-17.
- `docs/plans/mcp-dcr-proxy/journal.md`
  Narrative of the debugging sessions. Useful for article story beats and mistakes.
- `docs/postmortems/20260417-mcp-e2e-auth-chain.md`
  The best "hard-earned lessons" source: public tenant JWTs lacked Zitadel `resource_owner` claim, Iopole Keycloak URL was stale, and `AuditEvent` would have revealed the real 401 reason earlier.
- `docs/postmortems/zitadel-action-pivot.md`
  Earlier Zitadel lesson: custom Actions/goja/async failure made native `org_id` claim + DB mapping safer than custom claims.
- `docs/runbooks/dcr-proxy-setup.md`
  Operational checks: PRM, AS metadata, DCR registration, cleanup.
- `lib/dcr/service.ts`, `lib/dcr/validate.ts`, `lib/dcr/zitadel-apps.ts`
  Actual DCR business logic: validation, rate limits, Zitadel app CRUD, RAT generation/hash, audit and rollback.
- `routes/.well-known/oauth-authorization-server.ts`
  Actual AS metadata proxy. It fetches Zitadel metadata and injects `registration_endpoint`.
- `routes/oauth/register.ts` and `routes/oauth/register/[client_id].ts`
  RFC 7591 and RFC 7592 HTTP routes.
- `lib/mcp/build-server.ts`
  PRM source of truth: `authorizationServers` points to the platform root so clients discover the metadata proxy rather than Zitadel's native metadata.
- `lib/mcp/einvoice-tenant-resolver.ts`
  Public tenant bypass for DCR-issued JWTs that do not include the Zitadel resource-owner claim.

Primary `mcp-einvoice` source:

- `docs/2026-03-26-deno-deploy-oauth.md`
  Earlier Auth0 implementation: static registration with custom client ID/secret worked on Claude.ai desktop and mobile; DCR not implemented there. Use this as contrast, not as the Zitadel article source.

Existing blog source in current repo:

- `src/content/blog/fr/mcp-authentication-claude-ai-oauth2.mdx`
- `src/content/blog/en/mcp-authentication-claude-ai-oauth2.mdx`
- `src/content/blog/zh/mcp-authentication-claude-ai-oauth2.mdx`
- `src/content/blog/zh-TW/mcp-authentication-claude-ai-oauth2.mdx`

## Live checks run on 2026-04-30

Read-only-ish smoke checks against production, plus one DCR register/delete cycle:

1. PRM:

```bash
curl -i https://demo.einvoice-platform.fr/mcp/.well-known/oauth-protected-resource
```

Observed: `HTTP/2 200`, JSON includes:

```json
{
  "resource": "367545125829670172",
  "resource_metadata_url": "https://demo.einvoice-platform.fr/mcp/.well-known/oauth-protected-resource",
  "authorization_servers": ["https://einvoice-platform.fr/"],
  "bearer_methods_supported": ["header"]
}
```

2. Authorization server metadata proxy:

```bash
curl -i https://einvoice-platform.fr/.well-known/oauth-authorization-server
```

Observed: `HTTP/2 200`, JSON keeps `issuer` on Zitadel and includes:

```json
{
  "issuer": "https://einvoice-platform-c8c7er.eu1.zitadel.cloud",
  "jwks_uri": "https://einvoice-platform-c8c7er.eu1.zitadel.cloud/oauth/v2/keys",
  "code_challenge_methods_supported": ["S256"],
  "registration_endpoint": "https://einvoice-platform.fr/oauth/register"
}
```

3. Test DCR registration:

```bash
curl -i -X POST https://einvoice-platform.fr/oauth/register \
  -H 'Content-Type: application/json' \
  -d '{"redirect_uris":["http://localhost:9999/test"],"client_name":"article-smoke"}'
```

Observed: `HTTP/2 201`, returned a `client_id`, a one-time `registration_access_token`, and `registration_client_uri`.

4. Cleanup:

```bash
curl -i -X DELETE 'https://einvoice-platform.fr/oauth/register/<client_id>' \
  -H 'Authorization: Bearer <registration_access_token>'
```

Observed: `HTTP/2 204`. The temporary client was deleted.

## Implementation story to tell

1. Start with the failed UX: Claude.ai accepts only the server URL, hits `/mcp`, then expects OAuth discovery. The platform already had the obvious MCP auth pieces but no login button appeared.
2. Explain why the bug was not in the MCP endpoint: 401 challenge, PRM, JWT validation and bearer handling were already mostly right.
3. Explain the missing piece: Claude had to register itself as an OAuth client. Zitadel's metadata did not expose `registration_endpoint`.
4. Explain why injecting `registration_endpoint` into PRM would have been wrong: RFC 9728 PRM points to the authorization server; RFC 8414/OIDC metadata from that authorization server is where registration capability is discovered.
5. Explain the proxy:
   - PRM now points `authorization_servers` to `https://einvoice-platform.fr/`.
   - `/.well-known/oauth-authorization-server` proxies Zitadel metadata.
   - It injects `registration_endpoint`.
   - It deliberately keeps `issuer` as Zitadel because JWT `iss` validation depends on it.
6. Explain the DCR backend:
   - `POST /oauth/register` validates client metadata, rate-limits, creates a Zitadel OIDC app, stores `DcrClient`, returns `client_id` and RAT.
   - `GET/PUT/DELETE /oauth/register/:client_id` use the RAT for RFC 7592 client management.
   - Public clients map to Zitadel `USER_AGENT` + `none`; Claude.ai server-side maps to Zitadel `WEB` + `client_secret_post` + refresh token.
7. Explain the token validation fixes:
   - Zitadel app must issue JWT access tokens, not opaque tokens.
   - JWKS is `/oauth/v2/keys`, not `/.well-known/jwks.json`.
   - Audience had to match the configured project/resource.
8. Explain the multi-tenant nuance:
   - Private tenants still require Zitadel resource-owner org claim.
   - Public demo tenant bypasses that claim because DCR-issued OAuth apps do not carry the dashboard user's `resource_owner` claim.
9. Explain operational guardrails:
   - Redirect URI validation.
   - Consent screen required.
   - 5/h/IP and 100/h global registration limits.
   - RAT stored hashed.
   - Audit events for register/update/delete/rate-limit/reject.
   - GC and admin dashboard.
10. Close with the current-state caveat:
   - This DCR proxy is valid and live, but the latest MCP auth spec also prefers CIMD for some cases. A future follow-up can be "DCR proxy was the bridge; CIMD is the cleanup path."

## Useful hard lessons

- Debug OAuth by reading the chain in order: `401 -> PRM -> AS metadata -> DCR -> authorize -> token -> MCP bearer`.
- Do not patch `@casys/mcp-server` blindly before reading app-level `AuditEvent`.
- A generic `invalid_token` can hide a tenant-resolver rejection downstream of JWT verification.
- External MCP clients can produce JWT shapes that are valid but lack Zitadel-specific user/org claims.
- Any direct DB credential migration must invalidate `lib/mcp/server-cache.ts` or restart the service, because cached `McpApp` instances close over decrypted provider credentials.
- The AS metadata proxy contains an intentional RFC 8414 awkwardness: metadata is served from `einvoice-platform.fr`, but `issuer` remains the Zitadel issuer. The article should present this as an engineering tradeoff, not as pure spec perfection.

## Do not overclaim

- Do not say Zitadel "supports DCR" after this work. It does not; the platform provides a DCR proxy over Zitadel's Management API.
- Do not say DCR is the future-preferred MCP path without qualification. Current MCP auth spec prefers preregistration/CIMD before DCR where available.
- Do not say the solution is already extracted to `@casys/mcp-server@0.18.0`. The plan says extraction is future work after production stability.
- Do not imply the old `mcp-einvoice` Auth0 flow used DCR. It used static registration plus Claude advanced client credentials.
- Do not use `docs/architecture/multi-tenant-mcp.md` as the only DCR source: it still has older "DCR out of scope" language. Prefer `docs/architecture/dcr-proxy.md` and the DCR checklist/journal.

## Suggested article structure

1. Title: "Making Claude.ai MCP OAuth work with Zitadel before native DCR"
2. Lead: "The MCP endpoint was correct; the authorization server was not discoverable enough."
3. Section: "What Claude.ai actually does when you paste an MCP URL"
4. Section: "Where Zitadel blocked the flow"
5. Section: "The wrong fix: putting registration_endpoint in PRM"
6. Section: "The fix: an authorization-server metadata proxy"
7. Section: "Turning RFC 7591 into Zitadel OIDC apps"
8. Section: "The Claude.ai payload surprise: confidential client + refresh token"
9. Section: "The JWT and tenant bugs that came after the login button"
10. Section: "Security controls that made open DCR acceptable"
11. Section: "What changed in the latest MCP auth spec"
12. Section: "What I would extract into a reusable library"

## Next concrete steps

1. Pull or worktree `../einvoice-platform` from `origin/main` before copying snippets.
2. Decide whether the article updates the existing Auth0 article or becomes a new French-first article. Recommendation: new article, because the old one is a tutorial and this one is a production architecture/debugging story.
3. Draft in French first under `src/content/blog/fr/`, then translate only after the technical claims are stable.
4. Before publishing, re-run:

```bash
curl -s https://demo.einvoice-platform.fr/mcp/.well-known/oauth-protected-resource | jq .
curl -s https://einvoice-platform.fr/.well-known/oauth-authorization-server | jq .
```

5. If including a DCR register example, use a disposable localhost redirect and delete the client immediately with its RAT.
