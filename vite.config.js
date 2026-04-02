import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 배포 명령어가 gh-pages일 때만 /react-study/ 적용
  const isGitHubPages = mode === 'gh-pages';

  return {
    plugins: [react()],
    base: isGitHubPages ? '/react-study/' : '/',
  }
})
