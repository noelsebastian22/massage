// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://cloud3massagetherapy.com.au',
  vite: {
    plugins: [tailwindcss()],
  },
});
