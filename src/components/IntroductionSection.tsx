import React from 'react';
import styles from '../styles/IntroductionSection.module.css';
import Divider from '@mui/material/Divider';

const IntroductionSection: React.FC = () => {
  return (
    <div className={styles.introductionSection} id='intro'>
      <div className={styles.leftSection}>
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.paragraph}>Welcome to the UWaterloo Undergraduate Research Club, where curiosity meets opportunity.</p>
      </div>
      <Divider sx={{ color: 'white'}} orientation="vertical" flexItem />
      <div className={styles.rightSection}>
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
