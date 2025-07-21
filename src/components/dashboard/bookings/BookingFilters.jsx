import React, { useState } from 'react';
import styles from './bookings.module.css';

const filterGroups = [
  {
    name: 'Lead Venue',
    key: 'venue',
    options: ['Hotel Lal International', 'The Mantra']
  },
  {
    name: 'Booking Status',
    key: 'bookingStatus',
    options: ['PAYMENT_CONFIRMED', 'PAYMENT_PENDING', 'CANCELED']
  },
  {
    name: 'Booking Date',
    key: 'bookingDate',
    type: 'dateRange'
  },
  {
    name: 'Lead Created Date',
    key: 'leadCreatedDate',
    type: 'dateRange'
  },
  {
    name: 'Event Date',
    key: 'eventDate',
    type: 'dateRange'
  },
  {
    name: 'Event Type',
    key: 'eventType',
    options: ['Wedding', 'Engagement', 'Birthday', 'Corporate', 'Other']
  },
  {
    name: 'Booking Amount',
    key: 'bookingAmount',
    type: 'numberRange'
  },
  {
    name: 'Amount Paid',
    key: 'amountPaid',
    type: 'numberRange'
  },
  {
    name: 'Amount Pending',
    key: 'amountPending',
    type: 'numberRange'
  },
  {
    name: 'Total Budget',
    key: 'totalBudget',
    type: 'numberRange'
  },
];

const defaultOpen = {
  venue: true,
  bookingStatus: false,
  bookingDate: false,
  leadCreatedDate: false,
  eventDate: false,
  eventType: false,
  bookingAmount: false,
  amountPaid: false,
  amountPending: false,
  totalBudget: false,
};

const BookingFilters = () => {
  const [openGroups, setOpenGroups] = useState(defaultOpen);
  const [nameOrEmail, setNameOrEmail] = useState('');
  const [selected, setSelected] = useState({});
  const [ranges, setRanges] = useState({});

  const toggleGroup = (key) => {
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCheckbox = (groupKey, value) => {
    setSelected((prev) => {
      const arr = prev[groupKey] || [];
      return {
        ...prev,
        [groupKey]: arr.includes(value)
          ? arr.filter(v => v !== value)
          : [...arr, value]
      };
    });
  };

  const handleRange = (groupKey, bound, value) => {
    setRanges((prev) => ({
      ...prev,
      [groupKey]: { ...prev[groupKey], [bound]: value }
    }));
  };

  return (
    <aside className={styles.bookingsSidebar}>
      <form className={styles.filtersForm}>
        <div className={styles.filterSection}>
          <input
            className={styles.filterInput}
            type="text"
            placeholder="Name or Email"
            value={nameOrEmail}
            onChange={e => setNameOrEmail(e.target.value)}
          />
        </div>
        {filterGroups.map(group => (
          <div
            className={openGroups[group.key] ? `${styles.filterSection} ${styles.openSection}` : styles.filterSection}
            key={group.key}
          >
            <div className={styles.filterTitleRow} onClick={() => toggleGroup(group.key)}>
              <span className={styles.filterTitle}>{group.name}</span>
              <span className={styles.filterToggleIcon}>{openGroups[group.key] ? '\u2212' : '+'}</span>
            </div>
            {openGroups[group.key] && (
              <div className={styles.filterOptionsVertical}>
                {group.options && group.options.map(opt => (
                  <label key={opt} className={styles.filterCheckboxLabel}>
                    <input
                      type="checkbox"
                      checked={selected[group.key]?.includes(opt) || false}
                      onChange={() => handleCheckbox(group.key, opt)}
                    /> {opt}
                  </label>
                ))}
                {group.type === 'dateRange' && (
                  <>
                    <input
                      type="date"
                      className={styles.filterInput}
                      value={ranges[group.key]?.from || ''}
                      onChange={e => handleRange(group.key, 'from', e.target.value)}
                      placeholder="From"
                    />
                    <input
                      type="date"
                      className={styles.filterInput}
                      value={ranges[group.key]?.to || ''}
                      onChange={e => handleRange(group.key, 'to', e.target.value)}
                      placeholder="To"
                    />
                  </>
                )}
                {group.type === 'numberRange' && (
                  <>
                    <input
                      type="number"
                      className={styles.filterInput}
                      value={ranges[group.key]?.from || ''}
                      onChange={e => handleRange(group.key, 'from', e.target.value)}
                      placeholder="From"
                    />
                    <input
                      type="number"
                      className={styles.filterInput}
                      value={ranges[group.key]?.to || ''}
                      onChange={e => handleRange(group.key, 'to', e.target.value)}
                      placeholder="To"
                    />
                  </>
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

export default BookingFilters;
