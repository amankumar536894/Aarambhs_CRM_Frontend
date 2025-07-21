import React, { useState } from 'react';
import styles from './tasks.module.css';

const dummyTasks = [
  { id: 1, name: '919060598756', leadCreated: '04 Jul, 25', dueDate: '06 Jul, 25 11:59 AM', taskStatus: 'Upcoming', leadStatus: 'Active', message: '25th Wedding anniversary 20 veg', venue: 'The Mantra' },
  { id: 2, name: '919470018745', leadCreated: '27 Jul, 25', dueDate: '27 Jul, 25 12:40 PM', taskStatus: 'Upcoming', leadStatus: 'Active', message: 'Very Low budget', venue: 'The Mantra' },
  { id: 3, name: '917061869621', leadCreated: '11 Jul, 25', dueDate: '11 Jul, 25 10:51 AM', taskStatus: 'Upcoming', leadStatus: 'Active', message: 'Wedding 24feb 300veg shuruchai singh', venue: 'The Mantra' },
  // ... more tasks ...
];

const TaskTable = () => {
  const [page, setPage] = useState(1);
  // For demo, no real pagination

  return (
    <div className={styles.tableWrapper}>
      <div className={styles.tableHeaderRow}>
        <div className={styles.tableTitle}>Tasks</div>
      </div>
      <div className={styles.tableScrollX}>
        <table className={styles.taskTable}>
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Name</th>
              <th>Lead Created</th>
              <th>Task Due Date</th>
              <th>Task Status</th>
              <th>Lead Status</th>
              <th>Task Message</th>
              <th>Venue</th>
            </tr>
          </thead>
          <tbody>
            {dummyTasks.map((task, idx) => (
              <tr key={task.id}>
                <td>{idx + 1}</td>
                <td><span className={styles.phoneIcon}>📞</span> {task.name}</td>
                <td>{task.leadCreated}</td>
                <td>{task.dueDate}</td>
                <td>{task.taskStatus}</td>
                <td>{task.leadStatus}</td>
                <td>{task.message}</td>
                <td>{task.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.paginationControls} style={{justifyContent: 'flex-end', marginTop: '1.2rem'}}>
        <button className={styles.prevBtn}>Previous</button>
        <button className={styles.nextBtn}>Next</button>
      </div>
    </div>
  );
};

export default TaskTable;
