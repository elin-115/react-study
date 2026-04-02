import styles from "./NotFound.module.css";
import errorImg from "../../assets/images/404_img.jpg"

const NotFound = () => {
    return (
        <div className={styles.NotFoundContainer}>
            <h3>ERROR</h3>
            <img src={errorImg} alt="404 에러 이미지" />
            <div>PAGE NOT FOUND</div>
        </div>
    )
}

export default NotFound;