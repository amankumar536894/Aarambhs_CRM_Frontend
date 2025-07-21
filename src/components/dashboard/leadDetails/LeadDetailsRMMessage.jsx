import React from 'react';
import styles from './leadDetails.module.css';

const LeadDetailsRMMessage = () => (
  <div className={styles.rmCard}>
    <div className={styles.rmTitle}>RM Message</div>
    <table className={styles.rmTable}>
      <thead>
        <tr>
          <th>S No.</th>
          <th>Date</th>
          <th>Title</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>17 Jul, 25 | 02:30 PM</td>
          <td>Super Possible Recce</td>
          <td>Locality - DANAPUR, Event Date - 24/11/2025, PAX - 400, PPP - 1700</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default LeadDetailsRMMessage;
