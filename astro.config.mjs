// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://thiago.catiteo.com',
  build: {
    // Site CSS is small; inlining removes the render-blocking stylesheet request (PSI).
    inlineStylesheets: 'always',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
