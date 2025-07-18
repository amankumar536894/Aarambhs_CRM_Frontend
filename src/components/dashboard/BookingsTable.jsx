import React from 'react';
import './BookingsTable.css';

const bookings = [
  { name: 'Vishwajeet ji', date: '30 Sep, 23', paid: '14,865', amount: '100,000', venue: 'Hotel Lal International' },
  { name: 'ANKIT', date: '03 Nov, 23', paid: '30,975', amount: '48,000', venue: 'Hotel Lal International' },
  { name: 'Vinod', date: '27 Nov, 23', paid: '17,000', amount: '48,875', venue: 'Hotel Lal International' },
];

const BookingsTable = () => (
  <div className="card bookings-table">
    <h3>Bookings with advance amount pending</h3>
    <div className="table-responsive">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Booking Date</th>
            <th>Amount Paid</th>
            <th>Booking Amount</th>
            <th>Venue</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b, i) => (
            <tr key={i}>
              <td>{b.name}</td>
              <td>{b.date}</td>
              <td>{b.paid}</td>
              <td>{b.amount}</td>
              <td>{b.venue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default BookingsTable; 