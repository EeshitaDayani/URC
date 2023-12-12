// components/GetInvolvedSection.tsx
import React from 'react';
import styles from '../styles/GetInvolvedSection.module.css';

const GetInvolvedSection: React.FC = () => {
  return (
    <div className={styles.getInvolvedSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>Get Involved</h2>
        <p className={styles.paragraph}>Ready to dive into the world of research? <br /><br />Here's how you can get involved.</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Become a member</button>
          <button className={styles.button}>Contact us</button>
        </div>
        <div className={styles.icons}>
          <img src='./instagram.svg' alt="Instagram Icon" />
          <img src='./linktree.svg' alt="Linktree Icon" />
        </div>
      </div>
      <img src='./social.svg' alt="Social Icon" className={styles.socialIcon} />
    </div>
  );
};

export default GetInvolvedSection;
