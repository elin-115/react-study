import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'


// 현재 빌드 모드가 'gh-pages'인지 확인하는 변수입니다.
const isGitHubPages = import.meta.env.MODE === 'gh-pages';

// GitHub Pages일 때는 '/react-study'를, 그 외(Vercel 등)에는 빈 값을 사용합니다.
const baseName = isGitHubPages ? '/react-study' : '';

createRoot(document.getElementById('root')).render(
    
    <BrowserRouter basename={baseName}>
        <App />
    </BrowserRouter>
)
