import React, { useState } from 'react';
import styles from './leads.module.css';

const filterGroups = [
  {
    name: 'Lead Status',
    key: 'leadStatus',
    options: [
      'Active',
      'Hot',
      'SuperHotLead',
      'Booked',
      'Done (dropped)'
    ]
  },
  {
    name: 'Lead Venue',
    key: 'leadVenue',
    options: ['Venue 1', 'Venue 2', 'Venue 3']
  },
  {
    name: 'Service Status',
    key: 'serviceStatus',
    options: ['Not Contacted', 'Contacted', 'Visit Scheduled']
  },
  {
    name: 'Lead Source',
    key: 'leadSource',
    options: ['Weddingz', 'Direct', 'Referral']
  },
  {
    name: 'Lead Read/Unread',
    key: 'leadReadUnread',
    options: ['Read', 'Unread']
  },
  {
    name: 'Lead Done Reason',
    key: 'leadDoneReason',
    options: ['Booked', 'Dropped', 'Other']
  },
  {
    name: 'Follow Ups',
    key: 'followUps',
    options: ['Lead See Price (✅)', 'High Priority Lead (🔥)']
  },
  {
    name: 'Visit Status',
    key: 'visitStatus',
    options: ['Scheduled', 'Completed', 'Not Scheduled']
  },
  {
    name: 'Event Date',
    key: 'eventDate',
    options: ['Today', 'This Week', 'This Month']
  },
  {
    name: 'Lead Created Date',
    key: 'leadCreatedDate',
    options: ['Today', 'This Week', 'This Month']
  },
  {
    name: 'Lead Done Date',
    key: 'leadDoneDate',
    options: ['Today', 'This Week', 'This Month']
  },
];

const defaultOpen = {
  leadStatus: true,
  leadVenue: false,
  serviceStatus: false,
  leadSource: false,
  leadReadUnread: false,
  leadDoneReason: false,
  followUps: false,
  visitStatus: false,
  eventDate: false,
  leadCreatedDate: false,
  leadDoneDate: false,
};

const LeadFilters = () => {
  const [openGroups, setOpenGroups] = useState(defaultOpen);

  const toggleGroup = (key) => {
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <form className={styles.filtersForm}>
      <div className={styles.filterSection}>
        <input className={styles.filterInput} type="text" placeholder="Name or Email (Press Enter to Search)" />
        <input className={styles.filterInput} type="text" placeholder="Phone No (Press Enter to Search)" />
      </div>
      {filterGroups.map(group => (
        <div
          className={openGroups[group.key] ? `${styles.filterSection} ${styles.openSection}` : styles.filterSection}
          key={group.key}
        >
          <div className={styles.filterTitleRow} onClick={() => toggleGroup(group.key)}>
            <span className={styles.filterTitle}>{group.name}</span>
            <span className={styles.filterToggleIcon}>{openGroups[group.key] ? '−' : '+'}</span>
          </div>
          {openGroups[group.key] && (
            <div className={styles.filterOptionsVertical}>
              {group.options.map(opt => (
                <label key={opt} className={styles.filterCheckboxLabel}>
                  <input type="checkbox" /> {opt}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className={styles.filterActions}>
        <button type="submit" className={styles.applyBtn}>Apply</button>
        <button type="button" className={styles.resetBtn}>Reset</button>
      </div>
    </form>
  );
};

export default LeadFilters;
