import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    // gh-pages 모드일 때만 경로 지정, 그 외(Vercel 등)는 '/' 사용
    base: mode === 'gh-pages' ? '/react-study/' : '/',
  };
});
