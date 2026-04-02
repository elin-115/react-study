import PostItem from "./PostItem";
import useFetchPosts from "../../hooks/useFetchPosts";
import useFetchUsers from "../../hooks/useFetchUsers";
import styles from "./Blog.module.css";

const Blog = () => {
    const { posts, isPostsLoading, isPostsError } = useFetchPosts();
    const { users, isUsersLoading, isUsersError } = useFetchUsers();

    if (isPostsLoading || isUsersLoading) {
        return (
        <div className={styles.blogContainer}>
            <div>로딩중입니다...</div>
        </div>
        );
    }

    if (isPostsError || isUsersError) {
        return (
        <div className={styles.blogContainer}>
            <div>에러가 발생했습니다...</div>
            <br />
            <div>새로고침을 해주세요.</div>
        </div>
        );
    }

    return (
        <div className={styles.blogContainer}>
            {posts.map(({ id, title, body, userId }) => {

                const user = users.find((user) => user.id === userId);
        
                return (
                <PostItem key={id} title={title} body={body} 
                          username={user.username} 
                          email={user.email} 
                />
                );
            })}
        </div>
    );
}

export default Blog;