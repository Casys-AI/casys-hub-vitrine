// ============================================================
// English translations for Casys Hub Vitrine
// Organized by page/section
// ============================================================

export const en = {
  // ========================================
  // SHARED COMPONENTS
  // ========================================
  header: {
    projects: "Projects",
    whyCasys: "Why Casys",
    consulting: "Consulting",
    blog: "Blog",
    useCases: "Our Work",
    about: "About",
    contact: "Contact",
    projectDescriptions: {
      erpnext: "Interactive ERPNext workflow demo",
      einvoice: "French e-invoicing MCP server",
      compose: "Compose MCP UIs into dashboards",
      std: "508 standard MCP tools",
      server: "Production MCP server framework",
      bridge: "MCP apps to messaging platforms",
      platform: "Server, Bridge, Compose — one stack",
    },
    projectGroupServers: "MCP Servers",
    projectGroupInfra: "Infrastructure",
  },
  footer: {
    product: "Product",
    projects: "Projects",
    consulting: "Consulting",
    training: "Training",
    github: "GitHub",
    openSource: "Open Source",
    connect: "Connect",
    contact: "Contact",
    discord: "Discord",
    description: "Agentic Architecture & Context Systems",
    tagline: "Open Source Tools & Consulting",
  },

  // ========================================
  // LANDING V2 SECTIONS
  // ========================================
  hero: {
    kicker: "MCP integrator for AI agents",
    titleLine1: "MCP servers",
    titleLine2: "for your AI agents",
    subtitle: "In production: ERPNext, e-invoicing, CRM, internal tools. Interactive demos on GitHub.",
    cta: {
      primary: { text: "See our work", icon: "arrow_forward", url: "#use-cases-preview" },
      secondary: { text: "Talk to us", icon: "mail", url: "#contact" },
    },
    proofLabel: "Standard connectors",
    proofs: [
      { name: "MCP ERPNext", stat: "97 tools", url: "/use-cases/mcp-erpnext", icon: "database" },
      { name: "MCP eInvoice", stat: "27 tools", url: "/use-cases/mcp-einvoice", icon: "receipt_long" },
    ],
    authority: [
      { label: "15+ years", detail: "KM → Graphs → AI Agents" },
      { label: "Open source", detail: "Code, issues, roadmap public" },
      { label: "Published", detail: "npm + JSR, versioned" },
      { label: "Production-tested", detail: "Real business workflows" },
    ],
  },
  featuredDemo: {
    title: "In Production",
    subtitle: "French e-invoicing as an agent capability — live now.",
    eyebrow: "Live product",
    name: "MCP E-Invoice",
    tagline: "27 MCP tools for the French e-invoicing reform.",
    description:
      "Full invoice lifecycle wired into your agent stack: emit, search, track status, and report to DGFiP. PA-agnostic — switch certified platforms without changing agent code.",
    bullets: [
      "27 tools: emit, search, track, report — full lifecycle.",
      "PA-agnostic: Iopole today, any platform tomorrow.",
      "4 built-in MCP Apps viewers for invoices and status.",
      "Open source on GitHub — inspect the code.",
    ],
    stats: [
      { value: "27", label: "MCP tools" },
      { value: "3", label: "Invoice formats (CII, UBL, Factur-X)" },
      { value: "PA-agnostic", label: "Platform adapter pattern" },
    ],
    note:
      "Built for the 2026 French e-invoicing mandate. The same adapter pattern extends to any certified platform.",
    cta: {
      primary: { text: "Talk to us", icon: "mail", url: "#contact" },
      secondary: { text: "View on GitHub", icon: "open_in_new", url: "https://github.com/Casys-AI/mcp-einvoice" },
    },
    media: {
      type: "image",
      src: "/images/use-cases/mcp-einvoice-demo-light.png",
      srcLight: "/images/use-cases/mcp-einvoice-demo-light.png",
      srcDark: "/images/use-cases/mcp-einvoice-demo-dark.png",
      caption: "MCP E-Invoice running inside Claude — invoice list with status filters.",
    },
  },
  socialProof: {
    title: "Track Record",
    subtitle: "Verified track record",
    items: [
      {
        type: "stat",
        icon: "code",
        stat: "Active",
        label: "In Dev",
        description: "Casys PML - MCP Gateway with GraphRAG & DAG",
        link: {
          text: "Follow on GitHub",
          url: "https://github.com/Casys-AI/casys-pml",
        },
      },
      {
        type: "stat",
        icon: "groups",
        stat: "15+",
        label: "Years Expertise",
        description: "Context Management → Graph DBs → DAGs → MCP",
        link: {
          text: "Read Our Story",
          url: "/about",
        },
      },
      {
        type: "stat",
        icon: "public",
        stat: "French Tech",
        label: "Taiwan",
        description: "Active member of French Tech Taiwan community",
        link: {
          text: "See Our Talks",
          url: "/blog?tag=talks",
        },
      },
    ],
    githubTitle: "Open Source Track Record",
    githubCta: "See all projects on GitHub",
    repos: [
      {
        name: "@casys/mcp-server",
        description: "Production MCP server with middleware pipeline",
        stars: "★ New",
        url: "https://github.com/Casys-AI/casys-mcp-server",
      },
      {
        name: "@casys/mcp-std",
        description: "508+ tools for MCP agents",
        stars: "★ New",
        url: "https://github.com/Casys-AI/casys-mcp-std",
      },
      {
        name: "@casys/mcp-erpnext",
        description: "Interactive ERPNext workflows for MCP apps",
        stars: "★ Growing",
        url: "https://github.com/Casys-AI/mcp-erpnext",
      },
    ],
  },
  workWithUs: {
    title: "Work With Us",
    subtitle:
      "Our tools are free and open-source. When you need help implementing them, we're here.",
    options: [
      {
        id: "explore",
        icon: "explore",
        title: "Explore",
        tagline: "Free & Open Source",
        description: "Discover our tools, read our research, join the community.",
        items: [
          {
            icon: "code",
            text: "Casys PML - Procedural Memory Layer for AI agents",
            url: "https://pml.casys.ai",
          },
          { icon: "article", text: "Blog & Technical articles", url: "/blog" },
          {
            icon: "groups",
            text: "French Tech Taiwan community",
            url: "https://www.linkedin.com/company/casys-ai",
          },
        ],
        cta: {
          text: "Explore on GitHub",
          url: "https://github.com/casys-ai",
          icon: "arrow_forward",
        },
      },
      {
        id: "learn",
        icon: "school",
        title: "Learn",
        tagline: "Training & Workshops",
        description: "Hands-on programs to master our research areas.",
        items: [
          { icon: "smart_toy", text: "Context Management for AI Agents (2-3 days)" },
          { icon: "hub", text: "Embedded Graph Databases (1-2 days)" },
          { icon: "architecture", text: "Multi-Domain AI Architectures (3-5 days)" },
        ],
        details: [
          "On-site or remote",
          "Hands-on exercises",
          "Custom materials",
        ],
        cta: {
          text: "Request Training",
          url: "#contact",
          icon: "calendar_today",
        },
      },
      {
        id: "collaborate",
        icon: "handshake",
        title: "Collaborate",
        tagline: "Consulting & Projects",
        description: "Hands-on help for your complex AI architectures.",
        items: [
          { icon: "check_circle", text: "Architecture Review & Strategy" },
          { icon: "check_circle", text: "Deployment & Custom Integrations" },
          { icon: "check_circle", text: "Performance Optimization" },
          { icon: "check_circle", text: "Pair Programming & Code Reviews" },
        ],
        engagement: "Typical engagement: 2-5 days. Remote-first, timezone-flexible.",
        highlights: [
          "Direct access to builders",
          "No minimum engagement",
          "Fast iteration",
        ],
        cta: {
          text: "Get in Touch",
          url: "#contact",
          icon: "mail",
        },
      },
    ],
  },
  projects: {
    title: "Open-Source Stack",
    subtitle: "Published building blocks behind the workflows.",
    linkLabels: {
      proof: "See Demo",
      github: "GitHub",
      docs: "Docs",
    },
    featured: {
      name: "Casys MCP Stack",
      tagline: "Production-oriented components for observable AI tool integrations.",
      status: "Published",
      license: "JSR + npm",
      features: [
        {
          icon: "dns",
          name: "Server runtime",
          description: "Build MCP servers with auth, middleware, and production constraints.",
        },
        {
          icon: "handyman",
          name: "Tool library",
          description: "Ship with 508+ standard tools instead of rebuilding the basics.",
        },
        {
          icon: "graph_3",
          name: "Workflow surfaces",
          description: "Bridge MCP apps, messaging, and domain integrations into one stack.",
        },
      ],
      results: [
        { stat: "508+", label: "Standard tools" },
        { stat: "6", label: "Published components" },
        { stat: "OSS", label: "Built in public" },
      ],
      links: {
        website: "#featured-demo",
        github: "https://github.com/Casys-AI",
        docs: "https://jsr.io/@casys",
      },
    },
    categories: [
      {
        name: "Published components",
        items: [
          {
            id: "mcp-erpnext",
            name: "@casys/mcp-erpnext",
            tagline: "Interactive ERPNext workflows for MCP apps",
            status: "Active",
            tech: "Deno",
            links: {
              website: "/use-cases/mcp-erpnext",
              github: "https://github.com/Casys-AI/mcp-erpnext",
              jsr: "https://jsr.io/@casys/mcp-erpnext",
            },
          },
          {
            id: "mcp-einvoice",
            name: "@casys/mcp-einvoice",
            tagline: "French e-invoicing MCP server",
            status: "v0.1.0",
            tech: "Deno",
            links: {
              website: "/use-cases/mcp-einvoice",
              github: "https://github.com/Casys-AI/mcp-einvoice",
              jsr: "https://jsr.io/@casys/mcp-einvoice",
            },
          },
          {
            id: "mcp-compose",
            name: "@casys/mcp-compose",
            tagline: "Compose MCP UIs into dashboards",
            status: "v0.1.0",
            tech: "Deno",
            links: {
              website: "/mcp-compose",
              github: "https://github.com/Casys-AI/mcp-compose",
              jsr: "https://jsr.io/@casys/mcp-compose",
            },
          },
          {
            id: "mcp-server",
            name: "@casys/mcp-server",
            tagline: "Production MCP server framework",
            status: "v0.14.0",
            tech: "Deno",
            links: {
              website: "/mcp-server",
              github: "https://github.com/Casys-AI/mcp-server",
              jsr: "https://jsr.io/@casys/mcp-server",
            },
          },
          {
            id: "mcp-std",
            name: "@casys/mcp-std",
            tagline: "508 MCP tools. One import.",
            status: "v0.4.0",
            tech: "Deno",
            links: {
              website: "/mcp-std",
              github: "https://github.com/Casys-AI/casys-pml/tree/main/lib/std",
              jsr: "https://jsr.io/@casys/mcp-std",
            },
          },
          {
            id: "mcp-bridge",
            name: "@casys/mcp-bridge",
            tagline: "MCP apps to messaging platforms",
            status: "v0.2.0",
            tech: "Deno",
            links: {
              website: "/mcp-bridge",
              github: "https://github.com/Casys-AI/casys-pml/tree/main/lib/mcp-apps-bridge",
              jsr: "https://jsr.io/@casys/mcp-bridge",
            },
          },
        ],
      },
    ],
  },
  whyCasys: {
    title: "Why Casys?",
    subtitle: "What makes us different",
    differentiation: [
      {
        id: "multi-domain",
        icon: "hub",
        title: "Multi-Domain Expertise",
        description: "We connect multiple domains for unique insights",
        highlights: [
          "KM Systems (2013+) → Graph DB → AI Agents",
          "Each domain informed the next — KM shaped our graph work, graphs shaped our agent routing",
          "Expertise compounds through tech waves",
        ],
      },
      {
        id: "continuity",
        icon: "timeline",
        title: "15+ Years Continuity",
        description: "Building context systems since 2013",
        highlights: [
          "15+ years track record",
          "Deep expertise across each phase",
          "Each phase builds on the last",
        ],
      },
      {
        id: "opensource",
        icon: "code_blocks",
        title: "Open Source First",
        description: "Open source by default. Tools free, consulting optional",
        highlights: [
          "Open source by default",
          "No vendor lock-in",
          "Share the research",
        ],
      },
      {
        id: "practical",
        icon: "rocket_launch",
        title: "Practical Research",
        description: "We ship production systems that solve business problems",
        highlights: [
          "Published on npm and JSR",
          "Running in production workflows since 2024",
          "We use our own tools",
        ],
      },
      {
        id: "accessible",
        icon: "handshake",
        title: "Accessible by Design",
        description: "No corporate overhead",
        highlights: [
          "Transparent pricing",
          "No minimum engagement sizes",
          "Direct access to builders",
        ],
      },
    ],
    trajectoryLabels: ["Genesis", "Refinement", "Current state"],
    sideFooterLabel: "Since",
    sideFooterValue: "2013+",
    viewReposLabel: "View repositories",
    contactCta: {
      text: "Contact us",
      url: "#contact",
      icon: "mail",
    },
    bottomLine: {
      text:
        "A small firm with deep expertise across context management and agentic systems. We build tools, share what we learn, and help teams when needed.",
      cta: {
        primary: {
          text: "Book a call",
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
    title: "Research, Architecture, and Field Notes",
    subtitle: "What we are learning while building observable AI workflow systems.",
    readMore: "Read",
    viewAll: "View all articles",
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Common questions about Casys, the stack, and consulting.",
    categories: ["Platform", "Stack", "Consulting", "General"],
    allLabel: "All",
    closingCta: {
      prompt: "Your question isn't listed?",
      ctaLabel: "Talk to us",
      url: "#contact",
      icon: "mail",
    },
    faqs: [
      {
        category: "Platform",
        q: "What does Casys do?",
        a: "Casys is an agentic AI integrator. We connect AI agents to your business systems — ERP, CRM, internal tools — with an observable, open-source stack. The technical depth lives in the stack and the learning layer underneath.",
      },
      {
        category: "Platform",
        q: "Is MCP ERPNext the product?",
        a: "No. MCP ERPNext is the featured proof because it is interactive and easy to understand quickly. It shows what the Casys approach looks like on a production workflow without pretending the whole company is an ERP connector.",
      },
      {
        category: "Stack",
        q: "Where does PML fit now?",
        a: "PML is the learning and observability layer under the hood. It is where traces, routing, and learned relevance come together. On the home page, it appears as technical depth rather than as the first thing every visitor has to decode.",
      },
      {
        category: "Stack",
        q: "What is already open source?",
        a: "The published stack includes `@casys/mcp-server`, `@casys/mcp-std`, `@casys/mcp-bridge`, and `@casys/mcp-erpnext`. These are the visible building blocks. The learning layer continues to evolve behind them.",
      },
      {
        category: "Stack",
        q: "Why do traces matter so much?",
        a: "Trace data is what makes the system debuggable and improvable. Without traces, teams are left with anecdotes. With traces, you can inspect failures, compare workflows, and learn which tools are relevant.",
      },
      {
        category: "Consulting",
        q: "When does consulting make sense?",
        a: "When you want the same rigor on your own workflows. Typical work includes architecture review, integration design, deployment hardening, and hands-on implementation help.",
      },
      {
        category: "Consulting",
        q: "Do you only work with ERPNext?",
        a: "No. ERPNext is one example. The same approach applies to other business systems, industrial workflows, knowledge-heavy operations, and multi-tool agent environments.",
      },
      {
        category: "General",
        q: "Who is Casys for?",
        a: "CTOs, tech leads, and engineering teams that need workflows to be trustworthy and observable. That usually means complex tools, multiple systems, and a need for traceability.",
      },
      {
        category: "General",
        q: "What makes Casys different from generic MCP consulting?",
        a: "We publish the stack, show workflow proofs, and build the observability layer that makes those workflows understandable in production.",
      },
      {
        category: "General",
        q: "What's your expertise background?",
        a: '15+ years in context engineering, from Knowledge Management to Graph Databases to DAG architectures to MCP ecosystems. We\'ve been doing this since before it was called "Context Management for AI agents".',
      },
      {
        category: "General",
        q: "How are your engagements structured?",
        a: "We offer several flexible options: focused workshops (1 day), custom projects (full deployment), or ongoing partnerships (direct access to practitioners). No heavy minimum engagements. We optimize for iteration speed and accessibility, not margin maximization. Contact us to discuss your specific needs.",
      },
    ],
  },
  mcpErpnextPage: {
    eyebrow: "ERPNext demo",
    title: "MCP workflow on ERPNext",
    subtitle:
      "A clear example of how the Casys stack can drive an interactive business workflow.",
    intro:
      "MCP ERPNext turns a line-of-business system into an inspectable MCP app surface. Interactive enough to explore, technical enough to evaluate.",
    stats: [
      { value: "97", label: "MCP Tools" },
      { value: "Live", label: "Production Surface" },
      { value: "Open Source", label: "GitHub Public" },
    ],
    quickLinks: [
      { icon: "terminal", title: "GitHub Repository", description: "Source code, issues, and roadmap.", url: "https://github.com/Casys-AI/mcp-erpnext" },
      { icon: "package_2", title: "JSR Package", description: "Install with deno add or npx.", url: "https://jsr.io/@casys/mcp-erpnext" },
      { icon: "menu_book", title: "Documentation", description: "Setup, configuration, tool reference.", url: "https://github.com/Casys-AI/mcp-erpnext#readme" },
    ],
    quote: {
      text: "The future of enterprise software isn't in new dashboards, but in the direct wiring of existing intelligence into established systems of record.",
      attribution: "— Casys Engineering",
    },
    video: {
      src: "/videos/mcp-erpnext-demo.mp4",
      caption: "Short demo video of MCP ERPNext.",
    },
    proofs: [
      {
        title: "Interactive surface",
        description: "Clickable workflow UI instead of a prompt-only mockup.",
      },
      {
        title: "Observable execution",
        description: "The interesting part is not only the UI, but the traceable execution path behind it.",
      },
      {
        title: "Connected to ERPNext",
        description: "The workflow runs on top of ERPNext, so the demo reflects operational constraints of a production ERP.",
      },
    ],
    whatItShowsTitle: "Under the hood",
    whatItShows: [
      "Live Kanban connected to ERPNext — CRUD operations via MCP tools.",
      "Every tool call traced end-to-end: who called what, with which parameters, and what happened.",
      "Swap ERPNext for another ERP — the agent layer and UI components stay the same.",
    ],
    stackTitle: "Powered by the Casys stack",
    stackItems: [
      "@casys/mcp-server for production MCP server behavior",
      "@casys/mcp-std for shared tools and utilities",
      "@casys/mcp-bridge for UI and messaging surfaces",
      "PML under the hood for traces, routing, and learning",
    ],
    ctaPrimary: { text: "Explore the stack" },
    ctaSecondary: { text: "Talk to us" },
  },
  mcpEinvoicePage: {
    eyebrow: "Live MCP product",
    title: "MCP E-Invoice for AI agents",
    subtitle:
      "Test a live e-invoicing workflow in 2 minutes (French market today, Peppol-compatible for EU). Then explore the MCP stack behind it.",
    intro:
      "MCP E-Invoice connects your AI agents to the French e-invoicing ecosystem through a PA-agnostic adapter pattern. Currently integrated with Iopole, extensible to any certified platform.",
    stats: [
      { value: "27", label: "MCP Tools" },
      { value: "3", label: "Invoice Formats" },
      { value: "PA-agnostic", label: "Adapter Pattern" },
    ],
    quickLinks: [
      { icon: "terminal", title: "GitHub Repository", description: "Source code, issues, and contributions.", url: "https://github.com/Casys-AI/mcp-einvoice" },
      { icon: "package_2", title: "JSR Package", description: "Install with deno add or npx.", url: "https://jsr.io/@casys/mcp-einvoice" },
      { icon: "menu_book", title: "Documentation", description: "Setup guides, tool reference, auth flows.", url: "https://github.com/Casys-AI/mcp-einvoice#readme" },
    ],
    media: {
      srcLight: "/images/use-cases/mcp-einvoice-demo-light.png",
      srcDark: "/images/use-cases/mcp-einvoice-demo-dark.png",
      caption: "MCP E-Invoice running inside Claude — invoice list with status filters.",
    },
    quote: {
      text: "E-invoicing shouldn't be a separate system. It should be an invisible capability your agents already have.",
      attribution: "— Casys Engineering",
    },
    proofs: [
      {
        title: "Full invoice lifecycle",
        description:
          "Emit, search, download, track status, and manage attachments — all through MCP tools.",
      },
      {
        title: "PA-agnostic architecture",
        description:
          "Switch between certified platforms (Iopole, etc.) without changing your agent code.",
      },
      {
        title: "Interactive MCP Apps",
        description:
          "4 built-in viewers: invoice detail, document list, status timeline, and directory card.",
      },
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
    ctaPrimary: { text: "Test the platform", icon: "open_in_new", url: "https://einvoice-platform.fr" },
    ctaSecondary: { text: "View on GitHub", icon: "code", url: "https://github.com/Casys-AI/mcp-einvoice" },
  },
  // ========================================
  // MCP PLATFORM (unified page)
  // ========================================
  mcpPlatform: {
    eyebrow: "CASYS MCP PLATFORM",
    title: "Build. Connect. Compose.",
    subtitle: "Three packages. One production MCP stack.",
    description: "An open-source TypeScript toolkit for building production MCP servers, bridging them to messaging platforms, and composing their UIs into unified dashboards.",
    ctaPrimary: "Get started",
    ctaGithub: "View on GitHub",
    navCards: [
      { label: "Build", name: "@casys/mcp-server", desc: "Production server framework", href: "#server", status: "v0.12" },
      { label: "Connect", name: "@casys/mcp-bridge", desc: "Messaging platform bridge", href: "#bridge", status: "prototype" },
      { label: "Compose", name: "@casys/mcp-compose", desc: "UI composition engine", href: "#compose", status: "alpha" },
    ],
    serverStep: "01",
    serverLabel: "BUILD",
    serverTitle: "@casys/mcp-server",
    serverStatus: "v0.12.0",
    serverSubtitle: "Composable middleware, OAuth2/OIDC, dual transport, Prometheus metrics",
    serverBody: "Onion-model middleware pipeline with 4 auth presets (Google, GitHub, Auth0, generic OIDC), sliding-window rate limiting, ajv schema validation, and MCP SDK 1.27 support (structuredContent, outputSchema, annotations). 270 tests.",
    serverFeatures: [
      { icon: "layers", name: "Middleware pipeline", desc: "Onion model: auth → rate limit → your code → validation → handler." },
      { icon: "shield", name: "OAuth2 / OIDC", desc: "4 presets (Google, GitHub, Auth0, OIDC). JWKS JWT validation with in-memory cache." },
      { icon: "speed", name: "Rate limiting", desc: "Sliding window per-key. Tool-call level + HTTP-level (per IP)." },
      { icon: "swap_horiz", name: "Dual transport", desc: "Streamable HTTP + SSE for production, stdio for local MCP clients." },
      { icon: "monitoring", name: "Prometheus", desc: "/metrics endpoint. Counters, histograms (duration), gauges (sessions, queue)." },
      { icon: "widgets", name: "MCP Apps SDK 1.27", desc: "structuredContent, outputSchema, annotations, tool visibility, registerViewers." },
      { icon: "verified", name: "Schema validation", desc: "ajv 8 input validation with allErrors and useDefaults." },
      { icon: "psychology", name: "Sampling bridge", desc: "Bidirectional LLM delegation — server tools can call back to the client LLM." },
      { icon: "monitor_heart", name: "Health + sessions", desc: "/health endpoint. 30-min TTL sessions, max 10k, per-IP rate limit on init." },
      { icon: "key", name: "Client OAuth", desc: "prepareOAuthProvider for MCP clients connecting to protected servers." },
      { icon: "bug_report", name: "toolErrorMapper", desc: "Map thrown errors to business errors vs JSON-RPC errors." },
      { icon: "troubleshoot", name: "Inspector", desc: "launchInspector() spawns MCP Inspector for interactive debugging." },
    ],
    serverPipelineTitle: "Middleware pipeline",
    bridgeStep: "02",
    bridgeLabel: "CONNECT",
    bridgeTitle: "@casys/mcp-bridge",
    bridgeStatus: "prototype",
    bridgeSubtitle: "MCP Apps in Telegram Mini Apps — LINE LIFF partial",
    bridgeBody: "Three-layer architecture: bridge.js (injected IIFE) + Resource Server (Deno.serve) + Platform Adapters. Telegram fully working with HMAC-SHA256 initData validation. LINE adapter exists but needs custom auth handler. 120 tests.",
    bridgeSource: "MCP Server",
    bridgeCenter: "mcp-bridge",
    bridgePipelineLabel: "Protocol Transformation Layer",
    bridgeFeatures: [
      { icon: "fingerprint", name: "Telegram HMAC auth" },
      { icon: "cable", name: "WebSocket + auto-reconnect" },
      { icon: "security", name: "CSP + path traversal guard" },
      { icon: "html", name: "bridge.js auto-injection" },
      { icon: "sync", name: "Tool result push pattern" },
      { icon: "chat_bubble", name: "LINE partial support" },
    ],
    composeStep: "03",
    composeLabel: "COMPOSE",
    composeTitle: "@casys/mcp-compose",
    composeStatus: "alpha",
    composeSubtitle: "Pure functions, zero dependencies, deterministic outputs",
    composeSteps: [
      { step: "1", title: "Collect", desc: "createCollector() extracts _meta.ui.resourceUri from each MCP tool result. Null-safe chain." },
      { step: "2", title: "Compose", desc: "buildCompositeUi() resolves sync rules (tool names → slots), extracts shared context, generates workflow UUID." },
      { step: "3", title: "Render", desc: "renderComposite() outputs HTML with CSS theming, sandboxed iframes, and JSON-RPC event bus." },
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
    installTitle: "Start building",
    quote: "Three packages that work alone. Better together.",
  },
  mcpComposePage: {
    eyebrow: "MCP COMPOSE",
    title: "Compose MCP UIs into unified dashboards",
    subtitle:
      "Your MCP servers already have UIs. mcp-compose makes them talk to each other.",
    description:
      "A lightweight, deterministic primitive for collecting, composing, and synchronizing multiple MCP Apps UIs into composite dashboards. Pure functions, zero dependencies, machine-readable errors.",
    ctaPrimary: { text: "Get started", href: "#quickstart" },
    ctaSecondary: {
      text: "View on JSR",
      href: "https://jsr.io/@casys/mcp-compose",
    },
    featuresTitle: "What it does",
    featuresSubtitle:
      "Three-step pipeline: collect UI resources, compose with sync rules, render as self-contained HTML.",
    features: [
      {
        icon: "input",
        name: "Collector",
        desc: "Extract _meta.ui from MCP tool results automatically",
      },
      {
        icon: "dashboard_customize",
        name: "Composer",
        desc: "Build composite descriptor with layout and sync rules",
      },
      {
        icon: "code",
        name: "Renderer",
        desc: "Generate self-contained HTML with embedded event bus",
      },
      {
        icon: "sync_alt",
        name: "Declarative sync",
        desc: "Cross-UI event routing via { from, event, to, action }",
      },
      {
        icon: "grid_view",
        name: "Layout modes",
        desc: "Split, tabs, grid, or stack — configurable per composition",
      },
      {
        icon: "share",
        name: "Shared context",
        desc: "Propagate values (workflowId, userId) across all UIs",
      },
      {
        icon: "verified",
        name: "Explicit validation",
        desc: "validateSyncRules() catches invalid rules before render — buildCompositeUi() silently drops unknown references",
      },
      {
        icon: "package_2",
        name: "Zero dependencies",
        desc: "Pure functions, deterministic outputs, Deno standard library only",
      },
    ],
    architectureTitle: "Pipeline",
    architectureSteps: [
      {
        step: "1",
        title: "Collect",
        description:
          "Agent calls N tools → Collector extracts _meta.ui resource URIs from each result",
      },
      {
        step: "2",
        title: "Compose",
        description:
          "Define layout (split/tabs/grid) + sync rules → Composer validates and builds descriptor",
      },
      {
        step: "3",
        title: "Render",
        description:
          "Renderer outputs self-contained HTML with JSON-RPC event bus for cross-UI sync",
      },
    ],
    quickstartTitle: "Quick start",
    quickstartCode: `import { createCollector, buildCompositeUi, renderComposite } from "@casys/mcp-compose";

// 1. Collect UI resources from tool results
const collector = createCollector();
collector.collect("invoice-viewer", invoiceResult);  // has _meta.ui
collector.collect("status-timeline", statusResult);  // has _meta.ui

// 2. Compose with layout + sync rules
const resources = collector.getResources();
const descriptor = buildCompositeUi(resources, {
  layout: "split",
  sync: [
    { from: "invoice-viewer", event: "status-change", to: "status-timeline", action: "refresh" },
  ],
});

// 3. Render self-contained HTML
const html = renderComposite(descriptor);`,
    installTitle: "Install",
    installDeno: "deno add jsr:@casys/mcp-compose@0.4.0",
    installNpm: "npx jsr add @casys/mcp-compose@0.4.0",
  },
  contact: {
    title: "Ready to wire AI into your business?",
    subtitle:
      "Start with a proof of concept, then decide how deep you want to go. 24h response time.",
    trustBadges: [
      { icon: "check_circle", text: "Open-source stack" },
      { icon: "check_circle", text: "Trace every call" },
      { icon: "check_circle", text: "Direct builder access" },
    ],
    bookingTitle: "Book a consultation",
    bookingSubtitle: "30 minutes with Erwan — shown in your local timezone.",
    bookingOpenNewTab: "Open booking in a new tab",
    formFallback: "Or send a request",
    formFallbackSubtitle: "Prefer async first? Use the form below and we’ll reply within 24 hours.",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your work email",
    messagePlaceholder:
      "I want to book a consulting call / request training / discuss an architecture challenge",
    submitButton: "Send my request",
    sending: "Sending...",
    successMessage: "Request received! We'll get back to you within 24h.",
    errorMessage: "Error sending message. Please try again.",
    hiddenSubject: "New CASYS contact request",
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
    workWithUs: "Work With Us",
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
    tagline: "The Hono for MCP",
    heroTitle1: "Ship MCP Servers",
    heroTitle2: "That Scale",
    heroSubtitle:
      "Stop reinventing auth, rate limiting, and middleware for every MCP server. One framework, composable by default, with OAuth2, middleware pipeline, and dual transport.",
    statFeatures: "Built-in features",
    statTests: "Tests passing",
    statRelease: "Latest",
    ctaPrimary: "Get Started",
    ctaSecondary: "View on JSR",
    ctaDocs: "Documentation",
  },
  mcpServerInstall: {
    title: "Ready",
    titleAccent: "When You Are",
    subtitle:
      "One command. Works with Deno and Node.js. Published on JSR, the modern JavaScript registry.",
    jsrLabel: "JSR Registry",
    githubLabel: "GitHub",
    docsLabel: "Documentation",
    builtWith: "Built with",
  },

  // ========================================
  // SUBSITE: MCP-STD
  // ========================================
  mcpStdHero: {
    tagline: "The MCP Standard Toolbox",
    heroTitle1: "508 Tools.",
    heroTitle2: "One Import.",
    heroSubtitle:
      "Database, git, docker, crypto, text, network, AI agents \u2014 every utility you'd write yourself, already tested and typed.",
    statTools: "Tools",
    statCategories: "Categories",
    statRelease: "Latest",
    ctaPrimary: "Browse Catalog",
    ctaSecondary1: "Quick Start",
    ctaSecondary2: "View on JSR",
  },
  mcpStdInstall: {
    title: "Ready When",
    titleAccent: "You Are",
    subtitle: "One command. Works with Deno. Published on JSR, the modern JavaScript registry.",
    denoLabel: "Deno",
    binaryLabel: "Binary",
    jsrLabel: "JSR Registry",
    githubLabel: "GitHub",
    builtWith: "Built with",
  },

  // ========================================
  // PML LANDING
  // ========================================
  pmlHero: {
    eyebrow: "Procedural Memory for AI Agents",
    titleLine1: "One gateway. Any model.",
    titleAccent: "Full observability.",
    description:
      "Build AI workflows once, run them with Claude, GPT, Gemini, or your local Ollama. Every tool call traced. Debug in seconds, not hours.",
    ctaPrimary: "Get Started",
    ctaSecondary: "Read the Docs",
    pillars: ["Model-Agnostic", "Full Traceability", "Pattern Extraction"],
    traceHeader: "workflow:ci-deploy",
    traceLive: "live",
    traceCalls: "22 calls",
    traceModels: "3 models",
    traceCost: "$0.028",
  },
  pmlArchitecture: {
    eyebrow: "Architecture",
    title: "How it works",
    description:
      "A unified gateway sits between your LLM and the tools it needs. Every request is decomposed into a directed acyclic graph, executed inside a sandbox, and fully traced.",
    clients: {
      label: "Clients",
      items: ["Claude", "GPT", "Gemini", "Ollama", "Any LLM"],
    },
    gateway: {
      label: "PML Gateway",
      pipeline: ["Registry", "DAG", "Sandbox"],
      extras: ["Symbolic World Model", "Observability"],
    },
    servers: {
      label: "MCP Servers",
      items: ["filesystem", "postgres", "github", "memory", "Any Tools"],
    },
    pillars: [
      { label: "Model-Agnostic", description: "Works with any LLM provider" },
      { label: "Observability", description: "Full trace of every action" },
      { label: "Symbolic Reasoning", description: "Symbolic reasoning layer" },
    ],
    mobileArrow: "flows to",
  },
  pmlCatalogPreview: {
    label: "Catalog",
    browseCta: "Browse Full Catalog",
  },
  pmlQuickStart: {
    label: "Quick Start",
    title: "Up and running in 3 steps",
    subtitle: "Add procedural memory to Claude Code in under a minute.",
    docsLink: "Read the full docs",
    steps: [
      {
        number: "01",
        title: "Install PML",
        description: "One command. No dependencies. Works on macOS, Linux, and WSL.",
        file: "terminal",
      },
      {
        number: "02",
        title: "Initialize your project",
        description: "PML creates a local config and connects to your environment.",
        file: "terminal",
      },
      {
        number: "03",
        title: "Use with Claude Code",
        description: "PML tools are available automatically. Discover, execute, and learn.",
        file: "claude-code",
      },
    ],
  },
  pmlIsolation: {
    eyebrow: "Security",
    titleLine1: "Autonomous,",
    titleLine2: "not reckless.",
    description:
      "Every AI action runs inside an isolated sandbox with resource limits. Dangerous operations pause for human approval before touching production systems.",
    features: [
      {
        id: "sandbox",
        title: "Sandboxed Execution",
        description:
          "Code runs in isolated workers with no direct access to the host system or network.",
      },
      {
        id: "hil",
        title: "Human-in-the-Loop",
        description:
          "Dangerous actions like file writes or database mutations require explicit approval before execution.",
      },
      {
        id: "audit",
        title: "Audit Trail",
        description:
          "Every action is logged with full context for transparency and post-mortem analysis.",
      },
    ],
    svg: {
      sandbox: "SANDBOX",
      checkpoint: "CHECKPOINT",
      protected: "PROTECTED",
      aiActions: "AI ACTIONS",
      toolsData: "TOOLS & DATA",
      approve: "APPROVE?",
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
    eyebrow: "Early Access",
    title: "Join the Beta",
    description: "Be among the first to give your agents procedural memory.",
    labelName: "Name",
    labelEmail: "Email",
    labelUseCase: "How will you use PML?",
    placeholderName: "Your name",
    placeholderEmail: "you@company.com",
    placeholderUseCase:
      "e.g. I want to give my Claude Code agent long-term memory for recurring DevOps workflows...",
    submit: "Request Access",
    sending: "Sending...",
    successMessage: "You're on the list! We'll reach out soon.",
    errorMessage: "Something went wrong. Please try again.",
    hiddenSubject: "PML Beta Access Request",
  },
  pmlCta: {
    title: "Ready to try?",
    description: "Give your agents procedural memory. Start building observable workflows today.",
    primaryCta: "Get Started",
    secondaryCta: "Request Beta Access",
  },
  pmlIntelligence: {
    eyebrow: "Pattern Extraction",
    titleLine1: "Every execution",
    titleLine2: "leaves a trace.",
    description:
      "PML records full execution traces — tool sequences, latencies, error paths. SHGAT extracts relevance patterns from this data. Deterministic, inspectable, no black box.",
    features: [
      {
        icon: "hub",
        title: "Execution Traces",
        desc:
          "Every workflow run is fully logged: tool calls, inputs, outputs, timing, costs. The data stays on your infrastructure.",
      },
      {
        icon: "auto_awesome",
        title: "Graph Attention Scoring",
        desc:
          "SHGAT processes trace data to score tool relevance. K-head attention across the hypergraph hierarchy. No LLM calls.",
      },
      {
        icon: "recommend",
        title: "Co-occurrence Patterns",
        desc:
          "Tools that frequently run together surface automatically. Statistical co-occurrence, not guesswork.",
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
    titleAccent: "Verified",
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
    titleAccent: "Framework",
    subtitle: "The official SDK gives you the protocol. This gives you the production stack.",
    colSdk: "Official SDK",
    colFramework: "@casys/mcp-server",
    rows: [
      ["MCP protocol", true, true],
      ["Middleware pipeline", false, true],
      ["OAuth2 / JWT auth", false, true],
      ["Rate limiting", false, true],
      ["Schema validation", false, true],
      ["Streamable HTTP + SSE", "Manual", "Built-in"],
      ["Concurrency control", false, true],
      ["OpenTelemetry tracing", false, true],
      ["Prometheus metrics", false, true],
      ["MCP Apps (UI resources)", "Manual", "Built-in"],
      ["CORS allowlist", false, true],
      ["Body size limit (413)", false, true],
      ["IP rate limiting (429)", false, true],
      ["Session propagation", false, true],
      ["HMAC message signing", false, true],
      ["CSP injection", false, true],
      ["YAML + Env config", false, true],
      ["Deno + Node.js", "Node only", "Both"],
    ],
  },
  mcpServerFeatures: {
    title: "Batteries",
    titleAccent: "Included",
    subtitle: "Everything between the request and your handler -- handled.",
    features: [
      { icon: "swap_horiz", name: "Dual Transport", desc: "STDIO + Streamable HTTP. Same code." },
      { icon: "layers", name: "Middleware Pipeline", desc: "Composable onion model, like Koa." },
      { icon: "shield", name: "OAuth2 Auth", desc: "JWT/Bearer + RFC 9728 metadata." },
      { icon: "key", name: "OIDC Presets", desc: "GitHub, Google, Auth0 -- one line." },
      {
        icon: "settings",
        name: "YAML + Env Config",
        desc: "File config, env overrides at deploy.",
      },
      { icon: "speed", name: "Concurrency", desc: "Backpressure: sleep, queue, or reject." },
      { icon: "timer", name: "Rate Limiting", desc: "Sliding window, per-client isolation." },
      {
        icon: "check_circle",
        name: "Schema Validation",
        desc: "JSON Schema via ajv at registration.",
      },
      { icon: "monitoring", name: "Observability", desc: "OTel spans + Prometheus /metrics." },
      { icon: "widgets", name: "MCP Apps", desc: "Serve interactive UIs via ui:// scheme." },
      { icon: "lock", name: "CORS Allowlist", desc: "Origin allowlist with wildcard warnings." },
      {
        icon: "upload_file",
        name: "Body Size Limit",
        desc: "maxBodyBytes with 413 JSON-RPC errors.",
      },
      { icon: "block", name: "IP Rate Limit", desc: "Per-IP 429 + Retry-After on HTTP layer." },
      {
        icon: "badge",
        name: "Session Propagation",
        desc: "sessionId flows into middleware context.",
      },
      {
        icon: "enhanced_encryption",
        name: "HMAC Signing",
        desc: "SHA-256 sign/verify + anti-replay for PostMessage.",
      },
      {
        icon: "security",
        name: "CSP Injection",
        desc: "Auto-inject Content-Security-Policy in MCP Apps.",
      },
    ],
  },
  mcpServerPipeline: {
    title: "Your Server,",
    titleAccent: "Your Rules",
    subtitle:
      "Every request flows through a composable middleware chain. Need auth? Drop it in. Rate limiting? One line. Custom logic? Slot it anywhere.",
    steps: [
      { icon: "arrow_forward", label: "Request", type: "incoming" },
      { icon: "timer", label: "Rate Limit", type: "" },
      { icon: "shield", label: "Auth", type: "" },
      { icon: "tune", label: "Custom", type: "custom" },
      { icon: "verified_user", label: "Scopes", type: "" },
      { icon: "check_circle", label: "Validation", type: "" },
      { icon: "speed", label: "Backpressure", type: "" },
      { icon: "play_arrow", label: "Handler", type: "handler" },
    ],
  },
  mcpServerQuickStart: {
    title: "5 Lines to",
    titleAccent: "Production",
    subtitle: "No boilerplate. No config ceremony. Register a tool, call start(), ship it.",
    tabBasic: "Basic (STDIO)",
    tabHttp: "HTTP + Auth",
    tabYaml: "YAML Config",
  },

  // ========================================
  // MCP-STD (additional sections)
  // ========================================
  mcpStdQuickStart: {
    title: "3 Lines to",
    titleAccent: "Production",
    subtitle:
      "Use it as a standalone MCP server or import individual tools as a library. Your call.",
    tabServer: "As MCP Server",
    tabLibrary: "As Library",
    tabCategory: "By Category",
  },
  mcpStdCategories: {
    title: "29",
    titleAccent: "Categories",
    subtitle:
      "From database queries to AI agent orchestration, every tool organized and ready to use.",
    cta: "Browse all 508 tools",
  },

  // ========================================
  // ENGINE - SHGAT Section
  // ========================================
  engineShgat: {
    eyebrow: "SHGAT-TF",
    titleLine1: "SuperHyperGraph",
    titleLine2: "Attention Networks",
    description:
      "Why a hypergraph? Regular graphs model pairwise relations (tool A calls tool B). Hypergraphs model N-to-N: one composite groups multiple leaves, one leaf belongs to multiple composites. This captures the structure of agentic tool ecosystems.",
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
    evidenceSubtitle: "24 notebooks, 41 visualizations. Full experiment logs.",
    residualCaption: "Residual weight sweep: Hit@1 across different residual configurations.",
    pcaCaption: "PCA 3-panel: raw embeddings vs message-passing-only vs full V\u2192E residual.",
    gammaCaption: "Adaptive \u03B3(n) = \u03C3(a\u00B7log(n+1)+b) learns per-node residual weights based on fan-out. Novel contribution \u2014 no precedent in GNN literature.",
  },

  // ========================================
  // ABOUT PAGE
  // ========================================
  about: {
    pageTitle: "About",
    heroName: "Erwan Lee Pesle",
    heroTitle: "Founder & System Architect, Casys",
    heroBio:
      "We have been building systems that connect knowledge to action for over fifteen years \u2014 from early chatbots on mIRC, to enterprise knowledge management, to graph attention networks for tool relevance. When LLMs arrived, the problem didn't change: context in, action out. MCP is the latest expression of that principle, and the most consequential. Casys AI helps engineering teams ship reliable AI integrations \u2014 no vendor lock-in, no black boxes.",
    expertiseTitle: "What We Do",
    expertiseSubtitle:
      "Infrastructure that connects AI systems to data, tools, and workflows \u2014 built for production observability and determinism.",
    areas: [
      {
        icon: "hub",
        title: "Knowledge Graphs",
        description:
          "Schema design, query optimization, and graph-native architectures. Neo4j Professional Developer certified. From ontology modeling to graph pipelines deployed in production.",
      },
      {
        icon: "database",
        title: "Graph Databases",
        description:
          "Modeling complex relationships that relational databases cannot express. We design, deploy, and optimize Neo4j instances handling production traffic.",
      },
      {
        icon: "smart_toy",
        title: "Agentic Systems",
        description:
          "Tool orchestration, context routing, and execution reliability. We architect multi-agent systems where every decision is traceable and every failure is recoverable.",
      },
      {
        icon: "cable",
        title: "MCP Infrastructure",
        description:
          "Server architecture, connector design, and protocol-level optimization. 500+ open-source tools shipped. We build MCP layers that are observable, testable, and deployed in real workflows.",
      },
    ],
    philosophyTitle: "How We Work",
    principles: [
      {
        icon: "code",
        title: "Open Source as Foundation",
        description:
          "Our core tooling is open source. Clients get solutions built on code they can inspect, fork, and own. No vendor lock-in, no black boxes.",
      },
      {
        icon: "science",
        title: "Research That Ships",
        description:
          "We publish what we learn and ship what we build. Every technique we recommend has been tested against production workloads.",
      },
      {
        icon: "emoji_objects",
        title: "Context Over Hype",
        description:
          'We don\'t sell "AI transformation." We solve specific infrastructure problems with specific engineering methods. The work speaks for itself.',
      },
    ],
    ctaTitle: "Start With a Problem",
    ctaSubtitle:
      "Describe your MCP infrastructure challenge, your knowledge graph bottleneck, or your agentic system design question. We'll tell you straight whether we can help \u2014 and exactly how we'd approach it.",
    ctaPrimary: {
      text: "Get in Touch",
      url: "/#contact",
      icon: "mail",
    },
    ctaSecondary: {
      text: "View Projects",
      url: "/use-cases",
      icon: "folder_open",
    },
  },

  // ========================================
  // SUBSITE: MCP-BRIDGE
  // ========================================
  mcpBridgeHero: {
    tagline: "MCP Apps \u2192 Messaging Platforms",
    heroTitle1: "MCP Apps Meet",
    heroTitle2: "2B+ Chat Users",
    heroSubtitle:
      "Turn any MCP App into a Telegram Mini App. Zero code changes. Same tool, new audience.",
    statTests: "Tests passing",
    statPlatforms: "Platform",
    statRelease: "Latest",
    ctaPrimary: "Get Started",
    ctaSecondary: "View on JSR",
    ctaDocs: "Documentation",
  },
  mcpBridgeFeatures: {
    title: "Bridge the",
    titleAccent: "Gap",
    subtitle: "Everything you need to bring MCP Apps from developer tools to messaging platforms.",
    features: [
      {
        icon: "code_off",
        name: "Zero Code Changes",
        desc: "Existing MCP Apps work as-is. No rewrites.",
      },
      {
        icon: "layers",
        name: "3-Layer Architecture",
        desc: "Client, Resource Server, MCP Server.",
      },
      {
        icon: "swap_horiz",
        name: "Protocol Translation",
        desc: "JSON-RPC 2.0 over WebSocket, bidirectional.",
      },
      {
        icon: "smart_toy",
        name: "Telegram Mini Apps",
        desc: "Full theme, viewport, auth support.",
      },
      {
        icon: "more_horiz",
        name: "More Platforms",
        desc: "LINE, Discord, WhatsApp — coming soon.",
      },
      {
        icon: "shield",
        name: "CSP Enforcement",
        desc: "Strict Content-Security-Policy by default.",
      },
      { icon: "key", name: "Session Auth", desc: "Crypto-secure tokens, HMAC validation." },
      { icon: "sync", name: "WebSocket Transport", desc: "Real-time bidirectional communication." },
      { icon: "palette", name: "Theme Mapping", desc: "Platform themes auto-mapped to MCP Apps." },
      {
        icon: "extension",
        name: "Extensible Adapters",
        desc: "Add Discord, WhatsApp, or any platform.",
      },
    ],
  },
  mcpBridgeArchitecture: {
    title: "How It",
    titleAccent: "Works",
    subtitle:
      "The bridge intercepts postMessage calls from your MCP App, routes them through a WebSocket to the Resource Server, which forwards tool calls to your unmodified MCP Server.",
    steps: [
      { icon: "web", label: "MCP App", type: "incoming" },
      { icon: "javascript", label: "bridge.js", type: "" },
      { icon: "sync", label: "WebSocket", type: "" },
      { icon: "dns", label: "Resource Server", type: "handler" },
      { icon: "hub", label: "MCP Server", type: "" },
      { icon: "send", label: "Telegram", type: "custom" },
    ],
  },
  mcpBridgeComparison: {
    title: "Custom Build vs",
    titleAccent: "Bridge",
    subtitle:
      "Skip months of integration work. The bridge handles the hard parts so you ship faster.",
    colCustom: "Custom Integration",
    colBridge: "@casys/mcp-bridge",
    rows: [
      ["Code changes to MCP App", "Rewrite needed", "None"],
      ["Platform auth (Telegram)", "Manual HMAC", "Built-in"],
      ["Content Security Policy", "Manual headers", "Auto-generated"],
      ["WebSocket management", "From scratch", "Built-in"],
      ["Theme synchronization", "Manual mapping", "Automatic"],
      ["Multi-platform support", "Per-platform code", "Adapter pattern"],
      ["Session management", "Custom implementation", "Crypto-secure"],
      ["HTML injection (bridge.js)", "N/A", "Automatic"],
    ],
  },
  mcpBridgeQuickStart: {
    title: "Deploy to",
    titleAccent: "Telegram",
    subtitle:
      "Your MCP App running inside Telegram in three steps. No changes to your existing code.",
    tabTelegram: "Telegram",
    tabLine: "LINE",
  },
  mcpBridgeInstall: {
    title: "Ready",
    titleAccent: "When You Are",
    subtitle:
      "One command. Works with Deno and Node.js. Published on JSR, the modern JavaScript registry.",
    jsrLabel: "JSR Registry",
    githubLabel: "GitHub",
    docsLabel: "Documentation",
    builtWith: "Built with",
  },

  // ========================================
  // USE CASES PAGE
  // ========================================
  useCases: {
    pageTitle: "Production Use Cases",
    heroTitle: "Production Use Cases",
    heroSubtitle:
      "We build MCP infrastructure for production. Here's what that looks like.",
    labelChallenge: "Challenge",
    labelApproach: "Solution",
    labelResult: "Result",
    labelStack: "Stack",
    ctaTitle: "Have a Similar Challenge?",
    ctaSubtitle:
      "Describe your MCP infrastructure challenge. We'll tell you straight whether we can help — and exactly how we'd approach it.",
    ctaPrimary: { text: "Get in Touch", url: "/#contact", icon: "mail" },
    ctaSecondary: { text: "View Projects", url: "/use-cases", icon: "folder_open" },
  },
} as const;
;
