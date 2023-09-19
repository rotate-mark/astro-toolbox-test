import { netlifyStatic } from '@astrojs/netlify'
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  adapter: netlifyStatic(),
  compressHTML: true,
});