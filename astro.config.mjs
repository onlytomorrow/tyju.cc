import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel";
import swup from '@swup/astro';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
    integrations: [swup({
        theme:'fade',
        containers: ['#swup', '#heading'],
    }), svelte()],
    output: "static",
    adapter: vercel()
});