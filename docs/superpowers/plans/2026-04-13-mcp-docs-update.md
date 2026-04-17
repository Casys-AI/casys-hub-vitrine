# MCP Platform Documentation Update — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update all existing Starlight docs and marketing pages for @casys/mcp-server (v0.12→v0.14), @casys/mcp-bridge (minor fixes), and @casys/mcp-compose (v0.3→v0.4) to match the current source code.

**Architecture:** Each task targets one logical scope (one package's docs, one package's marketing, or shared config). Tasks are independent and can run in parallel as sub-agents. Source of truth is the monorepo at `/Users/erwanpesle/Documents/GitHub/mcp-server/packages/`.

**Tech Stack:** Astro 5, Starlight, MDX, i18n (en/fr/zh/zh-TW)

---

## Task 1: mcp-server — Rename ConcurrentMCPServer → McpApp in all EN docs

**Context:** The class was renamed to `McpApp` in the source. `ConcurrentMCPServer` is a deprecated alias. Every doc page and code example must use `McpApp`. The sidebar label in astro.config.mjs must also change.

**Files:**
- Modify: `src/content/docs/docs/getting-started/introduction.mdx`
- Modify: `src/content/docs/docs/getting-started/installation.mdx`
- Modify: `src/content/docs/docs/getting-started/quickstart.mdx`
- Modify: `src/content/docs/docs/guides/middleware.mdx`
- Modify: `src/content/docs/docs/guides/auth.mdx`
- Modify: `src/content/docs/docs/guides/configuration.mdx`
- Modify: `src/content/docs/docs/guides/mcp-apps.mdx`
- Modify: `src/content/docs/docs/api/concurrent-mcp-server.mdx`
- Modify: `src/content/docs/docs/api/auth-providers.mdx`
- Modify: `src/content/docs/docs/api/standalone-components.mdx`
- Modify: `astro.config.mjs` (sidebar label line 68)

**Source reference:** Read `/Users/erwanpesle/Documents/GitHub/mcp-server/packages/server/mod.ts` to confirm the export name and deprecation notice.

- [ ] **Step 1:** In every `.mdx` file listed above, replace ALL occurrences of `ConcurrentMCPServer` with `McpApp` — both in prose and code blocks. Use grep to find every instance first.
- [ ] **Step 2:** In `concurrent-mcp-server.mdx`, add a note at the top: `> **Migration note:** This class was renamed from \`ConcurrentMCPServer\` to \`McpApp\` in v0.13. The old name is re-exported as a deprecated alias and will be removed in v1.0.`
- [ ] **Step 3:** In `astro.config.mjs` line 68, change the sidebar label from `'ConcurrentMCPServer'` to `'McpApp'`.
- [ ] **Step 4:** In `introduction.mdx`, update the version string from `0.12.0` to `0.14.0` and the test count from `270` to `301`.

---

## Task 2: mcp-server — Fix API signatures in EN docs

**Context:** Several API signatures changed between v0.12 and v0.14. The docs show wrong types and non-existent functions.

**Files:**
- Modify: `src/content/docs/docs/api/concurrent-mcp-server.mdx`
- Modify: `src/content/docs/docs/api/auth-providers.mdx`

**Source reference:** Read these files in the monorepo for correct signatures:
- `/Users/erwanpesle/Documents/GitHub/mcp-server/packages/server/src/mcp-app.ts` (McpApp class)
- `/Users/erwanpesle/Documents/GitHub/mcp-server/packages/server/src/types.ts` (all interfaces)

- [ ] **Step 1:** In `concurrent-mcp-server.mdx`, fix `startHttp` to show `async startHttp(options: HttpServerOptions): Promise<{ shutdown: () => Promise<void>; addr: { hostname: string; port: number } }>`. The caller must `await` it.
- [ ] **Step 2:** Fix `unregisterTool` return type from `void` to `boolean`.
- [ ] **Step 3:** Fix `toolErrorMapper` signature from `(error: unknown) => string` to `(error: unknown, toolName: string) => string | null`. Add note: returning `null` means rethrow.
- [ ] **Step 4:** Fix `HttpServerOptions.ipRateLimit`: change `keyExtractor` param from `(request: Request) => string` to `(context: HttpRateLimitContext) => string` where `HttpRateLimitContext` has `{ ip, method, path, headers, sessionId }`. Change `onLimitExceeded` from callback to `"reject" | "wait"` string union.
- [ ] **Step 5:** Fix `RateLimitOptions` (tool-level): add missing `keyExtractor` and `onLimitExceeded` fields matching the same pattern.
- [ ] **Step 6:** Remove the `createSamplingClient` import and example — this function does not exist. Replace with a note about `SamplingBridge` or the `SamplingClient` interface.
- [ ] **Step 7:** In `auth-providers.mdx`, add `tenantId?: string` to the `AuthInfo` interface.
- [ ] **Step 8:** In `auth-providers.mdx`, remove or add a caveat to the `prepareOAuthProvider`, `FileTokenStore`, `MemoryTokenStore` section — these are NOT exported from `mod.ts`. Either mark them as internal/deep-import or remove the section.
- [ ] **Step 9:** In `concurrent-mcp-server.mdx`, fix `RouteConfig` — replace with the inline type: `Array<{ method: "get" | "post"; path: string; handler: (req: Request) => Response | Promise<Response> }>`.

---

## Task 3: mcp-server — Document new v0.13/v0.14 APIs in EN docs

**Context:** Several new APIs were added that have zero documentation.

**Files:**
- Modify: `src/content/docs/docs/api/concurrent-mcp-server.mdx`
- Modify: `src/content/docs/docs/guides/mcp-apps.mdx`

**Source reference:**
- `/Users/erwanpesle/Documents/GitHub/mcp-server/packages/server/src/mcp-app.ts` for `getFetchHandler()`, `getClientMcpAppsCapability()`
- `/Users/erwanpesle/Documents/GitHub/mcp-server/packages/server/src/middleware/multi-tenant.ts` for `createMultiTenantMiddleware()`
- `/Users/erwanpesle/Documents/GitHub/mcp-server/packages/server/mod.ts` for all new exports

- [ ] **Step 1:** In `concurrent-mcp-server.mdx`, add a "Methods" subsection for `getFetchHandler(): (req: Request) => Response | Promise<Response>`. Explain: returns a Web Standard fetch handler for embedding into Fresh/Hono/Express without binding a port. Show a short example with Hono.
- [ ] **Step 2:** Add `getClientMcpAppsCapability()` and `getMcpAppsCapability()` to the MCP Apps guide or the API reference. Document the constants `MCP_APPS_EXTENSION_ID` and `MCP_APPS_PROTOCOL_VERSION`.
- [ ] **Step 3:** Add `createMultiTenantMiddleware(options)` to the middleware guide or API reference. Read the source to document `MultiTenantMiddlewareOptions` and `TenantResolver` interface.
- [ ] **Step 4:** Add the undocumented `McpApp` methods to the API reference: `getMetrics()`, `getResourceUris()`, `getResourceInfo(uri)`, `readResourceContent(uri)`, `getRateLimiter()`.
- [ ] **Step 5:** Add `HttpServerOptions` missing fields: `onListen`, `embedded`, `embeddedHandlerCallback`.

---

## Task 4: mcp-server — Update FR docs (mirror EN changes)

**Context:** FR docs have the same content as EN but translated. Apply the same renames and fixes.

**Files:**
- Modify: `src/content/docs/fr/docs/getting-started/introduction.mdx`
- Modify: `src/content/docs/fr/docs/getting-started/installation.mdx`
- Modify: `src/content/docs/fr/docs/getting-started/quickstart.mdx`
- Modify: `src/content/docs/fr/docs/guides/middleware.mdx`
- Modify: `src/content/docs/fr/docs/guides/auth.mdx`
- Modify: `src/content/docs/fr/docs/guides/configuration.mdx`
- Modify: `src/content/docs/fr/docs/guides/mcp-apps.mdx`
- Modify: `src/content/docs/fr/docs/api/concurrent-mcp-server.mdx`
- Modify: `src/content/docs/fr/docs/api/auth-providers.mdx`
- Modify: `src/content/docs/fr/docs/api/standalone-components.mdx`

**Instructions:**
- [ ] **Step 1:** Read each EN doc file FIRST to see the updated version (after Tasks 1-3 are done), then read the corresponding FR file.
- [ ] **Step 2:** In ALL FR files, replace `ConcurrentMCPServer` with `McpApp` (same as EN).
- [ ] **Step 3:** Update version numbers (`0.12.0` → `0.14.0`, test count `270` → `301`).
- [ ] **Step 4:** Update all API signatures to match the EN docs (same code blocks — code is language-agnostic, only prose is translated).
- [ ] **Step 5:** Add migration note in `concurrent-mcp-server.mdx` (translated to French).
- [ ] **Step 6:** For new API sections added in Task 3, add equivalent FR sections with translated prose but identical code blocks.

---

## Task 5: mcp-server — Update ZH docs (mirror EN changes)

**Context:** Same as Task 4 but for Chinese docs.

**Files:**
- Modify: `src/content/docs/zh/docs/getting-started/introduction.mdx`
- Modify: `src/content/docs/zh/docs/getting-started/installation.mdx`
- Modify: `src/content/docs/zh/docs/getting-started/quickstart.mdx`
- Modify: `src/content/docs/zh/docs/guides/middleware.mdx`
- Modify: `src/content/docs/zh/docs/guides/auth.mdx`
- Modify: `src/content/docs/zh/docs/guides/configuration.mdx`
- Modify: `src/content/docs/zh/docs/guides/mcp-apps.mdx`
- Modify: `src/content/docs/zh/docs/api/concurrent-mcp-server.mdx`
- Modify: `src/content/docs/zh/docs/api/auth-providers.mdx`
- Modify: `src/content/docs/zh/docs/api/standalone-components.mdx`

**Instructions:** Same as Task 4 but translated to Chinese. Read the updated EN file first, then the existing ZH file, and apply the same changes.

---

## Task 6: mcp-server — Fix marketing page

**Context:** The marketing landing page has stale version numbers and broken code examples.

**Files:**
- Modify: `src/features/mcp-server/HeroSection.astro`
- Modify: `src/features/mcp-server/QuickStartSection.astro`
- Modify: `src/features/mcp-server/InstallSection.astro`
- Modify: `src/i18n/en.ts` (mcpServer sections)
- Modify: `src/i18n/fr.ts` (mcpServer sections)
- Modify: `src/i18n/zh.ts` (mcpServer sections)
- Modify: `src/i18n/zh-TW.ts` (mcpServer sections)

- [ ] **Step 1:** In `HeroSection.astro`, update the terminal simulation from `@casys/mcp-server v0.7.0` to `v0.14.0`.
- [ ] **Step 2:** In `HeroSection.astro`, update stats: version badge from `v0.7` to `v0.14`, test count from `137` to `301`, feature count from `12` to `16`.
- [ ] **Step 3:** In `InstallSection.astro`, fix the GitHub link from `https://github.com/Casys-AI/casys-pml` to the correct mcp-server repo URL.
- [ ] **Step 4:** In `QuickStartSection.astro`, update the HTTP example to use `McpApp` instead of `ConcurrentMCPServer`, ensure `authorizationServers` is present in the auth block, and show `await server.startHttp(...)`.
- [ ] **Step 5:** In all 4 i18n files, update `mcpServerFeatures` stats if any reference old version/test numbers. Also update any code snippets in the i18n strings that use the old class name.

---

## Task 7: mcp-bridge — Fix EN docs

**Context:** Version matches (0.2.0) but there are factual errors in the Telegram adapter docs and missing API docs.

**Files:**
- Modify: `src/content/docs/docs/mcp-bridge/telegram.mdx`
- Modify: `src/content/docs/docs/mcp-bridge/api-bridge-client.mdx`
- Modify: `src/content/docs/docs/mcp-bridge/api-resource-server.mdx`
- Modify: `src/content/docs/docs/mcp-bridge/introduction.mdx`
- Modify: `src/content/docs/docs/mcp-bridge/line.mdx`

**Source reference:**
- `/Users/erwanpesle/Documents/GitHub/mcp-server/packages/bridge/src/adapters/telegram/platform-adapter.ts`
- `/Users/erwanpesle/Documents/GitHub/mcp-server/packages/bridge/src/core/bridge-client.ts`
- `/Users/erwanpesle/Documents/GitHub/mcp-server/packages/bridge/src/resource-server/backend.ts`
- `/Users/erwanpesle/Documents/GitHub/mcp-server/packages/bridge/src/mod.ts`

- [ ] **Step 1:** In `telegram.mdx`, fix `containerDimensions.height` → `containerDimensions.maxHeight` for the `TelegramPlatformAdapter` class. Add a note distinguishing the injected `bridge.js` behavior (uses `height`) from the exported class (uses `maxHeight`).
- [ ] **Step 2:** In `telegram.mdx`, fix locale source: the `TelegramPlatformAdapter` uses `navigator.language`, NOT `initDataUnsafe.user.language_code`. The injected `bridge.js` uses the Telegram field. Document both.
- [ ] **Step 3:** In `telegram.mdx`, document the CSS variable naming: injected runtime produces `--tg-*` names, exported `TelegramPlatformAdapter` produces `--color-*` semantic names. Show both schemas.
- [ ] **Step 4:** In `api-bridge-client.mdx`, add a caveat that the exported `BridgeClient` class only supports iframe mode (`window.parent.postMessage`). Standalone mode is only available via the injected `bridge.js`.
- [ ] **Step 5:** In `api-resource-server.mdx`, document the `fetchFn` option on `JsonRpcMcpBackendOptions`.
- [ ] **Step 6:** In `api-resource-server.mdx` or a new section, document `McpAppsMethod` — the 17 exported method constants from `mod.ts`.
- [ ] **Step 7:** In `introduction.mdx`, update the LinkCards to also link to `api-resource-server`, `api-bridge-client`, and `line`.

---

## Task 8: mcp-bridge — Fix marketing page + sidebar

**Context:** Marketing page shows v0.1.0 (should be v0.2.0). Sidebar says "LINE Adapter (Soon)" but the page exists.

**Files:**
- Modify: `src/features/mcp-bridge/HeroSection.astro`
- Modify: `src/features/mcp-bridge/QuickStartSection.astro`
- Modify: `src/features/mcp-bridge/InstallSection.astro`
- Modify: `astro.config.mjs` (sidebar line 91)
- Modify: `src/i18n/en.ts` (mcpBridge sections)
- Modify: `src/i18n/fr.ts` (mcpBridge sections)
- Modify: `src/i18n/zh.ts` (mcpBridge sections)
- Modify: `src/i18n/zh-TW.ts` (mcpBridge sections)

- [ ] **Step 1:** In `HeroSection.astro`, update terminal simulation from `@casys/mcp-bridge v0.1.0` to `v0.2.0`. Update stat badge from `v0.1` to `v0.2`.
- [ ] **Step 2:** In `astro.config.mjs` line 91, change `'LINE Adapter (Soon)'` to `'LINE Adapter'` (or add a Starlight badge `{ text: 'Partial', variant: 'caution' }` instead).
- [ ] **Step 3:** In `QuickStartSection.astro`, replace the commented-out LINE tab with an actual working `LineAdapter` example from the existing `line.mdx` docs.
- [ ] **Step 4:** In `InstallSection.astro`, verify the GitHub link path (`mcp-apps-bridge`) is correct. Fix if needed.
- [ ] **Step 5:** In all 4 i18n files, update `mcpBridgeQuickStart.tabLine` from `"Coming Soon"` to a real label. Update any version references.

---

## Task 9: mcp-bridge — Update FR and ZH docs (mirror EN changes)

**Files:**
- Modify: all files under `src/content/docs/fr/docs/mcp-bridge/`
- Modify: all files under `src/content/docs/zh/docs/mcp-bridge/`

- [ ] **Step 1:** Read each updated EN mcp-bridge doc file first, then the corresponding FR and ZH files.
- [ ] **Step 2:** Apply the same fixes: `containerDimensions.height` → `maxHeight`, locale source, CSS variable naming, BridgeClient caveat, new API docs.
- [ ] **Step 3:** Ensure code blocks are identical to EN (only prose is translated).

---

## Task 10: mcp-compose — Fix EN docs + marketing

**Context:** Version bumped from 0.3.0 to 0.4.0. Marketing quickstart code has wrong API calls.

**Files:**
- Modify: `src/content/docs/docs/mcp-compose/introduction.mdx`
- Modify: `src/content/docs/docs/mcp-compose/quickstart.mdx`
- Modify: `src/content/docs/docs/mcp-compose/collector.mdx`
- Modify: `src/content/docs/docs/mcp-compose/api-reference.mdx`
- Modify: `src/i18n/en.ts` (mcpCompose.quickstartCode)
- Modify: `src/i18n/fr.ts` (mcpCompose.quickstartCode)
- Modify: `src/i18n/zh.ts` (mcpCompose.quickstartCode)
- Modify: `src/i18n/zh-TW.ts` (mcpCompose.quickstartCode)

**Source reference:**
- `/Users/erwanpesle/Documents/GitHub/mcp-server/packages/compose/deno.json` (version)
- `/Users/erwanpesle/Documents/GitHub/mcp-server/packages/compose/src/sdk/mcp-sdk.ts` (McpSdkCollector)

- [ ] **Step 1:** In `introduction.mdx` and `api-reference.mdx`, update version from `0.3.0` to `0.4.0`.
- [ ] **Step 2:** In `quickstart.mdx`, update the install command from `@0.3.0` to `@0.4.0`.
- [ ] **Step 3:** In `collector.mdx`, add explicit documentation for `McpSdkCollector.collectFromSdk()` method name and the `inner` property. Show that it's `collectFromSdk()`, NOT `collect()`.
- [ ] **Step 4:** In `api-reference.mdx`, add missing exports: `DeployError` from `/deploy`, `TemplateSource` and `TemplateToolCall` from `/runtime`.
- [ ] **Step 5:** Fix the marketing quickstart code in ALL 4 i18n files. Replace the broken code:

**Wrong (current):**
```typescript
collector.add(invoiceResult);
collector.add(statusResult);
const descriptor = buildCompositeUi({
  resources: collector.resources(),
  layout: "split",
  sync: [...],
});
```

**Correct:**
```typescript
collector.collect("invoice-viewer", invoiceResult);
collector.collect("status-timeline", statusResult);
const resources = collector.getResources();
const descriptor = buildCompositeUi(resources, {
  layout: "split",
  sync: [...],
});
```

- [ ] **Step 6:** In `en.ts`, fix the "no silent fallbacks" feature description — `buildCompositeUi()` silently drops invalid sync rules by default. Reword to be accurate (e.g., "Explicit validation with `validateSyncRules()` — catch issues before render").

---

## Task 11: Shared config fixes

**Context:** astro.config.mjs description is stale, trailing slashes on doc cross-links may cause 404s.

**Files:**
- Modify: `astro.config.mjs`

- [ ] **Step 1:** Update the Starlight `description` (line 26) from `"Documentation for Casys open-source packages: @casys/mcp-server and @casys/mcp-bridge."` to `"Documentation for Casys open-source packages: @casys/mcp-server, @casys/mcp-bridge, and @casys/mcp-compose."`.
- [ ] **Step 2:** Grep all `.mdx` files for internal links with trailing slashes (e.g., `/docs/guides/auth/`). Since `trailingSlash: 'never'` is set, remove the trailing slashes from all internal doc links. Use: `grep -r 'href="/docs/.*/"' src/content/docs/`

---

## Execution Order

Tasks can be parallelized as follows:

- **Parallel group 1 (independent):** Tasks 1, 7, 10 (EN docs for each package)
- **Sequential after Task 1:** Tasks 2, 3 (depend on rename being done)
- **Sequential after Tasks 1+2+3:** Tasks 4, 5 (FR/ZH mirror EN)
- **Parallel with docs:** Tasks 6, 8 (marketing pages)
- **Sequential after Task 7:** Task 9 (FR/ZH mirror EN bridge)
- **Anytime:** Task 11 (shared config)

Recommended dispatch order for sub-agents:
1. Dispatch Tasks 1, 7, 10, 11 in parallel
2. When Task 1 completes, dispatch Tasks 2, 3 in parallel
3. When Tasks 2+3 complete, dispatch Tasks 4, 5, 6 in parallel
4. When Task 7 completes, dispatch Tasks 8, 9 in parallel