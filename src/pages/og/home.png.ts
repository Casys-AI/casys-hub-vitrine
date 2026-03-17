// @ts-nocheck
/**
 * OG Image for Casys.ai homepage
 * Route: /og/home.png (1200x630)
 */

import type { APIRoute } from 'astro';
import { generateOgImage } from './_shared';

export const GET: APIRoute = async () => {
  return generateOgImage({
    type: 'div',
    props: {
      style: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#0a0908',
        padding: '60px',
        position: 'relative',
      },
      children: [
        // Background gradient
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage:
                'radial-gradient(circle at 20% 80%, rgba(255, 184, 111, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(167, 139, 250, 0.06) 0%, transparent 50%)',
            },
          },
        },
        // Top: Logo + brand
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              alignItems: 'center',
              marginBottom: '40px',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundImage: 'linear-gradient(to right, #000000, #6e5e6e, #dbbddb)',
                    marginRight: '16px',
                  },
                },
              },
              {
                type: 'span',
                props: {
                  style: { fontSize: '32px', fontWeight: 700, color: '#FFB86F' },
                  children: 'Casys',
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
                    fontSize: '18px',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#FFB86F',
                    marginBottom: '18px',
                  },
                  children: 'Agentic AI Integrator',
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '70px',
                    fontWeight: 700,
                    color: '#f5f0ea',
                    lineHeight: 1.02,
                    marginBottom: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  },
                  children: [
                    {
                      type: 'span',
                      props: { children: 'We wire AI' },
                    },
                    {
                      type: 'span',
                      props: { children: 'into your business' },
                    },
                  ],
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '26px',
                    color: '#d5c3b5',
                    lineHeight: 1.4,
                    maxWidth: '900px',
                  },
                  children:
                    'AI agents wired into your ERP, CRM, and internal tools. Observable stack, open source, already in production.',
                },
              },
            ],
          },
        },
        // Bottom bar
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid rgba(255, 184, 111, 0.2)',
              paddingTop: '24px',
            },
            children: [
              {
                type: 'span',
                props: {
                  style: { fontSize: '18px', color: '#888' },
                  children: 'ERP · CRM · Internal tools · Observable stack',
                },
              },
              {
                type: 'span',
                props: {
                  style: { fontSize: '18px', color: '#FFB86F' },
                  children: 'casys.ai',
                },
              },
            ],
          },
        },
      ],
    },
  });
};
