import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import styles from './leadDetails.module.css';
import LeadDetailsHeader from './LeadDetailsHeader';
import LeadDetailsActions, { CreateNoteModal } from './LeadDetailsActions';
import LeadDetailsRMMessage from './LeadDetailsRMMessage';
import LeadDetailsInfo from './LeadDetailsInfo';
import LeadTaskTable from './LeadTaskTable';
import BookingTable from '../bookings/BookingTable';
import stylesBooking from '../bookings/bookings.module.css';

const initialNotes = [
  { id: 1, text: 'Customer requested a callback tomorrow.', date: '2024-07-01 10:30' },
  { id: 2, text: 'Sent venue details via email.', date: '2024-07-02 15:45' },
];

function EditNoteModal({ open, onClose, note, onSave }) {
  const [text, setText] = useState(note ? note.text : '');
  React.useEffect(() => { setText(note ? note.text : ''); }, [note]);
  if (!open) return null;
  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim()) {
      onSave({ ...note, text });
      onClose();
    }
  };
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContentBeautiful} onClick={e => e.stopPropagation()}>
        <button className={styles.modalCloseBeautiful} onClick={onClose}>×</button>
        <div className={styles.modalTitleRow}>
          <span className={styles.modalTitle}>Edit Note</span>
        </div>
        <form className={styles.modalForm} onSubmit={handleSubmit}>
          <label>Note
            <textarea className={styles.modalTextareaXLarge} value={text} onChange={e => setText(e.target.value)} placeholder="Edit your note here..." />
          </label>
          <button type="submit" className={styles.btnBeautiful} style={{marginTop: '1.1rem'}}>Save</button>
        </form>
      </div>
    </div>
  );
}

// Dummy bookings data (should be shared or imported in real app)
const allBookings = [
  {
    name: 'Ranjeet', leadCreated: '31 Aug, 23', vm: 'Rahul', bookingDate: '31 Aug, 23', bookingStatus: 'PAYMENT_CONFIRMED', eventName: 'Wedding', eventDate: '26 Feb, 24', pax: 150, ppp: 150, otherAmount: 0, bookingAmount: 21000, amountPaid: 31860, amountPending: 148140, totalBudget: 180000, venue: 'Hotel Lal International', leadId: '1',
  },
  {
    name: 'Manorama', leadCreated: '27 Sep, 23', vm: 'Rahul', bookingDate: '27 Sep, 23', bookingStatus: 'PAYMENT_CONFIRMED', eventName: 'Wedding', eventDate: '08 Dec, 23', pax: 150, ppp: 150, otherAmount: 25000, bookingAmount: 25000, amountPaid: 30900, amountPending: 139910, totalBudget: 170000, venue: 'Hotel Lal International', leadId: '2',
  },
  // ... more dummy bookings ...
];

function CreateBookingModal({ open, onClose, onCreate, lead }) {
  const [form, setForm] = React.useState({
    name: lead?.name || '',
    leadCreated: lead?.created || '',
    vm: '',
    bookingDate: '',
    bookingStatus: 'PAYMENT_CONFIRMED',
    eventName: '',
    eventDate: '',
    otherAmount: '',
    bookingAmount: '',
    amountPaid: '',
    amountPending: '',
    totalBudget: '',
    venue: '',
  });
  React.useEffect(() => {
    setForm(f => ({ ...f, name: lead?.name || '', leadCreated: lead?.created || '' }));
  }, [lead]);
  if (!open) return null;
  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    onCreate({ ...form, leadId: lead?.id || '' });
    onClose();
  };
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContentBeautiful} onClick={e => e.stopPropagation()}>
        <button className={styles.modalCloseBeautiful} onClick={onClose}>×</button>
        <div className={styles.modalTitleRow}>
          <span className={styles.modalTitle}>Create Booking</span>
        </div>
        <form className={styles.modalForm} onSubmit={handleSubmit} style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.2rem',width:'100%'}}>
          <label style={{gridColumn:'1/2'}}>Name
            <input name="name" value={form.name} onChange={handleChange} className={styles.modalInput} />
          </label>
          <label style={{gridColumn:'2/3'}}>Lead Created
            <input name="leadCreated" value={form.leadCreated} onChange={handleChange} className={styles.modalInput} />
          </label>
          <label style={{gridColumn:'1/2'}}>VM
            <input name="vm" value={form.vm} onChange={handleChange} className={styles.modalInput} />
          </label>
          <label style={{gridColumn:'2/3'}}>Booking Date
            <input name="bookingDate" value={form.bookingDate} onChange={handleChange} className={styles.modalInput} />
          </label>
          <label style={{gridColumn:'1/2'}}>Booking Status
            <select name="bookingStatus" value={form.bookingStatus} onChange={handleChange} className={styles.modalInput}>
              <option>PAYMENT_CONFIRMED</option>
              <option>PAYMENT_PENDING</option>
              <option>CANCELED</option>
            </select>
          </label>
          <label style={{gridColumn:'2/3'}}>Event Name
            <input name="eventName" value={form.eventName} onChange={handleChange} className={styles.modalInput} />
          </label>
          <label style={{gridColumn:'1/2'}}>Event Date
            <input name="eventDate" value={form.eventDate} onChange={handleChange} className={styles.modalInput} />
          </label>
          <label style={{gridColumn:'2/3'}}>Other Amount
            <input name="otherAmount" value={form.otherAmount} onChange={handleChange} className={styles.modalInput} />
          </label>
          <label style={{gridColumn:'1/2'}}>Booking Amount
            <input name="bookingAmount" value={form.bookingAmount} onChange={handleChange} className={styles.modalInput} />
          </label>
          <label style={{gridColumn:'2/3'}}>Amount Paid
            <input name="amountPaid" value={form.amountPaid} onChange={handleChange} className={styles.modalInput} />
          </label>
          <label style={{gridColumn:'1/2'}}>Amount Pending
            <input name="amountPending" value={form.amountPending} onChange={handleChange} className={styles.modalInput} />
          </label>
          <label style={{gridColumn:'2/3'}}>Total Budget
            <input name="totalBudget" value={form.totalBudget} onChange={handleChange} className={styles.modalInput} />
          </label>
          <label style={{gridColumn:'1/3'}}>Venue
            <input name="venue" value={form.venue} onChange={handleChange} className={styles.modalInput} />
          </label>
          <button type="submit" className={styles.btnBeautiful} style={{marginTop: '1.1rem',gridColumn:'1/3'}}>Create Booking</button>
        </form>
      </div>
    </div>
  );
}

const LeadDetailsPage = () => {
  const [notes, setNotes] = useState(initialNotes);
  const [editNote, setEditNote] = useState(null);
  const [addNoteModalOpen, setAddNoteModalOpen] = useState(false);
  const { leadId } = useParams();
  const taskTableRef = useRef();
  const [bookings, setBookings] = useState(allBookings.filter(b => b.leadId === leadId));
  const [createBookingOpen, setCreateBookingOpen] = useState(false);

  // Handler for LeadDetailsActions to open booking modal
  const handleAction = (action) => {
    if (action === 'createBooking') setCreateBookingOpen(true);
  };

  // Reset addNoteModalOpen when lead changes
  useEffect(() => {
    setAddNoteModalOpen(false);
    setEditNote(null);
  }, [leadId]);

  const handleAddNote = (noteText) => {
    setNotes([
      ...notes,
      { id: Date.now(), text: noteText, date: new Date().toLocaleString() },
    ]);
  };

  const handleEditNote = (note) => {
    setEditNote(note);
  };

  const handleSaveNote = (updatedNote) => {
    setNotes(notes.map(n => n.id === updatedNote.id ? { ...n, text: updatedNote.text } : n));
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  const handleCreateBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  return (
    <div className={styles.leadDetailsPage}>
      <Navbar />
      <LeadDetailsHeader />
      <LeadDetailsActions onAddNote={handleAddNote} taskTableRef={taskTableRef} onAction={handleAction} />
      <CreateBookingModal open={createBookingOpen} onClose={() => setCreateBookingOpen(false)} onCreate={handleCreateBooking} lead={{id: leadId}} />
      <LeadDetailsRMMessage />
      <LeadDetailsInfo />
      <LeadTaskTable ref={taskTableRef} />
      <div className={styles.notesCard}>
        <div className={styles.notesHeaderRow}>
          <span className={styles.notesTitle}>Notes</span>
          <button className={styles.addNoteBtn} onClick={() => setAddNoteModalOpen(true)}>
            <span className={styles.addNoteBtnIcon}>＋</span> <span className={styles.addNoteBtnText}>Add Note</span>
          </button>
        </div>
        <div className={styles.notesTableWrapper}>
          <table className={styles.notesTable}>
            <thead>
              <tr>
                <th>S No.</th>
                <th>Note</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {notes.map((note, idx) => (
                <tr key={note.id}>
                  <td>{idx + 1}</td>
                  <td>{note.text}</td>
                  <td>{note.date}</td>
                  <td>
                    <button className={styles.noteActionBtn} style={{marginRight: '0.7rem'}} title="Edit" onClick={() => handleEditNote(note)}>✏️</button>
                    <button className={styles.noteActionBtn} title="Delete" onClick={() => handleDeleteNote(note.id)}>🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <EditNoteModal
          open={!!editNote}
          onClose={() => setEditNote(null)}
          note={editNote}
          onSave={handleSaveNote}
        />
        <CreateNoteModal
          open={addNoteModalOpen}
          onClose={() => setAddNoteModalOpen(false)}
          onAddNote={handleAddNote}
        />
      </div>
      <div className={stylesBooking.tableWrapper} style={{marginTop: '2rem'}}>
        <div className={stylesBooking.tableHeaderRow}>
          <span>Bookings for this Lead</span>
          <button className={stylesBooking.addTaskBtn + ' ' + stylesBooking.btnBeautiful} onClick={() => setCreateBookingOpen(true)}>
            <span className={stylesBooking.addTaskBtnIcon}>＋</span> <span className={stylesBooking.addTaskBtnText}>Create Booking</span>
          </button>
        </div>
        <div className={stylesBooking.tableScrollX}>
          <table className={stylesBooking.bookingsTable}>
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
                  <td className={stylesBooking[b.bookingStatus === 'PAYMENT_CONFIRMED' ? 'statusConfirmed' : b.bookingStatus === 'PAYMENT_PENDING' ? 'statusPending' : b.bookingStatus === 'CANCELED' ? 'statusCanceled' : '']}>{b.bookingStatus.replace('_', ' ')}</td>
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
              {bookings.length === 0 && <tr><td colSpan="14" style={{textAlign:'center',color:'#888'}}>No bookings for this lead.</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeadDetailsPage;
