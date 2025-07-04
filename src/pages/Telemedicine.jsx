import React, { useState } from 'react';
import { 
  Video, 
  Phone, 
  Calendar, 
  Clock, 
  User, 
  Mic, 
  MicOff, 
  Camera, 
  CameraOff,
  Monitor,
  MessageCircle,
  FileText,
  Settings
} from 'lucide-react';
import './Telemedicine.css';

const Telemedicine = ({ user }) => {
  const [activeCall, setActiveCall] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);

  const upcomingCalls = [
    {
      id: 1,
      doctor: 'Dr. Michael Chen',
      specialty: 'General Practice',
      date: '2025-01-10',
      time: '2:30 PM',
      duration: '45 mins',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
      status: 'scheduled'
    },
    {
      id: 2,
      doctor: 'Dr. Lisa Wong',
      specialty: 'Psychiatry',
      date: '2025-01-12',
      time: '10:00 AM',
      duration: '60 mins',
      avatar: 'https://images.unsplash.com/photo-1594824047368-dd3bd66da05e?w=150&h=150&fit=crop&crop=face',
      status: 'scheduled'
    }
  ];

  const callHistory = [
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      date: '2025-01-05',
      time: '10:00 AM',
      duration: '30 mins',
      status: 'completed',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 2,
      doctor: 'Dr. Robert Kim',
      specialty: 'Orthopedics',
      date: '2025-01-03',
      time: '2:15 PM',
      duration: '45 mins',
      status: 'completed',
      avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const startCall = (callId) => {
    setActiveCall(callId);
  };

  const endCall = () => {
    setActiveCall(null);
    alert('Call ended successfully!');
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn);
  };

  if (activeCall) {
    const call = upcomingCalls.find(c => c.id === activeCall);
    return (
      <div className="video-call-interface">
        <div className="call-header">
          <div className="call-info">
            <h2>{call.doctor}</h2>
            <p>{call.specialty}</p>
          </div>
          <div className="call-timer">
            <Clock size={16} />
            <span>05:23</span>
          </div>
        </div>

        <div className="video-container">
          <div className="doctor-video">
            <img src={call.avatar} alt={call.doctor} />
            <div className="video-label">Dr. Chen</div>
          </div>
          <div className="patient-video">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
              alt="You"
            />
            <div className="video-label">You</div>
          </div>
        </div>

        <div className="call-controls">
          <button 
            className={`control-btn ${isMuted ? 'muted' : ''}`}
            onClick={toggleMute}
          >
            {isMuted ? <MicOff size={20} /> : <Mic size={20} />}
          </button>
          
          <button 
            className={`control-btn ${!isVideoOn ? 'disabled' : ''}`}
            onClick={toggleVideo}
          >
            {isVideoOn ? <Camera size={20} /> : <CameraOff size={20} />}
          </button>
          
          <button className="control-btn">
            <Monitor size={20} />
          </button>
          
          <button className="control-btn">
            <MessageCircle size={20} />
          </button>
          
          <button className="control-btn end-call" onClick={endCall}>
            <Phone size={20} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="telemedicine-page">
      <div className="page-header">
        <h1>Telemedicine</h1>
        <p>Connect with healthcare providers through secure video consultations</p>
      </div>

      <div className="telemedicine-grid">
        <div className="main-content">
          <div className="upcoming-calls-section">
            <h2>Upcoming Video Consultations</h2>
            <div className="calls-list">
              {upcomingCalls.map(call => (
                <div key={call.id} className="call-card">
                  <div className="call-info">
                    <img src={call.avatar} alt={call.doctor} className="doctor-avatar" />
                    <div className="call-details">
                      <h3>{call.doctor}</h3>
                      <p className="specialty">{call.specialty}</p>
                      <div className="call-schedule">
                        <Calendar size={16} />
                        <span>{new Date(call.date).toLocaleDateString()}</span>
                        <Clock size={16} />
                        <span>{call.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="call-actions">
                    <button 
                      className="btn btn-primary"
                      onClick={() => startCall(call.id)}
                    >
                      <Video size={16} />
                      Join Call
                    </button>
                    <button className="btn btn-secondary">
                      <Calendar size={16} />
                      Reschedule
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="call-history-section">
            <h2>Recent Consultations</h2>
            <div className="history-list">
              {callHistory.map(call => (
                <div key={call.id} className="history-item">
                  <img src={call.avatar} alt={call.doctor} className="doctor-avatar" />
                  <div className="history-details">
                    <h4>{call.doctor}</h4>
                    <p>{call.specialty}</p>
                    <div className="history-meta">
                      <span>{new Date(call.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{call.duration}</span>
                    </div>
                  </div>
                  <button className="btn btn-secondary">
                    <FileText size={16} />
                    View Notes
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sidebar-content">
          <div className="tech-check-card">
            <h3>Technology Check</h3>
            <div className="tech-status">
              <div className="status-item">
                <Camera size={20} />
                <span>Camera: Working</span>
                <div className="status-indicator active"></div>
              </div>
              <div className="status-item">
                <Mic size={20} />
                <span>Microphone: Working</span>
                <div className="status-indicator active"></div>
              </div>
              <div className="status-item">
                <Monitor size={20} />
                <span>Internet: Good</span>
                <div className="status-indicator active"></div>
              </div>
            </div>
            <button className="btn btn-secondary">
              <Settings size={16} />
              Test Equipment
            </button>
          </div>

          <div className="guidelines-card">
            <h3>Video Consultation Guidelines</h3>
            <ul>
              <li>Find a quiet, well-lit space</li>
              <li>Test your camera and microphone beforehand</li>
              <li>Have your insurance card and ID ready</li>
              <li>Prepare a list of current medications</li>
              <li>Join the call 5 minutes early</li>
            </ul>
          </div>

          <div className="support-card">
            <h3>Need Help?</h3>
            <p>Having technical difficulties? Our support team is here to help.</p>
            <button className="btn btn-primary">
              <Phone size={16} />
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Telemedicine;
