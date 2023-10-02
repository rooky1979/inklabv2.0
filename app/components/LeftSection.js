import React from 'react';
import styles from '../styles/Landing.module.css';

const LeftSection = ({ imageUrl, title, subtitle }) => {
  return (
    <div className={styles.leftSection}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt="Section Image" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
      </div>
    </div>
  );
};

export default LeftSection;

