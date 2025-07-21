import React, { useState } from 'react';
import styles from './tasks.module.css';

const filterGroups = [
  {
    name: 'Task Status',
    key: 'taskStatus',
    options: ['Upcoming', 'Completed', 'Overdue']
  },
  {
    name: 'Lead Status',
    key: 'leadStatus',
    options: ['Active', 'Inactive', 'Booked']
  },
  {
    name: 'Task Due Date',
    key: 'taskDueDate',
    options: [] // will use two date inputs
  }
];

const defaultOpen = {
  taskStatus: true,
  leadStatus: false,
  taskDueDate: false,
};

const TaskFilters = () => {
  const [openGroups, setOpenGroups] = useState(defaultOpen);
  const [searchName, setSearchName] = useState('');
  const [searchMessage, setSearchMessage] = useState('');
  const [dueDateStart, setDueDateStart] = useState('');
  const [dueDateEnd, setDueDateEnd] = useState('');

  const toggleGroup = (key) => {
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <aside className={styles.tasksSidebar}>
      <form className={styles.filtersForm}>
        <div className={styles.filterSection}>
          <input
            className={styles.filterInput}
            type="text"
            placeholder="Search by Name"
            value={searchName}
            onChange={e => setSearchName(e.target.value)}
          />
          <input
            className={styles.filterInput}
            type="text"
            placeholder="Search by Task Message"
            value={searchMessage}
            onChange={e => setSearchMessage(e.target.value)}
          />
        </div>
        {filterGroups.map(group => (
          <div className={openGroups[group.key] ? `${styles.filterSection} ${styles.openSection}` : styles.filterSection} key={group.key}>
            <div className={styles.filterTitleRow} onClick={() => toggleGroup(group.key)}>
              <span className={styles.filterTitle}>{group.name}</span>
              <span className={styles.filterToggleIcon}>{openGroups[group.key] ? '−' : '+'}</span>
            </div>
            {openGroups[group.key] && (
              <div className={styles.filterOptionsVertical}>
                {group.key === 'taskDueDate' ? (
                  <>
                    <label className={styles.filterLabel}>Start Date
                      <input
                        type="date"
                        className={styles.filterInput}
                        value={dueDateStart}
                        onChange={e => setDueDateStart(e.target.value)}
                      />
                    </label>
                    <label className={styles.filterLabel}>End Date
                      <input
                        type="date"
                        className={styles.filterInput}
                        value={dueDateEnd}
                        onChange={e => setDueDateEnd(e.target.value)}
                      />
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

export default TaskFilters; 