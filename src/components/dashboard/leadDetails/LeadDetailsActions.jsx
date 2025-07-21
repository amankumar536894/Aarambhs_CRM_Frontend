import React, { useState, useRef } from 'react';
import styles from './leadDetails.module.css';
import { AddTaskModal } from './LeadTaskTable';

const actions = [
  { label: '+ Add Task', key: 'addTask', className: styles.btnBlue },
  { label: '+ Add Visit', key: 'addVisit', className: styles.btnOrange },
  { label: 'Contacted', key: 'contacted', className: styles.btnGreen },
  { label: 'Lead Done', key: 'leadDone', className: styles.btnGray },
  { label: 'Create Notes', key: 'createNotes', className: styles.btnPurple },
  { label: 'Create Booking', key: 'createBooking', className: styles.btnBrown },
  { label: 'Upload BCF', key: 'uploadBCF', className: styles.btnYellow },
  { label: 'Click to Call', key: 'clickToCall', className: styles.btnGray },
  { label: 'WhatsApp Optin', key: 'whatsappOptin', className: styles.btnPurpleLight },
  { label: 'Create Services Lead', key: 'createServicesLead', className: styles.btnBlueOutline },
];

function ActionModal({ open, onClose, children, beautiful }) {
  if (!open) return null;
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={beautiful ? styles.modalContentBeautiful : styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={beautiful ? styles.modalCloseBeautiful : styles.modalClose} onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}

export function CreateNoteModal({ open, onClose, onAddNote }) {
  const [note, setNote] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (note.trim()) {
      onAddNote(note.trim());
      setNote('');
      onClose();
    }
  };
  return (
    <ActionModal open={open} onClose={onClose} beautiful>
      <div className={styles.modalTitleRow}>
        <span className={styles.modalTitle}>Create Note</span>
      </div>
      <form className={styles.modalForm} onSubmit={handleSubmit}>
        <label>Note
          <textarea className={styles.modalTextareaXLarge} value={note} onChange={e => setNote(e.target.value)} placeholder="Write your note here..." />
        </label>
        <button type="submit" className={styles.btnBeautiful} style={{marginTop: '1.1rem'}}>Add Note</button>
      </form>
    </ActionModal>
  );
}

// Placeholder modals for other actions
function PlaceholderModal({ open, onClose, title }) {
  return (
    <ActionModal open={open} onClose={onClose}>
      <h3>{title}</h3>
      <div>Feature coming soon...</div>
    </ActionModal>
  );
}

const LeadDetailsActions = ({ onAddNote, taskTableRef, onAction }) => {
  const [openModal, setOpenModal] = useState(null);

  const handleActionClick = (action) => {
    if (action.key === 'addTask' && taskTableRef && taskTableRef.current) {
      taskTableRef.current.openAddTaskModal();
      setOpenModal(null);
    } else if (action.key === 'createBooking' && onAction) {
      onAction('createBooking');
    } else {
      setOpenModal(action.key);
    }
  };

  return (
    <div className={styles.actionsCard}>
      {actions.map(action => (
        <button
          key={action.label}
          className={`${styles.actionBtn} ${action.className}`}
          onClick={() => handleActionClick(action)}
        >
          {action.label}
        </button>
      ))}
      <PlaceholderModal open={openModal === 'addVisit'} onClose={() => setOpenModal(null)} title="Add Visit" />
      <PlaceholderModal open={openModal === 'contacted'} onClose={() => setOpenModal(null)} title="Contacted" />
      <PlaceholderModal open={openModal === 'leadDone'} onClose={() => setOpenModal(null)} title="Lead Done" />
      <CreateNoteModal open={openModal === 'createNotes'} onClose={() => setOpenModal(null)} onAddNote={onAddNote} />
      <PlaceholderModal open={openModal === 'uploadBCF'} onClose={() => setOpenModal(null)} title="Upload BCF" />
      <PlaceholderModal open={openModal === 'clickToCall'} onClose={() => setOpenModal(null)} title="Click to Call" />
      <PlaceholderModal open={openModal === 'whatsappOptin'} onClose={() => setOpenModal(null)} title="WhatsApp Optin" />
      <PlaceholderModal open={openModal === 'createServicesLead'} onClose={() => setOpenModal(null)} title="Create Services Lead" />
    </div>
  );
};

export default LeadDetailsActions;
