import React from 'react';
import './PerformanceRemarks.css';

const remarks = [
  { message: "You haven't done any recces for the past 7 days. Please talk to your cluster head.", venue: "The Mantra" },
  { message: "Unctioned leads are very high, you will not be able to achieve your targets. Please action all leads with RM Message RU/PR/HIL", venue: "Hotel Lal International" },
];

const PerformanceRemarks = () => (
  <div className="card performance-remarks">
    <h3>Your Performance Remarks</h3>
    <div className="remarks-table-responsive">
      <table>
        <thead>
          <tr>
            <th>Message</th>
            <th>Venue</th>
          </tr>
        </thead>
        <tbody>
          {remarks.map((r, i) => (
            <tr key={i} className={i === 0 ? 'highlight' : i === 1 ? 'black-row' : ''}>
              <td>{r.message}</td>
              <td>{r.venue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default PerformanceRemarks; 