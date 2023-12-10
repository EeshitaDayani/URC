import React from 'react';
import styles from '../styles/IntroductionSection.module.css';

const IntroductionSection: React.FC = () => {
  return (
    <div className={styles.introductionSection}>
      <img src='./glass.svg' />
      <div>
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.paragraph}>Welcome to the UWaterloo Undergrad Research Club, <br />where curiosity meets opportunity. Join us to:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}> <span>&#8226;</span> Engage in exciting research projects</li>
          <li className={styles.listItem}> <span>&#8226;</span> Connect with like-minded peers and mentors</li>
          <li className={styles.listItem}> <span>&#8226;</span> Explore your academic and professional interests</li>
        </ul>
      </div>
    </div>
  );
};

export default IntroductionSection;
