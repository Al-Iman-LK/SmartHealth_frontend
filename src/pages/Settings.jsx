import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, 
  User, 
  Lock, 
  Bell, 
  Shield, 
  Globe,
  Smartphone,
  Eye,
  EyeOff,
  Save,
  Edit3
} from 'lucide-react';
import './Settings.css';

const Settings = ({ user }) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const [settings, setSettings] = useState({
    // Profile Settings
    personalInfo: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@email.com',
      phone: '(555) 123-4567',
      timezone: 'America/New_York'
    },
    
    // Security Settings
    security: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      twoFactorEnabled: true,
      loginNotifications: true
    },
    
    // Notification Settings
    notifications: {
      appointments: true,
      medications: true,
      testResults: true,
      promotions: false,
      emailNotifications: true,
      smsNotifications: true,
      pushNotifications: true
    },
    
    // Privacy Settings
    privacy: {
      shareWithProviders: true,
      dataForResearch: false,
      marketingCommunications: false,
      profileVisibility: 'providers-only'
    }
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Shield }
  ];

  const handleSave = () => {
    setIsEditing(false);
    alert('Settings saved successfully!');
  };

  const handleSettingChange = (category, field, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
  };

  const renderProfileSettings = () => (
    <div className="settings-section">
      <div className="section-header">
        <h3>Personal Information</h3>
        <button 
          className="btn btn-secondary"
          onClick={() => setIsEditing(!isEditing)}
        >
          <Edit3 size={16} />
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-input"
            value={settings.personalInfo.firstName}
            onChange={(e) => handleSettingChange('personalInfo', 'firstName', e.target.value)}
            disabled={!isEditing}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-input"
            value={settings.personalInfo.lastName}
            onChange={(e) => handleSettingChange('personalInfo', 'lastName', e.target.value)}
            disabled={!isEditing}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-input"
            value={settings.personalInfo.email}
            onChange={(e) => handleSettingChange('personalInfo', 'email', e.target.value)}
            disabled={!isEditing}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-input"
            value={settings.personalInfo.phone}
            onChange={(e) => handleSettingChange('personalInfo', 'phone', e.target.value)}
            disabled={!isEditing}
          />
        </div>

        <div className="form-group full-width">
          <label className="form-label">Timezone</label>
          <select
            className="form-select"
            value={settings.personalInfo.timezone}
            onChange={(e) => handleSettingChange('personalInfo', 'timezone', e.target.value)}
            disabled={!isEditing}
          >
            <option value="America/New_York">Eastern Time</option>
            <option value="America/Chicago">Central Time</option>
            <option value="America/Denver">Mountain Time</option>
            <option value="America/Los_Angeles">Pacific Time</option>
          </select>
        </div>
      </div>

      {isEditing && (
        <div className="form-actions">
          <button className="btn btn-primary" onClick={handleSave}>
            <Save size={16} />
            Save Changes
          </button>
        </div>
      )}
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="settings-section">
      <div className="section-header">
        <h3>Password & Security</h3>
      </div>

      <div className="security-grid">
        <div className="password-section">
          <h4>Change Password</h4>
          <div className="form-group">
            <label className="form-label">Current Password</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-input"
                value={settings.security.currentPassword}
                onChange={(e) => handleSettingChange('security', 'currentPassword', e.target.value)}
                placeholder="Enter current password"
              />
              <button 
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">New Password</label>
            <input
              type="password"
              className="form-input"
              value={settings.security.newPassword}
              onChange={(e) => handleSettingChange('security', 'newPassword', e.target.value)}
              placeholder="Enter new password"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Confirm New Password</label>
            <input
              type="password"
              className="form-input"
              value={settings.security.confirmPassword}
              onChange={(e) => handleSettingChange('security', 'confirmPassword', e.target.value)}
              placeholder="Confirm new password"
            />
          </div>

          <button className="btn btn-primary">
            Update Password
          </button>
        </div>

        <div className="security-options">
          <h4>Security Options</h4>
          <div className="setting-item">
            <div className="setting-info">
              <Smartphone size={20} />
              <div>
                <h5>Two-Factor Authentication</h5>
                <p>Add an extra layer of security to your account</p>
              </div>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.security.twoFactorEnabled}
                onChange={(e) => handleSettingChange('security', 'twoFactorEnabled', e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <Bell size={20} />
              <div>
                <h5>Login Notifications</h5>
                <p>Get notified when someone logs into your account</p>
              </div>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.security.loginNotifications}
                onChange={(e) => handleSettingChange('security', 'loginNotifications', e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="settings-section">
      <div className="section-header">
        <h3>Notification Preferences</h3>
      </div>

      <div className="notifications-grid">
        <div className="notification-category">
          <h4>Medical Notifications</h4>
          
          <div className="setting-item">
            <div className="setting-info">
              <div>
                <h5>Appointment Reminders</h5>
                <p>Receive reminders about upcoming appointments</p>
              </div>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.notifications.appointments}
                onChange={(e) => handleSettingChange('notifications', 'appointments', e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <div>
                <h5>Medication Reminders</h5>
                <p>Get reminded to take your medications</p>
              </div>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.notifications.medications}
                onChange={(e) => handleSettingChange('notifications', 'medications', e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <div>
                <h5>Test Results</h5>
                <p>Be notified when test results are available</p>
              </div>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.notifications.testResults}
                onChange={(e) => handleSettingChange('notifications', 'testResults', e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>

        <div className="notification-channels">
          <h4>Notification Channels</h4>
          
          <div className="setting-item">
            <div className="setting-info">
              <div>
                <h5>Email Notifications</h5>
                <p>Receive notifications via email</p>
              </div>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.notifications.emailNotifications}
                onChange={(e) => handleSettingChange('notifications', 'emailNotifications', e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <div>
                <h5>SMS Notifications</h5>
                <p>Receive notifications via text message</p>
              </div>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.notifications.smsNotifications}
                onChange={(e) => handleSettingChange('notifications', 'smsNotifications', e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <div>
                <h5>Push Notifications</h5>
                <p>Receive notifications on your mobile device</p>
              </div>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.notifications.pushNotifications}
                onChange={(e) => handleSettingChange('notifications', 'pushNotifications', e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPrivacySettings = () => (
    <div className="settings-section">
      <div className="section-header">
        <h3>Privacy & Data</h3>
      </div>

      <div className="privacy-settings">
        <div className="setting-item">
          <div className="setting-info">
            <div>
              <h5>Share Data with Healthcare Providers</h5>
              <p>Allow healthcare providers to access your medical data</p>
            </div>
          </div>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={settings.privacy.shareWithProviders}
              onChange={(e) => handleSettingChange('privacy', 'shareWithProviders', e.target.checked)}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <div>
              <h5>Anonymous Data for Research</h5>
              <p>Help improve healthcare by sharing anonymous data for research</p>
            </div>
          </div>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={settings.privacy.dataForResearch}
              onChange={(e) => handleSettingChange('privacy', 'dataForResearch', e.target.checked)}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>

        <div className="form-group">
          <label className="form-label">Profile Visibility</label>
          <select
            className="form-select"
            value={settings.privacy.profileVisibility}
            onChange={(e) => handleSettingChange('privacy', 'profileVisibility', e.target.value)}
          >
            <option value="providers-only">Healthcare Providers Only</option>
            <option value="limited">Limited Information</option>
            <option value="private">Private</option>
          </select>
        </div>
      </div>
    </div>
  );

  return (
    <div className="settings-page">
      <div className="page-header">
        <h1>Settings</h1>
        <p>Manage your account preferences and privacy settings</p>
      </div>

      <div className="settings-content">
        <div className="settings-tabs">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={20} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="settings-panel">
          {activeTab === 'profile' && renderProfileSettings()}
          {activeTab === 'security' && renderSecuritySettings()}
          {activeTab === 'notifications' && renderNotificationSettings()}
          {activeTab === 'privacy' && renderPrivacySettings()}
        </div>
      </div>
    </div>
  );
};

export default Settings;
