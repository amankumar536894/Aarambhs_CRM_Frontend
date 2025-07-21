import React from 'react';
import Navbar from '../Navbar';
import TaskTable from './TaskTable';
import TaskFilters from './TaskFilters';
import styles from './tasks.module.css';

const TasksPage = () => (
  <div className={styles.tasksPage}>
    <Navbar activeMenu="Tasks" />
    <div className={styles.tasksContentRow}>
      <TaskFilters />
      <main className={styles.tasksMainContent}>
        <TaskTable />
      </main>
    </div>
  </div>
);

export default TasksPage;
