import React, { useState } from 'react';
import styles from './visits.module.css';

const filterGroups = [
  {
    name: 'Lead Venue',
    key: 'leadVenue',
    options: ['Hotel Lal International', 'The Mantra']
  },
  {
    name: 'Visit Status',
    key: 'visitStatus',
    options: ['Scheduled', 'Completed', 'Missed']
  },
  {
    name: 'Lead Status',
    key: 'leadStatus',
    options: ['Active', 'Inactive', 'Booked']
  },
  {
    name: 'Visit Date',
    key: 'visitDate',
    options: [] // from/to date
  },
  {
    name: 'Visit Complete Date',
    key: 'visitCompleteDate',
    options: [] // from/to date
  }
];

const defaultOpen = {
  leadVenue: true,
  visitStatus: false,
  leadStatus: false,
  visitDate: false,
  visitCompleteDate: false,
};

const VisitFilters = () => {
  const [openGroups, setOpenGroups] = useState(defaultOpen);
  const [visitDateFrom, setVisitDateFrom] = useState('');
  const [visitDateTo, setVisitDateTo] = useState('');
  const [visitCompleteFrom, setVisitCompleteFrom] = useState('');
  const [visitCompleteTo, setVisitCompleteTo] = useState('');

  const toggleGroup = (key) => {
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <aside className={styles.visitsSidebar}>
      <form className={styles.filtersForm}>
        {filterGroups.map(group => (
          <div className={openGroups[group.key] ? `${styles.filterSection} ${styles.openSection}` : styles.filterSection} key={group.key}>
            <div className={styles.filterTitleRow} onClick={() => toggleGroup(group.key)}>
              <span className={styles.filterTitle}>{group.name}</span>
              <span className={styles.filterToggleIcon}>{openGroups[group.key] ? '−' : '+'}</span>
            </div>
            {openGroups[group.key] && (
              <div className={styles.filterOptionsVertical}>
                {group.key === 'visitDate' ? (
                  <>
                    <label className={styles.filterLabel}>From
                      <input type="date" className={styles.filterInput} value={visitDateFrom} onChange={e => setVisitDateFrom(e.target.value)} />
                    </label>
                    <label className={styles.filterLabel}>To
                      <input type="date" className={styles.filterInput} value={visitDateTo} onChange={e => setVisitDateTo(e.target.value)} />
                    </label>
                  </>
                ) : group.key === 'visitCompleteDate' ? (
                  <>
                    <label className={styles.filterLabel}>From
                      <input type="date" className={styles.filterInput} value={visitCompleteFrom} onChange={e => setVisitCompleteFrom(e.target.value)} />
                    </label>
                    <label className={styles.filterLabel}>To
                      <input type="date" className={styles.filterInput} value={visitCompleteTo} onChange={e => setVisitCompleteTo(e.target.value)} />
                    </label>
                  </>
                ) : (
                  group.options.map(opt => (
                    <label key={opt} className={styles.filterCheckboxLabel}>
                      <input type="checkbox" /> {opt}
                    </label>
                  ))
                )}
              </div>
            )}
          </div>
        ))}
        <div className={styles.filterActions}>
          <button type="submit" className={styles.applyBtn}>Apply</button>
          <button type="button" className={styles.resetBtn}>Reset</button>
        </div>
      </form>
    </aside>
  );
};

export default VisitFilters;
