import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Heart, 
  Activity, 
  Users, 
  Clock, 
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Bell,
  Plus,
  ArrowRight,
  Thermometer,
  Weight,
  Zap
} from 'lucide-react';
import './Dashboard.css';

const Dashboard = ({ user }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [quickStats, setQuickStats] = useState({
    totalAppointments: 12,
    upcomingAppointments: 3,
    pendingResults: 2,
    activePrescriptions: 5
  });

  const [healthMetrics, setHealthMetrics] = useState({
    heartRate: 72,
    bloodPressure: '120/80',
    temperature: '98.6°F',
    weight: '165 lbs',
    steps: 8432,
    sleepHours: 7.5
  });

  const [upcomingAppointments, setUpcomingAppointments] = useState([
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      date: '2025-01-08',
      time: '10:00 AM',
      type: 'In-Person',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'General Practice',
      date: '2025-01-10',
      time: '2:30 PM',
      type: 'Telemedicine',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 3,
      doctor: 'Dr. Emily Rodriguez',
      specialty: 'Dermatology',
      date: '2025-01-15',
      time: '11:15 AM',
      type: 'In-Person',
      avatar: 'https://images.unsplash.com/photo-1594824047368-dd3bd66da05e?w=150&h=150&fit=crop&crop=face'
    }
  ]);

  const [recentActivity, setRecentActivity] = useState([
    {
      id: 1,
      type: 'appointment',
      message: 'Appointment scheduled with Dr. Sarah Johnson',
      time: '2 hours ago',
      icon: Calendar,
      color: '#4CAF50'
    },
    {
      id: 2,
      type: 'prescription',
      message: 'New prescription added: Lisinopril 10mg',
      time: '1 day ago',
      icon: CheckCircle,
      color: '#2196F3'
    },
    {
      id: 3,
      type: 'result',
      message: 'Lab results available for Blood Panel',
      time: '2 days ago',
      icon: Activity,
      color: '#ff9800'
    },
    {
      id: 4,
      type: 'message',
      message: 'Message from Dr. Chen about follow-up',
      time: '3 days ago',
      icon: Bell,
      color: '#9c27b0'
    }
  ]);

  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: 'medication',
      message: 'Time to take your evening medication',
      priority: 'high',
      time: '30 minutes ago'
    },
    {
      id: 2,
      type: 'appointment',
      message: 'Upcoming appointment with Dr. Johnson tomorrow',
      priority: 'medium',
      time: '2 hours ago'
    }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleQuickAction = (action) => {
    switch (action) {
      case 'book-appointment':
        alert('Redirecting to appointment booking...');
        break;
      case 'message-doctor':
        alert('Opening message center...');
        break;
      case 'view-records':
        alert('Opening medical records...');
        break;
      case 'refill-prescription':
        alert('Opening prescription refill...');
        break;
      default:
        break;
    }
  };

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="welcome-section">
          <h1>{getGreeting()}, {user?.name || 'John'}!</h1>
          <p>Here's your health overview for today, {currentTime.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</p>
        </div>
        
        <div className="quick-actions">
          <button 
            className="btn btn-primary"
            onClick={() => handleQuickAction('book-appointment')}
          >
            <Plus size={20} />
            Book Appointment
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => handleQuickAction('message-doctor')}
          >
            <Bell size={20} />
            Message Doctor
          </button>
        </div>
      </div>

      {/* Alerts Section */}
      {alerts.length > 0 && (
        <div className="alerts-section">
          <h2>Important Alerts</h2>
          <div className="alerts-grid">
            {alerts.map(alert => (
              <div key={alert.id} className={`alert-card ${alert.priority}`}>
                <AlertCircle size={20} />
                <div className="alert-content">
                  <p>{alert.message}</p>
                  <small>{alert.time}</small>
                </div>
                <button className="alert-dismiss">×</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Stats */}
      <div className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <Calendar size={24} />
            </div>
            <div className="stat-content">
              <h3>{quickStats.totalAppointments}</h3>
              <p>Total Appointments</p>
              <span className="stat-trend positive">+2 this month</span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <Clock size={24} />
            </div>
            <div className="stat-content">
              <h3>{quickStats.upcomingAppointments}</h3>
              <p>Upcoming Appointments</p>
              <span className="stat-trend neutral">Next: Tomorrow</span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <Activity size={24} />
            </div>
            <div className="stat-content">
              <h3>{quickStats.pendingResults}</h3>
              <p>Pending Results</p>
              <span className="stat-trend warning">Review needed</span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <CheckCircle size={24} />
            </div>
            <div className="stat-content">
              <h3>{quickStats.activePrescriptions}</h3>
              <p>Active Prescriptions</p>
              <span className="stat-trend positive">All current</span>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        {/* Health Metrics */}
        <div className="health-metrics-section">
          <div className="section-header">
            <h2>Today's Health Metrics</h2>
            <button className="btn btn-secondary">
              <TrendingUp size={16} />
              View Trends
            </button>
          </div>
          
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-icon heart-rate">
                <Heart size={20} />
              </div>
              <div className="metric-info">
                <span className="metric-label">Heart Rate</span>
                <span className="metric-value">{healthMetrics.heartRate} BPM</span>
                <span className="metric-status normal">Normal</span>
              </div>
            </div>
            
            <div className="metric-card">
              <div className="metric-icon blood-pressure">
                <Activity size={20} />
              </div>
              <div className="metric-info">
                <span className="metric-label">Blood Pressure</span>
                <span className="metric-value">{healthMetrics.bloodPressure}</span>
                <span className="metric-status normal">Normal</span>
              </div>
            </div>
            
            <div className="metric-card">
              <div className="metric-icon temperature">
                <Thermometer size={20} />
              </div>
              <div className="metric-info">
                <span className="metric-label">Temperature</span>
                <span className="metric-value">{healthMetrics.temperature}</span>
                <span className="metric-status normal">Normal</span>
              </div>
            </div>
            
            <div className="metric-card">
              <div className="metric-icon weight">
                <Weight size={20} />
              </div>
              <div className="metric-info">
                <span className="metric-label">Weight</span>
                <span className="metric-value">{healthMetrics.weight}</span>
                <span className="metric-status stable">Stable</span>
              </div>
            </div>
            
            <div className="metric-card">
              <div className="metric-icon steps">
                <Zap size={20} />
              </div>
              <div className="metric-info">
                <span className="metric-label">Steps Today</span>
                <span className="metric-value">{healthMetrics.steps.toLocaleString()}</span>
                <span className="metric-status good">84% of goal</span>
              </div>
            </div>
            
            <div className="metric-card">
              <div className="metric-icon sleep">
                <Clock size={20} />
              </div>
              <div className="metric-info">
                <span className="metric-label">Sleep Last Night</span>
                <span className="metric-value">{healthMetrics.sleepHours}h</span>
                <span className="metric-status good">Good quality</span>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-grid">
          {/* Upcoming Appointments */}
          <div className="dashboard-card">
            <div className="card-header">
              <h3>Upcoming Appointments</h3>
              <button className="btn btn-secondary">
                View All
                <ArrowRight size={16} />
              </button>
            </div>
            
            <div className="appointments-list">
              {upcomingAppointments.map(appointment => (
                <div key={appointment.id} className="appointment-item">
                  <img 
                    src={appointment.avatar} 
                    alt={appointment.doctor}
                    className="doctor-avatar"
                  />
                  <div className="appointment-info">
                    <h4>{appointment.doctor}</h4>
                    <p>{appointment.specialty}</p>
                    <div className="appointment-details">
                      <span className="appointment-date">
                        {new Date(appointment.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                      <span className="appointment-time">{appointment.time}</span>
                      <span className={`appointment-type ${appointment.type.toLowerCase()}`}>
                        {appointment.type}
                      </span>
                    </div>
                  </div>
                  <button className="btn btn-primary">
                    Join Call
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="dashboard-card">
            <div className="card-header">
              <h3>Recent Activity</h3>
              <button className="btn btn-secondary">
                View All
                <ArrowRight size={16} />
              </button>
            </div>
            
            <div className="activity-list">
              {recentActivity.map(activity => {
                const IconComponent = activity.icon;
                return (
                  <div key={activity.id} className="activity-item">
                    <div 
                      className="activity-icon"
                      style={{ backgroundColor: activity.color }}
                    >
                      <IconComponent size={16} />
                    </div>
                    <div className="activity-content">
                      <p>{activity.message}</p>
                      <small>{activity.time}</small>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="dashboard-card">
            <div className="card-header">
              <h3>Quick Actions</h3>
            </div>
            
            <div className="quick-actions-grid">
              <button 
                className="quick-action-btn"
                onClick={() => handleQuickAction('view-records')}
              >
                <FileText size={24} />
                <span>View Records</span>
              </button>
              
              <button 
                className="quick-action-btn"
                onClick={() => handleQuickAction('refill-prescription')}
              >
                <CheckCircle size={24} />
                <span>Refill Rx</span>
              </button>
              
              <button 
                className="quick-action-btn"
                onClick={() => handleQuickAction('book-appointment')}
              >
                <Calendar size={24} />
                <span>Book Appointment</span>
              </button>
              
              <button 
                className="quick-action-btn"
                onClick={() => handleQuickAction('message-doctor')}
              >
                <Users size={24} />
                <span>Contact Doctor</span>
              </button>
            </div>
          </div>

          {/* Health Tips */}
          <div className="dashboard-card">
            <div className="card-header">
              <h3>Health Tips for You</h3>
            </div>
            
            <div className="health-tips">
              <div className="tip-item">
                <div className="tip-icon">
                  <Heart size={20} />
                </div>
                <div className="tip-content">
                  <h4>Stay Hydrated</h4>
                  <p>Drink at least 8 glasses of water today. You're currently at 4/8 glasses.</p>
                </div>
              </div>
              
              <div className="tip-item">
                <div className="tip-icon">
                  <Activity size={20} />
                </div>
                <div className="tip-content">
                  <h4>Move More</h4>
                  <p>You're 1,568 steps away from your daily goal. Take a 15-minute walk!</p>
                </div>
              </div>
              
              <div className="tip-item">
                <div className="tip-icon">
                  <Clock size={20} />
                </div>
                <div className="tip-content">
                  <h4>Sleep Schedule</h4>
                  <p>Maintain your 7-8 hour sleep schedule. Consider winding down by 10 PM.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
