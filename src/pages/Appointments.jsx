import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Plus, 
  Search, 
  Filter, 
  Video, 
  MapPin, 
  User, 
  Phone,
  Edit3,
  Trash2,
  CheckCircle,
  X,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import './Appointments.css';

const Appointments = ({ user }) => {
  const [currentView, setCurrentView] = useState('list'); // 'list', 'calendar', 'book'
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showBookingModal, setShowBookingModal] = useState(false);

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      date: '2025-01-08',
      time: '10:00 AM',
      duration: '30 mins',
      type: 'In-Person',
      status: 'confirmed',
      location: 'Medical Center, Room 205',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
      reason: 'Routine cardiac checkup'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'General Practice',
      date: '2025-01-10',
      time: '2:30 PM',
      duration: '45 mins',
      type: 'Telemedicine',
      status: 'confirmed',
      location: 'Video Call',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
      reason: 'Follow-up consultation'
    },
    {
      id: 3,
      doctor: 'Dr. Emily Rodriguez',
      specialty: 'Dermatology',
      date: '2025-01-15',
      time: '11:15 AM',
      duration: '20 mins',
      type: 'In-Person',
      status: 'pending',
      location: 'Dermatology Clinic, Room 101',
      avatar: 'https://images.unsplash.com/photo-1594824047368-dd3bd66da05e?w=150&h=150&fit=crop&crop=face',
      reason: 'Skin examination'
    },
    {
      id: 4,
      doctor: 'Dr. Robert Kim',
      specialty: 'Orthopedics',
      date: '2025-01-20',
      time: '9:00 AM',
      duration: '60 mins',
      type: 'In-Person',
      status: 'completed',
      location: 'Orthopedic Center, Room 302',
      avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face',
      reason: 'Knee pain evaluation'
    }
  ]);

  const [bookingForm, setBookingForm] = useState({
    doctor: '',
    specialty: '',
    date: '',
    time: '',
    type: 'in-person',
    reason: '',
    symptoms: '',
    urgency: 'routine'
  });

  const specialties = [
    'Cardiology',
    'Dermatology',
    'General Practice',
    'Orthopedics',
    'Pediatrics',
    'Psychiatry',
    'Gynecology',
    'Neurology',
    'Ophthalmology',
    'ENT'
  ];

  const timeSlots = [
    '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'
  ];

  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = appointment.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || appointment.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleBookAppointment = (e) => {
    e.preventDefault();
    const newAppointment = {
      id: appointments.length + 1,
      doctor: `Dr. ${bookingForm.doctor}`,
      specialty: bookingForm.specialty,
      date: bookingForm.date,
      time: bookingForm.time,
      duration: '30 mins',
      type: bookingForm.type === 'in-person' ? 'In-Person' : 'Telemedicine',
      status: 'pending',
      location: bookingForm.type === 'in-person' ? 'Medical Center' : 'Video Call',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
      reason: bookingForm.reason
    };

    setAppointments([...appointments, newAppointment]);
    setShowBookingModal(false);
    setBookingForm({
      doctor: '',
      specialty: '',
      date: '',
      time: '',
      type: 'in-person',
      reason: '',
      symptoms: '',
      urgency: 'routine'
    });
    alert('Appointment booked successfully!');
  };

  const handleCancelAppointment = (id) => {
    if (confirm('Are you sure you want to cancel this appointment?')) {
      setAppointments(appointments.filter(apt => apt.id !== id));
      alert('Appointment cancelled successfully!');
    }
  };

  const handleRescheduleAppointment = (id) => {
    alert('Reschedule functionality would open a modal with available time slots.');
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      confirmed: { color: '#4CAF50', bg: '#e8f5e8', text: 'Confirmed' },
      pending: { color: '#ff9800', bg: '#fff3e0', text: 'Pending' },
      completed: { color: '#2196F3', bg: '#e3f2fd', text: 'Completed' },
      cancelled: { color: '#f44336', bg: '#ffebee', text: 'Cancelled' }
    };

    const config = statusConfig[status] || statusConfig.pending;
    
    return (
      <span 
        className="status-badge"
        style={{ 
          backgroundColor: config.bg, 
          color: config.color 
        }}
      >
        {config.text}
      </span>
    );
  };

  const renderAppointmentsList = () => (
    <div className="appointments-list">
      {filteredAppointments.map(appointment => (
        <div key={appointment.id} className="appointment-card">
          <div className="appointment-main">
            <div className="doctor-info">
              <img 
                src={appointment.avatar} 
                alt={appointment.doctor}
                className="doctor-avatar"
              />
              <div className="doctor-details">
                <h3>{appointment.doctor}</h3>
                <p className="specialty">{appointment.specialty}</p>
                <p className="reason">{appointment.reason}</p>
              </div>
            </div>

            <div className="appointment-details">
              <div className="detail-item">
                <Calendar size={16} />
                <span>{new Date(appointment.date).toLocaleDateString('en-US', { 
                  weekday: 'short', 
                  month: 'short', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="detail-item">
                <Clock size={16} />
                <span>{appointment.time} ({appointment.duration})</span>
              </div>
              <div className="detail-item">
                {appointment.type === 'Telemedicine' ? (
                  <Video size={16} />
                ) : (
                  <MapPin size={16} />
                )}
                <span>{appointment.location}</span>
              </div>
            </div>

            <div className="appointment-status">
              {getStatusBadge(appointment.status)}
            </div>
          </div>

          <div className="appointment-actions">
            {appointment.status === 'confirmed' && (
              <>
                {appointment.type === 'Telemedicine' && (
                  <button className="btn btn-primary">
                    <Video size={16} />
                    Join Call
                  </button>
                )}
                <button 
                  className="btn btn-secondary"
                  onClick={() => handleRescheduleAppointment(appointment.id)}
                >
                  <Edit3 size={16} />
                  Reschedule
                </button>
              </>
            )}
            
            {appointment.status !== 'completed' && (
              <button 
                className="btn btn-danger"
                onClick={() => handleCancelAppointment(appointment.id)}
              >
                <Trash2 size={16} />
                Cancel
              </button>
            )}

            {appointment.status === 'completed' && (
              <button className="btn btn-secondary">
                <User size={16} />
                View Notes
              </button>
            )}
          </div>
        </div>
      ))}

      {filteredAppointments.length === 0 && (
        <div className="empty-state">
          <Calendar size={48} />
          <h3>No appointments found</h3>
          <p>Try adjusting your search or book a new appointment</p>
          <button 
            className="btn btn-primary"
            onClick={() => setShowBookingModal(true)}
          >
            <Plus size={16} />
            Book Appointment
          </button>
        </div>
      )}
    </div>
  );

  const renderBookingForm = () => (
    <div className="booking-modal-overlay">
      <div className="booking-modal">
        <div className="modal-header">
          <h2>Book New Appointment</h2>
          <button 
            className="modal-close"
            onClick={() => setShowBookingModal(false)}
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleBookAppointment} className="booking-form">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Specialty</label>
              <select
                className="form-select"
                value={bookingForm.specialty}
                onChange={(e) => setBookingForm({...bookingForm, specialty: e.target.value})}
                required
              >
                <option value="">Select specialty</option>
                {specialties.map(specialty => (
                  <option key={specialty} value={specialty}>{specialty}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Preferred Doctor</label>
              <input
                type="text"
                className="form-input"
                value={bookingForm.doctor}
                onChange={(e) => setBookingForm({...bookingForm, doctor: e.target.value})}
                placeholder="Enter doctor's name (optional)"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Preferred Date</label>
              <input
                type="date"
                className="form-input"
                value={bookingForm.date}
                onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Preferred Time</label>
              <select
                className="form-select"
                value={bookingForm.time}
                onChange={(e) => setBookingForm({...bookingForm, time: e.target.value})}
                required
              >
                <option value="">Select time</option>
                {timeSlots.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Appointment Type</label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="type"
                  value="in-person"
                  checked={bookingForm.type === 'in-person'}
                  onChange={(e) => setBookingForm({...bookingForm, type: e.target.value})}
                />
                <span className="radio-custom"></span>
                In-Person Visit
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="type"
                  value="telemedicine"
                  checked={bookingForm.type === 'telemedicine'}
                  onChange={(e) => setBookingForm({...bookingForm, type: e.target.value})}
                />
                <span className="radio-custom"></span>
                Telemedicine (Video Call)
              </label>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Reason for Visit</label>
            <input
              type="text"
              className="form-input"
              value={bookingForm.reason}
              onChange={(e) => setBookingForm({...bookingForm, reason: e.target.value})}
              placeholder="Brief description of your visit reason"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Symptoms or Concerns (Optional)</label>
            <textarea
              className="form-textarea"
              value={bookingForm.symptoms}
              onChange={(e) => setBookingForm({...bookingForm, symptoms: e.target.value})}
              placeholder="Describe any symptoms or concerns in detail"
              rows="3"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Urgency Level</label>
            <select
              className="form-select"
              value={bookingForm.urgency}
              onChange={(e) => setBookingForm({...bookingForm, urgency: e.target.value})}
            >
              <option value="routine">Routine (within 2 weeks)</option>
              <option value="soon">Soon (within 1 week)</option>
              <option value="urgent">Urgent (within 2-3 days)</option>
              <option value="emergency">Emergency (same day)</option>
            </select>
          </div>

          <div className="form-actions">
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => setShowBookingModal(false)}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              <CheckCircle size={16} />
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="appointments-page">
      <div className="appointments-header">
        <div className="header-title">
          <h1>My Appointments</h1>
          <p>Manage your healthcare appointments and consultations</p>
        </div>
        
        <button 
          className="btn btn-primary"
          onClick={() => setShowBookingModal(true)}
        >
          <Plus size={20} />
          Book Appointment
        </button>
      </div>

      <div className="appointments-filters">
        <div className="search-section">
          <div className="search-input">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search by doctor or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="filter-section">
          <div className="filter-group">
            <Filter size={16} />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Status</option>
              <option value="confirmed">Confirmed</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div className="view-toggle">
            <button 
              className={`view-btn ${currentView === 'list' ? 'active' : ''}`}
              onClick={() => setCurrentView('list')}
            >
              List View
            </button>
            <button 
              className={`view-btn ${currentView === 'calendar' ? 'active' : ''}`}
              onClick={() => setCurrentView('calendar')}
            >
              Calendar View
            </button>
          </div>
        </div>
      </div>

      <div className="appointments-content">
        {currentView === 'list' && renderAppointmentsList()}
        {currentView === 'calendar' && (
          <div className="calendar-view">
            <div className="calendar-placeholder">
              <Calendar size={64} />
              <h3>Calendar View</h3>
              <p>Calendar view would show appointments in a monthly calendar format</p>
            </div>
          </div>
        )}
      </div>

      {showBookingModal && renderBookingForm()}
    </div>
  );
};

export default Appointments;
