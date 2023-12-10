// components/GetInvolvedSection.tsx
import React from 'react';
import styles from '../styles/GetInvolvedSection.module.css';

const GetInvolvedSection: React.FC = () => {
  return (
    <div className={styles.getInvolvedSection}>
      <h2>Get Involved</h2>
      <p>Ready to dive into the world of research? Here's how you can get involved:</p>
      <ul>
        <li>Join as a member to access exclusive opportunities</li>
        <li>Check out our upcoming events and meetings</li>
        <li>Contact us for more information</li>
      </ul>
    </div>
  );
};

export default GetInvolvedSection;
