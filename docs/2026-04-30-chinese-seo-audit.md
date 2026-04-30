# Chinese SEO Audit - 2026-04-30

## Scope

Audit of Simplified Chinese (`/zh`) and Traditional Chinese (`/zh-TW`) SEO for Casys.

Sources used:

- Local Astro implementation and generated output.
- DataForSEO Google Ads keyword data.
- DataForSEO Google organic SERP.
- DataForSEO Baidu organic SERP.

Credentials were read from `.env` during the audit and are not included here.

## DataForSEO Setup

Working language and location codes:

| Surface | Language | Location |
| --- | --- | --- |
| Taiwan Google SERP | `zh-TW` | `2158` |
| China Google SERP | `zh-CN` | `2156` |
| Taiwan Google Ads keywords | `zh_TW` | `2158` |
| China Google Ads keywords | `zh_CN` | `2156` |
| China Baidu SERP | `zh-CN` | `2156` |

Baidu autocomplete was not available at `/v3/serp/baidu/autocomplete/live/advanced`; DataForSEO returned `40402 Invalid Path`.

## Keyword Signals

Taiwan Google (`zh_TW`, location `2158`):

| Query | Monthly volume | Competition | CPC |
| --- | ---: | --- | ---: |
| `MCP server` | 4400 | LOW | 0.88 |
| `Model Context Protocol` | 880 | LOW | 0.45 |
| `context engineering` | 880 | LOW | 10.57 |
| `模型上下文協定` | 260 | LOW | n/a |
| `上下文工程` | 140 | LOW | n/a |
| `MCP 伺服器` | 110 | LOW | 1.30 |
| `MCP Apps` | 70 | LOW | n/a |
| `AI agent tools` | 50 | LOW | 3.50 |
| `AI agent workflow` | 50 | MEDIUM | 4.66 |
| `知識圖譜 RAG` | 50 | LOW | n/a |

China Google (`zh_CN`, location `2156`):

| Query | Monthly volume | Competition | CPC |
| --- | ---: | --- | ---: |
| `MCP server` | 2400 | LOW | 0.76 |
| `context engineering` | 590 | LOW | 2.08 |
| `Model Context Protocol` | 480 | LOW | 4.25 |
| `上下文工程` | 320 | LOW | n/a |
| `MCP 服务器` | 210 | LOW | 0.43 |
| `模型上下文协议` | 70 | LOW | n/a |
| `MCP Apps` | 70 | LOW | n/a |
| `知识图谱 RAG` | 50 | LOW | n/a |
| `AI agent workflow` | 30 | MEDIUM | 2.39 |
| `AI agent tools` | 20 | MEDIUM | 5.98 |

## SERP Read

Taiwan Google is the better near-term SEO market. Results for `MCP 伺服器` include Business Next, ExplainThis, HackMD, Google Cloud, GitHub, and Microsoft Learn. There is room for practical developer content if Casys emphasizes real demos, GitHub/npm/JSR links, and concrete workflows.

Baidu is possible but requires a separate distribution strategy. For `MCP 服务器`, Baidu results were dominated by Tencent Cloud, Microsoft Learn, MCP directory pages, shopping/content surfaces, and broad infrastructure pages. This is not only a localization issue; it also depends on China-accessible hosting, indexing, and Chinese distribution.

## Technical Findings

Fixed in this pass:

- Custom `hreflang` now maps internal `zh` to `zh-CN` and keeps `zh-TW` unchanged.
- Custom layouts now emit `<html lang="zh-CN">` for `/zh` and `<html lang="zh-TW">` for `/zh-TW`.
- Blog pages now emit `og:locale`.
- Layout-injected JSON-LD now receives `inLanguage` when page schemas do not specify it.
- PML JSON-LD now includes `inLanguage`.

Remaining technical item:

- Starlight docs inherit Astro `i18n.locales: ['en', 'fr', 'zh', 'zh-TW']`, so generated docs metadata can still use `zh` instead of `zh-CN`. Astro supports extended locale config such as `{ path: 'zh', codes: ['zh-CN'] }`, but changing it directly would make `Astro.currentLocale` resolve to `zh-CN` for `/zh`. Existing page code and translations use `zh` as the internal key, so this needs a planned migration or a docs-only workaround.

## Content Findings

`/zh-TW` is broadly aligned with Taiwan-market Chinese.

`/zh` has mixed localization: many pages are simplified text but still use Taiwan/HK vocabulary. This hurts mainland SEO for queries such as `MCP 服务器`, `MCP server 教程`, and `模型上下文协议`.

High-priority cleanup targets:

1. `src/content/blog/zh/process-is-the-prompt.mdx` - partially still Traditional Chinese; needs full relocalization.
2. `src/content/blog/zh/mcp-server-guide.mdx` - dense Taiwan vocabulary in title, metadata, headings, body, and alt text.
3. `src/content/blog/zh/mcp-gateway-guide.mdx` - SEO-heavy terms use Taiwan vocabulary.
4. `src/content/blog/zh/context-engineering-guide.mdx` - simplified text but Taiwan-market terminology and positioning.

Terminology map for `/zh`:

| Current leakage | Mainland target |
| --- | --- |
| `伺服器` | `服务器` |
| `程式码` | `代码` |
| `程式` | `程序` / `应用程序` |
| `软体` / `軟體` | `软件` |
| `中介软体` | `中间件` |
| `建构` | `构建` |
| `介面` | `界面` / `接口` |
| `用户端` | `客户端` |
| `使用者` | `用户` |
| `资料库` | `数据库` |
| `资料` | `数据` when it means data |
| `资讯` | `信息` |
| `协定` | `协议` |
| `通讯` | `通信` |
| `函式` | `函数` |
| `档案` | `文件` |
| `连线` | `连接` |
| `回应` | `响应` |
| `预设` | `默认` / `预置配置` |
| `型别` | `类型` |
| `栏位` | `字段` |
| `最佳化` | `优化` |

## Recommended Next Moves

1. Treat Taiwan Google as the first growth target for Chinese SEO.
2. For Taiwan titles/H1s, keep English terms plus Traditional Chinese: `MCP server`, `MCP 伺服器`, `模型上下文協定`.
3. For `/zh`, relocalize the highest-value MCP pages before expanding China/Baidu work.
4. Keep Baidu secondary unless there is a real Simplified Chinese acquisition plan.
