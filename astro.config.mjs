import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://malingaprabhath7-maker.github.io',
  base: '/tourism-static',
  vite: { plugins: [tailwindcss()] },
});
