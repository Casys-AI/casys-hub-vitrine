const fillClassMap: Record<string, string> = {
  '#1f1f23': 'excali-card-primary',
  '#2d2d35': 'excali-card',
  '#1a1a1e': 'excali-card-inner',
  '#f0ede8': 'excali-text',
  '#666666': 'excali-muted-fill',
  '#1a3a1a': 'excali-node-green',
  '#3a2a0a': 'excali-node-amber',
  '#1a2744': 'excali-node-blue',
  '#2d2044': 'excali-node-purple',
  '#3a1a2e': 'excali-node-pink',
  '#e5e5e5': 'excali-text-light',
  '#e7e5e4': 'excali-text-warm',
  '#6b7280': 'excali-gray-fill',
  '#9ca3af': 'excali-gray-light-fill',
  '#ef4444': 'excali-accent-red-fill',
  '#60a5fa': 'excali-accent-blue-fill',
  '#fbbf24': 'excali-accent-yellow-fill',
  '#4ade80': 'excali-accent-green-fill',
  '#a78bfa': 'excali-accent-purple-fill',
  '#f472b6': 'excali-accent-pink-fill',
  '#22c55e': 'excali-ce-green-fill',
  '#f59e0b': 'excali-ce-amber-fill',
  '#4a9eed': 'excali-ce-blue-fill',
  '#8b5cf6': 'excali-ce-purple-fill',
  '#06b6d4': 'excali-ce-cyan-fill',
  '#1a4d2e': 'excali-ce-card-green',
  '#1e3a5f': 'excali-ce-card-blue',
  '#5c3d1a': 'excali-ce-card-amber',
  '#2d1b69': 'excali-ce-card-purple',
  '#5c1a1a': 'excali-ce-card-red',
  '#1a4d4d': 'excali-ce-card-cyan',
  '#3d3520': 'excali-ma-card-amber',
  '#1e3d2e': 'excali-ma-card-green',
  '#3d1f1f': 'excali-ma-card-red',
  '#2d1e5e': 'excali-ma-card-purple',
  '#2a1a0a': 'excali-deep-amber-card',
  '#ffd43b': 'excali-ma-yellow-fill',
  '#69db7c': 'excali-ma-green-fill',
  '#ff6b6b': 'excali-ma-red-fill',
  '#7950f2': 'excali-ma-purple-fill',
  '#74c0fc': 'excali-ma-blue-fill',
  '#868e96': 'excali-ma-gray-fill',
  '#a5d8ff': 'excali-ma-lightblue-fill',
  '#495057': 'excali-ma-darkgray-fill',
  '#14352a': 'excali-arch-card-green',
  '#332a14': 'excali-arch-card-amber',
  '#1f1a3d': 'excali-arch-card-purple',
  '#2a1f44': 'excali-arch-card-purple-inner',
  '#1e1b4b': 'excali-indigo-card',
  '#1a1a2e': 'excali-deep-navy-card',
  '#1a1a0a': 'excali-deep-amber-card',
  '#1a0a2e': 'excali-deep-purple-card',
  '#0f2a1a': 'excali-deep-green-card',
  '#1e293b': 'excali-deep-slate-card',
  '#e2e8f0': 'excali-light-slate-fill',
  '#a5b4fc': 'excali-indigo-accent-fill',
  '#94a3b8': 'excali-slate-light-fill',
  '#64748b': 'excali-slate-fill',
  '#475569': 'excali-slate-dark-fill',
  '#888888': 'excali-mid-gray-fill',
  '#818cf8': 'excali-arch-indigo-fill',
  '#f97316': 'excali-arch-orange-fill',
  '#34d399': 'excali-arch-emerald-fill',
  'rgba(30,41,59,0.8)': 'excali-arch-footer-bg',
  'rgba(20,20,23,0.8)': 'excali-ma-footer-bg',
};

const strokeClassMap: Record<string, string> = {
  '#666666': 'excali-muted-stroke',
  '#6b7280': 'excali-gray-stroke',
  '#ef4444': 'excali-accent-red-stroke',
  '#60a5fa': 'excali-accent-blue-stroke',
  '#fbbf24': 'excali-accent-yellow-stroke',
  '#4ade80': 'excali-accent-green-stroke',
  '#a78bfa': 'excali-accent-purple-stroke',
  '#f472b6': 'excali-accent-pink-stroke',
  '#22c55e': 'excali-ce-green-stroke',
  '#f59e0b': 'excali-ce-amber-stroke',
  '#4a9eed': 'excali-ce-blue-stroke',
  '#8b5cf6': 'excali-ce-purple-stroke',
  '#06b6d4': 'excali-ce-cyan-stroke',
  '#ffd43b': 'excali-ma-yellow-stroke',
  '#69db7c': 'excali-ma-green-stroke',
  '#ff6b6b': 'excali-ma-red-stroke',
  '#7950f2': 'excali-ma-purple-stroke',
  '#74c0fc': 'excali-ma-blue-stroke',
  '#868e96': 'excali-ma-gray-stroke',
  '#495057': 'excali-ma-darkgray-stroke',
  '#475569': 'excali-arch-slate-stroke',
  '#818cf8': 'excali-arch-indigo-stroke',
  '#f97316': 'excali-arch-orange-stroke',
  '#34d399': 'excali-arch-emerald-stroke',
  '#6366f1': 'excali-indigo-accent-stroke',
  '#94a3b8': 'excali-slate-light-stroke',
  '#64748b': 'excali-slate-stroke',
  '#334155': 'excali-slate-divider-stroke',
  '#333': 'excali-divider-stroke',
  '#888888': 'excali-mid-gray-stroke',
};

function getAttr(tag: string, name: string): string | null {
  const match = tag.match(new RegExp(`\\s${name}="([^"]+)"`));
  return match?.[1] ?? null;
}

function upsertClass(tag: string, classesToAdd: string[]): string {
  if (classesToAdd.length === 0) {
    return tag;
  }

  const existing = getAttr(tag, 'class');
  const merged = Array.from(
    new Set([...(existing ? existing.split(/\s+/).filter(Boolean) : []), ...classesToAdd]),
  );

  if (existing !== null) {
    return tag.replace(/\sclass="[^"]*"/, ` class="${merged.join(' ')}"`);
  }

  return tag.replace(/^<([^\s>]+)/, `<$1 class="${merged.join(' ')}"`);
}

function stripRootDimensions(tag: string): string {
  return tag.replace(/\s(width|height)="[^"]*"/g, '');
}

export function transformExcalidrawSvg(svgContent: string): string {
  let seenBackground = false;

  const normalized = svgContent.replace(/<svg\b[^>]*>/, (tag) => stripRootDimensions(tag));

  return normalized.replace(/<[^>]+>/g, (tag) => {
    if (tag.startsWith('</') || tag.startsWith('<!') || tag.startsWith('<?')) {
      return tag;
    }

    const classes: string[] = [];
    const fill = getAttr(tag, 'fill');
    const stroke = getAttr(tag, 'stroke');

    if (!seenBackground && /^<rect\b/.test(tag) && (fill === '#08080a' || fill === '#0d1117')) {
      classes.push('excali-bg');
      seenBackground = true;
    }

    if (fill && fillClassMap[fill]) {
      classes.push(fillClassMap[fill]);
    }

    if (stroke && strokeClassMap[stroke]) {
      classes.push(strokeClassMap[stroke]);
    }

    return upsertClass(tag, classes);
  });
}
