import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/perfil-github/',
  plugins: [react()],
  server: { strictPort: true },
})
