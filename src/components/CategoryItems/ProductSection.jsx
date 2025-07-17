import React, { useState } from "react";
import styles from "./ProductSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
function ProductSection({ items }) {
  console.log("items", items);
  return (
    <div className={styles.productSectionContainer}>
      {items.length > 0 && (
        <div className={styles.categoryItemsContainer}>
          <ul>
            {items.map((item, index) => (
              <li className={styles.itemContainer}>
                <p style={{ fontWeight: "bolder" }}>{item}</p>
                <p>(30items)</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {items.length == 0 && (
        <img
          src="/images/sareeAds1.png"
          alt="sareeimg"
          width="100%"
          height="100%"
          className={styles.sideAdsImg}
        />
      )}
      <div className={styles.productItemsContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30].map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

const ProductItem = ({ item, index }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div key={index} className={styles.productCard}>
      <div
        style={{ background: liked ? "white" : "#d32f2f" }}
        onClick={() => setLiked(!liked)}
        className={styles.likeContainer}>
        <FontAwesomeIcon
          style={{ color: liked ? "#d32f2f" : "white" }}
          icon={faHeart}
        />
      </div>
      <img src="/images/sareeImg1.png" alt="" />
    </div>
  );
};
export default ProductSection;
