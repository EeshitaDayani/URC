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
          Welcome to the UWaterloo Undergraduate Research Club, where curiosity meets opportunity.
        </p>
      </div>
      <Divider sx={{ backgroundColor: 'white' }} orientation='vertical' flexItem />
      <div className={styles.rightSection}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span>&#8226;</span> Engage in exciting research projects
          </li>
          <li className={styles.listItem}>
            <span>&#8226;</span> Connect with like-minded peers and mentors
          </li>
          <li className={styles.listItem}>
            <span>&#8226;</span> Explore your academic and professional interests
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IntroductionSection;
