import React, { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faCartShopping,
  faHeart,
  faEllipsis,
  faSearch,
  faUser,
  faShop
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const CategoryNavbar = () => {
  const [selectedCategory, setSelectedCategory] = useState("Hands of Manufacture");
  const navigate = useNavigate();

  const categories = ["Hands of Manufacture", "Domestic", "Bulk Products"];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);

    switch (category) {
      case "Domestic":
        navigate("/domestic");
        break;
      case "Bulk Products":
        navigate("/bulk-products");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <div className={styles.categoryNavContainer}>
      <div className={styles.categoryItems}>
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => handleCategoryClick(category)}
              style={{
                borderBottom: selectedCategory === category ? "5px solid #F53E32" : "",
                cursor: "pointer",
              }}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const MainNavbar = () => {
  const categories = [
    "OCCASION & AESTHETIC",
    "WEAVING TECHNIQUE",
    "BLENDED",
    "SYNTHETIC",
    "JUTE",
    "LINEN",
    "SILK",
    "COTTON",
  ];

  const [isCategoryListOpen, setIsCategoryListOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const categoryRef = useRef(null);
  const moreRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target)
      ) {
        setIsCategoryListOpen(false);
      }

      if (
        moreRef.current &&
        !moreRef.current.contains(event.target)
      ) {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.mainNavbarContainer}>
      {/* Logo */}
      <div className={styles.logoContainer}>
        <img src="/images/logo.png" alt="Company Logo" />
        <div className={styles.companyContext}>
          <h3>Sarees</h3>
          <p>A Treasure of Heritage</p>
        </div>
      </div>

      {/* Search Box */}
      <div className={styles.searchBoxContainer}>
        <input
          className={styles.searchBox}
          placeholder="Search for items..."
          type="text"
        />
        <div className={styles.categoryBtn} ref={categoryRef}>
          <button onClick={() => setIsCategoryListOpen(!isCategoryListOpen)}>
            <span className={styles.categoryContext}>All Categories{" "}</span>
            <FontAwesomeIcon
              style={{ color: "#F53E32", fontSize: "0.8rem" }}
              icon={isCategoryListOpen ? faAngleUp : faAngleDown}
            />
          </button>
          {isCategoryListOpen && (
            <ul className={styles.categoryList}>
              {categories.map((category) => (
                <li key={category} className={styles.categoryItem}>
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button className={styles.searchBtn}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      {/* Account Info */}
      <div className={styles.accountInfoContainer}>
        <div className={styles.infoWrapper}>
          <FontAwesomeIcon icon={faCartShopping} />
          Cart
        </div>
        <div className={styles.infoWrapper}>
          <FontAwesomeIcon icon={faShop} />
          Become a Seller
        </div>

        {/* More Dropdown */}
        <div
          className={styles.infoWrapper}
          style={{ cursor: "pointer", position: "relative" }}
          onClick={() => setIsMoreOpen((prev) => !prev)}
          ref={moreRef}
        >
          <FontAwesomeIcon icon={faEllipsis} />
          More

          {isMoreOpen && (
            <div
              className={styles.moreDropdown}
              style={{
                position: "absolute",
                top: "110%",
                right: 0,
                background: "white",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                borderRadius: "5px",
                padding: "10px",
                zIndex: 1000,
                minWidth: "120px",
              }}
            >
              <div className={styles.dropdownItem} style={{ padding: "8px 10px", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
                <FontAwesomeIcon icon={faUser} />
                Account
              </div>
              <div className={styles.dropdownItem} style={{ padding: "8px 10px", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
                <FontAwesomeIcon icon={faHeart} />
                Wishlist
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

function Navbar() {
  return (
    <>
      <CategoryNavbar />
      <MainNavbar />
    </>
  );
}

export default Navbar;
