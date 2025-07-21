import React from 'react';
import Navbar from '../Navbar';
import VisitFilters from './VisitFilters';
import VisitTable from './VisitTable';
import styles from './visits.module.css';

const VisitsPage = () => (
  <div className={styles.visitsPage}>
    <Navbar activeMenu="Visits" />
    <div className={styles.visitsContentRow}>
      <VisitFilters />
      <main className={styles.visitsMainContent}>
        <VisitTable />
      </main>
    </div>
  </div>
);

export default VisitsPage;
