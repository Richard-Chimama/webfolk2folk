import { defineConfig } from 'vite'
import dotenv from 'dotenv'
import react from '@vitejs/plugin-react'

dotenv.config()

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 4091;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    port: PORT,
    host: '0.0.0.0'
  },
  preview: {
    port: PORT,
    host: '0.0.0.0'
  }
})
