// components/IntroductionSection.tsx
import React from 'react';
import styles from '../styles/IntroductionSection.module.css';

const IntroductionSection: React.FC = () => {
  return (
    <div className={styles.introductionSection}>
      <h2>About Us</h2>
      <p>Welcome to the UWaterloo Undergrad Research Club, where curiosity meets opportunity. Our mission is to...</p>
      <p>Join us to:</p>
      <ul>
        <li>Engage in exciting research projects</li>
        <li>Connect with like-minded peers and mentors</li>
        <li>Explore your academic and professional interests</li>
      </ul>
    </div>
  );
};

export default IntroductionSection;
