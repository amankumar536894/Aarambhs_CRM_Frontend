import React from 'react';
import Navbar from '../Navbar';
import BookingFilters from './BookingFilters';
import BookingTable from './BookingTable';
import styles from './bookings.module.css';

const BookingsPage = () => (
  <div className={styles.bookingsPage}>
    <Navbar activeMenu="Bookings" />
    <div className={styles.bookingsContentRow}>
      <BookingFilters />
      <main className={styles.bookingsMainContent}>
        <BookingTable />
      </main>
    </div>
  </div>
);

export default BookingsPage;
