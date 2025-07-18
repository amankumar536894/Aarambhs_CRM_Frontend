import React from 'react';
import styles from './leads.module.css';
import LeadBadges from './LeadBadges';
import LeadFilters from './LeadFilters';
import LeadTable from './LeadTable';

const LeadsPage = () => (
  <div className={styles.leadsPage}>
    <div className={styles.leadsMainContent}>
      <aside className={styles.leadsSidebar}>
        <LeadFilters />
      </aside>
      <main className={styles.leadsTableSection}>
        <LeadBadges className={styles.badgesRowSticky} />
        <LeadTable />
      </main>
    </div>
  </div>
);

export default LeadsPage;
