import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/git_pages",
  server: {
    host: "localhost",
    port: 3000
  }
})
