import React from 'react';
import styles from './bookings.module.css';

const bookings = [
  {
    name: 'Ranjeet', leadCreated: '31 Aug, 23', vm: 'Rahul', bookingDate: '31 Aug, 23', bookingStatus: 'PAYMENT_CONFIRMED', eventName: 'Wedding', eventDate: '26 Feb, 24', pax: 150, ppp: 150, otherAmount: 0, bookingAmount: 21000, amountPaid: 31860, amountPending: 148140, totalBudget: 180000, venue: 'Hotel Lal International',
  },
  {
    name: 'Manorama', leadCreated: '27 Sep, 23', vm: 'Rahul', bookingDate: '27 Sep, 23', bookingStatus: 'PAYMENT_CONFIRMED', eventName: 'Wedding', eventDate: '08 Dec, 23', pax: 150, ppp: 150, otherAmount: 25000, bookingAmount: 25000, amountPaid: 30900, amountPending: 139910, totalBudget: 170000, venue: 'Hotel Lal International',
  },
  {
    name: 'Rajesh Prashad', leadCreated: '27 Sep, 23', vm: 'Rahul', bookingDate: '27 Sep, 23', bookingStatus: 'PAYMENT_CONFIRMED', eventName: 'Engagement', eventDate: '28 Dec, 23', pax: 175, ppp: 175, otherAmount: 11000, bookingAmount: 33665, amountPaid: 155135, amountPending: 188500, totalBudget: 188500, venue: 'Hotel Lal International',
  },
  {
    name: '919523098300', leadCreated: '02 Sep, 23', vm: 'Rahul', bookingDate: '02 Sep, 23', bookingStatus: 'PAYMENT_CONFIRMED', eventName: 'wedding', eventDate: '17 Dec, 23', pax: 300, ppp: 300, otherAmount: 25000, bookingAmount: 62835, amountPaid: 292165, amountPending: 355000, totalBudget: 355000, venue: 'Hotel Lal International',
  },
  {
    name: '919934435635', leadCreated: '27 Sep, 23', vm: 'Rahul', bookingDate: '27 Sep, 23', bookingStatus: 'PAYMENT_CONFIRMED', eventName: 'wedding', eventDate: '15 Nov, 23', pax: 300, ppp: 300, otherAmount: 25000, bookingAmount: 94965, amountPaid: 440305, amountPending: 535000, totalBudget: 535000, venue: 'Hotel Lal International',
  },
  {
    name: 'Vishwajeet ji', leadCreated: '30 Sep, 23', vm: 'Rahul', bookingDate: '30 Sep, 23', bookingStatus: 'PAYMENT_PENDING', eventName: 'Engagement', eventDate: '28 Oct, 23', pax: 100, ppp: 100, otherAmount: 100000, bookingAmount: 14865, amountPaid: 85135, amountPending: 100000, totalBudget: 100000, venue: 'Hotel Lal International',
  },
  {
    name: 'Vishwajeet Kumar', leadCreated: '30 Sep, 23', vm: 'Rahul', bookingDate: '08 Oct, 23', bookingStatus: 'PAYMENT_CONFIRMED', eventName: 'Engagement', eventDate: '28 Oct, 23', pax: 150, ppp: 150, otherAmount: 11000, bookingAmount: 29648, amountPaid: 137852, amountPending: 167500, totalBudget: 167500, venue: 'Hotel Lal International',
  },
  {
    name: '919031569111', leadCreated: '04 Oct, 23', vm: 'Rahul', bookingDate: '16 Oct, 23', bookingStatus: 'PAYMENT_CONFIRMED', eventName: 'Wedding', eventDate: '08 Dec, 23', pax: 200, ppp: 200, otherAmount: 39000, bookingAmount: 49560, amountPaid: 230440, amountPending: 280000, totalBudget: 280000, venue: 'Hotel Lal International',
  },
  {
    name: '919123445617@gmail.com', leadCreated: '29 Oct, 23', vm: 'Rahul', bookingDate: '29 Oct, 23', bookingStatus: 'CANCELED', eventName: 'wedding', eventDate: '01 Apr, 24', pax: 200, ppp: 200, otherAmount: 11000, bookingAmount: 0, amountPaid: 400000, amountPending: 400000, totalBudget: 400000, venue: 'Hotel Lal International',
  },
  {
    name: 'J tiwari', leadCreated: '30 Oct, 23', vm: 'Rahul', bookingDate: '31 Oct, 23', bookingStatus: 'PAYMENT_CONFIRMED', eventName: 'Wedding', eventDate: '01 Feb, 24', pax: 200, ppp: 200, otherAmount: 21000, bookingAmount: 59012, amountPaid: 274388, amountPending: 333400, totalBudget: 333400, venue: 'Hotel Lal International',
  },
];

const statusColor = status => {
  if (status === 'PAYMENT_CONFIRMED') return styles.statusConfirmed;
  if (status === 'PAYMENT_PENDING') return styles.statusPending;
  if (status === 'CANCELED') return styles.statusCanceled;
  return '';
};

const BookingTable = () => (
  <div className={styles.tableWrapper}>
    <div className={styles.tableHeaderRow}>
      <span>1 - {bookings.length} of 78 Bookings</span>
    </div>
    <div className={styles.tableScrollX}>
      <table className={styles.bookingsTable}>
        <thead>
          <tr>
            <th>S No.</th>
            <th>Name</th>
            <th>Lead Created</th>
            <th>VM</th>
            <th>Booking Date</th>
            <th>Booking Status</th>
            <th>Event Name</th>
            <th>Event Date</th>
            <th>Other Amount</th>
            <th>Booking Amount</th>
            <th>Amount Paid</th>
            <th>Amount Pending</th>
            <th>Total Budget</th>
            <th>Venue</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{b.name}</td>
              <td>{b.leadCreated}</td>
              <td>{b.vm}</td>
              <td>{b.bookingDate}</td>
              <td className={statusColor(b.bookingStatus)}>{b.bookingStatus.replace('_', ' ')}</td>
              <td>{b.eventName}</td>
              <td>{b.eventDate}</td>
              <td>{b.otherAmount}</td>
              <td>{b.bookingAmount}</td>
              <td>{b.amountPaid}</td>
              <td>{b.amountPending}</td>
              <td>{b.totalBudget}</td>
              <td>{b.venue}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.paginationBtnsBottom}>
        <button className={styles.prevBtn}>Previous</button>
        <button className={styles.nextBtn}>Next</button>
      </div>
    </div>
  </div>
);

export default BookingTable;
