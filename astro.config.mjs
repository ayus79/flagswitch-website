import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://flagswitch.ayushcon2000.workers.dev',
  // base: '/flagswitch-website/',
  integrations: [tailwind()],
  output: 'static',
});