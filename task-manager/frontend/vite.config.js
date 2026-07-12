import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [tailwindcss(), react()],
  BASE: process.env.VITE_BASE_PATH || "/task-manager/frontend",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})