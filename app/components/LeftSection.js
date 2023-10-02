import React from 'react';
import Image from 'next/image';
import styles from '../styles/Landing.module.css';

const LeftSection = ({ imageUrl, title, subtitle }) => {
  return (
    <div className={styles.leftSection}>
      <div className={styles.imageContainer}>
        <Image src={imageUrl} 
        alt="Steve Kretz" 
        className={styles.image}
        width={150}
        height={250}
        /* objectFit='cover' *//>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
      </div>
    </div>
  );
};

export default LeftSection;

