// @ts-check
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://casys.ai',
  trailingSlash: 'never',

  // Déploiement Vercel (autorise SSR si nécessaire, majoritairement statique)
  adapter: vercel(),

  // i18n: anglais par défaut, français en préfixe (/fr)
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'zh', 'zh-TW'],
  },

  integrations: [
    starlight({
      title: 'Casys Docs',
      description: 'Documentation for Casys open-source packages: @casys/mcp-server, @casys/mcp-bridge, and @casys/mcp-compose.',
      logo: {
        light: './src/assets/casys-logo-light.svg',
        dark: './src/assets/casys-logo-dark.svg',
        replacesTitle: false,
      },
      expressiveCode: {
        themes: ['vitesse-dark', 'vitesse-light'],
        styleOverrides: {
          borderRadius: '10px',
        },
      },
      customCss: ['./src/styles/starlight-custom.css'],
      head: [],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/Casys-AI' },
      ],
      sidebar: [
        {
          label: '@casys/mcp-server',
          collapsed: false,
          items: [
            {
              label: 'Getting Started',
              items: [
                { label: 'Introduction', slug: 'docs/getting-started/introduction' },
                { label: 'Installation', slug: 'docs/getting-started/installation' },
                { label: 'Quick Start', slug: 'docs/getting-started/quickstart' },
              ],
            },
            {
              label: 'Guides',
              items: [
                { label: 'Middleware Pipeline', slug: 'docs/guides/middleware' },
                { label: 'Authentication (OAuth2)', slug: 'docs/guides/auth' },
                { label: 'Configuration (YAML)', slug: 'docs/guides/configuration' },
                { label: 'MCP Apps (UI Resources)', slug: 'docs/guides/mcp-apps' },
              ],
            },
            {
              label: 'API Reference',
              items: [
                { label: 'McpApp', slug: 'docs/api/concurrent-mcp-server' },
                { label: 'Auth Providers', slug: 'docs/api/auth-providers' },
                { label: 'Standalone Components', slug: 'docs/api/standalone-components' },
              ],
            },
          ],
        },
        {
          label: '@casys/mcp-bridge',
          collapsed: false,
          items: [
            {
              label: 'Getting Started',
              items: [
                { label: 'Introduction', slug: 'docs/mcp-bridge/introduction' },
                { label: 'Quick Start', slug: 'docs/mcp-bridge/quickstart' },
              ],
            },
            {
              label: 'Guides',
              items: [
                { label: 'Architecture', slug: 'docs/mcp-bridge/architecture' },
                { label: 'Telegram Adapter', slug: 'docs/mcp-bridge/telegram' },
                { label: 'LINE Adapter', slug: 'docs/mcp-bridge/line', badge: { text: 'Partial', variant: 'caution' } },
                { label: 'Security Model', slug: 'docs/mcp-bridge/security' },
              ],
            },
            {
              label: 'API Reference',
              items: [
                { label: 'Resource Server', slug: 'docs/mcp-bridge/api-resource-server' },
                { label: 'Bridge Client', slug: 'docs/mcp-bridge/api-bridge-client' },
              ],
            },
          ],
        },
        {
          label: '@casys/mcp-compose',
          collapsed: false,
          items: [
            {
              label: 'Getting Started',
              items: [
                { label: 'Introduction', slug: 'docs/mcp-compose/introduction' },
                { label: 'Quick Start', slug: 'docs/mcp-compose/quickstart' },
              ],
            },
            {
              label: 'Guides',
              items: [
                { label: 'Collector', slug: 'docs/mcp-compose/collector' },
                { label: 'Composer & Layouts', slug: 'docs/mcp-compose/composer' },
                { label: 'Renderer', slug: 'docs/mcp-compose/renderer' },
                { label: 'Sync Rules', slug: 'docs/mcp-compose/sync-rules' },
              ],
            },
            {
              label: 'API Reference',
              items: [
                { label: 'Full API', slug: 'docs/mcp-compose/api-reference' },
              ],
            },
          ],
        },
      ],
    }),
    mdx({
      // Configuration MDX pour Astro
      extendMarkdownConfig: true,
    }),
    preact({ include: ['**/islands/catalog/**'] }),
    icon()
  ],

  // Configuration pour les articles MDX
  markdown: {
    // Activer la coloration syntaxique
    syntaxHighlight: {
      type: 'shiki',
      excludeLangs: ['mermaid', 'math'],
    },
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
    // Mermaid est géré par l'intégration @astrojs/mermaid
  },

  vite: {
    clearScreen: false, // Ne pas nettoyer l'écran pour conserver l'historique des logs
    define: {
      // Expose CASYS_API_URL au client (aligné avec .env racine)
      'import.meta.env.CASYS_API_URL': JSON.stringify(process.env.CASYS_API_URL ?? 'http://localhost:3003'),
    },
    resolve: {
      alias: {
        '~': new URL('./src', import.meta.url).pathname,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // Allow SCSS @use to resolve from src/styles directory
          includePaths: [new URL('./src/styles', import.meta.url).pathname],
        },
      },
    },
    // Proxy API calls to backend during development
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3003',
          changeOrigin: true,
          secure: false,
        },
      },
    },
  },
});