import { useState, useEffect } from "react";

function useFetchReviews(productId) {
    const [reviews, setReviews] = useState([]);
    const [isReviewsLoading, setIsReviewsLoading] = useState(true);
    const [isReviewsError, setIsReviewsError] = useState(false);

    useEffect(() => {
        async function fetchReviews() {
            try {
                setIsReviewsLoading(true);
                console.log("요청 ID:", productId);

                //const response = await fetch(`http://localhost:3000/reviews?productId=${productId}`);
                const response = await fetch(`http://localhost:3000/reviews`);

                if (!response.ok) {throw new Error();}

                const json = await response.json();

                const filtered = json.filter(item => {
                    return String(item.productId).trim() === String(productId).trim();
                });

                setReviews(filtered);
                setIsReviewsLoading(false);
            } catch {
                setIsReviewsError(true);
                setIsReviewsLoading(false);
            }
        }
        fetchReviews();
    }, [productId])

    return {
        reviews,
        isReviewsLoading,
        isReviewsError,
    };

}

export default useFetchReviews;