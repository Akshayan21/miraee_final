import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const sourceRoot = join(process.cwd(), 'src');
const imageUsages = new Map();

function record(source, file) {
  if (/logo/i.test(source)) return;
  const files = imageUsages.get(source) ?? [];
  files.push(file);
  imageUsages.set(source, files);
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return walk(path);
    if (!/\.(?:tsx|ts)$/.test(entry.name) || path.replaceAll('\\', '/').endsWith('/content/photography.ts')) return;

    const contents = await readFile(path, 'utf8');
    const file = relative(process.cwd(), path).replaceAll('\\', '/');

    for (const match of contents.matchAll(/photography\[['"]([^'"]+)['"]\]/g)) record(`photography:${match[1]}`, file);
    for (const match of contents.matchAll(/from\s+['"](@\/assets\/[^'"]+)['"]/g)) record(`asset:${match[1]}`, file);
    for (const match of contents.matchAll(/https:\/\/images\.unsplash\.com\/[^'"\s)]+/g)) record(`remote:${match[0]}`, file);
  }));
}

await walk(sourceRoot);

const duplicates = [...imageUsages.entries()].filter(([, files]) => files.length > 1);
if (duplicates.length) {
  console.error('Duplicate non-logo image sources found:');
  for (const [source, files] of duplicates) console.error(`- ${source}\n  ${files.join('\n  ')}`);
  process.exitCode = 1;
} else {
  console.log(`Image audit passed: ${imageUsages.size} non-logo image sources are each used once.`);
}
