import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './leads.module.css';

const LeadTableRow = ({ lead, index }) => {
  const navigate = useNavigate();
  return (
    <tr
      className={styles.tableRow}
      style={{ cursor: 'pointer' }}
      onClick={() => navigate(`/dashboard/leads/${lead.id}`)}
    >
      <td><input type="checkbox" onClick={e => e.stopPropagation()} /></td>
      <td>{lead.created}</td>
      <td>{lead.name}</td>
      <td><span className={styles.phoneIcon}>📞</span> <span className={styles.phoneNumber}>{lead.mobile}</span></td>
      <td>{lead.status}</td>
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
};

export default LeadTableRow;
