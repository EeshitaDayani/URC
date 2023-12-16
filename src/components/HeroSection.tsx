// components/HeroSection.tsx
import React from 'react';
import styles from '../styles/HeroSection.module.css'; // Import your CSS module
import NextLink from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.text}>
        <h1 className={styles.title}>
          Welcome to the <span style={{ color: '#FFDB58' }}>Undergraduate Research Club</span> <br />
          at University of Waterloo
        </h1>
        <p className={styles.subtitle}>Empowering Students Through Research Opportunities</p>
        <NextLink href="#intro" passHref>
            <p className={styles.started}>
              Let's Get Started
            </p>
        </NextLink>
      </div>
      <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg">
        <g className={styles.transform} >
          <rect x="-35%" y="-35%" width="70%" height="70%" fill="none" stroke="#FFDB58" strokeWidth="4"/>
          <rect x="-35%" y="-30%" width="70%" height="70%" fill="none" stroke="#FFDB58" strokeWidth="4" transform="rotate(15 60 20)"/>
        </g>
      </svg>
    </div>
  );
};

export default HeroSection;