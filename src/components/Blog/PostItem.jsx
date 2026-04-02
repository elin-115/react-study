import styles from "./Blog.module.css";

const PostItem = ({ title, body, username, email }) => {
    return (
        <div className={styles.postItem}>
            <strong>{title}</strong>
            <p>{body}</p>
            <div className={styles.userInfo}>
                <div className={styles.avatar}>{username[0]}</div>
                <div className={styles.userName}>{username}</div>
                <div className={styles.email}>{email}</div>
            </div>
        </div>
    );
}

export default PostItem;