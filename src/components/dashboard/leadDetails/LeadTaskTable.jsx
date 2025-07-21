import React, { useState, forwardRef, useImperativeHandle } from 'react';
import styles from './leadDetails.module.css';

const dummyTasks = [
  { id: 1, dueDate: '2024-07-01', doneDate: '2024-07-02', status: 'Done', message: 'Called customer', doneNote: 'Confirmed' },
  { id: 2, dueDate: '2024-07-03', doneDate: '', status: 'Pending', message: 'Send follow-up email', doneNote: '' },
];

export const AddTaskModal = ({ open, onClose, onAddTask }) => {
  const [form, setForm] = useState({ title: '', dueDate: '', description: '' });
  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (form.title && form.dueDate) {
      onAddTask({
        id: Date.now(),
        dueDate: form.dueDate,
        doneDate: '',
        status: 'Pending',
        message: form.title,
        doneNote: form.description,
      });
      setForm({ title: '', dueDate: '', description: '' });
      onClose();
    }
  };
  if (!open) return null;
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContentBeautiful} onClick={e => e.stopPropagation()}>
        <button className={styles.modalCloseBeautiful} onClick={onClose}>×</button>
        <div className={styles.modalTitleRow}>
          <span className={styles.modalTitle}>Add New Task</span>
        </div>
        <form className={styles.modalForm} onSubmit={handleSubmit}>
          <label>Task Title
            <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Enter task title" className={styles.modalInput} />
          </label>
          <label>Due Date
            <input type="date" name="dueDate" value={form.dueDate} onChange={handleChange} className={styles.modalInput} />
          </label>
          <label>Description
            <textarea name="description" value={form.description} onChange={handleChange} className={styles.modalTextareaXLarge} placeholder="Task details" />
          </label>
          <button type="submit" className={styles.btnBeautiful} style={{marginTop: '1.1rem'}}>Add Task</button>
        </form>
      </div>
    </div>
  );
};

const LeadTaskTable = forwardRef(({ showAddTaskModal, setShowAddTaskModal }, ref) => {
  const [tasks, setTasks] = useState(dummyTasks);
  const [editTask, setEditTask] = useState(null);
  const [addModalOpen, setAddModalOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    openAddTaskModal: () => setAddModalOpen(true)
  }));

  const handleDelete = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const handleUpdate = (task) => {
    setEditTask(task);
  };

  const handleSave = (updated) => {
    setTasks(tasks.map(t => t.id === updated.id ? updated : t));
  };

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className={styles.taskCard}>
      <div className={styles.taskHeaderRow}>
        <span className={styles.taskTitle}>Task (The Mantra)</span>
        <span className={styles.taskHeaderIcons}>
          <button className={styles.taskIconBtn} title="Refresh"><span role="img" aria-label="refresh">🔄</span></button>
          <button className={styles.addTaskBtn} title="Add Task" onClick={() => setAddModalOpen(true)}>
            <span className={styles.addTaskBtnIcon}>＋</span> <span className={styles.addTaskBtnText}>Add Task</span>
          </button>
        </span>
      </div>
      <div className={styles.taskTableWrapper}>
        <table className={styles.taskTable}>
          <thead>
            <tr>
              <th>S No.</th>
              <th>Due Date</th>
              <th>Done Date</th>
              <th>Status</th>
              <th>Message</th>
              <th>Done Note</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, idx) => (
              <tr key={task.id}>
                <td>{idx + 1}</td>
                <td>{task.dueDate}</td>
                <td>{task.doneDate}</td>
                <td>{task.status}</td>
                <td>{task.message}</td>
                <td>{task.doneNote}</td>
                <td>
                  <button className={styles.taskActionBtn} style={{marginRight: '0.7rem'}} title="Edit" onClick={() => handleUpdate(task)}>✏️</button>
                  <button className={styles.taskActionBtn} title="Delete" onClick={() => handleDelete(task.id)}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AddTaskModal open={addModalOpen} onClose={() => setAddModalOpen(false)} onAddTask={handleAddTask} />
      <EditTaskModal
        open={!!editTask}
        onClose={() => setEditTask(null)}
        task={editTask}
        onSave={handleSave}
      />
    </div>
  );
});

function EditTaskModal({ open, onClose, task, onSave }) {
  const [form, setForm] = useState(task || {});
  React.useEffect(() => { setForm(task || {}); }, [task]);
  if (!open) return null;
  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSave(form);
    onClose();
  };
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContentBeautiful} onClick={e => e.stopPropagation()}>
        <button className={styles.modalCloseBeautiful} onClick={onClose}>×</button>
        <div className={styles.modalTitleRow}>
          <span className={styles.modalTitle}>Edit Task</span>
        </div>
        <form className={styles.modalForm} onSubmit={handleSubmit}>
          <label>Due Date
            <input type="date" name="dueDate" value={form.dueDate || ''} disabled className={styles.modalInput} />
          </label>
          <label>Done Date
            <input type="date" name="doneDate" value={form.doneDate || ''} onChange={handleChange} className={styles.modalInput} />
          </label>
          <label>Status
            <input type="text" name="status" value={form.status || ''} onChange={handleChange} className={styles.modalInput} />
          </label>
          <label>Message
            <input type="text" name="message" value={form.message || ''} onChange={handleChange} className={styles.modalInput} />
          </label>
          <label>Done Note
            <textarea name="doneNote" value={form.doneNote || ''} onChange={handleChange} className={styles.modalTextareaXLarge} />
          </label>
          <button type="submit" className={styles.btnBeautiful} style={{marginTop: '1.1rem'}}>Save</button>
        </form>
      </div>
    </div>
  );
}

export default LeadTaskTable; 