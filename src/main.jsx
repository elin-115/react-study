import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'

// Vercel 환경(process.env.VERCEL)일 때는 basename을 없애고, 아니면 gh-pages용 경로 사용
const basename = import.meta.env.MODE === 'gh-pages' ? '/react-study' : '';

createRoot(document.getElementById('root')).render(
    
    <BrowserRouter basename={basename}>
        <App />
    </BrowserRouter>
)
