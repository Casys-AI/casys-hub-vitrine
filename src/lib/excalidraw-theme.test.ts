import { describe, expect, it } from 'vitest';
import { transformExcalidrawSvg } from './excalidraw-theme';

describe('transformExcalidrawSvg', () => {
  it('marks background rects even when the export omits x/y coordinates', () => {
    const input = `<svg width="720" height="400" viewBox="0 0 720 400"><rect width="720" height="400" fill="#08080a" rx="8"/><text fill="#e5e5e5">Title</text></svg>`;

    const output = transformExcalidrawSvg(input);

    expect(output).toContain('<svg viewBox="0 0 720 400">');
    expect(output).toContain('class="excali-bg"');
    expect(output).toContain('fill="#08080a"');
  });

  it('maps the unhandled palette used by MCP ecosystem diagrams into theme classes', () => {
    const input = `<svg viewBox="0 0 10 10">
      <rect fill="#1e1b4b" stroke="#6366f1" />
      <text fill="#a5b4fc">Client</text>
      <text fill="#888888">Label</text>
    </svg>`;

    const output = transformExcalidrawSvg(input);

    expect(output).toContain('class="excali-indigo-card excali-indigo-accent-stroke" fill="#1e1b4b" stroke="#6366f1"');
    expect(output).toContain('class="excali-indigo-accent-fill" fill="#a5b4fc"');
    expect(output).toContain('class="excali-mid-gray-fill" fill="#888888"');
  });
});
