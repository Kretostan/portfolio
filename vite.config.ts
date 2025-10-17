import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import reactsvgr from "vite-plugin-svgr";
import ViteSitemap from "vite-plugin-sitemap";
import viteImagemin from "vite-plugin-imagemin";
import {ViteImageOptimizer} from "vite-plugin-image-optimizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    reactsvgr(),
    react(),
    tailwindcss(),
    viteImagemin({
      webp: { quality: 75 },
    }),
    ViteImageOptimizer({
      webp: { quality: 75 },
    }),
    ViteSitemap({
      hostname: 'https://kretostan.com',
      outDir: 'dist',
    }),
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  }
})
