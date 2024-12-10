import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
})
=======
  resolve: {
    alias: {
      "bootstrap-icons": "/node_modules/bootstrap-icons/",
    },
  },
});
>>>>>>> feat/landingpage
