import { useState, useEffect } from "react";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

// 커스텀 hook 만들기
function useFetchPosts() {
    const [posts, setPosts] = useState([]);
    const [isPostsLoading, setIsPostsLoading] = useState(false);
    const [isPostsError, setIsPostsError] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            // try-catch 사용 : 비동기 요청중 발생하는 에러를 핸들링
            try {
                setIsPostsLoading(true);  // 로딩 시작
                const response = await fetch(POSTS_URL);
                const json = await response.json();
                setPosts(json);
                setIsPostsLoading(false); // 로딩 끝
            } catch {
                setIsPostsError(true);    // 에러 상태 관리
                setIsPostsLoading(false);
            }
        }
        fetchPosts();
    }, [])

    return {
        posts,
        isPostsLoading,
        isPostsError,
    };
}

export default useFetchPosts;