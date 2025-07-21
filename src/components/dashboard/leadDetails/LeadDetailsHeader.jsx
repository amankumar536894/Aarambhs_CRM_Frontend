import React from 'react';
import styles from './leadDetails.module.css';

const LeadDetailsHeader = () => (
  <div className={styles.headerCard}>
    <label htmlFor="venueSelect" className={styles.headerLabel}>Select Venue</label>
    <select id="venueSelect" className={styles.venueSelect} defaultValue="The Mantra">
      <option>The Mantra</option>
      <option>Hotel Lal International</option>
    </select>
  </div>
);

export default LeadDetailsHeader;
