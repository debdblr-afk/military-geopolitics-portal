import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://iskander.dbdd.in',
  output: 'static',
  build: {
    format: 'directory'
  }
});
