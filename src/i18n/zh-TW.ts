// ============================================================
// Traditional Chinese (Taiwan) translations for Casys Hub Vitrine
// Organized by page/section
// ============================================================

import type { Translations } from "./index";

export const zh_TW: Translations = {
  // ========================================
  // SHARED COMPONENTS
  // ========================================
  header: {
    projects: "專案",
    whyCasys: "為什麼選擇 Casys",
    consulting: "諮詢服務",
    blog: "Blog",
    useCases: "我們的工作",
    about: "關於我們",
    contact: "聯繫我們",
    projectDescriptions: {
      erpnext: "互動式 ERPNext 工作流示範",
      einvoice: "法國電子發票 MCP 伺服器",
      compose: "將 MCP UI 組合為儀表板",
      std: "508 個標準 MCP 工具",
      server: "生產級 MCP 伺服器框架",
      bridge: "MCP Apps 連接訊息平台",
    },
    projectGroupServers: "MCP 伺服器",
    projectGroupInfra: "基礎設施",
  },
  footer: {
    product: "產品",
    projects: "專案",
    consulting: "諮詢服務",
    training: "培訓",
    github: "GitHub",
    openSource: "開源專案",
    connect: "連結",
    contact: "聯繫我們",
    discord: "Discord",
    description: "智慧體架構與上下文系統",
    tagline: "開源工具 & 諮詢服務",
  },

  // ========================================
  // LANDING V2 SECTIONS
  // ========================================
  hero: {
    kicker: "AI 智慧體整合商",
    titleLine1: "將 AI 接入",
    titleLine2: "您的業務系統",
    subtitle: "AI 智慧體接入您的 ERP、CRM 和內部工具。可觀測的開源技術棧。",
    cta: {
      primary: { text: "查看我們的工作", icon: "arrow_forward", url: "#use-cases-preview" },
      secondary: { text: "預約諮詢", icon: "calendar_month", url: "https://cal.com/casys.ai" },
    },
    proofs: [
      { name: "MCP ERPNext", stat: "97 工具", url: "/zh-TW/use-cases/mcp-erpnext", icon: "database" },
      { name: "MCP eInvoice", stat: "36 工具", url: "/zh-TW/use-cases/mcp-einvoice", icon: "receipt_long" },
    ],
    authority: [
      { label: "15+ 年", detail: "知識管理 → 圖資料庫 → AI 代理" },
      { label: "開源", detail: "程式碼、議題、路線圖公開" },
      { label: "已發布", detail: "npm + JSR" },
      { label: "生產驗證", detail: "真實業務流程" },
    ],
  },
  featuredDemo: {
    title: "看實際效果",
    subtitle: "一個工作流，比平台承諾更有說服力。",
    eyebrow: "現場示範",
    name: "MCP ERPNext",
    tagline: "建立在業務流程上的互動式 MCP App。",
    description:
      "一個可以檢查的工作流：由智慧體連接的 ERP 介面，背後有可觀測的執行路徑。",
    bullets: [
      "可點擊的看板和業務動作。",
      "在 GitHub 上開源 — 程式碼、議題和路線圖都是公開的。",
      "Casys 處理業務工作流的一個示例。",
    ],
    stats: [
      { value: "互動式", label: "可點擊工作流介面" },
      { value: "可觀測", label: "底層執行可見" },
      { value: "公開構建", label: "已經在 GitHub 獲得關注" },
    ],
    note: "ERPNext 只是一個例子。同樣的方法也可以應用到其他業務工作流。",
    cta: {
      primary: { text: "打開 MCP ERPNext", icon: "open_in_new", url: "/zh-TW/use-cases/mcp-erpnext" },
      secondary: { text: "聯絡我們", icon: "mail", url: "#contact" },
    },
    video: {
      src: "/videos/mcp-erpnext-demo.mp4",
      caption: "MCP ERPNext 工作流短影片示範。",
    },
  },
  socialProof: {
    title: "實際成果",
    subtitle: "用成果說話",
    items: [
      {
        type: "stat",
        icon: "code",
        stat: "活躍",
        label: "開發中",
        description: "Casys PML - 整合 GraphRAG 和 DAG 的 MCP Gateway",
        link: {
          text: "在 GitHub 上關注",
          url: "https://github.com/Casys-AI/casys-pml",
        },
      },
      {
        type: "stat",
        icon: "groups",
        stat: "15+",
        label: "年經驗",
        description: "Context Management → Graph DBs → DAGs → MCP",
        link: {
          text: "了解我們的故事",
          url: "/about",
        },
      },
      {
        type: "stat",
        icon: "public",
        stat: "French Tech",
        label: "台灣",
        description: "French Tech Taiwan 社群活躍成員",
        link: {
          text: "查看演講",
          url: "/blog?tag=talks",
        },
      },
    ],
    githubTitle: "開源成果",
    githubCta: "查看所有 GitHub 專案",
    repos: [
      {
        name: "@casys/mcp-server",
        description: "生產級 MCP 伺服器，支援中介軟體管線",
        stars: "★ New",
        url: "https://github.com/Casys-AI/casys-mcp-server",
      },
      {
        name: "@casys/mcp-std",
        description: "508+ MCP 代理工具",
        stars: "★ New",
        url: "https://github.com/Casys-AI/casys-mcp-std",
      },
      {
        name: "@casys/mcp-erpnext",
        description: "面向 MCP Apps 的互動式 ERPNext 工作流",
        stars: "★ 成長中",
        url: "https://github.com/Casys-AI/mcp-erpnext",
      },
    ],
  },
  workWithUs: {
    title: "與我們合作",
    subtitle: "我們的工具免費開源。當您需要部署協助時，我們隨時為您服務。",
    options: [
      {
        id: "explore",
        icon: "explore",
        title: "探索",
        tagline: "免費與開源",
        description: "了解我們的工具，閱讀研究，加入社群。",
        items: [
          { icon: "code", text: "Casys PML - AI 代理的程序記憶層", url: "https://pml.casys.ai" },
          { icon: "article", text: "部落格與技術文章", url: "/blog" },
          {
            icon: "groups",
            text: "French Tech Taiwan 社群",
            url: "https://www.linkedin.com/company/casys-ai",
          },
        ],
        cta: {
          text: "在 GitHub 上探索",
          url: "https://github.com/casys-ai",
          icon: "arrow_forward",
        },
      },
      {
        id: "learn",
        icon: "school",
        title: "學習",
        tagline: "培訓與工作坊",
        description: "掌握我們研究領域的實作課程。",
        items: [
          { icon: "smart_toy", text: "AI 代理上下文管理 (2-3天)" },
          { icon: "hub", text: "嵌入式圖資料庫 (1-2天)" },
          { icon: "architecture", text: "多領域 AI 架構 (3-5天)" },
        ],
        details: ["現場或遠端", "實作練習", "客製教材"],
        cta: { text: "申請培訓", url: "#contact", icon: "calendar_today" },
      },
      {
        id: "collaborate",
        icon: "handshake",
        title: "合作",
        tagline: "諮詢與專案",
        description: "為您複雜的 AI 架構提供實作協助。",
        items: [
          { icon: "check_circle", text: "架構評審與策略" },
          { icon: "check_circle", text: "部署與客製整合" },
          { icon: "check_circle", text: "效能最佳化" },
          { icon: "check_circle", text: "配對程式設計與程式碼審查" },
        ],
        engagement: "典型專案週期：2-5天。遠端優先，時區彈性。",
        highlights: ["直接對接開發者", "無最低承諾", "快速迭代"],
        cta: { text: "聯繫我們", url: "#contact", icon: "mail" },
      },
    ],
  },
  projects: {
    title: "開源技術棧",
    subtitle: "支撐這些工作流的已發佈構件。",
    linkLabels: {
      proof: "查看示範",
      github: "GitHub",
      docs: "文件",
    },
    featured: {
      name: "Casys MCP 技術棧",
      tagline: "面向生產環境的可觀測 AI 工具整合元件。",
      status: "已發佈",
      license: "JSR + npm",
      features: [
        {
          icon: "dns",
          name: "伺服器執行層",
          description: "建立帶驗證、中介軟體與生產限制的 MCP 伺服器。",
        },
        {
          icon: "handyman",
          name: "工具函式庫",
          description: "直接使用 508+ 標準工具，而不是重做基礎元件。",
        },
        { icon: "graph_3", name: "工作流介面", description: "把 MCP Apps、訊息通道與業務整合放進同一套技術棧。" },
      ],
      results: [
        { stat: "508+", label: "標準工具" },
        { stat: "6", label: "已發佈元件" },
        { stat: "OSS", label: "公開建造" },
      ],
      links: {
        website: "#featured-demo",
        github: "https://github.com/Casys-AI",
        docs: "https://jsr.io/@casys",
      },
    },
    categories: [
      {
        name: "已發佈元件",
        items: [
          {
            id: "mcp-erpnext",
            name: "@casys/mcp-erpnext",
            tagline: "面向 MCP Apps 的互動式 ERPNext 工作流",
            status: "活躍",
            tech: "Deno",
            links: { website: "/zh-TW/use-cases/mcp-erpnext", github: "https://github.com/Casys-AI/mcp-erpnext", jsr: "https://jsr.io/@casys/mcp-erpnext" },
          },
          {
            id: "mcp-einvoice",
            name: "@casys/mcp-einvoice",
            tagline: "French e-invoicing MCP server",
            status: "v0.1.0",
            tech: "Deno",
            links: { website: "/zh-TW/use-cases/mcp-einvoice", github: "https://github.com/Casys-AI/mcp-einvoice", jsr: "https://jsr.io/@casys/mcp-einvoice" },
          },
          {
            id: "mcp-compose",
            name: "@casys/mcp-compose",
            tagline: "Compose MCP UIs into dashboards",
            status: "v0.1.0",
            tech: "Deno",
            links: { website: "/zh-TW/mcp-compose", github: "https://github.com/Casys-AI/mcp-compose", jsr: "https://jsr.io/@casys/mcp-compose" },
          },
          {
            id: "mcp-server",
            name: "@casys/mcp-server",
            tagline: "生產級 MCP 伺服器框架",
            status: "v0.7.0",
            tech: "Deno",
            links: { website: "/zh-TW/mcp-server", github: "https://github.com/Casys-AI/casys-pml/tree/main/lib/server", jsr: "https://jsr.io/@casys/mcp-server" },
          },
          {
            id: "mcp-std",
            name: "@casys/mcp-std",
            tagline: "508 個 MCP 工具。一行匯入。",
            status: "v0.4.0",
            tech: "Deno",
            links: { website: "/zh-TW/mcp-std", github: "https://github.com/Casys-AI/casys-pml/tree/main/lib/std", jsr: "https://jsr.io/@casys/mcp-std" },
          },
          {
            id: "mcp-bridge",
            name: "@casys/mcp-bridge",
            tagline: "MCP Apps 橋接訊息平台",
            status: "v0.2.0",
            tech: "Deno",
            links: { website: "/zh-TW/mcp-bridge", github: "https://github.com/Casys-AI/casys-pml/tree/main/lib/mcp-apps-bridge", jsr: "https://jsr.io/@casys/mcp-bridge" },
          },
        ],
      },
    ],
  },
  whyCasys: {
    title: "為什麼選擇 Casys？",
    subtitle: "我們的不同之處",
    differentiation: [
      {
        id: "multi-domain",
        icon: "hub",
        title: "多領域專長",
        description: "我們連結多個領域以獲得獨特洞察",
        highlights: [
          "KM 系統 (2013+) → 圖資料庫 → AI 代理",
          "每個領域推動下一個 — KM 塑造了圖譜工作，圖譜塑造了代理路由",
          "專長跨技術浪潮持續累積",
        ],
      },
      {
        id: "continuity",
        icon: "timeline",
        title: "15+ 年持續發展",
        description: "跨技術浪潮持續深耕",
        highlights: [
          "15+ 年的實績",
          "深度專長，持續累積",
          "每個階段都建立在前一個之上",
        ],
      },
      {
        id: "opensource",
        icon: "code_blocks",
        title: "開源優先",
        description: "預設開源。工具免費，諮詢可選",
        highlights: [
          "預設開源",
          "無供應商鎖定",
          "分享研究成果",
        ],
      },
      {
        id: "practical",
        icon: "rocket_launch",
        title: "務實研究",
        description: "發布解決生產問題的系統",
        highlights: [
          "已發佈在 npm 和 JSR 上",
          "在生產環境中經過檢驗",
          "我們使用自己的工具",
        ],
      },
      {
        id: "accessible",
        icon: "handshake",
        title: "無門檻設計",
        description: "無企業級開銷",
        highlights: [
          "透明定價",
          "無最低承諾規模",
          "直接對接開發者",
        ],
      },
    ],
    contactCta: {
      text: "聯繫我們",
      url: "#contact",
      icon: "mail",
    },
    bottomLine: {
      text:
        "一個在上下文管理和智慧體系統方面擁有深度專長的小型事務所。我們建構實用工具，分享所學，在需要時協助團隊。",
      cta: {
        primary: {
          text: "預約諮詢",
          url: "https://cal.com/casys.ai",
          icon: "calendar_month",
        },
        secondary: {
          text: "GitHub",
          url: "https://github.com/Casys-AI",
          icon: "code",
        },
      },
    },
  },
  blog: {
    title: "研究、架構與現場筆記",
    subtitle: "我們在建構可觀測 AI 工作流系統時學到的東西。",
    readMore: "閱讀",
    viewAll: "查看所有文章",
  },
  faq: {
    title: "常見問題",
    subtitle: "關於 Casys、技術棧和合作方式的常見問題。",
    categories: ["平台", "技術棧", "諮詢", "通用"],
    allLabel: "全部",
    faqs: [
      {
        category: "平台",
        q: "Casys 在做什麼？",
        a: "Casys 是一家 AI 智慧體整合商。我們將 AI 智慧體連接到您的業務系統 — ERP、CRM、內部工具 — 使用可觀測的開源技術棧。技術深度在底層的技術棧與學習層中。",
      },
      {
        category: "平台",
        q: "MCP ERPNext 就是產品本身嗎？",
        a: "不是。MCP ERPNext 被放在最前面，是因為它可互動，而且能讓人快速理解。它展示了 Casys 方法在工作流中的樣子，但不代表公司只是在做 ERP 連接器。",
      },
      {
        category: "技術棧",
        q: "PML 現在位於什麼位置？",
        a: "PML 是底層的學習與可觀測層，是軌跡、路由與學到的相關性匯合的地方。在首頁裡，它被放在『技術深度』的位置，而不是要求每位訪客一開始就先理解的產品名稱。",
      },
      {
        category: "技術棧",
        q: "哪些部分已經開源？",
        a: "已發佈的技術棧包括 `@casys/mcp-server`、`@casys/mcp-std`、`@casys/mcp-bridge` 和 `@casys/mcp-erpnext`。這些是你現在就能看到並使用的構件。學習層仍然持續演進。",
      },
      {
        category: "技術棧",
        q: "為什麼你們一直強調軌跡？",
        a: "軌跡讓系統既能除錯，也能改善。有了軌跡，就能檢查失敗、比較工作流，並學習哪些工具相關。",
      },
      {
        category: "諮詢",
        q: "什麼時候才需要諮詢？",
        a: "當你已經看懂這個證明，並希望把同樣的嚴謹度帶到自己的工作流時。典型工作包括架構評審、整合設計、部署強化，以及動手實作。",
      },
      {
        category: "諮詢",
        q: "你們只做 ERPNext 嗎？",
        a: "ERPNext 是一個示例。同樣的方法也適用於其他業務系統、工業工作流、知識密集型流程，以及多工具智慧體環境。",
      },
      {
        category: "通用",
        q: "Casys 適合誰？",
        a: "CTO、技術負責人，以及需要工作流可靠落地的工程團隊。這通常意味著多工具、多系統，以及對可觀測性的明確需求。",
      },
      {
        category: "通用",
        q: "你們和一般的 MCP 顧問有什麼不同？",
        a: "我們發佈技術棧、展示工作流證明，並打造讓這些工作流在生產環境中可理解的可觀測層。",
      },
      {
        category: "通用",
        q: "你們的專業背景是什麼？",
        a: '15+ 年上下文工程經驗，從知識管理 (2013+) 到圖資料庫到 DAG 架構再到 MCP 生態。在這個領域被叫做「AI 代理的 Context Management」之前，我們就已經在做了。',
      },
      {
        category: "通用",
        q: "你們的合作方式是怎樣的？",
        a: "我們提供多種彈性選項：專項工作坊 (1天)、客製專案（完整部署）或持續合作（直接對接從業者）。沒有高額最低承諾。我們最佳化迭代速度和可及性，而非利潤最大化。聯繫我們討論您的具體需求。",
      },
    ],
  },
  mcpErpnextPage: {
    eyebrow: "ERPNext 示範",
    title: "建立在 ERPNext 之上的 MCP 工作流",
    subtitle: "這是一個清楚示例，展示 Casys 技術棧如何驅動互動式業務工作流。",
    intro:
      "MCP ERPNext 把業務系統變成可檢查的 MCP App 介面——可以展示，技術上也有意義。",
    video: {
      src: "/videos/mcp-erpnext-demo.mp4",
      caption: "MCP ERPNext 的短影片示範。",
    },
    proofs: [
      {
        title: "互動式介面",
        description: "可點擊的工作流 UI，由 MCP 工具驅動。",
      },
      {
        title: "可觀測執行",
        description: "每條執行路徑端到端可追蹤。",
      },
      {
        title: "連接業務系統",
        description: "工作流直接運行在 ERPNext 上，展示營運約束下的表現。",
      },
    ],
    whatItShowsTitle: "技術細節",
    whatItShows: [
      "連接 ERPNext 的即時看板 — 透過 MCP 工具進行 CRUD 操作。",
      "每個工具調用端到端追蹤：誰調用了什麼，使用了哪些參數，發生了什麼。",
      "將 ERPNext 替換為其他 ERP — 代理層和 UI 元件保持不變。",
    ],
    stackTitle: "由 Casys 技術棧驅動",
    stackItems: [
      "@casys/mcp-server 提供生產級 MCP 伺服器行為",
      "@casys/mcp-std 提供共享工具與實用能力",
      "@casys/mcp-bridge 提供 UI 與訊息介面",
      "PML 在底層提供軌跡、路由與學習能力",
    ],
    ctaPrimary: { text: "探索技術棧" },
    ctaSecondary: { text: "聯絡我們" },
  },
  mcpEinvoicePage: {
    eyebrow: "E-Invoicing",
    title: "French e-invoicing, wired into your agent stack",
    subtitle: "27 MCP tools for invoice lifecycle, directory lookup, status tracking, and DGFiP reporting.",
    intro: "MCP E-Invoice connects your AI agents to the French e-invoicing ecosystem through a PA-agnostic adapter pattern. Currently integrated with Iopole, extensible to any certified platform.",
    video: { src: "/videos/mcp-einvoice-demo.mp4", caption: "MCP E-Invoice workflow demo." },
    proofs: [
      { title: "Full invoice lifecycle", description: "Emit, search, download, track status, and manage attachments — all through MCP tools." },
      { title: "PA-agnostic architecture", description: "Switch between certified platforms (Iopole, etc.) without changing your agent code." },
      { title: "Interactive MCP Apps", description: "4 built-in viewers: invoice detail, document list, status timeline, and directory card." },
    ],
    whatItShowsTitle: "What it covers",
    whatItShows: [
      "Invoice emission and search with Lucene query syntax",
      "PPF directory lookup (France) and Peppol network check (international)",
      "Status lifecycle management (APPROVED, REFUSED, DISPUTED, PAYMENT_SENT...)",
      "DGFiP e-reporting for B2C and international transactions",
      "CII, UBL, and Factur-X invoice generation",
    ],
    stackTitle: "Built on the Casys stack",
    stackItems: [
      "@casys/mcp-server for production MCP server behavior",
      "@casys/mcp-compose for composite UI dashboards",
      "OAuth2 client_credentials with auto-refresh",
      "4 MCP Apps viewers with drill-down actions",
    ],
    ctaPrimary: { text: "View on GitHub" },
    ctaSecondary: { text: "Talk to us" },
  },
  mcpComposePage: {
    eyebrow: "MCP COMPOSE",
    title: "Compose MCP UIs into unified dashboards",
    subtitle: "Your MCP servers already have UIs. mcp-compose makes them talk to each other.",
    description: "A lightweight, deterministic primitive for collecting, composing, and synchronizing multiple MCP Apps UIs into composite dashboards. Pure functions, zero dependencies, machine-readable errors.",
    ctaPrimary: { text: "Get started", href: "#quickstart" },
    ctaSecondary: { text: "View on JSR", href: "https://jsr.io/@casys/mcp-compose" },
    featuresTitle: "What it does",
    featuresSubtitle: "Three-step pipeline: collect UI resources, compose with sync rules, render as self-contained HTML.",
    features: [
      { icon: "input", name: "Collector", desc: "Extract _meta.ui from MCP tool results automatically" },
      { icon: "dashboard_customize", name: "Composer", desc: "Build composite descriptor with layout and sync rules" },
      { icon: "code", name: "Renderer", desc: "Generate self-contained HTML with embedded event bus" },
      { icon: "sync_alt", name: "Declarative sync", desc: "Cross-UI event routing via { from, event, to, action }" },
      { icon: "grid_view", name: "Layout modes", desc: "Split, tabs, grid, or stack — configurable per composition" },
      { icon: "share", name: "Shared context", desc: "Propagate values (workflowId, userId) across all UIs" },
      { icon: "verified", name: "Fail-fast validation", desc: "Structured error codes, no silent fallbacks" },
      { icon: "package_2", name: "Zero dependencies", desc: "Pure functions, deterministic outputs, Deno standard library only" },
    ],
    architectureTitle: "Pipeline",
    architectureSteps: [
      { step: "1", title: "Collect", description: "Agent calls N tools → Collector extracts _meta.ui resource URIs from each result" },
      { step: "2", title: "Compose", description: "Define layout (split/tabs/grid) + sync rules → Composer validates and builds descriptor" },
      { step: "3", title: "Render", description: "Renderer outputs self-contained HTML with JSON-RPC event bus for cross-UI sync" },
    ],
    quickstartTitle: "Quick start",
    quickstartCode: `import { createCollector, buildCompositeUi, renderComposite } from "@casys/mcp-compose/core";
const collector = createCollector();
collector.add(invoiceResult);
collector.add(statusResult);
const descriptor = buildCompositeUi({
  resources: collector.resources(),
  layout: "split",
  sync: [{ from: "invoice-viewer", event: "status-change", to: "status-timeline", action: "refresh" }],
});
const html = renderComposite(descriptor);`,
    installTitle: "Install",
    installDeno: "deno add jsr:@casys/mcp-compose",
    installNpm: "npx jsr add @casys/mcp-compose",
  },
  contact: {
    title: "準備好將 AI 接入您的業務了嗎？",
    subtitle: "先看一個具體證明，再決定你要深入到哪一步。24小時內回覆。",
    trustBadges: [
      { icon: "check_circle", text: "開源技術棧" },
      { icon: "check_circle", text: "追蹤每次呼叫" },
      { icon: "check_circle", text: "直接對接建造者" },
    ],
    bookingTitle: "預約諮詢",
    bookingSubtitle: "與 Erwan 進行 30 分鐘交流 — 自動以您的本地時區顯示。",
    bookingOpenNewTab: "在新分頁開啟預約頁面",
    formFallback: "或發送需求",
    formFallbackSubtitle: "如果您想先非同步溝通，可以填寫下列表單。我們會在 24 小時內回覆。",
    namePlaceholder: "您的姓名",
    emailPlaceholder: "您的工作信箱",
    messagePlaceholder: "我想預約諮詢 / 申請培訓 / 討論架構挑戰",
    submitButton: "發送請求",
    sending: "發送中...",
    successMessage: "已收到您的請求！我們將在24小時內回覆。",
    errorMessage: "發送失敗，請重試。",
    hiddenSubject: "新的 CASYS 聯繫請求",
  },

  // ========================================
  // SUBSITE: ENGINE
  // ========================================
  engineHeader: {
    howItWorks: "How It Works",
    problem: "The Problem",
    shgat: "SHGAT",
    gru: "GRU",
    benchmarks: "Benchmarks",
    links: "Links",
    docs: "Docs",
    workWithUs: "合作諮詢",
  },
  engineHero: {
    tagline: "ML COMPUTATION LAYER",
    heroTitle1: "Score, Rank, Build Paths",
    heroTitle2: "No LLM Required",
    heroSubtitle:
      "SHGAT attention networks score tool relevance across a hypergraph hierarchy. Multi-level message passing, K-head attention, zero LLM calls. Deterministic. Observable. Runs on your hardware.",
    statTools: "Nodes indexed",
    statHit: "E2E accuracy",
    statLatency: "GRU params",
    ctaPrimary: "How It Works",
    ctaDocs: "Documentation",
    ctaSecondary: "GitHub",
  },
  engineProblem: {
    eyebrow: "THE PROBLEM",
    titleLine1: "Raw Embeddings",
    titleLine2: "Are Blind to Structure",
    description: "LLMs score tool relevance one tool at a time. They can't see that psql_query and csv_parse belong to the same data-pipeline capability. Without structural context, tool selection is noisy, slow, and brittle.",
    insight: "SHGAT enrichment transforms isolated embeddings into structure-aware representations. Tools that share capabilities cluster together, even if they've never appeared in the same workflow.",
    tsneBaCaption: "t-SNE visualization: raw BGE-M3 embeddings (left) vs SHGAT-enriched (right). After message passing, tools cluster by capability.",
    tsneCapCaption: "Same embeddings colored by capability assignment. Enriched embeddings form tighter, more separable clusters.",
  },
  engineGru: {
    eyebrow: "GRU SEQUENCER",
    titleLine1: "258K Parameters.",
    titleLine2: "Not an LLM.",
    description: "A compact GRU predicts the next tool in a workflow from SHGAT-enriched embeddings. It sees the execution history and predicts what comes next — tools, capabilities, or terminal states.",
    features: [
      { icon: "memory", title: "Compact Architecture", desc: "GRU(64) with unified VocabNode. 920 tools + 245 capabilities = 1,165 output classes. Trains in minutes on CPU." },
      { icon: "route", title: "Beam Search Decoding", desc: "Width-4 beam search with length normalization builds full execution paths. First-N accuracy reaches 70.8%." },
      { icon: "category", title: "Cap-as-Terminal", desc: "Capabilities act as terminal states. The model predicts when to stop expanding, not just what to expand. Cap Hit@1: 82.3%." },
      { icon: "speed", title: "SHGAT Contribution", desc: "SHGAT-enriched embeddings add +6.2pp to E2E beam accuracy vs raw embeddings. Structure is the signal." },
    ],
    benchmarkCaption: "E2E benchmark: beam search First-N accuracy comparison. SHGAT enrichment provides +6.2pp lift.",
    statParams: "parameters",
    statAccuracy: "E2E accuracy",
    statContribution: "SHGAT lift",
  },

  // ========================================
  // SUBSITE: MCP-SERVER
  // ========================================
  mcpServerHero: {
    tagline: "MCP 的 Hono",
    heroTitle1: "交付可擴展的",
    heroTitle2: "MCP 伺服器",
    heroSubtitle:
      "不再為每個 MCP 伺服器重新實作認證、限流和中介軟體。一個框架，預設可組合，從第一天起即可用於生產。",
    statFeatures: "內建功能",
    statTests: "測試通過",
    statRelease: "最新版本",
    ctaPrimary: "快速開始",
    ctaSecondary: "在 JSR 上查看",
    ctaDocs: "文件",
  },
  mcpServerInstall: {
    title: "隨時",
    titleAccent: "就緒",
    subtitle: "一條指令。支援 Deno 和 Node.js。發布在 JSR，現代 JavaScript 登錄檔。",
    jsrLabel: "JSR 登錄檔",
    githubLabel: "GitHub",
    docsLabel: "文件",
    builtWith: "基於",
  },

  // ========================================
  // SUBSITE: MCP-STD
  // ========================================
  mcpStdHero: {
    tagline: "MCP 標準工具箱",
    heroTitle1: "508 個工具。",
    heroTitle2: "一次匯入。",
    heroSubtitle:
      "資料庫、Git、Docker、加密、文字、網路、AI 代理——你自己會寫的每個工具，已測試且型別化。",
    statTools: "工具",
    statCategories: "分類",
    statRelease: "最新",
    ctaPrimary: "瀏覽目錄",
    ctaSecondary1: "快速開始",
    ctaSecondary2: "在 JSR 上查看",
  },
  mcpStdInstall: {
    title: "隨時",
    titleAccent: "就緒",
    subtitle: "一條指令。支援 Deno。發布在 JSR，現代 JavaScript 登錄檔。",
    denoLabel: "Deno",
    binaryLabel: "二進位",
    jsrLabel: "JSR 登錄檔",
    githubLabel: "GitHub",
    builtWith: "基於",
  },

  // ========================================
  // PML LANDING
  // ========================================
  pmlHero: {
    eyebrow: "AI 代理的程序化記憶",
    titleLine1: "一個閘道。任何模型。",
    titleAccent: "完整可觀測性。",
    description:
      "一次建構 AI 工作流，使用 Claude、GPT、Gemini 或本地 Ollama 執行。每次工具呼叫均可追蹤。秒級除錯，而非小時。",
    ctaPrimary: "開始使用",
    ctaSecondary: "閱讀文件",
    pillars: ["模型無關", "完整可追蹤", "模式提取"],
    traceHeader: "workflow:ci-deploy",
    traceLive: "live",
    traceCalls: "22 次呼叫",
    traceModels: "3 個模型",
    traceCost: "$0.028",
  },
  pmlArchitecture: {
    eyebrow: "架構",
    title: "工作原理",
    description:
      "統一閘道位於您的 LLM 和它所需工具之間。每個請求被分解為有向無環圖，在沙箱中執行，並完全追蹤。",
    clients: {
      label: "客戶端",
      items: ["Claude", "GPT", "Gemini", "Ollama", "任何 LLM"],
    },
    gateway: {
      label: "PML 閘道",
      pipeline: ["登錄檔", "DAG", "沙箱"],
      extras: ["符號世界模型", "可觀測性"],
    },
    servers: {
      label: "MCP 伺服器",
      items: ["filesystem", "postgres", "github", "memory", "任何工具"],
    },
    pillars: [
      { label: "模型無關", description: "相容任何 LLM 提供商" },
      { label: "可觀測性", description: "每個操作的完整追蹤" },
      { label: "符號推理", description: "符號推理層" },
    ],
    mobileArrow: "傳輸至",
  },
  pmlCatalogPreview: {
    label: "目錄",
    browseCta: "瀏覽完整目錄",
  },
  pmlQuickStart: {
    label: "快速開始",
    title: "3 步啟動",
    subtitle: "不到一分鐘為 Claude Code 添加程序化記憶。",
    docsLink: "閱讀完整文件",
    steps: [
      {
        number: "01",
        title: "安裝 PML",
        description: "一條指令。無相依性。支援 macOS、Linux 和 WSL。",
        file: "terminal",
      },
      {
        number: "02",
        title: "初始化專案",
        description: "PML 建立本地設定並連接到您的環境。",
        file: "terminal",
      },
      {
        number: "03",
        title: "與 Claude Code 搭配使用",
        description: "PML 工具自動可用。發現、執行和學習。",
        file: "claude-code",
      },
    ],
  },
  pmlIsolation: {
    eyebrow: "安全性",
    titleLine1: "自主的，",
    titleLine2: "但不魯莽。",
    description:
      "每個 AI 操作都在帶有資源限制的隔離沙箱中執行。危險操作在觸及生產系統之前會暫停等待人工審批。",
    features: [
      {
        id: "sandbox",
        title: "沙箱執行",
        description: "程式碼在隔離的 worker 中執行，無法直接存取主機系統或網路。",
      },
      {
        id: "hil",
        title: "人在迴圈中",
        description: "檔案寫入或資料庫變更等危險操作需要明確批准後才能執行。",
      },
      {
        id: "audit",
        title: "稽核追蹤",
        description: "每個操作都會被記錄完整上下文，以便透明和事後分析。",
      },
    ],
    svg: {
      sandbox: "沙箱",
      checkpoint: "檢查點",
      protected: "受保護",
      aiActions: "AI 操作",
      toolsData: "工具和資料",
      approve: "批准？",
      fetch: "fetch",
      parse: "parse",
      llm: "llm",
      run: "run",
      file: "file",
      db: "db",
      api: "api",
      shell: "shell",
    },
  },
  pmlBetaSignup: {
    eyebrow: "搶先體驗",
    title: "加入測試版",
    description: "成為首批為您的代理賦予程序化記憶的使用者。",
    labelName: "姓名",
    labelEmail: "信箱",
    labelUseCase: "您將如何使用 PML？",
    placeholderName: "您的姓名",
    placeholderEmail: "you@company.com",
    placeholderUseCase:
      "例如：我想為我的 Claude Code 代理提供長期記憶，用於重複的 DevOps 工作流...",
    submit: "申請存取",
    sending: "發送中...",
    successMessage: "您已在名單中！我們會盡快聯繫您。",
    errorMessage: "出錯了，請重試。",
    hiddenSubject: "PML Beta 存取請求",
  },
  pmlCta: {
    title: "準備好了嗎？",
    description: "為您的代理賦予程序化記憶。立即開始建構可觀測的工作流。",
    primaryCta: "開始使用",
    secondaryCta: "申請測試版",
  },
  pmlIntelligence: {
    eyebrow: "模式提取",
    titleLine1: "每次執行",
    titleLine2: "都留下軌跡。",
    description:
      "PML 記錄完整的執行軌跡——工具序列、延遲、錯誤路徑。SHGAT 從這些資料中提取相關性模式。確定性、可檢查、無黑箱。",
    features: [
      {
        icon: "hub",
        title: "執行軌跡",
        desc:
          "每次工作流執行都被完整記錄：工具呼叫、輸入、輸出、時間、成本。資料保留在您的基礎設施上。",
      },
      {
        icon: "auto_awesome",
        title: "圖注意力評分",
        desc: "SHGAT 處理軌跡資料以評分工具相關性。跨超圖層級的 K-head 注意力。無 LLM 呼叫。",
      },
      {
        icon: "recommend",
        title: "共現模式",
        desc: "經常一起執行的工具會自動浮現。統計共現，而非猜測。",
      },
    ],
  },

  // ========================================
  // ENGINE (additional sections)
  // ========================================
  engineLinks: {
    title: "Part of the",
    titleAccent: "PML Ecosystem",
    subtitle: "The engine runs inside PML. Self-hosted, open source, no external API calls.",
    jsrLabel: "JSR",
    githubLabel: "GitHub",
    docsLabel: "Docs",
    pmlLabel: "PML",
    builtWith: "Built with",
  },
  engineBenchmarks: {
    title: "Numbers,",
    titleAccent: "Not Promises",
    subtitle: "Benchmarked on 920 nodes across 1,165 vocabulary classes. All metrics from production traces, 24 notebooks of research.",
    cards: [
      {
        icon: "hub",
        title: "SHGAT-TF",
        rows: [
          ["Hit@1", "66.1%"],
          ["Hierarchy", "L0 (920) \u2192 L1 (26) \u2192 L2"],
          ["Attention heads", "16 \u00d7 64D"],
          ["Training", "InfoNCE + PER"],
        ],
      },
      {
        icon: "psychology",
        title: "GRU Sequencer",
        rows: [
          ["Global Hit@1", "57.6%"],
          ["Tool Hit@1", "37.2%"],
          ["Cap Hit@1", "82.3%"],
          ["Parameters", "258K"],
        ],
      },
      {
        icon: "stacks",
        title: "E2E Pipeline",
        rows: [
          ["Beam First-N", "70.8%"],
          ["SHGAT lift", "+6.2pp"],
          ["Beam width", "4"],
          ["Vocab size", "1,165"],
        ],
      },
    ],
  },
  engineHowItWorks: {
    title: "From Intent to",
    titleAccent: "Ranked Tools",
    subtitle:
      "One model, one pipeline. SHGAT scores tool relevance across the full hierarchy, then the DAG executor runs the top-ranked tools.",
    steps: [
      { icon: "search", label: "Intent", sublabel: "user query", type: "incoming" },
      { icon: "text_fields", label: "Embed", sublabel: "BGE-M3 1024D", type: "" },
      { icon: "hub", label: "SHGAT Score", sublabel: "K-head \u00d7 16", type: "" },
      { icon: "format_list_numbered", label: "Rank", sublabel: "top-K tools", type: "" },
      { icon: "play_arrow", label: "Execute", sublabel: "DAG runner", type: "handler" },
    ],
  },

  // ========================================
  // MCP-SERVER (additional sections)
  // ========================================
  mcpServerComparison: {
    title: "SDK vs",
    titleAccent: "框架",
    subtitle: "官方 SDK 提供協定。這個提供生產級技術棧。",
    colSdk: "官方 SDK",
    colFramework: "@casys/mcp-server",
    rows: [
      ["MCP 協定", true, true],
      ["中介軟體管線", false, true],
      ["OAuth2 / JWT 認證", false, true],
      ["速率限制", false, true],
      ["Schema 驗證", false, true],
      ["Streamable HTTP + SSE", "手動", "內建"],
      ["並行控制", false, true],
      ["OpenTelemetry 追蹤", false, true],
      ["Prometheus 指標", false, true],
      ["MCP Apps (UI 資源)", "手動", "內建"],
      ["CORS 白名單", false, true],
      ["請求體大小限制 (413)", false, true],
      ["IP 速率限制 (429)", false, true],
      ["工作階段傳播", false, true],
      ["HMAC 訊息簽章", false, true],
      ["CSP 注入", false, true],
      ["YAML + 環境變數設定", false, true],
      ["Deno + Node.js", "僅 Node", "兩者都支援"],
    ],
  },
  mcpServerFeatures: {
    title: "開箱",
    titleAccent: "即用",
    subtitle: "請求到處理器之間的一切——都已搞定。",
    features: [
      { icon: "swap_horiz", name: "雙傳輸", desc: "STDIO + Streamable HTTP，同一程式碼。" },
      { icon: "layers", name: "中介軟體管線", desc: "類似 Koa 的洋蔥模型。" },
      { icon: "shield", name: "OAuth2 認證", desc: "JWT/Bearer + RFC 9728 元資料。" },
      { icon: "key", name: "OIDC 預設", desc: "GitHub、Google、Auth0——一行程式碼。" },
      { icon: "settings", name: "YAML + 環境變數", desc: "檔案設定，部署時環境變數覆蓋。" },
      { icon: "speed", name: "並行控制", desc: "背壓策略：sleep、queue 或 reject。" },
      { icon: "timer", name: "速率限制", desc: "滑動視窗，按客戶端隔離。" },
      { icon: "check_circle", name: "Schema 驗證", desc: "註冊時透過 ajv 編譯 JSON Schema。" },
      { icon: "monitoring", name: "可觀測性", desc: "OTel span + Prometheus /metrics。" },
      { icon: "widgets", name: "MCP Apps", desc: "透過 ui:// scheme 提供互動式 UI。" },
      { icon: "lock", name: "CORS 白名單", desc: "來源白名單，萬用字元自動告警。" },
      { icon: "upload_file", name: "請求體限制", desc: "maxBodyBytes + 413 JSON-RPC 錯誤。" },
      { icon: "block", name: "IP 速率限制", desc: "按 IP 429 + Retry-After HTTP 標頭。" },
      { icon: "badge", name: "工作階段傳播", desc: "sessionId 注入中介軟體上下文。" },
      {
        icon: "enhanced_encryption",
        name: "HMAC 簽章",
        desc: "SHA-256 簽章/驗證 + PostMessage 防重放。",
      },
      { icon: "security", name: "CSP 注入", desc: "MCP Apps 自動注入 Content-Security-Policy。" },
    ],
  },
  mcpServerPipeline: {
    title: "你的伺服器，",
    titleAccent: "你的規則",
    subtitle:
      "每個請求流經可組合的中介軟體鏈。需要認證？加上。限流？一行程式碼。自訂邏輯？插入任意位置。",
    steps: [
      { icon: "arrow_forward", label: "請求", type: "incoming" },
      { icon: "timer", label: "限流", type: "" },
      { icon: "shield", label: "認證", type: "" },
      { icon: "tune", label: "自訂", type: "custom" },
      { icon: "verified_user", label: "權限", type: "" },
      { icon: "check_circle", label: "驗證", type: "" },
      { icon: "speed", label: "背壓", type: "" },
      { icon: "play_arrow", label: "處理器", type: "handler" },
    ],
  },
  mcpServerQuickStart: {
    title: "5 行程式碼到",
    titleAccent: "生產",
    subtitle: "無樣板程式碼。無設定儀式。註冊工具，呼叫 start()，直接上線。",
    tabBasic: "基礎 (STDIO)",
    tabHttp: "HTTP + 認證",
    tabYaml: "YAML 設定",
  },

  // ========================================
  // MCP-STD (additional sections)
  // ========================================
  mcpStdQuickStart: {
    title: "3 行程式碼到",
    titleAccent: "生產",
    subtitle: "作為獨立 MCP 伺服器使用，或作為程式庫匯入單個工具。由您決定。",
    tabServer: "MCP 伺服器",
    tabLibrary: "程式庫模式",
    tabCategory: "按類別",
  },
  mcpStdCategories: {
    title: "29 個",
    titleAccent: "分類",
    subtitle: "從資料庫查詢到 AI 智慧體編排，每個工具都已分類、隨時可用。",
    cta: "瀏覽全部 508 個工具",
  },

  // ========================================
  // ENGINE - SHGAT Section
  // ========================================
  engineShgat: {
    eyebrow: "SHGAT-TF",
    titleLine1: "SuperHyperGraph",
    titleLine2: "Attention Networks",
    description:
      "Why a hypergraph? Regular graphs model pairwise relations (tool A calls tool B). Hypergraphs model N-to-N: one composite groups multiple leaves, one leaf belongs to multiple composites. This captures the real structure of agentic tool ecosystems.",
    features: [
      {
        icon: "hub",
        title: "K-Head Attention (16 \u00d7 64D)",
        desc:
          "Each head captures a different relevance signal \u2014 co-occurrence, recency, error recovery, success rates. Heads are combined via learned fusion weights.",
      },
      {
        icon: "account_tree",
        title: "Multi-Level Message Passing",
        desc:
          "L0: 218 leaves (tools). L1: 26 composites. L2: meta-composites. Context propagates bottom-up then top-down. A leaf inherits relevance from sibling composites it has never been paired with.",
      },
      {
        icon: "trending_up",
        title: "InfoNCE Contrastive Loss",
        desc:
          "Temperature-annealed training (0.10 \u2192 0.06) with hard negatives and prioritized experience replay. Hit@3 reaches 86.3% on 644 nodes.",
      },
      {
        icon: "model_training",
        title: "Training Included",
        desc:
          "SHGAT-TF trains from production traces \u2014 no external service, no GPU required. libtensorflow FFI runs natively via Deno.dlopen. Self-contained.",
      },
    ],
    evidenceTitle: "Research Evidence",
    evidenceSubtitle: "24 notebooks, 41 visualizations. Real experiments, not marketing.",
    residualCaption: "Residual weight sweep: Hit@1 across different residual configurations.",
    pcaCaption: "PCA 3-panel: raw embeddings vs message-passing-only vs full V\u2192E residual.",
    gammaCaption: "Adaptive \u03B3(n) = \u03C3(a\u00B7log(n+1)+b) learns per-node residual weights based on fan-out. Novel contribution \u2014 no precedent in GNN literature.",
  },

  // ========================================
  // ABOUT PAGE
  // ========================================
  about: {
    pageTitle: "關於",
    heroName: "Erwan Lee Pesle",
    heroTitle: "創辦人 & 系統架構師，Casys",
    heroBio:
      "十五年來，我們一直在建構將知識轉化為行動的系統——從 mIRC 上的早期聊天機器人，到企業知識管理，再到用於工具相關性的圖注意力網路。當大語言模型出現時，問題沒有改變：上下文輸入，行動輸出。MCP 是這一原則最新的表達，也是最具影響力的。Casys AI 協助工程團隊交付可靠的 AI 整合——無供應商鎖定，無黑箱。",
    expertiseTitle: "我們做什麼",
    expertiseSubtitle:
      "連結 AI 系統與現實世界資料、工具和工作流的基礎設施——為生產環境的可觀測性和確定性而建構。",
    areas: [
      {
        icon: "hub",
        title: "知識圖譜",
        description:
          "模式設計、查詢最佳化和圖原生架構。Neo4j 認證專業開發者。從本體建模到生產級圖管線。",
      },
      {
        icon: "database",
        title: "圖資料庫",
        description:
          "建模關聯式資料庫無法表達的複雜關係。我們設計、部署和最佳化處理生產流量的 Neo4j 實例。",
      },
      {
        icon: "smart_toy",
        title: "智慧體系統",
        description:
          "工具編排、上下文路由和執行可靠性。我們架構多智慧體系統，使每個決策可追溯，每個故障可恢復。",
      },
      {
        icon: "cable",
        title: "MCP 基礎設施",
        description:
          "伺服器架構、連接器設計和協定級最佳化。已交付 500+ 開源工具。我們建構可觀測、可測試、生產就緒的 MCP 層。",
      },
    ],
    philosophyTitle: "我們的工作方式",
    principles: [
      {
        icon: "code",
        title: "以開源為基石",
        description:
          "我們的核心工具是開源的。客戶獲得的解決方案建立在可審查、可分叉、可擁有的程式碼之上。無供應商鎖定，無黑箱。",
      },
      {
        icon: "science",
        title: "能上線的研究",
        description:
          "我們發布所學，交付所建。我們推薦的每項技術都經過生產工作負載的驗證。",
      },
      {
        icon: "emoji_objects",
        title: "務實，不炒作",
        description:
          '用工程方法解決基礎設施問題。讓工作成果說話。',
      },
    ],
    ctaTitle: "從一個問題開始",
    ctaSubtitle:
      "描述您的 MCP 基礎設施挑戰、知識圖譜瓶頸或智慧體系統設計問題。我們會坦誠告知是否能幫到您——以及我們會如何著手解決。",
    ctaPrimary: {
      text: "聯繫我們",
      url: "/zh-TW/#contact",
      icon: "mail",
    },
    ctaSecondary: {
      text: "查看專案",
      url: "/zh-TW/use-cases",
      icon: "folder_open",
    },
  },

  // ========================================
  // SUBSITE: MCP-BRIDGE
  // ========================================
  mcpBridgeHero: {
    tagline: "MCP Apps \u2192 訊息平台",
    heroTitle1: "MCP Apps 觸及",
    heroTitle2: "20億+使用者",
    heroSubtitle: "將任何 MCP App 變為 Telegram Mini App。零程式碼改動。同一工具，全新受眾。",
    statTests: "測試通過",
    statPlatforms: "平台",
    statRelease: "最新版本",
    ctaPrimary: "快速開始",
    ctaSecondary: "在 JSR 上查看",
    ctaDocs: "文件",
  },
  mcpBridgeFeatures: {
    title: "彌合",
    titleAccent: "鴻溝",
    subtitle: "將 MCP Apps 從開發者工具帶到訊息平台所需的一切。",
    features: [
      { icon: "code_off", name: "零程式碼改動", desc: "現有 MCP Apps 直接使用，無需重寫。" },
      { icon: "layers", name: "三層架構", desc: "客戶端、資源伺服器、MCP 伺服器。" },
      { icon: "swap_horiz", name: "協定轉換", desc: "透過 WebSocket 的 JSON-RPC 2.0，無縫銜接。" },
      { icon: "smart_toy", name: "Telegram Mini Apps", desc: "完整的主題、視埠、認證支援。" },
      { icon: "more_horiz", name: "更多平台", desc: "LINE、Discord、WhatsApp — 即將推出。" },
      { icon: "shield", name: "CSP 強制", desc: "預設嚴格的內容安全策略。" },
      { icon: "key", name: "工作階段認證", desc: "加密安全權杖，HMAC 驗證。" },
      { icon: "sync", name: "WebSocket 傳輸", desc: "即時雙向通訊。" },
      { icon: "palette", name: "主題映射", desc: "平台主題自動映射到 MCP Apps。" },
      { icon: "extension", name: "可擴充適配器", desc: "新增 Discord、WhatsApp 或任何平台。" },
    ],
  },
  mcpBridgeArchitecture: {
    title: "工作",
    titleAccent: "原理",
    subtitle:
      "Bridge 攔截 MCP App 的 postMessage 呼叫，透過 WebSocket 路由到資源伺服器，再將工具呼叫轉發到未修改的 MCP 伺服器。",
    steps: [
      { icon: "web", label: "MCP App", type: "incoming" },
      { icon: "javascript", label: "bridge.js", type: "" },
      { icon: "sync", label: "WebSocket", type: "" },
      { icon: "dns", label: "資源伺服器", type: "handler" },
      { icon: "hub", label: "MCP 伺服器", type: "" },
      { icon: "send", label: "Telegram", type: "custom" },
    ],
  },
  mcpBridgeComparison: {
    title: "自訂整合 vs",
    titleAccent: "Bridge",
    subtitle: "省去數月的整合工作。Bridge 處理複雜部分，讓您更快發布。",
    colCustom: "自訂整合",
    colBridge: "@casys/mcp-bridge",
    rows: [
      ["MCP App 程式碼改動", "需要重寫", "無需改動"],
      ["平台認證（Telegram）", "手動 HMAC", "內建"],
      ["內容安全策略", "手動 headers", "自動產生"],
      ["WebSocket 管理", "從零開始", "內建"],
      ["主題同步", "手動映射", "自動"],
      ["多平台支援", "按平台編碼", "適配器模式"],
      ["工作階段管理", "自訂實作", "加密安全"],
      ["HTML 注入 (bridge.js)", "不適用", "自動"],
    ],
  },
  mcpBridgeQuickStart: {
    title: "部署到",
    titleAccent: "Telegram",
    subtitle: "三步將您的 MCP App 執行在 Telegram 中。無需更改現有程式碼。",
    tabTelegram: "Telegram",
    tabLine: "即將推出",
  },
  mcpBridgeInstall: {
    title: "隨時",
    titleAccent: "就緒",
    subtitle: "一條指令。支援 Deno 和 Node.js。發布在 JSR，現代 JavaScript 登錄檔。",
    jsrLabel: "JSR 登錄檔",
    githubLabel: "GitHub",
    docsLabel: "文件",
    builtWith: "基於",
  },

  // ========================================
  // USE CASES PAGE
  // ========================================
  useCases: {
    pageTitle: "生產環境案例",
    heroTitle: "生產環境案例",
    heroSubtitle:
      "我們為生產環境建構 MCP 基礎設施。以下是案例——挑戰、解決方案、指標。",
    labelChallenge: "挑戰",
    labelApproach: "解決方案",
    labelResult: "成果",
    labelStack: "技術棧",
    ctaTitle: "有類似的挑戰？",
    ctaSubtitle: "描述您的 MCP 基礎設施挑戰。我們會坦誠告知是否能幫到您——以及我們會如何著手解決。",
    ctaPrimary: { text: "聯繫我們", url: "/zh-TW/#contact", icon: "mail" },
    ctaSecondary: { text: "查看專案", url: "/zh-TW/use-cases", icon: "folder_open" },
  },
};
