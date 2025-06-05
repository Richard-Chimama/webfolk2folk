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
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into separate chunks
          'react-vendor': ['react', 'react-dom'],
          'mui-vendor': ['@mui/joy', '@mui/material', '@mui/icons-material'],
          // Keep other vendor libraries together
          'vendor': ['@emotion/react', '@emotion/styled']
        }
      }
    }
  },
  server: {
    port: PORT,
    host: '0.0.0.0'
  },
  preview: {
    port: PORT,
    host: '0.0.0.0',
    allowedHosts: ["www.folktfolk.se", "*"],
  },
})
