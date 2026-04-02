import { useParams } from "react-router-dom";
import { Link } from "react-router"
import useFetchProduct from "../../hooks/useFetchProduct";
// import useFetchReviews from "../../hooks/useFetchReviews";
import styles from "./Ecommerce.module.css";

const ProductDetail = () => {
    const { productId  } = useParams();
    const { product, isProductLoading, isProductError } = useFetchProduct(productId);
    // const { reviews, isReviewsLoading, isReviewsError } = useFetchReviews(productId);

    if (isProductLoading) {
        return <div>정보를 불러오고 있습니다...</div>
    }
    if (isProductError) {
        return <div>정보를 불러오는 중에 에러가 발생했습니다..</div>
    }

    return (
        <div className={styles.ecommerceContainer}>
            <h3><Link to="/ecommerce">멋사몰</Link></h3>
            <div className={styles.productDetail}>
                <img src={product.image} />
                <div className={styles.productInfo}>
                    <div className={styles.productCategory}>{product.category}</div>
                    <h4 className={styles.productName}>{product.name}</h4>
                    <div className={styles.productPrice}>{product.price.toLocaleString()}원</div>
                    <button>구매하기</button>
                </div>
            </div>
            <p className={styles.productDesc}>{product.description}</p>
            <h4>리뷰({product.reviews.length})</h4>
            {product.reviews.length > 0 ? (
                product.reviews.map((review) => {
                return (
                    <div key={review.id} className={styles.reviewItem}>
                        <div className={styles.reviewHeader}>
                            <div>{review.username}</div>
                            <div>({review.rating}/5)</div>
                        </div>
                        <div className={styles.text}>
                            {review.text}
                        </div>
                    </div>
                );
            })) : <div className={styles.emptyReview}>작성된 리뷰가 없습니다.</div>}
        </div>
    )
}

export default ProductDetail;