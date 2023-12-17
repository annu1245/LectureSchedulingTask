import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port : 8000,
    proxy: {
      '/api': {
        target: 'http://0.0.0.0:3000',
      },
      '/assets': {
        target: 'http://127.0.0.1:3000',
        rewrite: (path) => path.replace(/^\/assets/, ''),
      }
    },
  },

  plugins: [react()],
})
