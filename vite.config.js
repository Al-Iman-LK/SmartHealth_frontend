import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    server: {
      port: 3000,
      open: true
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets'
    }
  }

  // Only use base path for production builds (GitHub Pages)
  if (command === 'build') {
    config.base = '/SmartHealth_frontend/'
  }

  return config
})
