import React from 'react';
import styles from './leads.module.css';

const LeadTableRow = ({ lead, index }) => (
  <tr className={styles.tableRow}>
    <td><input type="checkbox" /></td>
    <td>{lead.created}</td>
    <td>{lead.name}</td>
    <td><span className={styles.phoneIcon}>📞</span> <span className={styles.phoneNumber}>{lead.mobile}</span></td>
    <td>{lead.status}</td>
    <td>{lead.availability}</td>
    <td>{lead.source}</td>
    <td>{lead.serviceStatus}</td>
    <td>{lead.pax}</td>
    <td>{lead.eventDate}</td>
    <td>{lead.locality}</td>
    <td>
      <ul className={styles.venueList}>
        {lead.venues.map(v => <li key={v}>{v}</li>)}
      </ul>
    </td>
  </tr>
);

export default LeadTableRow;
