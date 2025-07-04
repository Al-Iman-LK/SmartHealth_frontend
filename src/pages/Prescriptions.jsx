import React, { useState } from 'react';
import { 
  Pill, 
  Clock, 
  Calendar, 
  Bell, 
  Plus,
  Search,
  Filter,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  X
} from 'lucide-react';
import './Prescriptions.css';

const Prescriptions = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  
  const prescriptions = [
    {
      id: 1,
      medication: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      doctor: 'Dr. Sarah Johnson',
      startDate: '2024-12-15',
      endDate: '2025-03-15',
      refillsLeft: 3,
      status: 'active',
      instructions: 'Take with food in the morning'
    },
    {
      id: 2,
      medication: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily',
      doctor: 'Dr. Michael Chen',
      startDate: '2024-11-20',
      endDate: '2025-02-20',
      refillsLeft: 1,
      status: 'active',
      instructions: 'Take with meals'
    },
    {
      id: 3,
      medication: 'Amoxicillin',
      dosage: '250mg',
      frequency: 'Three times daily',
      doctor: 'Dr. Emily Rodriguez',
      startDate: '2025-01-01',
      endDate: '2025-01-10',
      refillsLeft: 0,
      status: 'completed',
      instructions: 'Complete full course'
    }
  ];

  const reminders = [
    {
      id: 1,
      medication: 'Lisinopril 10mg',
      time: '8:00 AM',
      taken: true
    },
    {
      id: 2,
      medication: 'Metformin 500mg',
      time: '8:00 AM',
      taken: true
    },
    {
      id: 3,
      medication: 'Metformin 500mg',
      time: '6:00 PM',
      taken: false
    }
  ];

  return (
    <div className="prescriptions-page">
      <div className="page-header">
        <div className="header-title">
          <h1>Prescriptions</h1>
          <p>Manage your medications and track your treatment</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={20} />
          Add Medication
        </button>
      </div>

      <div className="prescriptions-grid">
        <div className="main-content">
          <div className="prescriptions-filters">
            <div className="search-input">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search medications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-group">
              <Filter size={16} />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="expired">Expired</option>
              </select>
            </div>
          </div>

          <div className="prescriptions-list">
            {prescriptions.map(prescription => (
              <div key={prescription.id} className="prescription-card">
                <div className="prescription-header">
                  <div className="medication-info">
                    <Pill size={24} color="#667eea" />
                    <div>
                      <h3>{prescription.medication} {prescription.dosage}</h3>
                      <p className="frequency">{prescription.frequency}</p>
                      <p className="doctor">Prescribed by {prescription.doctor}</p>
                    </div>
                  </div>
                  <span className={`status-badge ${prescription.status}`}>
                    {prescription.status}
                  </span>
                </div>

                <div className="prescription-details">
                  <div className="detail-row">
                    <span className="label">Instructions:</span>
                    <span>{prescription.instructions}</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Duration:</span>
                    <span>
                      {new Date(prescription.startDate).toLocaleDateString()} - 
                      {new Date(prescription.endDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Refills remaining:</span>
                    <span className={prescription.refillsLeft === 0 ? 'text-warning' : ''}>
                      {prescription.refillsLeft}
                    </span>
                  </div>
                </div>

                <div className="prescription-actions">
                  {prescription.status === 'active' && (
                    <>
                      <button className="btn btn-primary">
                        <RefreshCw size={16} />
                        Request Refill
                      </button>
                      <button className="btn btn-secondary">
                        <Bell size={16} />
                        Set Reminder
                      </button>
                    </>
                  )}
                  <button className="btn btn-secondary">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sidebar-content">
          <div className="daily-reminders-card">
            <h3>Today's Medications</h3>
            <div className="reminders-list">
              {reminders.map(reminder => (
                <div key={reminder.id} className={`reminder-item ${reminder.taken ? 'taken' : ''}`}>
                  <div className="reminder-info">
                    <span className="medication">{reminder.medication}</span>
                    <span className="time">{reminder.time}</span>
                  </div>
                  <div className="reminder-status">
                    {reminder.taken ? (
                      <CheckCircle size={20} color="#4CAF50" />
                    ) : (
                      <button className="btn btn-success">
                        Mark Taken
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="alerts-card">
            <h3>Medication Alerts</h3>
            <div className="alert-item">
              <AlertTriangle size={20} color="#ff9800" />
              <div>
                <p><strong>Refill Needed</strong></p>
                <p>Metformin - Only 1 refill left</p>
              </div>
            </div>
          </div>

          <div className="quick-actions-card">
            <h3>Quick Actions</h3>
            <button className="btn btn-secondary full-width">
              <Calendar size={16} />
              Schedule Pharmacy Pickup
            </button>
            <button className="btn btn-secondary full-width">
              <Bell size={16} />
              Manage Reminders
            </button>
            <button className="btn btn-secondary full-width">
              <Pill size={16} />
              Medication History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prescriptions;
