// ============================================================
// French translations for Casys Hub Vitrine
// Organized by page/section
// ============================================================

import type { Translations } from "./index";

export const fr: Translations = {
  // ========================================
  // SHARED COMPONENTS
  // ========================================
  header: {
    projects: "Projets",
    whyCasys: "Pourquoi Casys",
    consulting: "Consulting",
    blog: "Blog",
    useCases: "Notre Travail",
    about: "À propos",
    contact: "Contact",
    projectDescriptions: {
      erpnext: "Démo interactive de workflow ERPNext",
      einvoice: "Serveur MCP de facturation électronique",
      compose: "Composez des UIs MCP en dashboards",
      std: "508 outils MCP standards",
      server: "Framework serveur MCP production",
      bridge: "Apps MCP vers plateformes de messagerie",
      platform: "Server, Bridge, Compose — un seul stack",
    },
    projectGroupServers: "Serveurs MCP",
    projectGroupInfra: "Infrastructure",
  },
  footer: {
    product: "Produit",
    projects: "Projets",
    consulting: "Consulting",
    training: "Formations",
    github: "GitHub",
    openSource: "Open Source",
    connect: "Liens",
    contact: "Contact",
    discord: "Discord",
    description: "Architecture Agentique & Systèmes de Contexte",
    tagline: "Outils Open Source & Consulting",
  },

  // ========================================
  // LANDING V2 SECTIONS
  // ========================================
  hero: {
    kicker: "Intégrateur MCP pour agents IA",
    titleLine1: "Des serveurs MCP",
    titleLine2: "pour vos agents IA",
    subtitle: "En production : ERPNext, e-invoice, CRM, outils internes. Démos interactives sur GitHub.",
    cta: {
      primary: { text: "Voir nos réalisations", icon: "arrow_forward", url: "/use-cases" },
      secondary: { text: "Nous parler", icon: "mail", url: "#contact" },
    },
    proofLabel: "Connecteurs standards",
    proofs: [
      { name: "MCP ERPNext", stat: "97 outils", url: "/fr/use-cases/mcp-erpnext", icon: "database" },
      { name: "MCP eInvoice", stat: "27 outils", url: "/fr/use-cases/mcp-einvoice", icon: "receipt_long" },
    ],
    authority: [
      { label: "Depuis 2013", detail: "KM → Graphes → Agents IA" },
      { label: "Open source", detail: "Code, issues, roadmap publics" },
      { label: "Publié", detail: "npm + JSR, versionné" },
      { label: "En production", detail: "Vrais workflows métier" },
    ],
  },
  featuredDemo: {
    title: "En production",
    subtitle: "La facturation électronique française comme capacité agent — en ligne.",
    eyebrow: "Produit live",
    name: "MCP E-Invoice",
    tagline: "27 outils MCP pour la réforme de la facturation électronique.",
    description:
      "Cycle de vie complet de la facture branché sur votre stack agent : émettre, rechercher, suivre les statuts et déclarer à la DGFiP. PA-agnostique — changez de plateforme certifiée sans toucher au code agent.",
    bullets: [
      "27 outils : émettre, chercher, suivre, déclarer — cycle complet.",
      "PA-agnostique : Iopole aujourd'hui, n'importe quelle plateforme demain.",
      "4 viewers MCP Apps intégrés pour factures et statuts.",
      "Open source sur GitHub — inspectez le code.",
    ],
    stats: [
      { value: "27", label: "Outils MCP" },
      { value: "3", label: "Formats (CII, UBL, Factur-X)" },
      { value: "PA-agnostique", label: "Adaptateur multi-plateforme" },
    ],
    note:
      "Conçu pour le mandat facturation électronique 2026. Le même pattern d'adaptateur s'étend à toute plateforme certifiée.",
    cta: {
      primary: { text: "Nous parler", icon: "mail", url: "#contact" },
      secondary: { text: "Voir sur GitHub", icon: "open_in_new", url: "https://github.com/Casys-AI/mcp-einvoice" },
    },
    media: {
      type: "image",
      src: "/images/use-cases/mcp-einvoice-demo-light.png",
      srcLight: "/images/use-cases/mcp-einvoice-demo-light.png",
      srcDark: "/images/use-cases/mcp-einvoice-demo-dark.png",
      caption: "MCP E-Invoice dans Claude — liste de factures avec filtres de statut.",
    },
  },
  socialProof: {
    title: "Références",
    subtitle: "Des preuves vérifiables",
    items: [
      {
        type: "stat",
        icon: "code",
        stat: "Actif",
        label: "En Dev",
        description: "Casys PML - Gateway MCP avec GraphRAG & DAG",
        link: {
          text: "Suivre sur GitHub",
          url: "https://github.com/Casys-AI/casys-pml",
        },
      },
      {
        type: "stat",
        icon: "groups",
        stat: "15+",
        label: "Ans d'Expertise",
        description: "Context Management → Graph DBs → DAGs → MCP",
        link: {
          text: "Lire Notre Histoire",
          url: "/about",
        },
      },
      {
        type: "stat",
        icon: "public",
        stat: "French Tech",
        label: "Taiwan",
        description: "Membre actif communauté French Tech Taiwan",
        link: {
          text: "Voir Nos Talks",
          url: "/blog?tag=talks",
        },
      },
    ],
    githubTitle: "Bilan Open Source",
    githubCta: "Voir tous les projets sur GitHub",
    repos: [
      {
        name: "@casys/mcp-server",
        description: "Serveur MCP production avec pipeline middleware",
        stars: "★ New",
        url: "https://github.com/Casys-AI/casys-mcp-server",
      },
      {
        name: "@casys/mcp-std",
        description: "508+ outils pour agents MCP",
        stars: "★ New",
        url: "https://github.com/Casys-AI/casys-mcp-std",
      },
      {
        name: "@casys/mcp-erpnext",
        description: "Workflows ERPNext interactifs pour apps MCP",
        stars: "★ En progression",
        url: "https://github.com/Casys-AI/mcp-erpnext",
      },
    ],
  },
  workWithUs: {
    title: "Travailler Avec Nous",
    subtitle:
      "Nos outils sont gratuits et open-source. Quand vous avez besoin d'aide pour les déployer, on est là.",
    options: [
      {
        id: "explore",
        icon: "explore",
        title: "Explorer",
        tagline: "Gratuit & Open Source",
        description: "Découvrez nos outils, lisez notre recherche, rejoignez la communauté.",
        items: [
          {
            icon: "code",
            text: "Casys PML - Procedural Memory Layer pour agents AI",
            url: "https://pml.casys.ai",
          },
          { icon: "article", text: "Blog & Articles techniques", url: "/blog" },
          {
            icon: "groups",
            text: "Communauté French Tech Taiwan",
            url: "https://www.linkedin.com/company/casys-ai",
          },
        ],
        cta: {
          text: "Explorer sur GitHub",
          url: "https://github.com/casys-ai",
          icon: "arrow_forward",
        },
      },
      {
        id: "learn",
        icon: "school",
        title: "Apprendre",
        tagline: "Formations & Workshops",
        description: "Programmes hands-on pour maîtriser nos domaines de recherche.",
        items: [
          { icon: "smart_toy", text: "Context Management pour Agents AI (2-3 jours)" },
          { icon: "hub", text: "Graph Databases Embedded (1-2 jours)" },
          { icon: "architecture", text: "Architectures Multi-Domaines AI (3-5 jours)" },
        ],
        details: [
          "On-site ou remote",
          "Exercices hands-on",
          "Matériaux personnalisés",
        ],
        cta: {
          text: "Demander Formation",
          url: "#contact",
          icon: "calendar_today",
        },
      },
      {
        id: "collaborate",
        icon: "handshake",
        title: "Collaborer",
        tagline: "Consulting & Projets",
        description: "Aide hands-on pour vos architectures AI complexes.",
        items: [
          { icon: "check_circle", text: "Architecture Review & Strategy" },
          { icon: "check_circle", text: "Déploiement & Intégrations Custom" },
          { icon: "check_circle", text: "Optimisation Performance" },
          { icon: "check_circle", text: "Pair Programming & Code Reviews" },
        ],
        engagement:
          "Engagement typique : 2-5 jours. Full remote, flexible sur les fuseaux horaires.",
        highlights: [
          "Accès direct aux builders",
          "Pas d'engagement minimum",
          "Itération rapide",
        ],
        cta: {
          text: "Nous Contacter",
          url: "#contact",
          icon: "mail",
        },
      },
    ],
  },
  projects: {
    title: "Stack Open Source",
    subtitle: "Les briques publiées derrière les workflows.",
    linkLabels: {
      proof: "Voir la démo",
      github: "GitHub",
      docs: "Documentation",
    },
    featured: {
      name: "Stack MCP Casys",
      tagline: "Des composants orientés production pour des intégrations IA observables.",
      status: "Publié",
      license: "JSR + npm",
      features: [
        {
          icon: "dns",
          name: "Runtime serveur",
          description: "Construire des serveurs MCP avec auth, middleware et contraintes de production.",
        },
        {
          icon: "handyman",
          name: "Bibliothèque d'outils",
          description: "Partir avec 508+ outils standards au lieu de refaire la base.",
        },
        {
          icon: "graph_3",
          name: "Surfaces de workflow",
          description: "Relier apps MCP, messagerie et intégrations métier dans une seule stack.",
        },
      ],
      results: [
        { stat: "508+", label: "Outils standards" },
        { stat: "6", label: "Composants publiés" },
        { stat: "OSS", label: "Construit en public" },
      ],
      links: {
        website: "#featured-demo",
        github: "https://github.com/Casys-AI",
        docs: "https://jsr.io/@casys",
      },
    },
    categories: [
      {
        name: "Composants publiés",
        items: [
          {
            id: "mcp-erpnext",
            name: "@casys/mcp-erpnext",
            tagline: "Workflows ERPNext interactifs pour apps MCP",
            status: "Actif",
            tech: "Deno",
            links: {
              website: "/fr/use-cases/mcp-erpnext",
              github: "https://github.com/Casys-AI/mcp-erpnext",
              jsr: "https://jsr.io/@casys/mcp-erpnext",
            },
          },
          {
            id: "mcp-einvoice",
            name: "@casys/mcp-einvoice",
            tagline: "Serveur MCP de facturation électronique",
            status: "v0.1.0",
            tech: "Deno",
            links: {
              website: "/fr/use-cases/mcp-einvoice",
              github: "https://github.com/Casys-AI/mcp-einvoice",
              jsr: "https://jsr.io/@casys/mcp-einvoice",
            },
          },
          {
            id: "mcp-compose",
            name: "@casys/mcp-compose",
            tagline: "Composez des UIs MCP en dashboards",
            status: "v0.1.0",
            tech: "Deno",
            links: {
              website: "/fr/mcp-compose",
              github: "https://github.com/Casys-AI/mcp-compose",
              jsr: "https://jsr.io/@casys/mcp-compose",
            },
          },
          {
            id: "mcp-server",
            name: "@casys/mcp-server",
            tagline: "Framework serveur MCP production",
            status: "v0.14.0",
            tech: "Deno",
            links: {
              website: "/fr/mcp-server",
              github: "https://github.com/Casys-AI/mcp-server",
              jsr: "https://jsr.io/@casys/mcp-server",
            },
          },
          {
            id: "mcp-std",
            name: "@casys/mcp-std",
            tagline: "508 outils MCP. Un seul import.",
            status: "v0.4.0",
            tech: "Deno",
            links: {
              website: "/fr/mcp-std",
              github: "https://github.com/Casys-AI/casys-pml/tree/main/lib/std",
              jsr: "https://jsr.io/@casys/mcp-std",
            },
          },
          {
            id: "mcp-bridge",
            name: "@casys/mcp-bridge",
            tagline: "MCP Apps vers plateformes messagerie",
            status: "v0.2.0",
            tech: "Deno",
            links: {
              website: "/fr/mcp-bridge",
              github: "https://github.com/Casys-AI/casys-pml/tree/main/lib/mcp-apps-bridge",
              jsr: "https://jsr.io/@casys/mcp-bridge",
            },
          },
        ],
      },
    ],
  },
  whyCasys: {
    title: "Pourquoi Casys ?",
    subtitle: "Ce qui nous rend différents",
    differentiation: [
      {
        id: "continuity",
        icon: "timeline",
        label: "Continuité",
        title: "Context engineering depuis 2013",
        tagline: "Knowledge Management → Graph DB → agents IA.",
        description: "Chaque phase a nourri la suivante. Le KM a façonné nos graphes, les graphes ont façonné notre routage agent — l'expertise s'accumule au fil des vagues technologiques.",
        highlights: [
          "Systèmes KM (2013+)",
          "Bases de données graphes (2018+)",
          "Agents MCP (2024+)",
        ],
      },
      {
        id: "opensource",
        icon: "code_blocks",
        label: "Open source",
        title: "Open source par défaut",
        tagline: "Outils gratuits, consulting optionnel.",
        description: "Pas de vendor lock-in. On publie ce qu'on construit et on partage la recherche qui va avec.",
        highlights: [
          "Publié sur npm et JSR",
          "Licence MIT",
          "Pas de vendor lock-in",
        ],
      },
      {
        id: "practical",
        icon: "rocket_launch",
        label: "Pratique",
        title: "Recherche, puis production",
        tagline: "Des systèmes qui résolvent de vrais problèmes.",
        description: "Rien de ce qu'on publie n'est hypothétique. Chaque pattern tourne en production avant de finir dans un article.",
        highlights: [
          "En production depuis 2024",
          "On utilise nos propres outils",
          "Versionné, pas du vaporware",
        ],
      },
      {
        id: "accessible",
        icon: "handshake",
        label: "Accessible",
        title: "Sans overhead corporate",
        tagline: "Accès direct aux builders.",
        description: "Tarification transparente, engagement flexible, aucun funnel commercial. Vous parlez aux personnes qui construisent.",
        highlights: [
          "Tarification transparente",
          "Engagement flexible",
          "Accès direct aux builders",
        ],
      },
    ],
    viewReposLabel: "Voir les dépôts",
    viewReposUrl: "https://github.com/Casys-AI",
    contactCta: {
      text: "Nous contacter",
      url: "#contact",
      icon: "mail",
    },
  },
  blog: {
    title: "Recherche, architecture et notes de terrain",
    subtitle: "Ce qu'on apprend en construisant des systèmes IA observables pour workflows métier.",
    readMore: "Lire",
    viewAll: "Voir tous les articles",
  },
  faq: {
    title: "Questions Fréquentes",
    subtitle: "Les questions qu'on nous pose le plus souvent.",
    categories: ["Plateforme", "Stack", "Consulting", "Général"],
    allLabel: "Tout",
    closingCta: {
      prompt: "Votre question n'est pas listée ?",
      ctaLabel: "Parlons-en",
      url: "#contact",
      icon: "mail",
    },
    faqs: [
      {
        category: "Plateforme",
        q: "Casys fait quoi exactement ?",
        a: "Casys est un intégrateur IA agentic. On connecte des agents IA à vos systèmes métier — ERP, CRM, outils internes — avec une stack observable et open source. La profondeur technique vit dans la stack et dans la couche d'apprentissage.",
      },
      {
        category: "Plateforme",
        q: "MCP ERPNext, c'est le produit ?",
        a: "Non. MCP ERPNext est la preuve mise en avant parce qu'elle est interactive et compréhensible rapidement. Elle montre à quoi ressemble l'approche Casys sur un workflow métier sans réduire la société à un simple connecteur ERP.",
      },
      {
        category: "Stack",
        q: "PML se place où maintenant ?",
        a: "PML est la couche d'apprentissage et d'observabilité sous le capot. C'est l'endroit où se rejoignent les traces, le routage, et la pertinence apprise. Sur la home, on le montre comme profondeur technique, pas comme la première chose à décoder pour chaque visiteur.",
      },
      {
        category: "Stack",
        q: "Qu'est-ce qui est déjà open source ?",
        a: "La stack publiée inclut `@casys/mcp-server`, `@casys/mcp-std`, `@casys/mcp-bridge`, et `@casys/mcp-erpnext`. Ce sont les briques visibles. La couche d'apprentissage continue d'évoluer derrière.",
      },
      {
        category: "Stack",
        q: "Pourquoi les traces sont si importantes ?",
        a: "Parce que les traces rendent le système déboguable et améliorable. Sans traces, on n'a que des anecdotes. Avec elles, on peut inspecter les échecs, comparer des workflows, et apprendre quels outils sont réellement pertinents.",
      },
      {
        category: "Consulting",
        q: "À quel moment le consulting a du sens ?",
        a: "Après qu'une preuve claire existe et que vous voulez le même niveau de rigueur sur vos propres workflows. Le travail typique couvre l'architecture, l'intégration, le durcissement du déploiement, et l'implémentation hands-on.",
      },
      {
        category: "Consulting",
        q: "Vous travaillez uniquement avec ERPNext ?",
        a: "Non. ERPNext est un exemple. La même approche s'applique à d'autres systèmes métier, workflows industriels, opérations riches en connaissances, et environnements agents multi-outils.",
      },
      {
        category: "Général",
        q: "Casys s'adresse à qui ?",
        a: "Aux CTO, tech leads, et équipes d'ingénierie qui ont besoin de workflows fiables et observables. En général, ça veut dire plusieurs outils, plusieurs systèmes, et un besoin d'observabilité.",
      },
      {
        category: "Général",
        q: "Qu'est-ce qui vous différencie d'un consulting MCP générique ?",
        a: "On publie la stack, on montre des preuves de workflow, et on construit la couche d'observabilité qui rend ces workflows compréhensibles en production.",
      },
      {
        category: "Général",
        q: "C'est quoi votre background expertise?",
        a: '15+ ans en context engineering, de Knowledge Management (2013+) aux Graph Databases aux architectures DAG aux écosystèmes MCP. On fait ça depuis avant que ça s\'appelle "Context Management pour agents AI".',
      },
      {
        category: "Général",
        q: "Comment sont structurés vos engagements?",
        a: "On offre plusieurs options flexibles: workshops focused (1 jour), projets custom (déploiement complet), ou partnerships ongoing (accès direct aux praticiens). Engagements flexibles, optimisés pour la vitesse d'itération. Contactez-nous pour discuter de votre besoin spécifique.",
      },
    ],
  },
  mcpErpnextPage: {
    eyebrow: "Démo ERPNext",
    title: "Un workflow MCP sur ERPNext",
    subtitle:
      "Un exemple clair de la manière dont la stack Casys peut piloter un workflow métier interactif.",
    intro:
      "MCP ERPNext transforme un système ERPNext en surface MCP inspectable. Technique et démontrable.",
    stats: [
      { value: "97", label: "Outils MCP" },
      { value: "Live", label: "Surface de production" },
      { value: "Open Source", label: "GitHub public" },
    ],
    quickLinks: [
      { icon: "terminal", title: "Dépôt GitHub", description: "Code source, issues et feuille de route.", url: "https://github.com/Casys-AI/mcp-erpnext" },
      { icon: "package_2", title: "Package JSR", description: "Installer avec deno add ou npx.", url: "https://jsr.io/@casys/mcp-erpnext" },
      { icon: "menu_book", title: "Documentation", description: "Configuration, référence des outils.", url: "https://github.com/Casys-AI/mcp-erpnext#readme" },
    ],
    quote: {
      text: "L'avenir des logiciels d'entreprise n'est pas dans de nouveaux tableaux de bord, mais dans le câblage transparent de l'intelligence existante dans les systèmes d'enregistrement établis.",
      attribution: "— Casys Engineering",
    },
    video: {
      src: "/videos/mcp-erpnext-demo.mp4",
      caption: "Courte vidéo de démonstration de MCP ERPNext.",
    },
    proofs: [
      {
        title: "Surface interactive",
        description: "Une UI de workflow cliquable avec actions métier directes.",
      },
      {
        title: "Exécution observable",
        description: "L'intérêt n'est pas seulement l'interface, mais le chemin d'exécution traçable derrière.",
      },
      {
        title: "Connecté à ERPNext",
        description: "Le workflow tourne sur ERPNext, donc la démo reflète les contraintes opérationnelles du système.",
      },
    ],
    whatItShowsTitle: "Sous le capot",
    whatItShows: [
      "Kanban live connecté à ERPNext — opérations CRUD via des outils MCP.",
      "Chaque appel d'outil tracé de bout en bout : qui a appelé quoi, avec quels paramètres, et ce qui s'est passé.",
      "Remplacez ERPNext par un autre ERP — la couche agent et les composants UI restent les mêmes.",
    ],
    stackTitle: "Propulsé par la stack Casys",
    stackItems: [
      "@casys/mcp-server pour le comportement serveur MCP en production",
      "@casys/mcp-std pour les outils et utilitaires partagés",
      "@casys/mcp-bridge pour les surfaces UI et messagerie",
      "PML sous le capot pour les traces, le routage, et l'apprentissage",
    ],
    ctaPrimary: { text: "Explorer la stack" },
    ctaSecondary: { text: "Nous parler" },
  },
  mcpEinvoicePage: {
    eyebrow: "Produit MCP live",
    title: "MCP E-Invoice pour agents IA",
    subtitle:
      "Testez un workflow de facturation électronique live en 2 minutes (marché français aujourd'hui, compatible Peppol pour l'UE). Puis explorez la stack MCP derrière.",
    intro:
      "MCP E-Invoice connecte vos agents IA à l'écosystème de facturation électronique français via un pattern d'adaptateur agnostique PA. Actuellement intégré avec Iopole, extensible à toute plateforme agréée.",
    stats: [
      { value: "27", label: "Outils MCP" },
      { value: "3", label: "Formats facture" },
      { value: "PA-agnostique", label: "Adaptateur multi-plateforme" },
    ],
    quickLinks: [
      { icon: "terminal", title: "Dépôt GitHub", description: "Code source, issues et contributions.", url: "https://github.com/Casys-AI/mcp-einvoice" },
      { icon: "package_2", title: "Package JSR", description: "Installer avec deno add ou npx.", url: "https://jsr.io/@casys/mcp-einvoice" },
      { icon: "menu_book", title: "Documentation", description: "Guides de configuration, référence des outils, flux d'authentification.", url: "https://github.com/Casys-AI/mcp-einvoice#readme" },
    ],
    media: {
      srcLight: "/images/use-cases/mcp-einvoice-demo-light.png",
      srcDark: "/images/use-cases/mcp-einvoice-demo-dark.png",
      caption: "MCP E-Invoice dans Claude — liste de factures avec filtres de statut.",
    },
    quote: {
      text: "La facturation électronique ne devrait pas être un système séparé. Ce devrait être une capacité invisible que vos agents possèdent déjà.",
      attribution: "— Casys Engineering",
    },
    proofs: [
      {
        title: "Cycle de vie complet",
        description:
          "Émettre, chercher, télécharger, suivre les statuts et gérer les pièces jointes — le tout via des outils MCP.",
      },
      {
        title: "Architecture PA-agnostique",
        description:
          "Changez de plateforme agréée (Iopole, etc.) sans modifier le code de vos agents.",
      },
      {
        title: "MCP Apps interactives",
        description:
          "4 viewers intégrés : détail facture, liste de documents, timeline de statuts et fiche annuaire.",
      },
    ],
    whatItShowsTitle: "Ce qu'il couvre",
    whatItShows: [
      "Émission et recherche de factures avec syntaxe Lucene",
      "Consultation de l'annuaire PPF (France) et vérification Peppol (international)",
      "Gestion du cycle de vie des statuts (APPROVED, REFUSED, DISPUTED, PAYMENT_SENT...)",
      "E-reporting DGFiP pour les transactions B2C et internationales",
      "Génération de factures CII, UBL et Factur-X",
    ],
    stackTitle: "Construit sur la stack Casys",
    stackItems: [
      "@casys/mcp-server pour le comportement serveur MCP en production",
      "@casys/mcp-compose pour les dashboards UI composites",
      "OAuth2 client_credentials avec auto-refresh",
      "4 viewers MCP Apps avec actions drill-down",
    ],
    ctaPrimary: { text: "Tester la plateforme", icon: "open_in_new", url: "https://einvoice-platform.fr" },
    ctaSecondary: { text: "Voir sur GitHub", icon: "code", url: "https://github.com/Casys-AI/mcp-einvoice" },
  },
  // ========================================
  // MCP PLATFORM (unified page)
  // ========================================
  mcpPlatform: {
    eyebrow: "CASYS MCP PLATFORM",
    title: "Build. Connect. Compose.",
    subtitle: "Trois packages. Un seul stack MCP en production.",
    description: "Un toolkit TypeScript open-source pour construire des serveurs MCP en production, les connecter aux plateformes de messagerie, et composer leurs UIs en dashboards unifiés.",
    ctaPrimary: "Commencer",
    ctaGithub: "Voir sur GitHub",
    navCards: [
      { label: "Build", name: "@casys/mcp-server", desc: "Framework serveur production", href: "#server" },
      { label: "Connect", name: "@casys/mcp-bridge", desc: "Pont vers les plateformes de messagerie", href: "#bridge" },
      { label: "Compose", name: "@casys/mcp-compose", desc: "Moteur de composition UI", href: "#compose" },
    ],
    serverStep: "01",
    serverLabel: "BUILD",
    serverTitle: "@casys/mcp-server",
    serverSubtitle: "Le Hono pour MCP — middleware composable, OAuth2, double transport",
    serverBody: "Middleware prêt à l'emploi pour l'auth, la limitation de débit et la validation. Chaque requête traverse un pipeline composable que vous contrôlez — sans mauvaises surprises à 3h du matin.",
    serverFeatures: [
      { icon: "lock", name: "Bearer auth", desc: "Middleware d'authentification par token prêt à l'emploi." },
      { icon: "speed", name: "Rate limiting", desc: "Limitation par client avec fenêtres configurables." },
      { icon: "verified", name: "Zod validation", desc: "Schémas entrée/sortie validés à l'exécution avec Zod." },
      { icon: "bug_report", name: "Error handling", desc: "Propagation d'erreurs structurée avec codes JSON-RPC." },
      { icon: "bolt", name: "Streaming SSE", desc: "Transport Server-Sent Events complet en parallèle du stdio." },
      { icon: "layers", name: "Middleware stack", desc: "Chaîne de middleware composable et ordonnée sur chaque requête." },
      { icon: "extension", name: "MCP primitives", desc: "Ressources, prompts, outils — toutes les primitives MCP couvertes." },
      { icon: "description", name: "Typed schemas", desc: "TypeScript en premier avec inférence stricte partout." },
      { icon: "sync", name: "Lifecycle hooks", desc: "Hooks onStart / onStop pour la gestion gracieuse des ressources." },
      { icon: "monitor_heart", name: "Health endpoint", desc: "Route /health intégrée pour les sondes load-balancer." },
      { icon: "monitoring", name: "Prometheus metrics", desc: "Endpoint /metrics, durée des requêtes, taux d'erreur." },
      { icon: "terminal", name: "CLI scaffold", desc: "deno run scaffold pour démarrer un nouveau serveur instantanément." },
    ],
    serverPipelineTitle: "Pipeline de middleware",
    bridgeStep: "02",
    bridgeLabel: "CONNECT",
    bridgeTitle: "@casys/mcp-bridge",
    bridgeSubtitle: "Transformez vos outils MCP en Telegram Mini Apps et LINE LIFF",
    bridgeBody: "Une couche de transformation de protocole qui connecte votre serveur MCP aux plateformes de messagerie. Client OAuth, auth HMAC-SHA256, transport WebSocket — tout est géré.",
    bridgeSource: "Serveur MCP",
    bridgeCenter: "mcp-bridge",
    bridgePipelineLabel: "Couche de transformation de protocole",
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
    composeSubtitle: "Collectez, composez et synchronisez plusieurs UIs MCP Apps",
    composeSteps: [
      { step: "1", title: "Collecter", desc: "L'agent appelle N outils → le Collector extrait les URI de ressources _meta.ui de chaque résultat" },
      { step: "2", title: "Composer", desc: "Définissez le layout (split/tabs/grid) + les règles de sync → le Composer valide et construit le descripteur" },
      { step: "3", title: "Rendre", desc: "Le Renderer génère du HTML autonome avec un bus d'événements JSON-RPC pour la sync cross-UI" },
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
    installTitle: "Commencer à construire",
    quote: "Trois packages qui fonctionnent seuls. Encore mieux ensemble.",
  },
  mcpComposePage: {
    eyebrow: "MCP COMPOSE",
    title: "Composez des UIs MCP en dashboards unifiés",
    subtitle:
      "Vos serveurs MCP ont déjà des UIs. mcp-compose les fait communiquer entre elles.",
    description:
      "Une primitive légère et déterministe pour collecter, composer et synchroniser plusieurs UIs MCP Apps en dashboards composites. Fonctions pures, zéro dépendances, erreurs machine-readable.",
    ctaPrimary: { text: "Démarrer", href: "#quickstart" },
    ctaSecondary: {
      text: "Voir sur JSR",
      href: "https://jsr.io/@casys/mcp-compose",
    },
    featuresTitle: "Fonctionnalités",
    featuresSubtitle:
      "Pipeline en trois étapes : collecter les ressources UI, composer avec des règles de sync, rendre en HTML autonome.",
    features: [
      {
        icon: "input",
        name: "Collector",
        desc: "Extrait _meta.ui des résultats d'outils MCP automatiquement",
      },
      {
        icon: "dashboard_customize",
        name: "Composer",
        desc: "Construit un descripteur composite avec layout et règles de sync",
      },
      {
        icon: "code",
        name: "Renderer",
        desc: "Génère du HTML autonome avec event bus intégré",
      },
      {
        icon: "sync_alt",
        name: "Sync déclarative",
        desc: "Routage d'événements cross-UI via { from, event, to, action }",
      },
      {
        icon: "grid_view",
        name: "Modes de layout",
        desc: "Split, tabs, grid ou stack — configurable par composition",
      },
      {
        icon: "share",
        name: "Contexte partagé",
        desc: "Propage les valeurs (workflowId, userId) à travers toutes les UIs",
      },
      {
        icon: "verified",
        name: "Validation explicite",
        desc: "validateSyncRules() détecte les règles invalides avant le rendu — buildCompositeUi() ignore silencieusement les références inconnues",
      },
      {
        icon: "package_2",
        name: "Zéro dépendance",
        desc: "Fonctions pures, sorties déterministes, Deno standard library uniquement",
      },
    ],
    architectureTitle: "Pipeline",
    architectureSteps: [
      {
        step: "1",
        title: "Collect",
        description:
          "L'agent appelle N outils → le Collector extrait les URIs _meta.ui de chaque résultat",
      },
      {
        step: "2",
        title: "Compose",
        description:
          "Définir le layout (split/tabs/grid) + les règles de sync → le Composer valide et construit le descripteur",
      },
      {
        step: "3",
        title: "Render",
        description:
          "Le Renderer produit du HTML autonome avec un event bus JSON-RPC pour la sync cross-UI",
      },
    ],
    quickstartTitle: "Démarrage rapide",
    quickstartCode: `import { createCollector, buildCompositeUi, renderComposite } from "@casys/mcp-compose";

// 1. Collecter les ressources UI des résultats d'outils
const collector = createCollector();
collector.collect("invoice-viewer", invoiceResult);  // has _meta.ui
collector.collect("status-timeline", statusResult);  // has _meta.ui

// 2. Composer avec layout + règles de sync
const resources = collector.getResources();
const descriptor = buildCompositeUi(resources, {
  layout: "split",
  sync: [
    { from: "invoice-viewer", event: "status-change", to: "status-timeline", action: "refresh" },
  ],
});

// 3. Rendre en HTML autonome
const html = renderComposite(descriptor);`,
    installTitle: "Installation",
    installDeno: "deno add jsr:@casys/mcp-compose@0.4.0",
    installNpm: "npx jsr add @casys/mcp-compose@0.4.0",
  },
  contact: {
    title: "Prêt à brancher l'IA sur votre métier ?",
    subtitle:
      "Commencez par une preuve, puis choisissez jusqu'où vous voulez aller. Réponse sous 24h.",
    trustBadges: [
      { icon: "check_circle", text: "Stack open source" },
      { icon: "check_circle", text: "Chaque appel tracé" },
      { icon: "check_circle", text: "Accès direct aux builders" },
    ],
    bookingTitle: "Réserver une consultation",
    bookingSubtitle: "30 minutes avec Erwan — affichées dans votre fuseau horaire local.",
    bookingOpenNewTab: "Ouvrir la réservation dans un nouvel onglet",
    formFallback: "Ou envoyer une demande",
    formFallbackSubtitle: "Si vous préférez commencer en asynchrone, utilisez le formulaire ci-dessous. Réponse sous 24h.",
    namePlaceholder: "Votre nom",
    emailPlaceholder: "Votre email professionnel",
    messagePlaceholder:
      "Je veux réserver un appel consulting / demander une formation / discuter d'un challenge d'architecture",
    submitButton: "Envoyer ma demande",
    sending: "Envoi...",
    successMessage: "Demande reçue ! On revient vers vous sous 24h maximum.",
    errorMessage: "Erreur lors de l'envoi. Veuillez réessayer.",
    hiddenSubject: "Nouvelle demande de contact CASYS",
  },

  articleCta: {
    headlineDefault: "Vous construisez avec l'IA en production ?",
    headlineWithTopic: "Vous travaillez sur {topic} ?",
    subtext:
      "On a déjà mis cette stack en production. 20 minutes, pas de pitch — juste une réponse honnête sur ce qu'on peut faire pour vous.",
    teaseHeadline: "Bloqué là-dessus en production ?",
    teaseSubtext: "On l'a déjà livré. Évitez des mois d'essais-erreurs.",
    primaryCta: "Réserver 20 min avec Erwan",
    secondaryCta: "Poser une question",
    primaryAria: "Réserver une consultation de 20 minutes",
    secondaryAria: "Poser une question via le formulaire de contact",
  },

  articleAskDialog: {
    title: "Poser une question à Erwan",
    subtitleDefault: "Une question rapide sur ce que vous venez de lire ? Posez-la ici — réponse sous 24h.",
    subtitleWithTopic: "Une question sur {topic} ? Posez-la ici — réponse sous 24h.",
    nameLabel: "Votre nom",
    namePlaceholder: "Jean Dupont",
    emailLabel: "Votre email",
    emailPlaceholder: "jean@entreprise.com",
    messageLabel: "Votre question",
    messagePlaceholder: "Ce qui vous bloque, ce que vous voulez construire, ce qui n'est pas clair dans l'article…",
    submit: "Envoyer",
    sending: "Envoi…",
    cancel: "Annuler",
    closeAria: "Fermer la fenêtre",
    success: "Reçu. Erwan vous répond sous 24h.",
    error: "Une erreur est survenue. Réessayez ou écrivez à hello@casys.ai",
    hiddenSubject: "Question blog depuis {article}",
  },

  // ========================================
  // SUBSITE: ENGINE
  // ========================================
  engineHeader: {
    howItWorks: "Fonctionnement",
    problem: "Le Probleme",
    shgat: "SHGAT",
    gru: "GRU",
    benchmarks: "Metriques",
    links: "Liens",
    docs: "Docs",
    workWithUs: "Travaillons ensemble",
  },
  engineHero: {
    tagline: "ML COMPUTATION LAYER",
    heroTitle1: "Score, Rank, Build Paths",
    heroTitle2: "No LLM Required",
    heroSubtitle:
      "Les reseaux d'attention SHGAT scorent la pertinence des outils sur une hierarchie d'hypergraphe. Message passing multi-niveaux, attention K-head, zero appel LLM. Deterministe. Observable. Tourne sur votre hardware.",
    statTools: "Noeuds indexes",
    statHit: "Precision E2E",
    statLatency: "Parametres GRU",
    ctaPrimary: "Comment ca marche",
    ctaDocs: "Documentation",
    ctaSecondary: "GitHub",
  },
  engineProblem: {
    eyebrow: "LE PROBLEME",
    titleLine1: "Les Embeddings Bruts",
    titleLine2: "Ignorent la Structure",
    description: "Les LLM scorent la pertinence des outils un par un. Ils ne voient pas que psql_query et csv_parse appartiennent a la meme capability de data-pipeline. Sans contexte structurel, la selection d'outils est bruitee, lente et fragile.",
    insight: "L'enrichissement SHGAT transforme des embeddings isoles en representations conscientes de la structure. Les outils partageant des capabilities se regroupent, meme s'ils n'ont jamais apparu dans le meme workflow.",
    tsneBaCaption: "Visualisation t-SNE : embeddings BGE-M3 bruts (gauche) vs enrichis SHGAT (droite). Apres message passing, les outils se regroupent par capability.",
    tsneCapCaption: "Memes embeddings colores par assignation de capability. Les embeddings enrichis forment des clusters plus compacts et mieux separes.",
  },
  engineGru: {
    eyebrow: "GRU SEQUENCER",
    titleLine1: "258K Parametres.",
    titleLine2: "Pas un LLM.",
    description: "Un GRU compact predit le prochain outil dans un workflow a partir d'embeddings enrichis par SHGAT. Il voit l'historique d'execution et predit ce qui vient ensuite — outils, capabilities ou etats terminaux.",
    features: [
      { icon: "memory", title: "Architecture Compacte", desc: "GRU(64) avec VocabNode unifie. 920 outils + 245 capabilities = 1 165 classes de sortie. S'entraine en minutes sur CPU." },
      { icon: "route", title: "Decodage Beam Search", desc: "Beam search largeur 4 avec normalisation de longueur construit des chemins d'execution complets. Precision First-N : 70.8%." },
      { icon: "category", title: "Cap-as-Terminal", desc: "Les capabilities servent d'etats terminaux. Le modele predit quand arreter l'expansion, pas seulement quoi expanser. Cap Hit@1 : 82.3%." },
      { icon: "speed", title: "Contribution SHGAT", desc: "Les embeddings enrichis SHGAT ajoutent +6.2pp a la precision beam E2E vs embeddings bruts. La structure est le signal." },
    ],
    benchmarkCaption: "Benchmark E2E : comparaison de precision First-N en beam search. L'enrichissement SHGAT apporte +6.2pp.",
    statParams: "parametres",
    statAccuracy: "precision E2E",
    statContribution: "gain SHGAT",
  },

  // ========================================
  // SUBSITE: MCP-SERVER
  // ========================================
  mcpServerHero: {
    tagline: "Le Hono pour MCP",
    heroTitle1: "Livrez des Serveurs MCP",
    heroTitle2: "Qui Passent a l'Echelle",
    heroSubtitle:
      "Arretez de reinventer l'auth, le rate limiting et les middlewares pour chaque serveur MCP. Un framework, composable par defaut, avec OAuth2, pipeline middleware et double transport.",
    statFeatures: "Features incluses",
    statTests: "Tests au vert",
    statRelease: "Derniere",
    ctaPrimary: "Commencer",
    ctaSecondary: "Voir sur JSR",
    ctaDocs: "Documentation",
  },
  mcpServerInstall: {
    title: "Pret",
    titleAccent: "Quand Vous l'Etes",
    subtitle:
      "Une commande. Compatible Deno et Node.js. Publie sur JSR, le registre JavaScript moderne.",
    jsrLabel: "Registre JSR",
    githubLabel: "GitHub",
    docsLabel: "Documentation",
    builtWith: "Construit avec",
  },

  // ========================================
  // SUBSITE: MCP-STD
  // ========================================
  mcpStdHero: {
    tagline: "La Boite a Outils MCP",
    heroTitle1: "508 Outils.",
    heroTitle2: "Un Seul Import.",
    heroSubtitle:
      "Base de donnees, git, docker, crypto, texte, reseau, agents IA \u2014 chaque utilitaire que vous ecririez, deja teste et type.",
    statTools: "Outils",
    statCategories: "Categories",
    statRelease: "Derniere",
    ctaPrimary: "Parcourir le Catalogue",
    ctaSecondary1: "Demarrage Rapide",
    ctaSecondary2: "Voir sur JSR",
  },
  mcpStdInstall: {
    title: "Pret Quand",
    titleAccent: "Vous l'Etes",
    subtitle: "Une commande. Compatible Deno. Publie sur JSR, le registre JavaScript moderne.",
    denoLabel: "Deno",
    binaryLabel: "Binaire",
    jsrLabel: "Registre JSR",
    githubLabel: "GitHub",
    builtWith: "Construit avec",
  },

  // ========================================
  // PML LANDING
  // ========================================
  pmlHero: {
    eyebrow: "Memoire Procedurale pour Agents AI",
    titleLine1: "Un gateway. N'importe quel modele.",
    titleAccent: "Observabilite complete.",
    description:
      "Construisez vos workflows AI une fois, executez-les avec Claude, GPT, Gemini ou votre Ollama local. Chaque appel trace. Deboguez en secondes, pas en heures.",
    ctaPrimary: "Commencer",
    ctaSecondary: "Lire la Doc",
    pillars: ["Multi-Modele", "Tracabilite Totale", "Extraction de Patterns"],
    traceHeader: "workflow:ci-deploy",
    traceLive: "live",
    traceCalls: "22 appels",
    traceModels: "3 modeles",
    traceCost: "0.028 $",
  },
  pmlArchitecture: {
    eyebrow: "Architecture",
    title: "Comment \u00e7a marche",
    description:
      "Un gateway unifi\u00e9 se place entre votre LLM et les outils dont il a besoin. Chaque requ\u00eate est d\u00e9compos\u00e9e en graphe acyclique dirig\u00e9, ex\u00e9cut\u00e9e dans un sandbox, et enti\u00e8rement trac\u00e9e.",
    clients: {
      label: "Clients",
      items: ["Claude", "GPT", "Gemini", "Ollama", "Tout LLM"],
    },
    gateway: {
      label: "PML Gateway",
      pipeline: ["Registre", "DAG", "Sandbox"],
      extras: ["Mod\u00e8le Symbolique", "Observabilit\u00e9"],
    },
    servers: {
      label: "Serveurs MCP",
      items: ["filesystem", "postgres", "github", "memory", "Tout Outil"],
    },
    pillars: [
      { label: "Agnostique", description: "Compatible avec tout fournisseur LLM" },
      { label: "Observabilit\u00e9", description: "Trace compl\u00e8te de chaque action" },
      { label: "Raisonnement Symbolique", description: "Couche de raisonnement symbolique" },
    ],
    mobileArrow: "transmet \u00e0",
  },
  pmlCatalogPreview: {
    label: "Catalogue",
    browseCta: "Parcourir le Catalogue",
  },
  pmlQuickStart: {
    label: "Demarrage Rapide",
    title: "Operationnel en 3 etapes",
    subtitle: "Ajoutez la memoire procedurale a Claude Code en moins d'une minute.",
    docsLink: "Lire la documentation complete",
    steps: [
      {
        number: "01",
        title: "Installer PML",
        description: "Une commande. Aucune dependance. Fonctionne sur macOS, Linux et WSL.",
        file: "terminal",
      },
      {
        number: "02",
        title: "Initialiser votre projet",
        description: "PML cree une configuration locale et se connecte a votre environnement.",
        file: "terminal",
      },
      {
        number: "03",
        title: "Utiliser avec Claude Code",
        description:
          "Les outils PML sont disponibles automatiquement. Decouvrez, executez et apprenez.",
        file: "claude-code",
      },
    ],
  },
  pmlIsolation: {
    eyebrow: "S\u00e9curit\u00e9",
    titleLine1: "Autonome,",
    titleLine2: "pas imprudent.",
    description:
      "Chaque action AI s\u2019ex\u00e9cute dans un sandbox isol\u00e9 avec des limites de ressources. Les op\u00e9rations dangereuses se mettent en pause pour approbation humaine avant de toucher les syst\u00e8mes de production.",
    features: [
      {
        id: "sandbox",
        title: "Ex\u00e9cution Isol\u00e9e",
        description:
          "Le code s\u2019ex\u00e9cute dans des workers isol\u00e9s sans acc\u00e8s direct au syst\u00e8me h\u00f4te ou au r\u00e9seau.",
      },
      {
        id: "hil",
        title: "Humain dans la Boucle",
        description:
          "Les actions dangereuses comme l\u2019\u00e9criture de fichiers ou les mutations de base de donn\u00e9es n\u00e9cessitent une approbation explicite.",
      },
      {
        id: "audit",
        title: "Piste d\u2019Audit",
        description:
          "Chaque action est enregistr\u00e9e avec un contexte complet pour la transparence et l\u2019analyse post-mortem.",
      },
    ],
    svg: {
      sandbox: "SANDBOX",
      checkpoint: "CHECKPOINT",
      protected: "PROT\u00c9G\u00c9",
      aiActions: "ACTIONS AI",
      toolsData: "OUTILS & DONN\u00c9ES",
      approve: "APPROUVER?",
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
    eyebrow: "Acces Anticipe",
    title: "Rejoignez la Beta",
    description: "Soyez parmi les premiers a donner une memoire procedurale a vos agents.",
    labelName: "Nom",
    labelEmail: "Email",
    labelUseCase: "Comment utiliserez-vous PML ?",
    placeholderName: "Votre nom",
    placeholderEmail: "vous@entreprise.com",
    placeholderUseCase:
      "ex. Je veux donner a mon agent Claude Code une memoire a long terme pour les workflows DevOps recurrents...",
    submit: "Demander l'Acces",
    sending: "Envoi...",
    successMessage: "Vous etes sur la liste ! Nous vous contacterons bientot.",
    errorMessage: "Une erreur est survenue. Veuillez reessayer.",
    hiddenSubject: "Demande d'acces Beta PML",
  },
  pmlCta: {
    title: "Pret a essayer ?",
    description:
      "Donnez a vos agents une memoire procedurale. Commencez a construire des workflows observables des aujourd'hui.",
    primaryCta: "Commencer",
    secondaryCta: "Demander l'Acces Beta",
  },
  pmlIntelligence: {
    eyebrow: "Extraction de Patterns",
    titleLine1: "Chaque exécution",
    titleLine2: "laisse une trace.",
    description:
      "PML enregistre des traces d'exécution complètes — séquences d'outils, latences, chemins d'erreur. SHGAT extrait les patterns de pertinence depuis ces données. Déterministe, inspectable, pas de boîte noire.",
    features: [
      {
        icon: "hub",
        title: "Traces d'Exécution",
        desc:
          "Chaque workflow est entièrement tracé : appels d'outils, entrées, sorties, timing, coûts. Les données restent sur votre infrastructure.",
      },
      {
        icon: "auto_awesome",
        title: "Scoring par Attention sur Graphe",
        desc:
          "SHGAT traite les données de traces pour scorer la pertinence des outils. Attention K-head sur la hiérarchie d'hypergraphe. Aucun appel LLM.",
      },
      {
        icon: "recommend",
        title: "Patterns de Co-occurrence",
        desc:
          "Les outils fréquemment exécutés ensemble émergent automatiquement. Co-occurrence statistique, pas de devinettes.",
      },
    ],
  },

  // ========================================
  // ENGINE (additional sections)
  // ========================================
  engineLinks: {
    title: "Partie de",
    titleAccent: "l'Ecosysteme PML",
    subtitle: "Le moteur tourne dans PML. Auto-heberge, open source, aucun appel API externe.",
    jsrLabel: "JSR",
    githubLabel: "GitHub",
    docsLabel: "Docs",
    pmlLabel: "PML",
    builtWith: "Construit avec",
  },
  engineBenchmarks: {
    title: "Des Chiffres,",
    titleAccent: "Mesurables",
    subtitle: "Benchmarke sur 920 noeuds sur 1 165 classes de vocabulaire. Toutes les metriques proviennent de traces de production, 24 notebooks de recherche.",
    cards: [
      {
        icon: "hub",
        title: "SHGAT-TF",
        rows: [
          ["Hit@1", "66.1%"],
          ["Hierarchie", "L0 (920) \u2192 L1 (26) \u2192 L2"],
          ["Tetes d'attention", "16 \u00d7 64D"],
          ["Entrainement", "InfoNCE + PER"],
        ],
      },
      {
        icon: "psychology",
        title: "GRU Sequencer",
        rows: [
          ["Hit@1 Global", "57.6%"],
          ["Hit@1 Tool", "37.2%"],
          ["Hit@1 Cap", "82.3%"],
          ["Parametres", "258K"],
        ],
      },
      {
        icon: "stacks",
        title: "Pipeline E2E",
        rows: [
          ["Beam First-N", "70.8%"],
          ["Gain SHGAT", "+6.2pp"],
          ["Largeur beam", "4"],
          ["Taille vocab", "1 165"],
        ],
      },
    ],
  },
  engineHowItWorks: {
    title: "De l'Intent aux",
    titleAccent: "Outils Classes",
    subtitle:
      "Un modele, un pipeline. SHGAT score la pertinence des outils sur toute la hierarchie, puis le DAG executor lance les mieux classes.",
    steps: [
      { icon: "search", label: "Intent", sublabel: "requete", type: "incoming" },
      { icon: "text_fields", label: "Embedding", sublabel: "BGE-M3 1024D", type: "" },
      { icon: "hub", label: "Score SHGAT", sublabel: "K-head \u00d7 16", type: "" },
      { icon: "format_list_numbered", label: "Classement", sublabel: "top-K outils", type: "" },
      { icon: "play_arrow", label: "Executer", sublabel: "DAG runner", type: "handler" },
    ],
  },

  // ========================================
  // MCP-SERVER (additional sections)
  // ========================================
  mcpServerComparison: {
    title: "SDK vs",
    titleAccent: "Framework",
    subtitle: "Le SDK officiel donne le protocole. Ceci donne le stack de production.",
    colSdk: "SDK Officiel",
    colFramework: "@casys/mcp-server",
    rows: [
      ["Protocole MCP", true, true],
      ["Pipeline middleware", false, true],
      ["Auth OAuth2 / JWT", false, true],
      ["Rate limiting", false, true],
      ["Validation de schema", false, true],
      ["Streamable HTTP + SSE", "Manuel", "Integre"],
      ["Controle de concurrence", false, true],
      ["Tracing OpenTelemetry", false, true],
      ["Metriques Prometheus", false, true],
      ["MCP Apps (UI resources)", "Manuel", "Integre"],
      ["Allowlist CORS", false, true],
      ["Limite taille body (413)", false, true],
      ["Rate limit IP (429)", false, true],
      ["Propagation session", false, true],
      ["Signature HMAC messages", false, true],
      ["Injection CSP", false, true],
      ["Config YAML + Env", false, true],
      ["Deno + Node.js", "Node uniquement", "Les deux"],
    ],
  },
  mcpServerFeatures: {
    title: "Tout",
    titleAccent: "Inclus",
    subtitle: "Tout ce qui se passe entre la requete et votre handler -- c'est gere.",
    features: [
      { icon: "swap_horiz", name: "Double Transport", desc: "STDIO + HTTP Streamable. Meme code." },
      { icon: "layers", name: "Pipeline Middleware", desc: "Modele onion composable, a la Koa." },
      { icon: "shield", name: "Auth OAuth2", desc: "JWT/Bearer + metadonnees RFC 9728." },
      { icon: "key", name: "Presets OIDC", desc: "GitHub, Google, Auth0 -- une ligne." },
      {
        icon: "settings",
        name: "Config YAML + Env",
        desc: "Fichier config, override env au deploy.",
      },
      { icon: "speed", name: "Concurrence", desc: "Backpressure : sleep, queue ou reject." },
      { icon: "timer", name: "Rate Limiting", desc: "Fenetre glissante, isolation par client." },
      {
        icon: "check_circle",
        name: "Validation Schema",
        desc: "JSON Schema via ajv a l'enregistrement.",
      },
      { icon: "monitoring", name: "Observabilite", desc: "Spans OTel + Prometheus /metrics." },
      { icon: "widgets", name: "MCP Apps", desc: "UIs interactives via le scheme ui://." },
      {
        icon: "lock",
        name: "Allowlist CORS",
        desc: "Allowlist d'origines avec avertissement wildcard.",
      },
      { icon: "upload_file", name: "Limite Body", desc: "maxBodyBytes avec erreur 413 JSON-RPC." },
      {
        icon: "block",
        name: "Rate Limit IP",
        desc: "429 par IP + Retry-After sur la couche HTTP.",
      },
      {
        icon: "badge",
        name: "Propagation Session",
        desc: "sessionId injecte dans le contexte middleware.",
      },
      {
        icon: "enhanced_encryption",
        name: "Signature HMAC",
        desc: "SHA-256 sign/verify + anti-replay pour PostMessage.",
      },
      {
        icon: "security",
        name: "Injection CSP",
        desc: "Content-Security-Policy auto-injecte dans les MCP Apps.",
      },
    ],
  },
  mcpServerPipeline: {
    title: "Votre Serveur,",
    titleAccent: "Vos Regles",
    subtitle:
      "Chaque requete traverse une chaine middleware composable. Besoin d'auth ? Ajoutez-la. Rate limiting ? Une ligne. Logique custom ? Glissez-la ou vous voulez.",
    steps: [
      { icon: "arrow_forward", label: "Requete", type: "incoming" },
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
    title: "5 Lignes vers la",
    titleAccent: "Prod",
    subtitle:
      "Pas de boilerplate. Pas de ceremonie de config. Enregistrez un tool, appelez start(), livrez.",
    tabBasic: "Basique (STDIO)",
    tabHttp: "HTTP + Auth",
    tabYaml: "Config YAML",
  },

  // ========================================
  // MCP-STD (additional sections)
  // ========================================
  mcpStdQuickStart: {
    title: "3 Lignes vers la",
    titleAccent: "Prod",
    subtitle:
      "Utilisez-le comme serveur MCP autonome ou importez les outils individuellement comme librairie. A vous de choisir.",
    tabServer: "Serveur MCP",
    tabLibrary: "Librairie",
    tabCategory: "Par Cat\u00e9gorie",
  },
  mcpStdCategories: {
    title: "29",
    titleAccent: "Categories",
    subtitle:
      "Des requetes base de donnees a l'orchestration d'agents IA, chaque outil organise et pret a l'emploi.",
    cta: "Parcourir les 508 outils",
  },

  // ========================================
  // ENGINE - SHGAT Section
  // ========================================
  engineShgat: {
    eyebrow: "SHGAT-TF",
    titleLine1: "SuperHyperGraph",
    titleLine2: "Attention Networks",
    description:
      "Pourquoi un hypergraphe ? Les graphes classiques modelisent des relations par paires (outil A appelle outil B). Les hypergraphes modelisent le N-vers-N : un composite regroupe plusieurs leaves, un leaf appartient a plusieurs composites. Ca capture la vraie structure des ecosystemes d'outils agentiques.",
    features: [
      {
        icon: "hub",
        title: "Attention K-Head (16 \u00d7 64D)",
        desc:
          "Chaque tete capture un signal de pertinence different \u2014 co-occurrence, recence, recuperation d'erreur, taux de succes. Les tetes sont combinees via des poids de fusion appris.",
      },
      {
        icon: "account_tree",
        title: "Message Passing Multi-Niveaux",
        desc:
          "L0 : 218 leaves (outils). L1 : 26 composites. L2 : meta-composites. Le contexte propage de bas en haut puis de haut en bas. Un leaf herite de la pertinence de composites soeurs avec lesquels il n'a jamais ete appaire.",
      },
      {
        icon: "trending_up",
        title: "Perte Contrastive InfoNCE",
        desc:
          "Entrainement avec annealing de temperature (0.10 \u2192 0.06), negatives difficiles et replay d'experience prioritise. Hit@3 atteint 86.3% sur 644 noeuds.",
      },
      {
        icon: "model_training",
        title: "Entrainement Inclus",
        desc:
          "SHGAT-TF s'entraine depuis les traces de production \u2014 aucun service externe, aucun GPU requis. libtensorflow FFI tourne nativement via Deno.dlopen. Autonome.",
      },
    ],
    evidenceTitle: "Preuves Experimentales",
    evidenceSubtitle: "24 notebooks, 41 visualisations. Experiences reproductibles.",
    residualCaption: "Balayage des poids residuels : Hit@1 sur differentes configurations residuelles.",
    pcaCaption: "PCA 3 panneaux : embeddings bruts vs message-passing seul vs residuel V\u2192E complet.",
    gammaCaption: "\u03B3(n) adaptatif = \u03C3(a\u00B7log(n+1)+b) apprend des poids residuels par noeud bases sur le fan-out. Contribution originale \u2014 aucun precedent dans la litterature GNN.",
  },

  // ========================================
  // ABOUT PAGE
  // ========================================
  about: {
    pageTitle: "\u00c0 propos",
    heroName: "Erwan Lee Pesle",
    heroTitle: "Fondateur & Architecte Syst\u00e8me, Casys",
    heroBio:
      "Nous construisons des syst\u00e8mes qui connectent la connaissance \u00e0 l'action depuis plus de quinze ans \u2014 des premiers chatbots sur mIRC au knowledge management en entreprise, jusqu'aux r\u00e9seaux d'attention sur graphes pour la pertinence des outils. Quand les LLM sont arriv\u00e9s, le probl\u00e8me n'a pas chang\u00e9 : contexte en entr\u00e9e, action en sortie. MCP est l'expression la plus r\u00e9cente de ce principe, et la plus cons\u00e9quente. Casys AI aide les \u00e9quipes techniques \u00e0 livrer des int\u00e9grations IA fiables \u2014 sans d\u00e9pendance fournisseur, sans bo\u00eete noire.",
    expertiseTitle: "Ce que nous faisons",
    expertiseSubtitle:
      "L'infrastructure qui connecte les syst\u00e8mes IA aux donn\u00e9es, outils et workflows m\u00e9tier \u2014 con\u00e7ue pour l'observabilit\u00e9 et le d\u00e9terminisme en production.",
    areas: [
      {
        icon: "hub",
        title: "Graphes de Connaissances",
        description:
          "Conception de sch\u00e9mas, optimisation de requ\u00eates et architectures graph-native. Neo4j Professional Developer certifi\u00e9. De la mod\u00e9lisation d'ontologies aux pipelines graphe en production.",
      },
      {
        icon: "database",
        title: "Bases de Donn\u00e9es Graphe",
        description:
          "Mod\u00e9liser les relations complexes que les bases relationnelles ne peuvent pas exprimer. Nous concevons, d\u00e9ployons et optimisons des instances Neo4j en production.",
      },
      {
        icon: "smart_toy",
        title: "Syst\u00e8mes Agentiques",
        description:
          "Orchestration d'outils, routage de contexte et fiabilit\u00e9 d'ex\u00e9cution. Nous architecturons des syst\u00e8mes multi-agents o\u00f9 chaque d\u00e9cision est tra\u00e7able et chaque erreur r\u00e9cup\u00e9rable.",
      },
      {
        icon: "cable",
        title: "Infrastructure MCP",
        description:
          "Architecture serveur, conception de connecteurs et optimisation au niveau protocole. Plus de 500 outils open source livr\u00e9s. Nous construisons des couches MCP observables, testables et pr\u00eates pour la production.",
      },
    ],
    philosophyTitle: "Comment nous travaillons",
    principles: [
      {
        icon: "code",
        title: "L'Open Source comme fondation",
        description:
          "Nos outils fondamentaux sont open source. Les clients obtiennent des solutions construites sur du code qu'ils peuvent inspecter, forker et poss\u00e9der. Sans d\u00e9pendance fournisseur, sans bo\u00eete noire.",
      },
      {
        icon: "science",
        title: "Recherche qui livre",
        description:
          "Nous publions ce que nous apprenons et livrons ce que nous construisons. Chaque technique que nous recommandons a \u00e9t\u00e9 test\u00e9e en production.",
      },
      {
        icon: "emoji_objects",
        title: "Ing\u00e9nierie, pas marketing",
        description:
          "Nous r\u00e9solvons des probl\u00e8mes d'infrastructure sp\u00e9cifiques avec des m\u00e9thodes d'ing\u00e9nierie sp\u00e9cifiques. Le travail parle de lui-m\u00eame.",
      },
    ],
    ctaTitle: "Commencez par un probl\u00e8me",
    ctaSubtitle:
      "D\u00e9crivez votre d\u00e9fi d'infrastructure MCP, votre goulet d'\u00e9tranglement en graphes de connaissances ou votre question d'architecture agentique. Nous vous dirons franchement si nous pouvons aider \u2014 et exactement comment nous aborderions le probl\u00e8me.",
    ctaPrimary: {
      text: "Nous Contacter",
      url: "/fr/#contact",
      icon: "mail",
    },
    ctaSecondary: {
      text: "Voir les Projets",
      url: "/fr/use-cases",
      icon: "folder_open",
    },
  },

  // ========================================
  // SUBSITE: MCP-BRIDGE
  // ========================================
  mcpBridgeHero: {
    tagline: "MCP Apps \u2192 Plateformes Messagerie",
    heroTitle1: "Vos MCP Apps sur",
    heroTitle2: "2 Mrd d'Utilisateurs",
    heroSubtitle:
      "Transformez n'importe quelle MCP App en Telegram Mini App. Zéro changement de code. Même outil, nouvelle audience.",
    statTests: "Tests au vert",
    statPlatforms: "Plateforme",
    statRelease: "Derniere",
    ctaPrimary: "Commencer",
    ctaSecondary: "Voir sur JSR",
    ctaDocs: "Documentation",
  },
  mcpBridgeFeatures: {
    title: "Comblez le",
    titleAccent: "Fosse",
    subtitle:
      "Tout ce qu'il faut pour emmener vos MCP Apps des outils dev vers les plateformes de messagerie.",
    features: [
      {
        icon: "code_off",
        name: "Zero Changement",
        desc: "Les MCP Apps existantes fonctionnent telles quelles.",
      },
      {
        icon: "layers",
        name: "Architecture 3 Couches",
        desc: "Client, Resource Server, MCP Server.",
      },
      {
        icon: "swap_horiz",
        name: "Traduction Protocole",
        desc: "JSON-RPC 2.0 via WebSocket, transparent.",
      },
      { icon: "smart_toy", name: "Telegram Mini Apps", desc: "Theme, viewport, auth complets." },
      {
        icon: "more_horiz",
        name: "Plus de plateformes",
        desc: "LINE, Discord, WhatsApp — bientôt.",
      },
      { icon: "shield", name: "CSP Stricte", desc: "Content-Security-Policy stricte par defaut." },
      { icon: "key", name: "Auth par Session", desc: "Tokens crypto-securises, validation HMAC." },
      {
        icon: "sync",
        name: "Transport WebSocket",
        desc: "Communication bidirectionnelle temps reel.",
      },
      {
        icon: "palette",
        name: "Mapping Themes",
        desc: "Themes plateforme mappes automatiquement.",
      },
      {
        icon: "extension",
        name: "Adaptateurs Extensibles",
        desc: "Ajoutez Discord, WhatsApp ou autre.",
      },
    ],
  },
  mcpBridgeArchitecture: {
    title: "Comment \u00e7a",
    titleAccent: "Marche",
    subtitle:
      "Le bridge intercepte les appels postMessage de votre MCP App, les route via WebSocket au Resource Server, qui transmet les appels d'outils a votre serveur MCP inchange.",
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
    title: "Int\u00e9gration Custom vs",
    titleAccent: "Bridge",
    subtitle: "Economisez des mois de travail d'integration. Le bridge gere les parties complexes.",
    colCustom: "Int\u00e9gration Manuelle",
    colBridge: "@casys/mcp-bridge",
    rows: [
      ["Changements de code MCP App", "R\u00e9\u00e9criture requise", "Aucun"],
      ["Auth plateforme (Telegram)", "HMAC manuel", "Inclus"],
      ["Content Security Policy", "Headers manuels", "Auto-g\u00e9n\u00e9r\u00e9"],
      ["Gestion WebSocket", "De z\u00e9ro", "Inclus"],
      ["Synchronisation theme", "Mapping manuel", "Automatique"],
      ["Support multi-plateforme", "Code par plateforme", "Pattern adaptateur"],
      ["Gestion des sessions", "Impl\u00e9mentation custom", "Crypto-s\u00e9curis\u00e9"],
      ["Injection HTML (bridge.js)", "N/A", "Automatique"],
    ],
  },
  mcpBridgeQuickStart: {
    title: "D\u00e9ployez sur",
    titleAccent: "Telegram",
    subtitle:
      "Votre MCP App dans Telegram en trois etapes. Aucun changement a votre code existant.",
    tabTelegram: "Telegram",
    tabLine: "LINE",
  },
  mcpBridgeInstall: {
    title: "Pret",
    titleAccent: "Quand Vous l'Etes",
    subtitle:
      "Une commande. Compatible Deno et Node.js. Publie sur JSR, le registre JavaScript moderne.",
    jsrLabel: "Registre JSR",
    githubLabel: "GitHub",
    docsLabel: "Documentation",
    builtWith: "Construit avec",
  },

  // ========================================
  // USE CASES PAGE
  // ========================================
  useCases: {
    pageTitle: "Cas d'Usage en Production",
    heroTitle: "Cas d'Usage en Production",
    heroSubtitle:
      "Infrastructure MCP pour la production. Voici ce que ça donne — défis, solutions, métriques.",
    labelChallenge: "Défi",
    labelApproach: "Solution",
    labelResult: "Résultat",
    labelStack: "Stack",
    ctaTitle: "Un défi similaire ?",
    ctaSubtitle:
      "Décrivez votre défi d'infrastructure MCP. On vous dit franchement si on peut aider — et exactement comment on aborderait le problème.",
    ctaPrimary: { text: "Nous Contacter", url: "/fr/#contact", icon: "mail" },
    ctaSecondary: { text: "Voir les Projets", url: "/fr/use-cases", icon: "folder_open" },
  },
};
