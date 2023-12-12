import React from 'react';
import styles from '../styles/CalendarSection.module.css';

const CalendarSection: React.FC = () => {
  return (
    <div className={styles.CalendarSection}>
      <h1 className={styles.sectionTitle}>Explore Our Events Calendar</h1>
      <script type="text/javascript" src="https://stylemygcal.com/widget.js"></script>
      <div className="smgc-calendar-placeholder" id="smgc-cal-BWTXgbTvCeagv3BAm3uw"></div>
    </div>
  );
};

export default CalendarSection;
