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
      platform: "Server、Bridge、Compose — 一套完整技術棧",
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
    kicker: "面向 AI 智慧體的 MCP 整合商",
    titleLine1: "MCP 伺服器",
    titleLine2: "為您的 AI 智慧體",
    subtitle: "已在生產環境運行：ERPNext、電子發票、CRM、內部工具。GitHub 上有互動式示範。",
    cta: {
      primary: { text: "查看我們的工作", icon: "arrow_forward", url: "#use-cases-preview" },
      secondary: { text: "聯絡我們", icon: "mail", url: "#contact" },
    },
    proofLabel: "標準連接器",
    proofs: [
      { name: "MCP ERPNext", stat: "97 工具", url: "/zh-TW/use-cases/mcp-erpnext", icon: "database" },
      { name: "MCP eInvoice", stat: "27 工具", url: "/zh-TW/use-cases/mcp-einvoice", icon: "receipt_long" },
    ],
    authority: [
      { label: "15+ 年", detail: "知識管理 → 圖資料庫 → AI 代理" },
      { label: "開源", detail: "程式碼、議題、路線圖公開" },
      { label: "已發布", detail: "npm + JSR" },
      { label: "生產驗證", detail: "真實業務流程" },
    ],
  },
  featuredDemo: {
    title: "生產環境中",
    subtitle: "法國電子發票作為智慧體能力 — 現已上線。",
    eyebrow: "上線產品",
    name: "MCP E-Invoice",
    tagline: "27 個 MCP 工具，適配法國電子發票改革。",
    description:
      "完整發票生命週期接入您的智慧體技術棧：簽發、搜尋、追蹤狀態並向 DGFiP 報告。PA 無關 — 無需更改智慧體程式碼即可切換認證平台。",
    bullets: [
      "27 個工具：簽發、搜尋、追蹤、報告 — 完整生命週期。",
      "PA 無關：今日 Iopole，明日任意平台。",
      "4 個內建 MCP Apps 檢視器，用於發票和狀態展示。",
      "在 GitHub 上開源 — 檢查程式碼。",
    ],
    stats: [
      { value: "27", label: "MCP 工具" },
      { value: "3", label: "發票格式（CII、UBL、Factur-X）" },
      { value: "PA-agnostic", label: "平台適配器模式" },
    ],
    note: "專為 2026 年法國電子發票授權構建。同樣的適配器模式可擴展到任何認證平台。",
    cta: {
      primary: { text: "聯絡我們", icon: "mail", url: "#contact" },
      secondary: { text: "在 GitHub 上查看", icon: "open_in_new", url: "https://github.com/Casys-AI/mcp-einvoice" },
    },
    media: {
      type: "image",
      src: "/images/use-cases/mcp-einvoice-demo-light.png",
      srcLight: "/images/use-cases/mcp-einvoice-demo-light.png",
      srcDark: "/images/use-cases/mcp-einvoice-demo-dark.png",
      caption: "MCP E-Invoice 在 Claude 中執行 — 帶狀態篩選的發票列表。",
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
            tagline: "法國電子發票 MCP 伺服器",
            status: "v0.1.0",
            tech: "Deno",
            links: { website: "/zh-TW/use-cases/mcp-einvoice", github: "https://github.com/Casys-AI/mcp-einvoice", jsr: "https://jsr.io/@casys/mcp-einvoice" },
          },
          {
            id: "mcp-compose",
            name: "@casys/mcp-compose",
            tagline: "將 MCP UI 組合為儀表板",
            status: "v0.1.0",
            tech: "Deno",
            links: { website: "/zh-TW/mcp-compose", github: "https://github.com/Casys-AI/mcp-compose", jsr: "https://jsr.io/@casys/mcp-compose" },
          },
          {
            id: "mcp-server",
            name: "@casys/mcp-server",
            tagline: "生產級 MCP 伺服器框架",
            status: "v0.14.0",
            tech: "Deno",
            links: { website: "/zh-TW/mcp-server", github: "https://github.com/Casys-AI/mcp-server", jsr: "https://jsr.io/@casys/mcp-server" },
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
    trajectoryLabels: ["起源", "精煉", "現狀"],
    sideFooterLabel: "創立於",
    sideFooterValue: "2013+",
    viewReposLabel: "查看程式碼儲存庫",
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
    closingCta: {
      prompt: "沒找到您的問題？",
      ctaLabel: "聯絡我們",
      url: "#contact",
      icon: "mail",
    },
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
    stats: [
      { value: "97", label: "MCP 工具" },
      { value: "Live", label: "生產介面" },
      { value: "Open Source", label: "GitHub 公開" },
    ],
    quickLinks: [
      { icon: "terminal", title: "GitHub 儲存庫", description: "原始碼、issues 和路線圖。", url: "https://github.com/Casys-AI/mcp-erpnext" },
      { icon: "package_2", title: "JSR 套件", description: "使用 deno add 或 npx 安裝。", url: "https://jsr.io/@casys/mcp-erpnext" },
      { icon: "menu_book", title: "文件", description: "設定說明和工具參考。", url: "https://github.com/Casys-AI/mcp-erpnext#readme" },
    ],
    quote: {
      text: "企業軟體的未來不在於新儀表板，而在於將現有智慧無縫接入既有的記錄系統。",
      attribution: "— Casys Engineering",
    },
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
    eyebrow: "MCP 現場產品",
    title: "面向 AI 智慧體的 MCP E-Invoice",
    subtitle: "2 分鐘測試現場電子發票工作流（目前覆蓋法國市場，相容歐洲 Peppol）。然後深入底層 MCP 技術棧。",
    intro: "MCP E-Invoice 透過 PA 無關的適配器模式，將您的 AI 智慧體連接至法國電子發票生態系統。目前已整合 Iopole，可擴展至任意認證平台。",
    stats: [
      { value: "27", label: "MCP 工具" },
      { value: "3", label: "發票格式" },
      { value: "PA-agnostic", label: "適配器模式" },
    ],
    quickLinks: [
      { icon: "terminal", title: "GitHub 儲存庫", description: "原始碼、issues 和貢獻。", url: "https://github.com/Casys-AI/mcp-einvoice" },
      { icon: "package_2", title: "JSR 套件", description: "使用 deno add 或 npx 安裝。", url: "https://jsr.io/@casys/mcp-einvoice" },
      { icon: "menu_book", title: "文件", description: "設定指南、工具參考和認證流程。", url: "https://github.com/Casys-AI/mcp-einvoice#readme" },
    ],
    media: {
      srcLight: "/images/use-cases/mcp-einvoice-demo-light.png",
      srcDark: "/images/use-cases/mcp-einvoice-demo-dark.png",
      caption: "MCP E-Invoice 在 Claude 中執行 — 帶狀態過濾器的發票列表。",
    },
    quote: {
      text: "電子發票不應該是獨立系統，而應該是您的智慧體已具備的隱形能力。",
      attribution: "— Casys Engineering",
    },
    proofs: [
      { title: "完整發票生命週期", description: "簽發、搜尋、下載、追蹤狀態、管理附件 — 全部透過 MCP 工具完成。" },
      { title: "PA 無關架構", description: "在認證平台（Iopole 等）之間切換，無需修改智慧體程式碼。" },
      { title: "互動式 MCP Apps", description: "4 個內建檢視器：發票詳情、文件列表、狀態時間軸和目錄卡片。" },
    ],
    whatItShowsTitle: "功能涵蓋",
    whatItShows: [
      "使用 Lucene 查詢語法進行發票簽發和搜尋",
      "PPF 目錄查詢（法國）和 Peppol 網路檢查（國際）",
      "狀態生命週期管理（APPROVED、REFUSED、DISPUTED、PAYMENT_SENT……）",
      "針對 B2C 和跨境交易的 DGFiP e-reporting",
      "CII、UBL 和 Factur-X 發票生成",
    ],
    stackTitle: "基於 Casys 技術棧建構",
    stackItems: [
      "@casys/mcp-server 提供生產級 MCP 伺服器行為",
      "@casys/mcp-compose 提供複合 UI 儀表板",
      "OAuth2 client_credentials 支援自動更新",
      "4 個帶下鑽操作的 MCP Apps 檢視器",
    ],
    ctaPrimary: { text: "測試平台", icon: "open_in_new", url: "https://einvoice-platform.fr" },
    ctaSecondary: { text: "在 GitHub 上查看", icon: "code", url: "https://github.com/Casys-AI/mcp-einvoice" },
  },
  // ========================================
  // MCP PLATFORM (unified page)
  // ========================================
  mcpPlatform: {
    eyebrow: "CASYS MCP PLATFORM",
    title: "Build. Connect. Compose.",
    subtitle: "三個套件。一套生產級 MCP 技術棧。",
    description: "一款開源 TypeScript 工具包，用於構建生產級 MCP 伺服器、將其橋接至訊息平台，並將各自的 UI 組合為統一儀表板。",
    ctaPrimary: "立即開始",
    ctaGithub: "在 GitHub 上查看",
    navCards: [
      { label: "Build", name: "@casys/mcp-server", desc: "生產級伺服器框架", href: "#server" },
      { label: "Connect", name: "@casys/mcp-bridge", desc: "訊息平台橋接器", href: "#bridge" },
      { label: "Compose", name: "@casys/mcp-compose", desc: "UI 組合引擎", href: "#compose" },
    ],
    serverStep: "01",
    serverLabel: "BUILD",
    serverTitle: "@casys/mcp-server",
    serverSubtitle: "MCP 的 Hono — 可組合中間件、OAuth2、雙傳輸",
    serverBody: "即插即用的中間件，用於身份驗證、限流和驗證。每個請求都流經由你掌控的可組合管道 — 凌晨三點不再有意外。",
    serverFeatures: [
      { icon: "lock", name: "Bearer auth", desc: "開箱即用的基於令牌的身份驗證中間件。" },
      { icon: "speed", name: "Rate limiting", desc: "可配置時間視窗的每客戶端請求限流。" },
      { icon: "verified", name: "Zod validation", desc: "使用 Zod 在執行時驗證輸入/輸出結構描述。" },
      { icon: "bug_report", name: "Error handling", desc: "帶有 JSON-RPC 錯誤碼的結構化錯誤傳播。" },
      { icon: "bolt", name: "Streaming SSE", desc: "完整的 Server-Sent Events 傳輸，與 stdio 並行支援。" },
      { icon: "layers", name: "Middleware stack", desc: "每個請求上可組合、有序的中間件鏈。" },
      { icon: "extension", name: "MCP primitives", desc: "資源、提示詞、工具 — 涵蓋所有 MCP 原語。" },
      { icon: "description", name: "Typed schemas", desc: "TypeScript 優先，全程嚴格型別推斷。" },
      { icon: "sync", name: "Lifecycle hooks", desc: "onStart / onStop 鉤子用於優雅的資源管理。" },
      { icon: "monitor_heart", name: "Health endpoint", desc: "內建 /health 路由，供負載平衡器探測使用。" },
      { icon: "monitoring", name: "Prometheus metrics", desc: "/metrics 端點，請求耗時與錯誤率。" },
      { icon: "terminal", name: "CLI scaffold", desc: "deno run scaffold 快速啟動新伺服器。" },
    ],
    serverPipelineTitle: "中間件管道",
    bridgeStep: "02",
    bridgeLabel: "CONNECT",
    bridgeTitle: "@casys/mcp-bridge",
    bridgeSubtitle: "將 MCP 工具轉化為 Telegram Mini Apps 和 LINE LIFF",
    bridgeBody: "一個協定轉換層，將你的 MCP 伺服器連接到訊息平台。OAuth 客戶端、HMAC-SHA256 認證、WebSocket 傳輸 — 全部內建處理。",
    bridgeSource: "MCP 伺服器",
    bridgeCenter: "mcp-bridge",
    bridgePipelineLabel: "協定轉換層",
    bridgeFeatures: [
      { icon: "key", name: "OAuth client" },
      { icon: "fingerprint", name: "HMAC-SHA256 auth" },
      { icon: "cable", name: "WebSocket transport" },
      { icon: "security", name: "CSP headers" },
      { icon: "extension", name: "Platform adapters" },
      { icon: "autorenew", name: "Auto-reconnect" },
    ],
    composeStep: "03",
    composeLabel: "COMPOSE",
    composeTitle: "@casys/mcp-compose",
    composeSubtitle: "收集、組合並同步多個 MCP Apps UI",
    composeSteps: [
      { step: "1", title: "收集", desc: "Agent 呼叫 N 個工具 → Collector 從每個結果中提取 _meta.ui 資源 URI" },
      { step: "2", title: "組合", desc: "定義版面（split/tabs/grid）+ 同步規則 → Composer 驗證並建構描述符" },
      { step: "3", title: "渲染", desc: "Renderer 輸出帶有 JSON-RPC 事件匯流排的獨立 HTML，用於跨 UI 同步" },
    ],
    composeCodeTitle: "compose.ts",
    composeCode: `import { createCollector, buildCompositeUi, renderComposite } from "@casys/mcp-compose";

// 1. Collect UI resources from tool results
const collector = createCollector();
collector.collect("postgres:query", pgResult);   // has _meta.ui
collector.collect("viz:render", vizResult);       // has _meta.ui

// 2. Compose with layout + sync rules
const descriptor = buildCompositeUi(collector.getResources(), {
  layout: "split",
  sync: [
    { from: "postgres:query", event: "filter", to: "viz:render", action: "update" },
  ],
});

// 3. Render self-contained HTML
const html = renderComposite(descriptor);`,
    installTitle: "開始構建",
    quote: "三個套件各自獨立運作。組合在一起更強大。",
  },
  mcpComposePage: {
    eyebrow: "MCP COMPOSE",
    title: "將 MCP UI 組合為統一儀表板",
    subtitle: "您的 MCP 伺服器已有 UI。mcp-compose 讓它們彼此通訊。",
    description: "一個輕量、確定性的原語，用於收集、組合和同步多個 MCP Apps UI 為複合儀表板。純函式、零相依性、機器可讀錯誤。",
    ctaPrimary: { text: "快速開始", href: "#quickstart" },
    ctaSecondary: { text: "在 JSR 上查看", href: "https://jsr.io/@casys/mcp-compose" },
    featuresTitle: "功能說明",
    featuresSubtitle: "三步管道：收集 UI 資源、使用同步規則組合、渲染為自包含 HTML。",
    features: [
      { icon: "input", name: "Collector", desc: "自動從 MCP 工具結果中提取 _meta.ui" },
      { icon: "dashboard_customize", name: "Composer", desc: "使用版面配置和同步規則建構複合描述符" },
      { icon: "code", name: "Renderer", desc: "產生帶內嵌事件匯流排的自包含 HTML" },
      { icon: "sync_alt", name: "宣告式同步", desc: "透過 { from, event, to, action } 進行跨 UI 事件路由" },
      { icon: "grid_view", name: "版面模式", desc: "Split、tabs、grid 或 stack — 每個組合可獨立設定" },
      { icon: "share", name: "共享上下文", desc: "將值（workflowId、userId）傳播到所有 UI" },
      { icon: "verified", name: "明確驗證", desc: "validateSyncRules() 在渲染前捕捉無效規則 — buildCompositeUi() 會靜默忽略未知參照" },
      { icon: "package_2", name: "零相依性", desc: "純函式、確定性輸出，僅依賴 Deno 標準函式庫" },
    ],
    architectureTitle: "流水線",
    architectureSteps: [
      { step: "1", title: "收集", description: "智慧體呼叫 N 個工具 → Collector 從每個結果中提取 _meta.ui 資源 URI" },
      { step: "2", title: "組合", description: "定義版面配置（split/tabs/grid）+ 同步規則 → Composer 驗證並建構描述符" },
      { step: "3", title: "渲染", description: "Renderer 輸出帶 JSON-RPC 事件匯流排的自包含 HTML，用於跨 UI 同步" },
    ],
    quickstartTitle: "快速開始",
    quickstartCode: `import { createCollector, buildCompositeUi, renderComposite } from "@casys/mcp-compose";

// 1. 從工具結果收集 UI 資源
const collector = createCollector();
collector.collect("invoice-viewer", invoiceResult);  // has _meta.ui
collector.collect("status-timeline", statusResult);  // has _meta.ui

// 2. 使用版面配置 + 同步規則進行合成
const resources = collector.getResources();
const descriptor = buildCompositeUi(resources, {
  layout: "split",
  sync: [
    { from: "invoice-viewer", event: "status-change", to: "status-timeline", action: "refresh" },
  ],
});

// 3. 渲染為自包含 HTML
const html = renderComposite(descriptor);`,
    installTitle: "安裝",
    installDeno: "deno add jsr:@casys/mcp-compose@0.4.0",
    installNpm: "npx jsr add @casys/mcp-compose@0.4.0",
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
    howItWorks: "工作原理",
    problem: "問題所在",
    shgat: "SHGAT",
    gru: "GRU",
    benchmarks: "基準測試",
    links: "連結",
    docs: "文件",
    workWithUs: "合作諮詢",
  },
  engineHero: {
    tagline: "機器學習計算層",
    heroTitle1: "評分、排序、建構路徑",
    heroTitle2: "無需 LLM",
    heroSubtitle:
      "SHGAT 注意力網路在超圖層級上評分工具相關性。多層訊息傳遞、K-head 注意力、零 LLM 呼叫。確定性、可觀測，執行在您自己的硬體上。",
    statTools: "已索引節點",
    statHit: "E2E 準確率",
    statLatency: "GRU 參數量",
    ctaPrimary: "工作原理",
    ctaDocs: "文件",
    ctaSecondary: "GitHub",
  },
  engineProblem: {
    eyebrow: "問題所在",
    titleLine1: "原始嵌入向量",
    titleLine2: "對結構視而不見",
    description: "LLM 逐一評分工具相關性。它們無法識別 psql_query 和 csv_parse 同屬資料管道能力組。缺乏結構上下文時，工具選擇雜訊大、速度慢、易出錯。",
    insight: "SHGAT 增強將孤立的嵌入向量轉化為結構感知的表示。共享能力的工具會聚集在一起，即使它們從未出現在同一工作流中。",
    tsneBaCaption: "t-SNE 視覺化：原始 BGE-M3 嵌入（左）vs SHGAT 增強後（右）。訊息傳遞後，工具按能力聚類。",
    tsneCapCaption: "相同嵌入按能力分配著色。增強後的嵌入形成更緊密、更可分離的叢集。",
  },
  engineGru: {
    eyebrow: "GRU 序列器",
    titleLine1: "258K 參數。",
    titleLine2: "不是 LLM。",
    description: "一個緊湊的 GRU 基於 SHGAT 增強嵌入預測工作流中的下一個工具。它看到執行歷史，預測接下來的內容 — 工具、能力或終止狀態。",
    features: [
      { icon: "memory", title: "緊湊架構", desc: "GRU(64) 搭配統一的 VocabNode。920 個工具 + 245 個能力 = 1,165 個輸出類別。在 CPU 上數分鐘即可訓練完畢。" },
      { icon: "route", title: "Beam Search 解碼", desc: "寬度為 4 的 Beam Search 結合長度正規化，建構完整執行路徑。First-N 準確率達到 70.8%。" },
      { icon: "category", title: "Cap-as-Terminal", desc: "能力作為終止狀態。模型預測何時停止擴展，而不僅僅是擴展什麼。Cap Hit@1：82.3%。" },
      { icon: "speed", title: "SHGAT 貢獻", desc: "SHGAT 增強嵌入相比原始嵌入，E2E beam 準確率提升 +6.2pp。結構就是訊號。" },
    ],
    benchmarkCaption: "E2E 基準：Beam Search First-N 準確率對比。SHGAT 增強帶來 +6.2pp 提升。",
    statParams: "參數",
    statAccuracy: "E2E 準確率",
    statContribution: "SHGAT 提升",
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
    title: "屬於",
    titleAccent: "PML 生態系統",
    subtitle: "該引擎執行於 PML 內部。自託管、開源、無外部 API 呼叫。",
    jsrLabel: "JSR",
    githubLabel: "GitHub",
    docsLabel: "文件",
    pmlLabel: "PML",
    builtWith: "基於",
  },
  engineBenchmarks: {
    title: "數字，",
    titleAccent: "有據可查",
    subtitle: "基於 920 個節點、1,165 個詞彙類別的基準測試。所有指標來自生產軌跡，24 本研究筆記本。",
    cards: [
      {
        icon: "hub",
        title: "SHGAT-TF",
        rows: [
          ["Hit@1", "66.1%"],
          ["層級", "L0 (920) → L1 (26) → L2"],
          ["注意力頭", "16 × 64D"],
          ["訓練", "InfoNCE + PER"],
        ],
      },
      {
        icon: "psychology",
        title: "GRU 序列器",
        rows: [
          ["全域 Hit@1", "57.6%"],
          ["工具 Hit@1", "37.2%"],
          ["能力 Hit@1", "82.3%"],
          ["參數量", "258K"],
        ],
      },
      {
        icon: "stacks",
        title: "E2E 流水線",
        rows: [
          ["Beam First-N", "70.8%"],
          ["SHGAT 提升", "+6.2pp"],
          ["Beam 寬度", "4"],
          ["詞彙大小", "1,165"],
        ],
      },
    ],
  },
  engineHowItWorks: {
    title: "從意圖到",
    titleAccent: "工具排序",
    subtitle:
      "一個模型，一條流水線。SHGAT 在完整層級上評分工具相關性，然後 DAG 執行器執行排名最高的工具。",
    steps: [
      { icon: "search", label: "意圖", sublabel: "使用者查詢", type: "incoming" },
      { icon: "text_fields", label: "嵌入", sublabel: "BGE-M3 1024D", type: "" },
      { icon: "hub", label: "SHGAT 評分", sublabel: "K-head × 16", type: "" },
      { icon: "format_list_numbered", label: "排序", sublabel: "top-K 工具", type: "" },
      { icon: "play_arrow", label: "執行", sublabel: "DAG 執行器", type: "handler" },
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
    titleLine1: "超超圖",
    titleLine2: "注意力網路",
    description:
      "為什麼用超圖？普通圖建模成對關係（工具 A 呼叫工具 B）。超圖建模 N 對 N：一個複合節點包含多個葉節點，一個葉節點屬於多個複合節點。這捕捉了智慧體工具生態的真實結構。",
    features: [
      {
        icon: "hub",
        title: "K-Head 注意力（16 × 64D）",
        desc:
          "每個注意力頭捕捉不同的相關性訊號 — 共現、時近性、錯誤恢復、成功率。各頭透過學習到的融合權重組合。",
      },
      {
        icon: "account_tree",
        title: "多層訊息傳遞",
        desc:
          "L0：218 個葉節點（工具）。L1：26 個複合節點。L2：元複合節點。上下文自下而上再自上而下傳播。葉節點從未配對過的兄弟複合節點繼承相關性。",
      },
      {
        icon: "trending_up",
        title: "InfoNCE 對比損失",
        desc:
          "溫度退火訓練（0.10 → 0.06），含難負例和優先經驗回放。Hit@3 在 644 個節點上達到 86.3%。",
      },
      {
        icon: "model_training",
        title: "訓練已內建",
        desc:
          "SHGAT-TF 從生產軌跡訓練 — 無需外部服務，無需 GPU。libtensorflow FFI 透過 Deno.dlopen 原生執行。自包含。",
      },
    ],
    evidenceTitle: "研究證據",
    evidenceSubtitle: "24 本筆記本，41 個視覺化圖表。真實實驗，非市場宣傳。",
    residualCaption: "殘差權重掃描：不同殘差配置下的 Hit@1 對比。",
    pcaCaption: "PCA 三圖：原始嵌入 vs 僅訊息傳遞 vs 完整 V→E 殘差。",
    gammaCaption: "自適應 γ(n) = σ(a·log(n+1)+b) 基於扇出學習每節點殘差權重。創新貢獻 — GNN 文獻中無先例。",
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
    tabLine: "LINE",
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
