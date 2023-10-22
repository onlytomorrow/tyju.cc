import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";
import swup from '@swup/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [swup({
    theme:'fade',
    containers: ['#swup', '#heading'],
  })],
  output: "server",
  adapter: vercel()
});