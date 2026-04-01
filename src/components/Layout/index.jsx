import { Outlet, NavLink, useLocation } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = () => {
    const activeClass = ({ isActive }) => (isActive ? "on" : "");
    const location = useLocation(); // 현재 URL 정보
    const pageTitles = {            // 경로별 text 정의
        "/": "HOME",
        "/counter": "Counter",
        "/tracker": "Mouse Tracker",
        "/todo": "TODO LIST",
        "/timer": "Timer-app",
        "/blog": "Blog",
        "/ecommerce": "Ecommerce"
    };
    // 현재 경로(location.pathname)에 맞는 제목을 찾기
    const currentTitle = pageTitles[location.pathname] || "React Study";

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
                <h2>{currentTitle}</h2>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;