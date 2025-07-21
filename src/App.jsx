import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/dashboard/Navbar';
import Sidebar from './components/dashboard/Sidebar';
import LeadsPage from './components/dashboard/leads/LeadsPage';
import ReportCard from './components/dashboard/ReportCard';
import PerformanceRemarks from './components/dashboard/PerformanceRemarks';
import BookingsTable from './components/dashboard/BookingsTable';
import LeadDetailsPage from './components/dashboard/leadDetails/LeadDetailsPage';
import TasksPage from './components/dashboard/tasks/TasksPage';
import VisitsPage from './components/dashboard/visits/VisitsPage';
import Login from './components/login/Login';
import Otp from './components/login/Otp';
import BookingsPage from './components/dashboard/bookings/BookingsPage';
import './App.css';

function Dashboard() {
  return (
    <div className="app-layout">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="dashboard-content">
          <ReportCard />
          <PerformanceRemarks />
          <BookingsTable />
        </div>
      </div>
    </div>
  );
}

function LeadsOnlyPage() {
  return (
    <div className="app-layout">
      <Navbar />
      <div className="main-content">
        <div className="dashboard-content" style={{width: '100%'}}>
          <LeadsPage />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/leads" element={<LeadsOnlyPage />} />
      <Route path="/dashboard/tasks" element={<TasksPage />} />
      <Route path="/dashboard/visits" element={<VisitsPage />} />
      <Route path="/dashboard/leads/:leadId" element={<LeadDetailsPage />} />
      <Route path="/dashboard/bookings" element={<BookingsPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
