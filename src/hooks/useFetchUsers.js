import { useState, useEffect } from "react";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

function useFetchUsers() {
    const [users, setUsers] = useState([]);
    const [isUsersLoading, setIsUsersLoading] = useState(false);
    const [isUsersError, setIsUsersError] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            // try-catch 사용 : 비동기 요청중 발생하는 에러를 핸들링
            try {
                setIsUsersLoading(true);  // 로딩 시작
                const response = await fetch(USERS_URL);
                const json = await response.json();
                setUsers(json);
                setIsUsersLoading(false); // 로딩 끝
            } catch {
                setIsUsersError(true);    // 에러 상태 관리
                setIsUsersLoading(false);
            }
        }
        fetchPosts();
    }, [])

    return {
        users,
        isUsersLoading,
        isUsersError,
    };
}

export default useFetchUsers;