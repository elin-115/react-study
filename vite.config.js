import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vercel 배포 시에는 "/", GitHub Pages 배포 시에는 "/react-study/" 적용
  base: process.env.NODE_ENV === 'production' && !process.env.VERCEL 
    ? '/react-study/' 
    : '/',
})
