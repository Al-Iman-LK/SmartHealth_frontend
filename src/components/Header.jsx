import React from 'react';
import { User, Bell, Settings, LogOut, Menu } from 'lucide-react';
import './Header.css';

const Header = ({ user, onLogout, onMenuToggle }) => {
  const handleNotificationClick = () => {
    alert('Notifications feature coming soon!');
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <button className="menu-toggle" onClick={onMenuToggle}>
            <Menu size={24} />
          </button>
          <div className="logo">
            <span className="logo-text">SmartHealth</span>
          </div>
        </div>
        
        <div className="header-right">
          <button className="header-btn" onClick={handleNotificationClick}>
            <Bell size={20} />
            <span className="notification-badge">3</span>
          </button>
          
          <div className="user-menu">
            <div className="user-info">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b7c7?w=150&h=150&fit=crop&crop=face" 
                alt="User Avatar"
                className="user-avatar"
              />
              <div className="user-details">
                <span className="user-name">{user?.name || 'John Doe'}</span>
                <span className="user-role">{user?.role || 'Patient'}</span>
              </div>
            </div>
            
            <div className="user-actions">
              <button className="header-btn">
                <Settings size={20} />
              </button>
              <button className="header-btn logout-btn" onClick={onLogout}>
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
