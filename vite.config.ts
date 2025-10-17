import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import reactsvgr from "vite-plugin-svgr";
import ViteSitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    reactsvgr(),
    react(),
    tailwindcss(),
    ViteSitemap({
      hostname: 'https://kretostan.com',
      outDir: 'dist',
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  }
})
