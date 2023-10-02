import React from 'react';
import LeftSection from '../components/LeftSection';
import Logo from './Logo';
import styles from "../styles/Landing.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingpage}>
      <Logo/>
      <section className={styles.section}>
        {/* Section 1 - Bio */}
        <LeftSection
          imageUrl="/steve6.jpg"
          title="Bio"
          subtitle="My journey and how I got here"
        />
      </section>

      {/* <section className="section"> */}
        {/* Section 2 - Portfolio */}
        {/* Add your portfolio content here */}
      {/* </section> */}

      {/* Repeat the above pattern for other sections (available art, blog, etc.) */}
    </div>
  );
};

export default LandingPage;
