import React, { useState } from 'react';
import styles from './visits.module.css';

const dummyVisits = [
  { id: 1, name: '919060598756', leadCreated: '12 Jun, 25', scheduleDate: '14 Jun, 25 02:51 PM', completeDate: '14 Jun, 25 02:52 PM', visitStatus: 'Completed', leadStatus: 'Active', message: '04 dec wedding 270pax visit at hotel lal international', venue: 'Hotel Lal International' },
  { id: 2, name: '919470018745', leadCreated: '13 Jun, 25', scheduleDate: '15 Jun, 25 10:00 AM', completeDate: '15 Jun, 25 10:30 AM', visitStatus: 'Completed', leadStatus: 'Active', message: 'Visit for 200pax', venue: 'Hotel Lal International' },
  // ... more visits ...
];

const VisitTable = () => {
  const [page, setPage] = useState(1);
  // For demo, no real pagination

  return (
    <div className={styles.tableWrapper}>
      <div className={styles.tableHeaderRow}>
        <div className={styles.tableTitle}>Visits</div>
      </div>
      <div className={styles.tableScrollX}>
        <table className={styles.visitTable}>
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Name</th>
              <th>Lead Created</th>
              <th>Visit Schedule Date</th>
              <th>Visit Complete Date</th>
              <th>Visit Status</th>
              <th>Lead Status</th>
              <th>Visit Message</th>
              <th>Venue</th>
            </tr>
          </thead>
          <tbody>
            {dummyVisits.map((visit, idx) => (
              <tr key={visit.id}>
                <td>{idx + 1}</td>
                <td><span className={styles.phoneIcon}>📞</span> {visit.name}</td>
                <td>{visit.leadCreated}</td>
                <td>{visit.scheduleDate}</td>
                <td>{visit.completeDate}</td>
                <td>{visit.visitStatus}</td>
                <td>{visit.leadStatus}</td>
                <td>{visit.message}</td>
                <td>{visit.venue}</td>
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

export default VisitTable;
