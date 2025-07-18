import React from 'react';
import styles from './leads.module.css';
import LeadTableRow from './LeadTableRow';
import PaginationControls from './PaginationControls';
import LeadBadges from './LeadBadges';

const columns = [
  'S.No.', 'Lead Created', 'Lead Name', 'Mobile Number', 'Lead Status', 'Availability', 'Lead Source', 'Service Status', 'PAX', 'Event Date', 'Locality', 'Venues'
];

const dummyLeads = [
  { id: 1, created: '17 Jul, 25 02:55 PM', name: '917061624168', mobile: '917061624168', status: 'Active (0)', availability: 'Available', source: 'Weddingz', serviceStatus: 'Not Contacted', pax: 250, eventDate: '26 Nov, 25', locality: 'Rukanpura', venues: ['The Mantra'], badges: ['High Value Lead'] },
  { id: 2, created: '17 Jul, 25 02:36 PM', name: '917254968356', mobile: '917254968356', status: 'Active (0)', availability: 'Available', source: 'Weddingz', serviceStatus: 'Not Contacted', pax: 149, eventDate: '01 Oct, 25', locality: 'Sipara', venues: ['Hotel Lal International'], badges: [] },
  { id: 2, created: '17 Jul, 25 02:36 PM', name: '917254968356', mobile: '917254968356', status: 'Active (0)', availability: 'Available', source: 'Weddingz', serviceStatus: 'Not Contacted', pax: 149, eventDate: '01 Oct, 25', locality: 'Sipara', venues: ['Hotel Lal International'], badges: [] },
  { id: 2, created: '17 Jul, 25 02:36 PM', name: '917254968356', mobile: '917254968356', status: 'Active (0)', availability: 'Available', source: 'Weddingz', serviceStatus: 'Not Contacted', pax: 149, eventDate: '01 Oct, 25', locality: 'Sipara', venues: ['Hotel Lal International'], badges: [] },
  { id: 2, created: '17 Jul, 25 02:36 PM', name: '917254968356', mobile: '917254968356', status: 'Active (0)', availability: 'Available', source: 'Weddingz', serviceStatus: 'Not Contacted', pax: 149, eventDate: '01 Oct, 25', locality: 'Sipara', venues: ['Hotel Lal International'], badges: [] },
  { id: 2, created: '17 Jul, 25 02:36 PM', name: '917254968356', mobile: '917254968356', status: 'Active (0)', availability: 'Available', source: 'Weddingz', serviceStatus: 'Not Contacted', pax: 149, eventDate: '01 Oct, 25', locality: 'Sipara', venues: ['Hotel Lal International'], badges: [] },
  { id: 2, created: '17 Jul, 25 02:36 PM', name: '917254968356', mobile: '917254968356', status: 'Active (0)', availability: 'Available', source: 'Weddingz', serviceStatus: 'Not Contacted', pax: 149, eventDate: '01 Oct, 25', locality: 'Sipara', venues: ['Hotel Lal International'], badges: [] },
  { id: 2, created: '17 Jul, 25 02:36 PM', name: '917254968356', mobile: '917254968356', status: 'Active (0)', availability: 'Available', source: 'Weddingz', serviceStatus: 'Not Contacted', pax: 149, eventDate: '01 Oct, 25', locality: 'Sipara', venues: ['Hotel Lal International'], badges: [] },
  { id: 2, created: '17 Jul, 25 02:36 PM', name: '917254968356', mobile: '917254968356', status: 'Active (0)', availability: 'Available', source: 'Weddingz', serviceStatus: 'Not Contacted', pax: 149, eventDate: '01 Oct, 25', locality: 'Sipara', venues: ['Hotel Lal International'], badges: [] },
  { id: 2, created: '17 Jul, 25 02:36 PM', name: '917254968356', mobile: '917254968356', status: 'Active (0)', availability: 'Available', source: 'Weddingz', serviceStatus: 'Not Contacted', pax: 149, eventDate: '01 Oct, 25', locality: 'Sipara', venues: ['Hotel Lal International'], badges: [] },
  { id: 2, created: '17 Jul, 25 02:36 PM', name: '917254968356', mobile: '917254968356', status: 'Active (0)', availability: 'Available', source: 'Weddingz', serviceStatus: 'Not Contacted', pax: 149, eventDate: '01 Oct, 25', locality: 'Sipara', venues: ['Hotel Lal International'], badges: [] },
];

const LeadTable = () => (
  <div className={styles.tableWrapper}>
    {/* <LeadBadges/> */}
    <table className={styles.leadsTable}>
      <thead>
        <tr>
          {columns.map(col => <th key={col}>{col}</th>)}
        </tr>
      </thead>
      <tbody>
        {dummyLeads.map((lead, idx) => (
          <LeadTableRow key={lead.id} lead={lead} index={idx + 1} />
        ))}
      </tbody>
    </table>
    <PaginationControls />
  </div>
);

export default LeadTable;
