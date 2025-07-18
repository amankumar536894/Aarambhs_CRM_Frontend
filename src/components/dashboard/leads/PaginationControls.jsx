import React from 'react';
import styles from './leads.module.css';

const PaginationControls = () => (
  <div className={styles.paginationControls}>
    <button className={styles.prevBtn}>Previous</button>
    <button className={styles.nextBtn}>Next</button>
  </div>
);

export default PaginationControls;
