import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'esbuild',
    sourcemap: process.env.NODE_ENV !== 'production'
  },
  server: {
    port: 3000,
    open: true
  }
})
