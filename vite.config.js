// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "bootstrap-icons": "/node_modules/bootstrap-icons/",
       '@components': '/src/components',
      '@assets': '/src/assets'
    },
    server: {
      proxy: {
        '/api': {
          target: 'https://lokajatim.org',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
  },
  },
})
