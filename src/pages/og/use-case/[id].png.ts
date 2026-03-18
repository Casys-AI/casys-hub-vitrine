// @ts-nocheck
/**
 * OG / thumbnail image for each use case
 * Route: /og/use-case/[id].png (1200x630)
 * Light mode — matches the site's light theme
 */

import type { APIRoute, GetStaticPaths } from 'astro';
import { generateOgImage } from '../_shared';
import { useCases } from '../../../content/use-cases';
import fs from 'node:fs';
import { join } from 'node:path';

const logoSvg = fs.readFileSync(join(process.cwd(), 'public/icons/logo.svg'));
const logoDataUri = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString('base64')}`;

const locales = ['en', 'fr', 'zh', 'zh-TW'] as const;

export const getStaticPaths: GetStaticPaths = () => {
  const paths = [];
  for (const uc of useCases) {
    // English: backward-compatible path (no suffix)
    paths.push({ params: { id: uc.id }, props: { locale: 'en' } });
    // Other locales: suffixed path
    for (const loc of locales) {
      if (loc === 'en') continue;
      paths.push({ params: { id: `${uc.id}-${loc}` }, props: { locale: loc } });
    }
  }
  return paths;
};

const tagColors: Record<string, { bg: string; fg: string; accent: string }> = {
  'MCP Apps': { bg: '#f3e8ff', fg: '#6b21a8', accent: '#9333ea' },
  'MCP Engine': { bg: '#dbeafe', fg: '#1e40af', accent: '#3b82f6' },
  'Knowledge Graph': { bg: '#fef3c7', fg: '#92400e', accent: '#f59e0b' },
  'MCP ERPNext': { bg: '#d1fae5', fg: '#065f46', accent: '#10b981' },
  'MCP E-Invoice': { bg: '#fce7f3', fg: '#9d174d', accent: '#ec4899' },
};

export const GET: APIRoute = async ({ params, props }) => {
  const locale = (props as any).locale || 'en';
  // Strip locale suffix to find the use case
  const baseId = params.id!.replace(/-(?:fr|zh|zh-TW)$/, '');
  const uc = useCases.find((u) => u.id === baseId);
  if (!uc) return new Response('Not found', { status: 404 });

  const colors = tagColors[uc.tag] || { bg: '#f3e8ff', fg: '#6b21a8', accent: '#9333ea' };
  const title = uc.title[locale] || uc.title.en;
  const punchline = uc.punchline[locale] || uc.punchline.en;

  return generateOgImage({
    type: 'div',
    props: {
      style: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#faf9f6',
        padding: '60px',
        position: 'relative',
      },
      children: [
        // Subtle gradient
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `radial-gradient(circle at 80% 20%, ${colors.accent}15 0%, transparent 50%), radial-gradient(circle at 20% 80%, #80008010 0%, transparent 50%)`,
            },
          },
        },
        // Top: Logo + tag
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '40px',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: { display: 'flex', alignItems: 'center' },
                  children: [
                    {
                      type: 'img',
                      props: {
                        src: logoDataUri,
                        width: 40,
                        height: 40,
                        style: { marginRight: '14px' },
                      },
                    },
                    {
                      type: 'span',
                      props: {
                        style: { fontSize: '28px', fontWeight: 700, color: '#2a2520' },
                        children: 'Casys',
                      },
                    },
                  ],
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    backgroundColor: colors.bg,
                    color: colors.fg,
                    padding: '8px 18px',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  },
                  children: uc.tag,
                },
              },
            ],
          },
        },
        // Main content
        {
          type: 'div',
          props: {
            style: {
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '56px',
                    fontWeight: 700,
                    color: '#1a1a1a',
                    lineHeight: 1.1,
                    marginBottom: '24px',
                    maxWidth: '1000px',
                  },
                  children: title,
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '24px',
                    color: '#666',
                    lineHeight: 1.5,
                    maxWidth: '800px',
                    fontStyle: 'italic',
                  },
                  children: `"${punchline}"`,
                },
              },
            ],
          },
        },
        // Bottom: stack chips
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
              borderTop: '1px solid #e5e0db',
              paddingTop: '24px',
            },
            children: uc.stack.slice(0, 5).map((s) => ({
              type: 'div',
              props: {
                style: {
                  backgroundColor: '#f0ede8',
                  color: '#555',
                  padding: '6px 14px',
                  borderRadius: '6px',
                  fontSize: '15px',
                  fontWeight: 600,
                },
                children: s,
              },
            })),
          },
        },
      ],
    },
  });
};
