import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

describe('deployment build configuration', () => {
  it('runs the post-build patch during the standard build so Umami proxy rewrites reach .vercel/output', () => {
    const packageJsonPath = new URL('../../package.json', import.meta.url);
    const pkg = JSON.parse(readFileSync(packageJsonPath, 'utf-8')) as {
      scripts?: Record<string, string>;
    };

    expect(pkg.scripts?.build).toContain('post-build.mjs');
  });

  it('defines Umami proxy rewrites in the post-build patch for Build Output deployments', () => {
    const postBuildPath = new URL('../../scripts/post-build.mjs', import.meta.url);
    const postBuild = readFileSync(postBuildPath, 'utf-8');

    expect(postBuild).toContain("src: '^/u/script\\\\.js$'");
    expect(postBuild).toContain('https://analytics.casys.ai/script.js');
    expect(postBuild).toContain("src: '^/u/api/send$'");
    expect(postBuild).toContain('https://analytics.casys.ai/api/send');
  });
});
