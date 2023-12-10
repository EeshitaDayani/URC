// components/HeroSection.tsx
import React from 'react';
import styles from '../styles/HeroSection.module.css'; // Import your CSS module

const HeroSection: React.FC = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.text}>
        <h1 style={{ fontSize: '3rem', marginBottom: '5rem'}}>
            Welcome to the <span style={{ color: '#FFDB58' }}>Undergraduate Research Club</span> <br />
            at University of Waterloo
        </h1>
        <p style={{ fontSize: '2.5rem', marginBottom: '5rem'}}>Empowering Students Through Research Opportunities</p>
        <p style={{ fontSize: '1.5rem', borderBottom: '2px solid #FFDB58', display: 'inline-block' }}>
            Let's Get Started
        </p>
      </div>
      <svg className={styles.svg} width="400px" height="400px" xmlns="http://www.w3.org/2000/svg">
        <rect x="10%" y="10%" width="70%" height="70%" fill="none" stroke="#FFDB58" stroke-width="4"/>
        <rect x="17%" y="5%" width="70%" height="70%" fill="none" stroke="#FFDB58" stroke-width="4" transform="rotate(15 50 50)"/>
      </svg>
    </div>
  );
};

export default HeroSection;
