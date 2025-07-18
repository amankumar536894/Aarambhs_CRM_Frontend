import React from 'react';
import './ReportCard.css';

const ReportCard = () => (
  <div className="card report-card">
    <h3>Report for month of July (Month Till Date)</h3>
    <div className="table-responsive">
      <table>
        <thead>
          <tr>
            <th>Weddingz Unique Leads</th>
            <th>Hot Unique Leads %</th>
            <th>Unique Follow ups done per lead</th>
            <th>Unique Follow ups added</th>
            <th>Total Visits</th>
            <th>Total Closures</th>
            <th>Total Venue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="number">275</td>
            <td className="number">5.15%</td>
            <td className="number">0.15</td>
            <td className="number">83</td>
            <td className="number">6</td>
            <td className="number">0</td>
            <td className="number">0</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default ReportCard; 