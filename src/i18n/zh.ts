// ============================================================
// Chinese translations for Casys Hub Vitrine
// Organized by page/section
// ============================================================

import type { Translations } from "./index";

export const zh: Translations = {
  // ========================================
  // SHARED COMPONENTS
  // ========================================
  header: {
    projects: "项目",
    whyCasys: "为什么选择 Casys",
    consulting: "咨询服务",
    blog: "Blog",
    useCases: "我们的工作",
    about: "关于我们",
    contact: "联系我们",
    projectDescriptions: {
      erpnext: "交互式 ERPNext 工作流演示",
      einvoice: "法国电子发票 MCP 服务器",
      compose: "将 MCP UI 组合为仪表板",
      std: "508 个标准 MCP 工具",
      server: "生产级 MCP 服务器框架",
      bridge: "MCP 应用连接消息平台",
      platform: "Server、Bridge、Compose — 一套完整技术栈",
    },
    projectGroupServers: "MCP 服务器",
    projectGroupInfra: "基础设施",
  },
  footer: {
    product: "产品",
    projects: "项目",
    consulting: "咨询服务",
    training: "培训",
    github: "GitHub",
    openSource: "开源项目",
    connect: "链接",
    contact: "联系我们",
    discord: "Discord",
    description: "智能体架构与上下文系统",
    tagline: "开源工具 & 咨询服务",
  },

  // ========================================
  // LANDING V2 SECTIONS
  // ========================================
  hero: {
    kicker: "面向 AI 智能体的 MCP 集成商",
    titleLine1: "MCP 服务器",
    titleLine2: "为您的 AI 智能体",
    subtitle: "已在生产环境运行：ERPNext、电子发票、CRM、内部工具。GitHub 上有交互式演示。",
    cta: {
      primary: { text: "查看我们的工作", icon: "arrow_forward", url: "#use-cases-preview" },
      secondary: { text: "联系我们", icon: "mail", url: "#contact" },
    },
    proofLabel: "标准连接器",
    proofs: [
      { name: "MCP ERPNext", stat: "97 工具", url: "/zh/use-cases/mcp-erpnext", icon: "database" },
      { name: "MCP eInvoice", stat: "27 工具", url: "/zh/use-cases/mcp-einvoice", icon: "receipt_long" },
    ],
    authority: [
      { label: "15+ 年", detail: "知识管理 → 图数据库 → AI 代理" },
      { label: "开源", detail: "代码、议题、路线图公开" },
      { label: "已发布", detail: "npm + JSR" },
      { label: "生产验证", detail: "真实业务流程" },
    ],
  },
  featuredDemo: {
    title: "生产环境中",
    subtitle: "法国电子发票作为智能体能力 — 现已上线。",
    eyebrow: "上线产品",
    name: "MCP E-Invoice",
    tagline: "27 个 MCP 工具，适配法国电子发票改革。",
    description:
      "完整发票生命周期接入您的智能体技术栈：签发、搜索、跟踪状态并向 DGFiP 报告。PA 无关 — 无需更改智能体代码即可切换认证平台。",
    bullets: [
      "27 个工具：签发、搜索、跟踪、报告 — 完整生命周期。",
      "PA 无关：今日 Iopole，明日任意平台。",
      "4 个内置 MCP Apps 查看器，用于发票和状态展示。",
      "在 GitHub 上开源 — 检查代码。",
    ],
    stats: [
      { value: "27", label: "MCP 工具" },
      { value: "3", label: "发票格式（CII、UBL、Factur-X）" },
      { value: "PA-agnostic", label: "平台适配器模式" },
    ],
    note: "专为 2026 年法国电子发票授权构建。同样的适配器模式可扩展到任何认证平台。",
    cta: {
      primary: { text: "联系我们", icon: "mail", url: "#contact" },
      secondary: { text: "在 GitHub 上查看", icon: "open_in_new", url: "https://github.com/Casys-AI/mcp-einvoice" },
    },
    media: {
      type: "image",
      src: "/images/use-cases/mcp-einvoice-demo-light.png",
      srcLight: "/images/use-cases/mcp-einvoice-demo-light.png",
      srcDark: "/images/use-cases/mcp-einvoice-demo-dark.png",
      caption: "MCP E-Invoice 在 Claude 中运行 — 带状态筛选的发票列表。",
    },
  },
  socialProof: {
    title: "实际成果",
    subtitle: "用成果说话",
    items: [
      {
        type: "stat",
        icon: "code",
        stat: "活跃",
        label: "开发中",
        description: "Casys PML - 集成 GraphRAG 和 DAG 的 MCP Gateway",
        link: {
          text: "在 GitHub 上关注",
          url: "https://github.com/Casys-AI/casys-pml",
        },
      },
      {
        type: "stat",
        icon: "groups",
        stat: "15+",
        label: "年经验",
        description: "Context Management → Graph DBs → DAGs → MCP",
        link: {
          text: "了解我们的故事",
          url: "/about",
        },
      },
      {
        type: "stat",
        icon: "public",
        stat: "French Tech",
        label: "台湾",
        description: "French Tech Taiwan 社区活跃成员",
        link: {
          text: "查看演讲",
          url: "/blog?tag=talks",
        },
      },
    ],
    githubTitle: "开源成果",
    githubCta: "查看所有 GitHub 项目",
    repos: [
      {
        name: "@casys/mcp-server",
        description: "生产级 MCP 服务器，支持中间件管道",
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
        description: "面向 MCP 应用的交互式 ERPNext 工作流",
        stars: "★ 增长中",
        url: "https://github.com/Casys-AI/mcp-erpnext",
      },
    ],
  },
  workWithUs: {
    title: "与我们合作",
    subtitle: "我们的工具免费开源。当您需要部署帮助时，我们随时为您服务。",
    options: [
      {
        id: "explore",
        icon: "explore",
        title: "探索",
        tagline: "免费与开源",
        description: "了解我们的工具，阅读研究，加入社区。",
        items: [
          { icon: "code", text: "Casys PML - AI 代理的程序记忆层", url: "https://pml.casys.ai" },
          { icon: "article", text: "博客与技术文章", url: "/blog" },
          {
            icon: "groups",
            text: "French Tech Taiwan 社区",
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
        title: "学习",
        tagline: "培训与工作坊",
        description: "掌握我们研究领域的实操课程。",
        items: [
          { icon: "smart_toy", text: "AI 代理上下文管理 (2-3天)" },
          { icon: "hub", text: "嵌入式图数据库 (1-2天)" },
          { icon: "architecture", text: "多领域 AI 架构 (3-5天)" },
        ],
        details: ["现场或远程", "实操练习", "定制教材"],
        cta: { text: "申请培训", url: "#contact", icon: "calendar_today" },
      },
      {
        id: "collaborate",
        icon: "handshake",
        title: "合作",
        tagline: "咨询与项目",
        description: "为您复杂的 AI 架构提供实操帮助。",
        items: [
          { icon: "check_circle", text: "架构评审与策略" },
          { icon: "check_circle", text: "部署与定制集成" },
          { icon: "check_circle", text: "性能优化" },
          { icon: "check_circle", text: "结对编程与代码审查" },
        ],
        engagement: "典型项目周期：2-5天。远程优先，时区灵活。",
        highlights: ["直接对接开发者", "无最低承诺", "快速迭代"],
        cta: { text: "联系我们", url: "#contact", icon: "mail" },
      },
    ],
  },
  projects: {
    title: "开源技术栈",
    subtitle: "支撑这些工作流的已发布构件。",
    linkLabels: {
      proof: "查看演示",
      github: "GitHub",
      docs: "文档",
    },
    featured: {
      name: "Casys MCP 技术栈",
      tagline: "面向生产环境的可观测 AI 工具集成组件。",
      status: "已发布",
      license: "JSR + npm",
      features: [
        {
          icon: "dns",
          name: "服务器运行时",
          description: "构建带认证、中间件和生产约束的 MCP 服务器。",
        },
        {
          icon: "handyman",
          name: "工具库",
          description: "直接使用 508+ 标准工具，而不是重复造轮子。",
        },
        { icon: "graph_3", name: "工作流界面", description: "把 MCP 应用、消息通道和业务集成放进同一套栈里。" },
      ],
      results: [
        { stat: "508+", label: "标准工具" },
        { stat: "6", label: "已发布组件" },
        { stat: "OSS", label: "公开构建" },
      ],
      links: {
        website: "#featured-demo",
        github: "https://github.com/Casys-AI",
        docs: "https://jsr.io/@casys",
      },
    },
    categories: [
      {
        name: "已发布组件",
        items: [
          {
            id: "mcp-erpnext",
            name: "@casys/mcp-erpnext",
            tagline: "面向 MCP 应用的交互式 ERPNext 工作流",
            status: "活跃",
            tech: "Deno",
            links: { website: "/zh/use-cases/mcp-erpnext", github: "https://github.com/Casys-AI/mcp-erpnext", jsr: "https://jsr.io/@casys/mcp-erpnext" },
          },
          {
            id: "mcp-einvoice",
            name: "@casys/mcp-einvoice",
            tagline: "法国电子发票 MCP 服务器",
            status: "v0.1.0",
            tech: "Deno",
            links: { website: "/zh/use-cases/mcp-einvoice", github: "https://github.com/Casys-AI/mcp-einvoice", jsr: "https://jsr.io/@casys/mcp-einvoice" },
          },
          {
            id: "mcp-compose",
            name: "@casys/mcp-compose",
            tagline: "将 MCP UI 组合为仪表板",
            status: "v0.1.0",
            tech: "Deno",
            links: { website: "/zh/mcp-compose", github: "https://github.com/Casys-AI/mcp-compose", jsr: "https://jsr.io/@casys/mcp-compose" },
          },
          {
            id: "mcp-server",
            name: "@casys/mcp-server",
            tagline: "生产级 MCP 服务器框架",
            status: "v0.14.0",
            tech: "Deno",
            links: { website: "/zh/mcp-server", github: "https://github.com/Casys-AI/mcp-server", jsr: "https://jsr.io/@casys/mcp-server" },
          },
          {
            id: "mcp-std",
            name: "@casys/mcp-std",
            tagline: "508 个 MCP 工具。一行导入。",
            status: "v0.4.0",
            tech: "Deno",
            links: { website: "/zh/mcp-std", github: "https://github.com/Casys-AI/casys-pml/tree/main/lib/std", jsr: "https://jsr.io/@casys/mcp-std" },
          },
          {
            id: "mcp-bridge",
            name: "@casys/mcp-bridge",
            tagline: "MCP Apps 桥接消息平台",
            status: "v0.2.0",
            tech: "Deno",
            links: { website: "/zh/mcp-bridge", github: "https://github.com/Casys-AI/casys-pml/tree/main/lib/mcp-apps-bridge", jsr: "https://jsr.io/@casys/mcp-bridge" },
          },
        ],
      },
    ],
  },
  whyCasys: {
    title: "为什么选择 Casys？",
    subtitle: "我们的不同之处",
    differentiation: [
      {
        id: "multi-domain",
        icon: "hub",
        title: "多领域专长",
        description: "我们连接多个领域以获得独特洞察",
        highlights: [
          "KM 系统 (2013+) → 图数据库 → AI 代理",
          "每个领域推动下一个 — KM 塑造了图谱工作，图谱塑造了代理路由",
          "专长跨技术浪潮持续累积",
        ],
      },
      {
        id: "continuity",
        icon: "timeline",
        title: "15+ 年持续发展",
        description: "跨技术浪潮持续深耕",
        highlights: [
          "15+ 年的实绩",
          "深度专长，持续累积",
          "每个阶段都建立在前一个之上",
        ],
      },
      {
        id: "opensource",
        icon: "code_blocks",
        title: "开源优先",
        description: "默认开源。工具免费，咨询可选",
        highlights: [
          "默认开源",
          "无供应商锁定",
          "分享研究成果",
        ],
      },
      {
        id: "practical",
        icon: "rocket_launch",
        title: "务实研究",
        description: "发布解决生产问题的系统",
        highlights: [
          "已发布在 npm 和 JSR 上",
          "在生产环境中经过检验",
          "我们使用自己的工具",
        ],
      },
      {
        id: "accessible",
        icon: "handshake",
        title: "无门槛设计",
        description: "无企业级开销",
        highlights: [
          "透明定价",
          "无最低承诺规模",
          "直接对接开发者",
        ],
      },
    ],
    trajectoryLabels: ["起源", "精炼", "现状"],
    sideFooterLabel: "创建于",
    sideFooterValue: "2013+",
    viewReposLabel: "查看代码仓库",
    contactCta: {
      text: "联系我们",
      url: "#contact",
      icon: "mail",
    },
    bottomLine: {
      text:
        "一个在上下文管理和智能体系统方面拥有深度专长的小型事务所。我们构建实用工具，分享所学，在需要时帮助团队。",
      cta: {
        primary: {
          text: "联系我们",
          url: "#contact",
          icon: "mail",
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
    title: "研究、架构与现场笔记",
    subtitle: "我们在构建可观测 AI 工作流系统时正在学到什么。",
    readMore: "阅读",
    viewAll: "查看所有文章",
  },
  faq: {
    title: "常见问题",
    subtitle: "关于 Casys、技术栈和合作方式的常见问题。",
    categories: ["平台", "技术栈", "咨询", "通用"],
    allLabel: "全部",
    closingCta: {
      prompt: "没找到您的问题？",
      ctaLabel: "联系我们",
      url: "#contact",
      icon: "mail",
    },
    faqs: [
      {
        category: "平台",
        q: "Casys 在做什么？",
        a: "Casys 是一家 AI 智能体集成商。我们将 AI 智能体连接到您的业务系统 — ERP、CRM、内部工具 — 使用可观测的开源技术栈。技术深度在底层的技术栈和学习层中。",
      },
      {
        category: "平台",
        q: "MCP ERPNext 就是产品本身吗？",
        a: "不是。MCP ERPNext 被放在最前面，是因为它可交互、而且能让人快速理解。它展示了 Casys 方法在工作流中的样子，但并不代表公司只是在做 ERP 连接器。",
      },
      {
        category: "技术栈",
        q: "PML 现在处于什么位置？",
        a: "PML 是底层的学习与可观测层，是轨迹、路由和学习到的相关性汇合的地方。在首页里，它被放在“技术深度”位置，而不是要求每个访客一上来就先理解的产品名。",
      },
      {
        category: "技术栈",
        q: "哪些部分已经开源？",
        a: "已发布的技术栈包括 `@casys/mcp-server`、`@casys/mcp-std`、`@casys/mcp-bridge` 和 `@casys/mcp-erpnext`。这些是你现在就能看到和使用的构件。学习层仍在继续演进。",
      },
      {
        category: "技术栈",
        q: "为什么你们一直强调轨迹？",
        a: "轨迹让系统既能调试，也能改进。有了轨迹，就能检查失败、比较工作流，并学习哪些工具相关。",
      },
      {
        category: "咨询",
        q: "什么时候才需要咨询？",
        a: "当你已经看懂了证明，并希望把同样的严谨度带到自己的工作流时。典型工作包括架构评审、集成设计、部署加固，以及动手实现。",
      },
      {
        category: "咨询",
        q: "你们只做 ERPNext 吗？",
        a: "ERPNext 是一个示例。同样的方法适用于其他业务系统、工业工作流、知识密集型流程，以及多工具智能体环境。",
      },
      {
        category: "通用",
        q: "Casys 适合谁？",
        a: "CTO、技术负责人，以及需要工作流可靠落地的工程团队。这通常意味着多工具、多系统，以及对可观测性的明确需求。",
      },
      {
        category: "通用",
        q: "你们和一般的 MCP 咨询有什么不同？",
        a: "我们发布技术栈，展示工作流证明，并构建让这些工作流在生产环境中可理解的可观测层。",
      },
      {
        category: "通用",
        q: "你们的专业背景是什么？",
        a: '15+ 年上下文工程经验，从知识管理 (2013+) 到图数据库到 DAG 架构再到 MCP 生态。在这个领域被叫做“AI 代理的 Context Management”之前，我们就已经在做了。',
      },
      {
        category: "通用",
        q: "你们的合作方式是怎样的？",
        a: "我们提供多种灵活选项：专项工作坊 (1天)、定制项目（完整部署）或持续合作（直接对接从业者）。没有高额最低承诺。我们优化迭代速度和可及性，而非利润最大化。联系我们讨论您的具体需求。",
      },
    ],
  },
  mcpErpnextPage: {
    eyebrow: "ERPNext 演示",
    title: "建立在 ERPNext 之上的 MCP 工作流",
    subtitle: "这是一个清晰示例，展示 Casys 技术栈如何驱动交互式业务工作流。",
    intro:
      "MCP ERPNext 把业务系统变成可检查的 MCP 应用界面——可以展示，技术上也有意义。",
    stats: [
      { value: "97", label: "MCP 工具" },
      { value: "Live", label: "生产界面" },
      { value: "Open Source", label: "GitHub 公开" },
    ],
    quickLinks: [
      { icon: "terminal", title: "GitHub 仓库", description: "源码、issues 和路线图。", url: "https://github.com/Casys-AI/mcp-erpnext" },
      { icon: "package_2", title: "JSR 包", description: "使用 deno add 或 npx 安装。", url: "https://jsr.io/@casys/mcp-erpnext" },
      { icon: "menu_book", title: "文档", description: "配置说明和工具参考。", url: "https://github.com/Casys-AI/mcp-erpnext#readme" },
    ],
    quote: {
      text: "企业软件的未来不在于新仪表板，而在于将现有智能无缝接入已有的记录系统。",
      attribution: "— Casys Engineering",
    },
    video: {
      src: "/videos/mcp-erpnext-demo.mp4",
      caption: "MCP ERPNext 的短视频演示。",
    },
    proofs: [
      {
        title: "交互式界面",
        description: "可点击的工作流 UI，由 MCP 工具驱动。",
      },
      {
        title: "可观测执行",
        description: "每条执行路径端到端可追踪。",
      },
      {
        title: "连接业务系统",
        description: "工作流直接运行在 ERPNext 上，展示运营约束下的表现。",
      },
    ],
    whatItShowsTitle: "技术细节",
    whatItShows: [
      "连接 ERPNext 的实时看板 — 通过 MCP 工具进行 CRUD 操作。",
      "每个工具调用端到端追踪：谁调用了什么，使用了哪些参数，发生了什么。",
      "将 ERPNext 替换为其他 ERP — 代理层和 UI 组件保持不变。",
    ],
    stackTitle: "由 Casys 技术栈驱动",
    stackItems: [
      "@casys/mcp-server 提供生产级 MCP 服务器行为",
      "@casys/mcp-std 提供共享工具和实用能力",
      "@casys/mcp-bridge 提供 UI 与消息界面",
      "PML 在底层提供轨迹、路由与学习能力",
    ],
    ctaPrimary: { text: "探索技术栈" },
    ctaSecondary: { text: "联系我们" },
  },
  mcpEinvoicePage: {
    eyebrow: "MCP 现场产品",
    title: "面向 AI 智能体的 MCP E-Invoice",
    subtitle: "2 分钟测试现场电子发票工作流（目前覆盖法国市场，兼容欧洲 Peppol）。然后深入底层 MCP 技术栈。",
    intro: "MCP E-Invoice 通过 PA 无关的适配器模式，将您的 AI 智能体连接至法国电子发票生态系统。当前已集成 Iopole，可扩展至任意认证平台。",
    stats: [
      { value: "27", label: "MCP 工具" },
      { value: "3", label: "发票格式" },
      { value: "PA-agnostic", label: "适配器模式" },
    ],
    quickLinks: [
      { icon: "terminal", title: "GitHub 仓库", description: "源码、issues 和贡献。", url: "https://github.com/Casys-AI/mcp-einvoice" },
      { icon: "package_2", title: "JSR 包", description: "使用 deno add 或 npx 安装。", url: "https://jsr.io/@casys/mcp-einvoice" },
      { icon: "menu_book", title: "文档", description: "配置指南、工具参考和认证流程。", url: "https://github.com/Casys-AI/mcp-einvoice#readme" },
    ],
    media: {
      srcLight: "/images/use-cases/mcp-einvoice-demo-light.png",
      srcDark: "/images/use-cases/mcp-einvoice-demo-dark.png",
      caption: "MCP E-Invoice 在 Claude 中运行 — 带状态过滤器的发票列表。",
    },
    quote: {
      text: "电子发票不应该是一个独立系统，而应该是您的智能体已经具备的隐形能力。",
      attribution: "— Casys Engineering",
    },
    proofs: [
      { title: "完整发票生命周期", description: "签发、搜索、下载、跟踪状态、管理附件 — 全部通过 MCP 工具完成。" },
      { title: "PA 无关架构", description: "在认证平台（Iopole 等）之间切换，无需修改智能体代码。" },
      { title: "交互式 MCP Apps", description: "4 个内置查看器：发票详情、文档列表、状态时间线和目录卡片。" },
    ],
    whatItShowsTitle: "功能覆盖",
    whatItShows: [
      "使用 Lucene 查询语法进行发票签发和搜索",
      "PPF 目录查询（法国）和 Peppol 网络检查（国际）",
      "状态生命周期管理（APPROVED、REFUSED、DISPUTED、PAYMENT_SENT……）",
      "针对 B2C 和跨境交易的 DGFiP e-reporting",
      "CII、UBL 和 Factur-X 发票生成",
    ],
    stackTitle: "基于 Casys 技术栈构建",
    stackItems: [
      "@casys/mcp-server 提供生产级 MCP 服务器行为",
      "@casys/mcp-compose 提供复合 UI 仪表板",
      "OAuth2 client_credentials 支持自动刷新",
      "4 个带下钻操作的 MCP Apps 查看器",
    ],
    ctaPrimary: { text: "测试平台", icon: "open_in_new", url: "https://einvoice-platform.fr" },
    ctaSecondary: { text: "在 GitHub 上查看", icon: "code", url: "https://github.com/Casys-AI/mcp-einvoice" },
  },
  // ========================================
  // MCP PLATFORM (unified page)
  // ========================================
  mcpPlatform: {
    eyebrow: "CASYS MCP PLATFORM",
    title: "Build. Connect. Compose.",
    subtitle: "三个包。一套生产级 MCP 技术栈。",
    description: "一款开源 TypeScript 工具包，用于构建生产级 MCP 服务器、将其桥接到消息平台，并将各自的 UI 组合为统一仪表板。",
    ctaPrimary: "立即开始",
    ctaGithub: "在 GitHub 上查看",
    navCards: [
      { label: "Build", name: "@casys/mcp-server", desc: "生产级服务器框架", href: "#server" },
      { label: "Connect", name: "@casys/mcp-bridge", desc: "消息平台桥接器", href: "#bridge" },
      { label: "Compose", name: "@casys/mcp-compose", desc: "UI 组合引擎", href: "#compose" },
    ],
    serverStep: "01",
    serverLabel: "BUILD",
    serverTitle: "@casys/mcp-server",
    serverSubtitle: "MCP 的 Hono — 可组合中间件、OAuth2、双传输",
    serverBody: "即插即用的中间件，用于身份验证、限流和校验。每个请求都流经由你掌控的可组合管道 — 凌晨三点不再有意外。",
    serverFeatures: [
      { icon: "lock", name: "Bearer auth", desc: "开箱即用的基于令牌的身份验证中间件。" },
      { icon: "speed", name: "Rate limiting", desc: "可配置时间窗口的每客户端请求限流。" },
      { icon: "verified", name: "Zod validation", desc: "使用 Zod 在运行时校验输入/输出模式。" },
      { icon: "bug_report", name: "Error handling", desc: "带有 JSON-RPC 错误码的结构化错误传播。" },
      { icon: "bolt", name: "Streaming SSE", desc: "完整的 Server-Sent Events 传输，与 stdio 并行支持。" },
      { icon: "layers", name: "Middleware stack", desc: "每个请求上可组合、有序的中间件链。" },
      { icon: "extension", name: "MCP primitives", desc: "资源、提示词、工具 — 覆盖所有 MCP 原语。" },
      { icon: "description", name: "Typed schemas", desc: "TypeScript 优先，全程严格类型推断。" },
      { icon: "sync", name: "Lifecycle hooks", desc: "onStart / onStop 钩子用于优雅的资源管理。" },
      { icon: "monitor_heart", name: "Health endpoint", desc: "内置 /health 路由，供负载均衡器探测使用。" },
      { icon: "monitoring", name: "Prometheus metrics", desc: "/metrics 端点，请求耗时与错误率。" },
      { icon: "terminal", name: "CLI scaffold", desc: "deno run scaffold 快速启动新服务器。" },
    ],
    serverPipelineTitle: "中间件管道",
    bridgeStep: "02",
    bridgeLabel: "CONNECT",
    bridgeTitle: "@casys/mcp-bridge",
    bridgeSubtitle: "将 MCP 工具转化为 Telegram Mini Apps 和 LINE LIFF",
    bridgeBody: "一个协议转换层，将你的 MCP 服务器连接到消息平台。OAuth 客户端、HMAC-SHA256 认证、WebSocket 传输 — 全部内置处理。",
    bridgeSource: "MCP 服务器",
    bridgeCenter: "mcp-bridge",
    bridgePipelineLabel: "协议转换层",
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
    composeSubtitle: "收集、组合并同步多个 MCP Apps UI",
    composeSteps: [
      { step: "1", title: "收集", desc: "Agent 调用 N 个工具 → Collector 从每个结果中提取 _meta.ui 资源 URI" },
      { step: "2", title: "组合", desc: "定义布局（split/tabs/grid）+ 同步规则 → Composer 验证并构建描述符" },
      { step: "3", title: "渲染", desc: "Renderer 输出带有 JSON-RPC 事件总线的独立 HTML，用于跨 UI 同步" },
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
    installTitle: "开始构建",
    quote: "三个包各自独立运作。组合在一起更强大。",
  },
  mcpComposePage: {
    eyebrow: "MCP COMPOSE",
    title: "将 MCP UI 组合为统一仪表板",
    subtitle: "您的 MCP 服务器已经有 UI。mcp-compose 让它们彼此通信。",
    description: "一个轻量、确定性的原语，用于收集、组合和同步多个 MCP Apps UI 为复合仪表板。纯函数、零依赖、机器可读错误。",
    ctaPrimary: { text: "快速开始", href: "#quickstart" },
    ctaSecondary: { text: "在 JSR 上查看", href: "https://jsr.io/@casys/mcp-compose" },
    featuresTitle: "功能说明",
    featuresSubtitle: "三步管道：收集 UI 资源、使用同步规则组合、渲染为自包含 HTML。",
    features: [
      { icon: "input", name: "Collector", desc: "自动从 MCP 工具结果中提取 _meta.ui" },
      { icon: "dashboard_customize", name: "Composer", desc: "使用布局和同步规则构建复合描述符" },
      { icon: "code", name: "Renderer", desc: "生成带内嵌事件总线的自包含 HTML" },
      { icon: "sync_alt", name: "声明式同步", desc: "通过 { from, event, to, action } 进行跨 UI 事件路由" },
      { icon: "grid_view", name: "布局模式", desc: "Split、tabs、grid 或 stack — 每个组合可独立配置" },
      { icon: "share", name: "共享上下文", desc: "将值（workflowId、userId）传播到所有 UI" },
      { icon: "verified", name: "显式验证", desc: "validateSyncRules() 在渲染前检测无效规则 — buildCompositeUi() 会静默忽略未知引用" },
      { icon: "package_2", name: "零依赖", desc: "纯函数、确定性输出，仅依赖 Deno 标准库" },
    ],
    architectureTitle: "流水线",
    architectureSteps: [
      { step: "1", title: "收集", description: "智能体调用 N 个工具 → Collector 从每个结果中提取 _meta.ui 资源 URI" },
      { step: "2", title: "组合", description: "定义布局（split/tabs/grid）+ 同步规则 → Composer 验证并构建描述符" },
      { step: "3", title: "渲染", description: "Renderer 输出带 JSON-RPC 事件总线的自包含 HTML，用于跨 UI 同步" },
    ],
    quickstartTitle: "快速开始",
    quickstartCode: `import { createCollector, buildCompositeUi, renderComposite } from "@casys/mcp-compose";

// 1. 从工具结果中收集 UI 资源
const collector = createCollector();
collector.collect("invoice-viewer", invoiceResult);  // has _meta.ui
collector.collect("status-timeline", statusResult);  // has _meta.ui

// 2. 使用布局 + 同步规则进行合成
const resources = collector.getResources();
const descriptor = buildCompositeUi(resources, {
  layout: "split",
  sync: [
    { from: "invoice-viewer", event: "status-change", to: "status-timeline", action: "refresh" },
  ],
});

// 3. 渲染为自包含 HTML
const html = renderComposite(descriptor);`,
    installTitle: "安装",
    installDeno: "deno add jsr:@casys/mcp-compose@0.4.0",
    installNpm: "npx jsr add @casys/mcp-compose@0.4.0",
  },
  contact: {
    title: "准备好将 AI 接入您的业务了吗？",
    subtitle: "先看一个具体证明，再决定你要深入到哪一步。24小时内回复。",
    trustBadges: [
      { icon: "check_circle", text: "开源技术栈" },
      { icon: "check_circle", text: "追踪每次调用" },
      { icon: "check_circle", text: "直接对接构建者" },
    ],
    bookingTitle: "预约咨询",
    bookingSubtitle: "与 Erwan 进行 30 分钟交流 — 自动按您的本地时区显示。",
    bookingOpenNewTab: "在新标签页中打开预约页面",
    formFallback: "或发送需求",
    formFallbackSubtitle: "如果您更想先异步沟通，可以填写下方表单。我们会在 24 小时内回复。",
    namePlaceholder: "您的姓名",
    emailPlaceholder: "您的工作邮箱",
    messagePlaceholder: "我想预约咨询 / 申请培训 / 讨论架构挑战",
    submitButton: "发送请求",
    sending: "发送中...",
    successMessage: "已收到您的请求！我们将在24小时内回复。",
    errorMessage: "发送失败，请重试。",
    hiddenSubject: "新的 CASYS 联系请求",
  },

  // ========================================
  // SUBSITE: ENGINE
  // ========================================
  engineHeader: {
    howItWorks: "工作原理",
    problem: "问题所在",
    shgat: "SHGAT",
    gru: "GRU",
    benchmarks: "基准测试",
    links: "链接",
    docs: "文档",
    workWithUs: "合作咨询",
  },
  engineHero: {
    tagline: "机器学习计算层",
    heroTitle1: "评分、排序、构建路径",
    heroTitle2: "无需 LLM",
    heroSubtitle:
      "SHGAT 注意力网络在超图层级上评分工具相关性。多层消息传递、K-head 注意力、零 LLM 调用。确定性、可观测，运行在您自己的硬件上。",
    statTools: "已索引节点",
    statHit: "E2E 准确率",
    statLatency: "GRU 参数量",
    ctaPrimary: "工作原理",
    ctaDocs: "文档",
    ctaSecondary: "GitHub",
  },
  engineProblem: {
    eyebrow: "问题所在",
    titleLine1: "原始嵌入向量",
    titleLine2: "对结构视而不见",
    description: "LLM 逐一评分工具相关性。它们无法识别 psql_query 和 csv_parse 同属数据管道能力组。缺乏结构上下文时，工具选择噪声大、速度慢、易出错。",
    insight: "SHGAT 增强将孤立的嵌入向量转化为结构感知的表示。共享能力的工具会聚集在一起，即使它们从未出现在同一工作流中。",
    tsneBaCaption: "t-SNE 可视化：原始 BGE-M3 嵌入（左）vs SHGAT 增强后（右）。消息传递后，工具按能力聚类。",
    tsneCapCaption: "相同嵌入按能力分配着色。增强后的嵌入形成更紧密、更可分离的簇。",
  },
  engineGru: {
    eyebrow: "GRU 序列器",
    titleLine1: "258K 参数。",
    titleLine2: "不是 LLM。",
    description: "一个紧凑的 GRU 基于 SHGAT 增强嵌入预测工作流中的下一个工具。它看到执行历史，预测接下来的内容 — 工具、能力或终止状态。",
    features: [
      { icon: "memory", title: "紧凑架构", desc: "GRU(64) 配合统一的 VocabNode。920 个工具 + 245 个能力 = 1,165 个输出类。在 CPU 上数分钟即可训练完毕。" },
      { icon: "route", title: "Beam Search 解码", desc: "宽度为 4 的 Beam Search 结合长度归一化，构建完整执行路径。First-N 准确率达到 70.8%。" },
      { icon: "category", title: "Cap-as-Terminal", desc: "能力作为终止状态。模型预测何时停止扩展，而不仅仅是扩展什么。Cap Hit@1：82.3%。" },
      { icon: "speed", title: "SHGAT 贡献", desc: "SHGAT 增强嵌入相比原始嵌入，E2E beam 准确率提升 +6.2pp。结构就是信号。" },
    ],
    benchmarkCaption: "E2E 基准：Beam Search First-N 准确率对比。SHGAT 增强带来 +6.2pp 提升。",
    statParams: "参数",
    statAccuracy: "E2E 准确率",
    statContribution: "SHGAT 提升",
  },

  // ========================================
  // SUBSITE: MCP-SERVER
  // ========================================
  mcpServerHero: {
    tagline: "MCP 的 Hono",
    heroTitle1: "交付可扩展的",
    heroTitle2: "MCP 服务器",
    heroSubtitle:
      "不再为每个 MCP 服务器重新实现认证、限流和中间件。一个框架，默认可组合，从第一天起即可用于生产。",
    statFeatures: "内置功能",
    statTests: "测试通过",
    statRelease: "最新版本",
    ctaPrimary: "快速开始",
    ctaSecondary: "在 JSR 上查看",
    ctaDocs: "文档",
  },
  mcpServerInstall: {
    title: "随时",
    titleAccent: "就绪",
    subtitle: "一条命令。支持 Deno 和 Node.js。发布在 JSR，现代 JavaScript 注册表。",
    jsrLabel: "JSR 注册表",
    githubLabel: "GitHub",
    docsLabel: "文档",
    builtWith: "基于",
  },

  // ========================================
  // SUBSITE: MCP-STD
  // ========================================
  mcpStdHero: {
    tagline: "MCP 标准工具箱",
    heroTitle1: "508 个工具。",
    heroTitle2: "一次导入。",
    heroSubtitle:
      "数据库、Git、Docker、加密、文本、网络、AI 代理——你自己会写的每个工具，已测试且类型化。",
    statTools: "工具",
    statCategories: "分类",
    statRelease: "最新",
    ctaPrimary: "浏览目录",
    ctaSecondary1: "快速开始",
    ctaSecondary2: "在 JSR 上查看",
  },
  mcpStdInstall: {
    title: "随时",
    titleAccent: "就绪",
    subtitle: "一条命令。支持 Deno。发布在 JSR，现代 JavaScript 注册表。",
    denoLabel: "Deno",
    binaryLabel: "二进制",
    jsrLabel: "JSR 注册表",
    githubLabel: "GitHub",
    builtWith: "基于",
  },

  // ========================================
  // PML LANDING
  // ========================================
  pmlHero: {
    eyebrow: "AI 代理的程序化记忆",
    titleLine1: "一个网关。任何模型。",
    titleAccent: "完整可观测性。",
    description:
      "一次构建 AI 工作流，使用 Claude、GPT、Gemini 或本地 Ollama 运行。每次工具调用均可追踪。秒级调试，而非小时。",
    ctaPrimary: "开始使用",
    ctaSecondary: "阅读文档",
    pillars: ["模型无关", "完整可追踪", "模式提取"],
    traceHeader: "workflow:ci-deploy",
    traceLive: "live",
    traceCalls: "22 次调用",
    traceModels: "3 个模型",
    traceCost: "$0.028",
  },
  pmlArchitecture: {
    eyebrow: "架构",
    title: "工作原理",
    description:
      "统一网关位于您的 LLM 和它所需工具之间。每个请求被分解为有向无环图，在沙箱中执行，并完全追踪。",
    clients: {
      label: "客户端",
      items: ["Claude", "GPT", "Gemini", "Ollama", "任何 LLM"],
    },
    gateway: {
      label: "PML 网关",
      pipeline: ["注册表", "DAG", "沙箱"],
      extras: ["符号世界模型", "可观测性"],
    },
    servers: {
      label: "MCP 服务器",
      items: ["filesystem", "postgres", "github", "memory", "任何工具"],
    },
    pillars: [
      { label: "模型无关", description: "兼容任何 LLM 提供商" },
      { label: "可观测性", description: "每个操作的完整追踪" },
      { label: "符号推理", description: "符号推理层" },
    ],
    mobileArrow: "传输至",
  },
  pmlCatalogPreview: {
    label: "目录",
    browseCta: "浏览完整目录",
  },
  pmlQuickStart: {
    label: "快速开始",
    title: "3 步启动",
    subtitle: "不到一分钟为 Claude Code 添加程序化记忆。",
    docsLink: "阅读完整文档",
    steps: [
      {
        number: "01",
        title: "安装 PML",
        description: "一条命令。无依赖。支持 macOS、Linux 和 WSL。",
        file: "terminal",
      },
      {
        number: "02",
        title: "初始化项目",
        description: "PML 创建本地配置并连接到您的环境。",
        file: "terminal",
      },
      {
        number: "03",
        title: "与 Claude Code 配合使用",
        description: "PML 工具自动可用。发现、执行和学习。",
        file: "claude-code",
      },
    ],
  },
  pmlIsolation: {
    eyebrow: "安全性",
    titleLine1: "自主的，",
    titleLine2: "但不鲁莽。",
    description:
      "每个 AI 操作都在带有资源限制的隔离沙箱中运行。危险操作在触及生产系统之前会暂停等待人工审批。",
    features: [
      {
        id: "sandbox",
        title: "沙箱执行",
        description: "代码在隔离的 worker 中运行，无法直接访问主机系统或网络。",
      },
      {
        id: "hil",
        title: "人在回路中",
        description: "文件写入或数据库变更等危险操作需要明确批准后才能执行。",
      },
      {
        id: "audit",
        title: "审计追踪",
        description: "每个操作都会被记录完整上下文，以便透明和事后分析。",
      },
    ],
    svg: {
      sandbox: "沙箱",
      checkpoint: "检查点",
      protected: "受保护",
      aiActions: "AI 操作",
      toolsData: "工具和数据",
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
    eyebrow: "抢先体验",
    title: "加入测试版",
    description: "成为首批为您的代理赋予程序化记忆的用户。",
    labelName: "姓名",
    labelEmail: "邮箱",
    labelUseCase: "您将如何使用 PML？",
    placeholderName: "您的姓名",
    placeholderEmail: "you@company.com",
    placeholderUseCase:
      "例如：我想为我的 Claude Code 代理提供长期记忆，用于重复的 DevOps 工作流...",
    submit: "申请访问",
    sending: "发送中...",
    successMessage: "您已在列表中！我们会尽快联系您。",
    errorMessage: "出错了，请重试。",
    hiddenSubject: "PML Beta 访问请求",
  },
  pmlCta: {
    title: "准备好了吗？",
    description: "为您的代理赋予程序化记忆。立即开始构建可观测的工作流。",
    primaryCta: "开始使用",
    secondaryCta: "申请测试版",
  },
  pmlIntelligence: {
    eyebrow: "模式提取",
    titleLine1: "每次执行",
    titleLine2: "都留下轨迹。",
    description:
      "PML 记录完整的执行轨迹——工具序列、延迟、错误路径。SHGAT 从这些数据中提取相关性模式。确定性、可检查、无黑盒。",
    features: [
      {
        icon: "hub",
        title: "执行轨迹",
        desc:
          "每次工作流运行都被完整记录：工具调用、输入、输出、时间、成本。数据保留在您的基础设施上。",
      },
      {
        icon: "auto_awesome",
        title: "图注意力评分",
        desc: "SHGAT 处理轨迹数据以评分工具相关性。跨超图层级的 K-head 注意力。无 LLM 调用。",
      },
      {
        icon: "recommend",
        title: "共现模式",
        desc: "经常一起运行的工具会自动浮现。统计共现，而非猜测。",
      },
    ],
  },

  // ========================================
  // ENGINE (additional sections)
  // ========================================
  engineLinks: {
    title: "属于",
    titleAccent: "PML 生态系统",
    subtitle: "该引擎运行于 PML 内部。自托管、开源、无外部 API 调用。",
    jsrLabel: "JSR",
    githubLabel: "GitHub",
    docsLabel: "文档",
    pmlLabel: "PML",
    builtWith: "基于",
  },
  engineBenchmarks: {
    title: "数字，",
    titleAccent: "有据可查",
    subtitle: "基于 920 个节点、1,165 个词汇类别的基准测试。所有指标来自生产轨迹，24 本研究笔记本。",
    cards: [
      {
        icon: "hub",
        title: "SHGAT-TF",
        rows: [
          ["Hit@1", "66.1%"],
          ["层级", "L0 (920) → L1 (26) → L2"],
          ["注意力头", "16 × 64D"],
          ["训练", "InfoNCE + PER"],
        ],
      },
      {
        icon: "psychology",
        title: "GRU 序列器",
        rows: [
          ["全局 Hit@1", "57.6%"],
          ["工具 Hit@1", "37.2%"],
          ["能力 Hit@1", "82.3%"],
          ["参数量", "258K"],
        ],
      },
      {
        icon: "stacks",
        title: "E2E 流水线",
        rows: [
          ["Beam First-N", "70.8%"],
          ["SHGAT 提升", "+6.2pp"],
          ["Beam 宽度", "4"],
          ["词汇大小", "1,165"],
        ],
      },
    ],
  },
  engineHowItWorks: {
    title: "从意图到",
    titleAccent: "工具排序",
    subtitle:
      "一个模型，一条流水线。SHGAT 在完整层级上评分工具相关性，然后 DAG 执行器运行排名最高的工具。",
    steps: [
      { icon: "search", label: "意图", sublabel: "用户查询", type: "incoming" },
      { icon: "text_fields", label: "嵌入", sublabel: "BGE-M3 1024D", type: "" },
      { icon: "hub", label: "SHGAT 评分", sublabel: "K-head × 16", type: "" },
      { icon: "format_list_numbered", label: "排序", sublabel: "top-K 工具", type: "" },
      { icon: "play_arrow", label: "执行", sublabel: "DAG 执行器", type: "handler" },
    ],
  },

  // ========================================
  // MCP-SERVER (additional sections)
  // ========================================
  mcpServerComparison: {
    title: "SDK vs",
    titleAccent: "框架",
    subtitle: "官方 SDK 提供协议。这个提供生产级技术栈。",
    colSdk: "官方 SDK",
    colFramework: "@casys/mcp-server",
    rows: [
      ["MCP 协议", true, true],
      ["中间件管道", false, true],
      ["OAuth2 / JWT 认证", false, true],
      ["速率限制", false, true],
      ["Schema 验证", false, true],
      ["Streamable HTTP + SSE", "手动", "内置"],
      ["并发控制", false, true],
      ["OpenTelemetry 追踪", false, true],
      ["Prometheus 指标", false, true],
      ["MCP Apps (UI 资源)", "手动", "内置"],
      ["CORS 白名单", false, true],
      ["请求体大小限制 (413)", false, true],
      ["IP 速率限制 (429)", false, true],
      ["会话传播", false, true],
      ["HMAC \u6d88\u606f\u7b7e\u540d", false, true],
      ["CSP \u6ce8\u5165", false, true],
      ["YAML + \u73af\u5883\u53d8\u91cf\u914d\u7f6e", false, true],
      ["Deno + Node.js", "\u4ec5 Node", "\u4e24\u8005\u90fd\u652f\u6301"],
    ],
  },
  mcpServerFeatures: {
    title: "开箱",
    titleAccent: "即用",
    subtitle: "请求到处理器之间的一切——都已搞定。",
    features: [
      { icon: "swap_horiz", name: "双传输", desc: "STDIO + Streamable HTTP，同一代码。" },
      { icon: "layers", name: "中间件管道", desc: "类似 Koa 的洋葱模型。" },
      { icon: "shield", name: "OAuth2 认证", desc: "JWT/Bearer + RFC 9728 元数据。" },
      { icon: "key", name: "OIDC 预设", desc: "GitHub、Google、Auth0——一行代码。" },
      { icon: "settings", name: "YAML + 环境变量", desc: "文件配置，部署时环境变量覆盖。" },
      { icon: "speed", name: "并发控制", desc: "背压策略：sleep、queue 或 reject。" },
      { icon: "timer", name: "速率限制", desc: "滑动窗口，按客户端隔离。" },
      { icon: "check_circle", name: "Schema 验证", desc: "注册时通过 ajv 编译 JSON Schema。" },
      { icon: "monitoring", name: "可观测性", desc: "OTel span + Prometheus /metrics。" },
      { icon: "widgets", name: "MCP Apps", desc: "通过 ui:// scheme 提供交互式 UI。" },
      { icon: "lock", name: "CORS 白名单", desc: "来源白名单，通配符自动告警。" },
      { icon: "upload_file", name: "请求体限制", desc: "maxBodyBytes + 413 JSON-RPC 错误。" },
      { icon: "block", name: "IP 速率限制", desc: "按 IP 429 + Retry-After HTTP 头。" },
      { icon: "badge", name: "会话传播", desc: "sessionId 注入中间件上下文。" },
      {
        icon: "enhanced_encryption",
        name: "HMAC 签名",
        desc: "SHA-256 签名/验证 + PostMessage 防重放。",
      },
      { icon: "security", name: "CSP 注入", desc: "MCP Apps 自动注入 Content-Security-Policy。" },
    ],
  },
  mcpServerPipeline: {
    title: "你的服务器，",
    titleAccent: "你的规则",
    subtitle:
      "每个请求流经可组合的中间件链。需要认证？加上。限流？一行代码。自定义逻辑？插入任意位置。",
    steps: [
      { icon: "arrow_forward", label: "请求", type: "incoming" },
      { icon: "timer", label: "限流", type: "" },
      { icon: "shield", label: "认证", type: "" },
      { icon: "tune", label: "自定义", type: "custom" },
      { icon: "verified_user", label: "权限", type: "" },
      { icon: "check_circle", label: "验证", type: "" },
      { icon: "speed", label: "背压", type: "" },
      { icon: "play_arrow", label: "处理器", type: "handler" },
    ],
  },
  mcpServerQuickStart: {
    title: "5 行代码到",
    titleAccent: "生产",
    subtitle: "无样板代码。无配置仪式。注册工具，调用 start()，直接上线。",
    tabBasic: "基础 (STDIO)",
    tabHttp: "HTTP + 认证",
    tabYaml: "YAML 配置",
  },

  // ========================================
  // MCP-STD (additional sections)
  // ========================================
  mcpStdQuickStart: {
    title: "3 行代码到",
    titleAccent: "生产",
    subtitle: "作为独立 MCP 服务器使用，或作为库导入单个工具。由您决定。",
    tabServer: "MCP 服务器",
    tabLibrary: "库模式",
    tabCategory: "按类别",
  },
  mcpStdCategories: {
    title: "29 个",
    titleAccent: "分类",
    subtitle: "从数据库查询到 AI 智能体编排，每个工具都已分类、随时可用。",
    cta: "浏览全部 508 个工具",
  },

  // ========================================
  // ENGINE - SHGAT Section
  // ========================================
  engineShgat: {
    eyebrow: "SHGAT-TF",
    titleLine1: "超超图",
    titleLine2: "注意力网络",
    description:
      "为什么用超图？普通图建模成对关系（工具 A 调用工具 B）。超图建模 N 对 N：一个复合节点包含多个叶节点，一个叶节点属于多个复合节点。这捕捉了智能体工具生态的真实结构。",
    features: [
      {
        icon: "hub",
        title: "K-Head 注意力（16 × 64D）",
        desc:
          "每个注意力头捕捉不同的相关性信号 — 共现、时近性、错误恢复、成功率。各头通过学习到的融合权重组合。",
      },
      {
        icon: "account_tree",
        title: "多层消息传递",
        desc:
          "L0：218 个叶节点（工具）。L1：26 个复合节点。L2：元复合节点。上下文自下而上再自上而下传播。叶节点从未配对过的兄弟复合节点中继承相关性。",
      },
      {
        icon: "trending_up",
        title: "InfoNCE 对比损失",
        desc:
          "温度退火训练（0.10 → 0.06），含难负例和优先经验回放。Hit@3 在 644 个节点上达到 86.3%。",
      },
      {
        icon: "model_training",
        title: "训练已内置",
        desc:
          "SHGAT-TF 从生产轨迹训练 — 无需外部服务，无需 GPU。libtensorflow FFI 通过 Deno.dlopen 原生运行。自包含。",
      },
    ],
    evidenceTitle: "研究证据",
    evidenceSubtitle: "24 本笔记本，41 个可视化图表。真实实验，非市场宣传。",
    residualCaption: "残差权重扫描：不同残差配置下的 Hit@1 对比。",
    pcaCaption: "PCA 三图：原始嵌入 vs 仅消息传递 vs 完整 V→E 残差。",
    gammaCaption: "自适应 γ(n) = σ(a·log(n+1)+b) 基于扇出学习每节点残差权重。创新贡献 — GNN 文献中无先例。",
  },

  // ========================================
  // ABOUT PAGE
  // ========================================
  about: {
    pageTitle: "关于",
    heroName: "Erwan Lee Pesle",
    heroTitle: "创始人 & 系统架构师，Casys",
    heroBio:
      "十五年来，我们一直在构建将知识转化为行动的系统——从 mIRC 上的早期聊天机器人，到企业知识管理，再到用于工具相关性的图注意力网络。当大语言模型出现时，问题没有改变：上下文输入，行动输出。MCP 是这一原则最新的表达，也是最具影响力的。Casys AI 帮助工程团队交付可靠的 AI 集成——无供应商锁定，无黑盒。",
    expertiseTitle: "我们做什么",
    expertiseSubtitle:
      "连接 AI 系统与现实世界数据、工具和工作流的基础设施——为生产环境的可观测性和确定性而构建。",
    areas: [
      {
        icon: "hub",
        title: "知识图谱",
        description:
          "模式设计、查询优化和图原生架构。Neo4j 认证专业开发者。从本体建模到生产级图管道。",
      },
      {
        icon: "database",
        title: "图数据库",
        description:
          "建模关系型数据库无法表达的复杂关系。我们设计、部署和优化处理生产流量的 Neo4j 实例。",
      },
      {
        icon: "smart_toy",
        title: "智能体系统",
        description:
          "工具编排、上下文路由和执行可靠性。我们架构多智能体系统，使每个决策可追溯，每个故障可恢复。",
      },
      {
        icon: "cable",
        title: "MCP 基础设施",
        description:
          "服务器架构、连接器设计和协议级优化。已交付 500+ 开源工具。我们构建可观测、可测试、生产就绪的 MCP 层。",
      },
    ],
    philosophyTitle: "我们的工作方式",
    principles: [
      {
        icon: "code",
        title: "以开源为基石",
        description:
          "我们的核心工具是开源的。客户获得的解决方案建立在可审查、可分叉、可拥有的代码之上。无供应商锁定，无黑盒。",
      },
      {
        icon: "science",
        title: "能上线的研究",
        description:
          "我们发布所学，交付所建。我们推荐的每项技术都经过生产工作负载的验证。",
      },
      {
        icon: "emoji_objects",
        title: "务实，不炒作",
        description:
          '用工程方法解决基础设施问题。让工作成果说话。',
      },
    ],
    ctaTitle: "从一个问题开始",
    ctaSubtitle:
      "描述您的 MCP 基础设施挑战、知识图谱瓶颈或智能体系统设计问题。我们会坦诚告知是否能帮到您——以及我们会如何着手解决。",
    ctaPrimary: {
      text: "联系我们",
      url: "/zh/#contact",
      icon: "mail",
    },
    ctaSecondary: {
      text: "查看项目",
      url: "/zh/use-cases",
      icon: "folder_open",
    },
  },

  // ========================================
  // SUBSITE: MCP-BRIDGE
  // ========================================
  mcpBridgeHero: {
    tagline: "MCP Apps \u2192 消息平台",
    heroTitle1: "MCP Apps 触达",
    heroTitle2: "20亿+用户",
    heroSubtitle: "将任何 MCP App 变为 Telegram Mini App。零代码改动。同一工具，全新受众。",
    statTests: "测试通过",
    statPlatforms: "平台",
    statRelease: "最新版本",
    ctaPrimary: "快速开始",
    ctaSecondary: "在 JSR 上查看",
    ctaDocs: "文档",
  },
  mcpBridgeFeatures: {
    title: "弥合",
    titleAccent: "鸿沟",
    subtitle: "将 MCP Apps 从开发者工具带到消息平台所需的一切。",
    features: [
      { icon: "code_off", name: "零代码改动", desc: "现有 MCP Apps 直接使用，无需重写。" },
      { icon: "layers", name: "三层架构", desc: "客户端、资源服务器、MCP 服务器。" },
      { icon: "swap_horiz", name: "协议转换", desc: "通过 WebSocket 的 JSON-RPC 2.0，无缝衔接。" },
      { icon: "smart_toy", name: "Telegram Mini Apps", desc: "完整的主题、视口、认证支持。" },
      { icon: "more_horiz", name: "更多平台", desc: "LINE、Discord、WhatsApp — 即将推出。" },
      { icon: "shield", name: "CSP 强制", desc: "默认严格的内容安全策略。" },
      { icon: "key", name: "会话认证", desc: "加密安全令牌，HMAC 验证。" },
      { icon: "sync", name: "WebSocket 传输", desc: "实时双向通信。" },
      { icon: "palette", name: "主题映射", desc: "平台主题自动映射到 MCP Apps。" },
      { icon: "extension", name: "可扩展适配器", desc: "添加 Discord、WhatsApp 或任何平台。" },
    ],
  },
  mcpBridgeArchitecture: {
    title: "工作",
    titleAccent: "原理",
    subtitle:
      "Bridge 拦截 MCP App 的 postMessage 调用，通过 WebSocket 路由到资源服务器，再将工具调用转发到未修改的 MCP 服务器。",
    steps: [
      { icon: "web", label: "MCP App", type: "incoming" },
      { icon: "javascript", label: "bridge.js", type: "" },
      { icon: "sync", label: "WebSocket", type: "" },
      { icon: "dns", label: "资源服务器", type: "handler" },
      { icon: "hub", label: "MCP 服务器", type: "" },
      { icon: "send", label: "Telegram", type: "custom" },
    ],
  },
  mcpBridgeComparison: {
    title: "自定义集成 vs",
    titleAccent: "Bridge",
    subtitle: "省去数月的集成工作。Bridge 处理复杂部分，让您更快发布。",
    colCustom: "自定义集成",
    colBridge: "@casys/mcp-bridge",
    rows: [
      ["MCP App 代码改动", "需要重写", "无需改动"],
      ["平台认证（Telegram）", "手动 HMAC", "内置"],
      ["内容安全策略", "手动 headers", "自动生成"],
      ["WebSocket 管理", "从零开始", "内置"],
      ["主题同步", "手动映射", "自动"],
      ["多平台支持", "按平台编码", "适配器模式"],
      ["会话管理", "自定义实现", "加密安全"],
      ["HTML 注入 (bridge.js)", "不适用", "自动"],
    ],
  },
  mcpBridgeQuickStart: {
    title: "部署到",
    titleAccent: "Telegram",
    subtitle: "三步将您的 MCP App 运行在 Telegram 中。无需更改现有代码。",
    tabTelegram: "Telegram",
    tabLine: "LINE",
  },
  mcpBridgeInstall: {
    title: "随时",
    titleAccent: "就绪",
    subtitle: "一条命令。支持 Deno 和 Node.js。发布在 JSR，现代 JavaScript 注册表。",
    jsrLabel: "JSR 注册表",
    githubLabel: "GitHub",
    docsLabel: "文档",
    builtWith: "基于",
  },

  // ========================================
  // USE CASES PAGE
  // ========================================
  useCases: {
    pageTitle: "生产环境案例",
    heroTitle: "生产环境案例",
    heroSubtitle:
      "我们为生产环境构建 MCP 基础设施。以下是案例——挑战、解决方案、指标。",
    labelChallenge: "挑战",
    labelApproach: "解决方案",
    labelResult: "成果",
    labelStack: "技术栈",
    ctaTitle: "有类似的挑战？",
    ctaSubtitle: "描述您的 MCP 基础设施挑战。我们会坦诚告知是否能帮到您——以及我们会如何着手解决。",
    ctaPrimary: { text: "联系我们", url: "/zh/#contact", icon: "mail" },
    ctaSecondary: { text: "查看项目", url: "/zh/use-cases", icon: "folder_open" },
  },
};
