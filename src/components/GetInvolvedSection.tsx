// components/GetInvolvedSection.tsx
import React from 'react';
import styles from '../styles/GetInvolvedSection.module.css';

const GetInvolvedSection: React.FC = () => {
  return (
    <div className={styles.getInvolvedSection}>
      <div className={styles.getInvolvedLeftSection}>
        <h2 className={styles.title}>Get Involved</h2>
        <p className={styles.paragraph}>Ready to dive into the world of research? <br />Here's how you can get involved:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}> <span>&#8226;</span> Join as a member to access exclusive opportunities</li>
          <li className={styles.listItem}> <span>&#8226;</span> Check out our upcoming events and meetings</li>
          <li className={styles.listItem}> <span>&#8226;</span> Contact us for more information</li>
        </ul>
        <div className={styles.icons}>
          {/* Placeholder icons go here */}
          <img src='./instagram.svg' />
          <img src='./linktree.svg' />
        </div>
      </div>
      <div className={styles.getInvolvedRightSection}>
        <img src='./social.svg' />
      </div>
    </div>
  );
};

export default GetInvolvedSection;
