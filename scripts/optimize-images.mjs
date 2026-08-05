/**
 * Regenerates responsive WebP/JPEG (+ AVIF) variants from source photos.
 * Usage: node scripts/optimize-images.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const outDir = 'public/images';

async function variants(src, basename, widths, { quality = 76 } = {}) {
  if (!fs.existsSync(src)) {
    console.warn('skip missing', src);
    return;
  }
  for (const w of widths) {
    const pipeline = sharp(src).resize({ width: w, withoutEnlargement: true });
    const jpg = path.join(outDir, `${basename}-${w}.jpg`);
    const webp = path.join(outDir, `${basename}-${w}.webp`);
    const avif = path.join(outDir, `${basename}-${w}.avif`);
    await pipeline.clone().jpeg({ quality, mozjpeg: true }).toFile(jpg);
    await pipeline.clone().webp({ quality, effort: 4 }).toFile(webp);
    await pipeline.clone().avif({ quality: Math.max(quality - 8, 45), effort: 4 }).toFile(avif);
    console.log(
      basename,
      w,
      'jpg',
      Math.round(fs.statSync(jpg).size / 1024) + 'KB',
      'webp',
      Math.round(fs.statSync(webp).size / 1024) + 'KB',
    );
  }
}

// Expect originals under public/images/source/ if present; else current jpg masters.
const sources = {
  hero: 'public/images/source/thiago-hero.jpg',
  heroDesktop: 'public/images/source/thiago-hero-desktop.jpg',
  about: 'public/images/source/thiago-about.jpg',
  family: 'public/images/source/thiago-familia.jpg',
};

for (const [key, preferred] of Object.entries(sources)) {
  const fallback = preferred.replace('/source/', '/');
  const src = fs.existsSync(preferred) ? preferred : fallback;
  if (key === 'hero') await variants(src, 'thiago-hero', [640, 960, 1200], { quality: 76 });
  if (key === 'heroDesktop')
    await variants(src, 'thiago-hero-desktop', [1200, 1600, 2000], { quality: 74 });
  if (key === 'about') await variants(src, 'thiago-about', [320, 480, 640], { quality: 76 });
  if (key === 'family') await variants(src, 'thiago-familia', [480, 720, 960], { quality: 72 });
}

fs.copyFileSync(`${outDir}/thiago-hero-1200.jpg`, `${outDir}/thiago-hero.jpg`);
fs.copyFileSync(`${outDir}/thiago-hero-desktop-1600.jpg`, `${outDir}/thiago-hero-desktop.jpg`);
fs.copyFileSync(`${outDir}/thiago-about-640.jpg`, `${outDir}/thiago-about.jpg`);
fs.copyFileSync(`${outDir}/thiago-familia-960.jpg`, `${outDir}/thiago-familia.jpg`);
console.log('fallback jpg masters updated');
