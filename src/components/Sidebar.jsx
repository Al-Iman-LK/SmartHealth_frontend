import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, 
  User, 
  Calendar, 
  Video, 
  FileText, 
  Pill, 
  MessageCircle, 
  Shield, 
  Settings,
  X
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Calendar, label: 'Appointments', path: '/appointments' },
    { icon: Video, label: 'Telemedicine', path: '/telemedicine' },
    { icon: FileText, label: 'Medical Records', path: '/records' },
    { icon: Pill, label: 'Prescriptions', path: '/prescriptions' },
    { icon: MessageCircle, label: 'Messages', path: '/messages' },
    { icon: Shield, label: 'Insurance', path: '/insurance' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
      <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <h3>Menu</h3>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        
        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <button
                key={item.path}
                className={`nav-item ${isActive ? 'nav-item-active' : ''}`}
                onClick={() => handleNavigation(item.path)}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
        
        <div className="sidebar-footer">
          <div className="help-card">
            <h4>Need Help?</h4>
            <p>Contact our support team for assistance</p>
            <button className="btn btn-primary">
              Contact Support
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
