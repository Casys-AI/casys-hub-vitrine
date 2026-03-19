import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import test from 'node:test';
import assert from 'node:assert/strict';

test('production build prepares the workspace design-system before Astro runs', () => {
  const packageJson = JSON.parse(
    readFileSync(resolve(process.cwd(), 'package.json'), 'utf8'),
  );

  const buildPipeline = [packageJson.scripts?.prebuild, packageJson.scripts?.build]
    .filter(Boolean)
    .join(' && ');

  assert.match(buildPipeline, /pnpm --filter @casys\/design-system build/);
});
