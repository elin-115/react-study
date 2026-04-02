import { useState } from "react";
import { Link } from "react-router"
import styles from "./Ecommerce.module.css";
import useFetchProducts from "../../hooks/useFetchProducts";

const Ecommerce = () => {
    const { products, isProductsLoading, isProductsError } = useFetchProducts();
    const [selectedCategory, setSelectedCategory] = useState("전체");

    const filteredProducts = products.filter(({ category }) => {
        if (selectedCategory === "전체") {
            return true;
        }
        return selectedCategory === category;
    })

    if (isProductsLoading) {
        return <div>상품을 로딩 중입니다...</div>
    }
    if (isProductsError) {
        return <div>상품 목록을 가져오는 중에 에러가 발생했습니다...</div>
    }

    return (
        <div className={styles.ecommerceContainer}>
            <h3><Link to="/ecommerce">멋사몰</Link></h3>
            <ul className={styles.categryList}>
                {["전체", "상의", "하의", "신발", "가방", "악세서리",].map(
                  (categry) => {
                     return <li key={categry} 
                                className={selectedCategory === categry ? styles.selected : null}
                                onClick={() => {
                                    setSelectedCategory(categry);
                                }}
                            >{categry}</li>;
                  }
                )}
            </ul>
            <h4>상품 목록({filteredProducts.length})</h4>
            <div className={styles.productList}>
                {filteredProducts.map(({ id, category, image, name, price }) => {
                        console.log(products);
                        return (
                            <Link key={id} to={`/products/${id}`} className={styles.productListItem}>
                                <img src={image} />
                                <div className={styles.productInfo}>
                                    <div className={styles.productCategory}>{category}</div>
                                    <div className={styles.productName}>{name}</div>
                                    <div className={styles.productPrice}>{price.toLocaleString()}원</div>
                                </div>
                            </Link>
                        );
                    })
                };
            </div>
        </div>
    );
}

export default Ecommerce;