'use client'
import React, { useEffect, useRef } from 'react';
import styles from '../styles/IntroductionSection.module.css';
import Divider from '@mui/material/Divider';

const IntroductionSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        const isOnScreen = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;

        if (isOnScreen) {
          section.classList.add(styles.onScreen);
        } else {
          section.classList.remove(styles.onScreen);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.introductionSection} ${styles.onScreen}`} id='intro' ref={sectionRef}>
      <div className={styles.leftSection}>
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.paragraph}>
          Welcome to the UWaterloo Undergraduate Research Club, where
          <span style={{ color: '#FFDB58' }}> curiosity meets opportunity.</span>
        </p>
      </div>
      <Divider sx={{ backgroundColor: '#878787' }} orientation='vertical' flexItem />
      <div className={styles.rightSection}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Engage in exciting research projects
          </li>
          <li className={styles.listItem}>
            Connect with like-minded peers and mentors
          </li>
          <li className={styles.listItem}>
            Explore your academic and professional interests
          </li>
          <li className={styles.listItem}>
            Gain hands-on experience in your field of interest
          </li>
          <li className={styles.listItem}>
            Collaborate with profs on meaningful projects
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IntroductionSection;
