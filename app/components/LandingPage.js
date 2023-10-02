// pages/index.js
import React from 'react';
import LeftSection from '../components/LeftSection';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Your header section with a logo, social icons, and enter button */}
      {/* You can reuse your existing code here */}
      
      {/* Scrollable sections */}
      <section className="section">
        {/* Section 1 - Bio */}
        <LeftSection
          imageUrl="next.svg"
          title="Your Title"
          subtitle="Your Subtitle"
        />
      </section>

      <section className="section">
        {/* Section 2 - Portfolio */}
        {/* Add your portfolio content here */}
      </section>

      {/* Repeat the above pattern for other sections (available art, blog, etc.) */}
    </div>
  );
};

export default LandingPage;
