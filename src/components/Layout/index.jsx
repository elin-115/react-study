import { Outlet, NavLink, useLocation } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = () => {
    const activeClass = ({ isActive }) => (isActive ? styles.on : "");
    const location = useLocation(); // 현재 URL 정보

    const pageTitles = {            // 경로별 text 정의
        "/": "HOME",
        "/counter": "Counter",
        "/tracker": "Mouse Tracker",
        "/todo": "TODO LIST",
        "/timer": "Timer-app",
        "/blog": "Blog",
        "/ecommerce": "Ecommerce",
        "/products": "Product-Detail"
    };

    // 1. 객체에서 정확히 일치하는 제목이 있는지 찾기
    let currentTitle = pageTitles[location.pathname];

    // 2. if 일치하는게 없고, 경로가 '/products'로 시작한다면 'Product-Detail'을 할당
    if (!currentTitle && location.pathname.startsWith("/products")) {
        currentTitle = "Product-Detail";
    }

    // 3. 둘 다 해당 안되면 기본값인 "React Study" 사용
    const finalTitle = currentTitle || "";

    

    return (
        <div className={styles.wrap_container}>
            <header>
                <h1><NavLink to="/">React Study</NavLink></h1>
                <ul className={styles.nav}>
                    <li><NavLink to="/counter" className={activeClass}>Counter</NavLink></li>
                    <li><NavLink to="/tracker" className={activeClass}>Mouse Tracker</NavLink></li>
                    <li><NavLink to="/todo" className={activeClass}>Todo List</NavLink></li>
                    <li><NavLink to="/timer" className={activeClass}>Timer-app</NavLink></li>
                    <li><NavLink to="/blog" className={activeClass}>Blog</NavLink></li>
                    <li><NavLink to="/ecommerce" className={activeClass}>Ecommerce</NavLink></li>
                </ul>
            </header>
            <main className={styles.area_body}>
                <h2>{finalTitle}</h2>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;