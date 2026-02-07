// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      cssCodeSplit: true,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // Separar vendor chunks más granularmente
            if (id.includes('node_modules')) {
              if (id.includes('astro')) {
                return 'vendor-astro';
              }
              return 'vendor';
            }
          },
          // Optimizar nombres de archivos para mejor cacheo
          chunkFileNames: '_assets/chunks/[name]-[hash].js',
          entryFileNames: '_assets/entry-[hash].js',
          assetFileNames: '_assets/[name]-[hash][extname]',
        },
      },
    },
  },
  compressHTML: true,
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
    domains: [],
    remotePatterns: [],
  },
});