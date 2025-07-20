import React, { useState } from "react";
import styles from "./ProductSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function ProductSection({ items }) {
  const [drawerOpen, setDrawerOpen] = useState(true);

  return (
    <div className={styles.productSectionContainer}>
      {/* Toggle Drawer Button */}
      <button
        className={styles.drawerToggleBtn}
        onClick={() => setDrawerOpen((prev) => !prev)}
      >
        <FontAwesomeIcon icon={drawerOpen ? faTimes : faBars} />
      </button>

      {/* Drawer: Always exists */}
      <div
        className={`${styles.categoryItemsContainer} ${
          drawerOpen ? styles.drawerOpen : styles.drawerClosed
        }`}
      >
        {items.length > 0 ? (
          <ul>
            {items.map((item, index) => (
              <li key={index} className={styles.itemContainer}>
                <p style={{ fontWeight: "bolder" }}>{item}</p>
                <p>(30items)</p>
              </li>
            ))}
          </ul>
        ) : (
          <img
            src="/images/sareeAds1.png"
            alt="sareeimg"
            className={styles.sideAdsImg}
          />
        )}
      </div>

      {/* Product Grid */}
      <div className={styles.productItemsContainer}>
        {[...Array(30)].map((_, index) => (
          <ProductItem key={index} item={index + 1} />
        ))}
      </div>
    </div>
  );
}

const ProductItem = ({ item }) => {
  const [liked, setLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false); 

  return (
    <div
      className={styles.productCard}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
    >
      <div
        style={{ background: liked ? "white" : "#d32f2f" }}
        onClick={() => setLiked(!liked)}
        className={styles.likeContainer}
      >
        <FontAwesomeIcon
          style={{ color: liked ? "#d32f2f" : "white" }}
          icon={faHeart}
        />
      </div>
      
      <img
        src="/images/sareeImg1.jpg"
        alt="Product default"
        className={`${styles.productImage} ${isHovered ? styles.hidden : ''}`}
      />
      
      <img
        src="/images/sareeImg2.jpg"
        alt="Product hover"
        className={`${styles.hoverImage} ${isHovered ? styles.visible : ''}`}
      />
      <div className={styles.productDetails}>
        <h4 className={styles.productName}>Product {item}</h4>
        <p className={styles.productPrice}>₹{item * 100}</p>
      </div>
    </div>
  );
};

export default ProductSection;