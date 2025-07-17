import React, { useState } from "react";
import styles from "./ImageCarousel.module.css";

const images = [
  "/images/adsImg1.png",
  "/images/adsImg2.jpg",
  "/images/sareeImg1.png",
];

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className={styles.carousel}>
      <div className={styles.imageWrapper}>
        
        <div className={styles.imageItem}>
          <img src="images/wedding.jpg" className={styles.bgimg} alt="Left" />
          <img src="images/pw.png" className={styles.mask} alt="Left Mask" />
        </div>

       
        <div className={`${styles.imageItem} ${styles.center}`}>
          <img src={images[current]} alt={`Slide ${current}`} />
        </div>

        
        <div className={styles.imageItem}>
          <img src="images/wedding.jpg"  className={styles.bgimg}alt="Right" />
          <img src="images/old.png" className={styles.mask} alt="Right Mask" />
        </div>
      </div>

      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              current === index ? styles.active : ""
            }`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
