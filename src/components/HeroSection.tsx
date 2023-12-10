// components/HeroSection.tsx
import React from 'react';
import styles from '../styles/HeroSection.module.css'; // Import your CSS module

const HeroSection: React.FC = () => {
  return (
    <div className={styles.heroSection}>
      <img src="/twistedLines.svg" className={styles.waveSvg} alt="Twisted Lines" />
      <img src="/twistedLines.svg" className={styles.waveSvg2} alt="Twisted Lines" />
      <div className={styles.text}>
        <h1 style={{ fontSize: '3rem', marginBottom: '5rem'}}>Welcome to the Undergraduate Research Club <br /> at University of Waterloo</h1>
        <p style={{ fontSize: '2.5rem', marginBottom: '3rem'}}>Empowering Students Through Research Opportunities</p>
        <p>Get Started</p>
      </div>
    </div>
  );
};

export default HeroSection;
