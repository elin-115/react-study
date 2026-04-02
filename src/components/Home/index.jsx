import { Link } from "react-router-dom"
import styles from "./Home.module.css";
import counterImg from "../../assets/images/counter.png"
import trackerImg from "../../assets/images/tracker.png"
import todoImg from "../../assets/images/todo.png"
import timerImg from "../../assets/images/timer.png"
import blogImg from "../../assets/images/blog.png"
import ecommerceImg from "../../assets/images/ecommerce.png"
import ecommerceDetailImg from "../../assets/images/ecommerce_detail.png"

const MENU_ITEMS = [
  { to: "/counter", img: counterImg, label: "Counter" },
  { to: "/tracker", img: trackerImg, label: "Mouse Tracker" },
  { to: "/todo", img: todoImg, label: "Todo List" },
  { to: "/timer", img: timerImg, label: "Timer" },
  { to: "/blog", img: blogImg, label: "Blog" },
  { to: "/ecommerce", img: ecommerceImg, label: "Ecommerce" },
  { to: "/ecommerce", img: ecommerceDetailImg, label: "Ecommerce-Detail" },
];

const Home = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <ul className={styles.menuList}>
                    {MENU_ITEMS.map((item) => (
                    <li key={item.to}>
                        <Link to={item.to}>
                            <strong>{item.label}</strong>
                            <img src={item.img} alt="" />
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Home;