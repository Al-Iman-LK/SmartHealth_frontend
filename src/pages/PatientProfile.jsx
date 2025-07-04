import React, { useState } from 'react';
import { 
  User, 
  Edit3, 
  Save, 
  Camera, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar,
  Heart,
  Shield,
  FileText,
  AlertTriangle,
  Plus,
  X
} from 'lucide-react';
import './PatientProfile.css';

const PatientProfile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  const [profileData, setProfileData] = useState({
    // Personal Information
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    phone: '(555) 123-4567',
    dateOfBirth: '1985-06-15',
    gender: 'male',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    
    // Emergency Contact
    emergencyName: 'Jane Doe',
    emergencyRelation: 'Spouse',
    emergencyPhone: '(555) 987-6543',
    
    // Medical Information
    bloodType: 'O+',
    height: '5\'10"',
    weight: '175 lbs',
    allergies: ['Penicillin', 'Shellfish'],
    medications: ['Lisinopril 10mg', 'Metformin 500mg'],
    conditions: ['Hypertension', 'Type 2 Diabetes'],
    
    // Insurance
    insuranceProvider: 'Blue Cross Blue Shield',
    policyNumber: 'BC123456789',
    groupNumber: 'GRP001',
    
    // Preferences
    preferredLanguage: 'English',
    communicationPreference: 'email',
    reminderSettings: {
      appointments: true,
      medications: true,
      healthTips: false
    }
  });

  const [newAllergy, setNewAllergy] = useState('');
  const [newMedication, setNewMedication] = useState('');
  const [newCondition, setNewCondition] = useState('');

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Simulate API call
    console.log('Saving profile data:', profileData);
    alert('Profile updated successfully!');
  };

  const addItem = (field, item, setItem) => {
    if (item.trim()) {
      setProfileData(prev => ({
        ...prev,
        [field]: [...prev[field], item.trim()]
      }));
      setItem('');
    }
  };

  const removeItem = (field, index) => {
    setProfileData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'medical', label: 'Medical Info', icon: Heart },
    { id: 'insurance', label: 'Insurance', icon: Shield },
    { id: 'preferences', label: 'Preferences', icon: FileText }
  ];

  const renderPersonalInfo = () => (
    <div className="tab-content">
      <div className="profile-header">
        <div className="avatar-section">
          <div className="avatar-container">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
              alt="Profile"
              className="profile-avatar"
            />
            {isEditing && (
              <button className="avatar-edit">
                <Camera size={16} />
              </button>
            )}
          </div>
          <div className="profile-basic">
            <h2>{profileData.firstName} {profileData.lastName}</h2>
            <p>{profileData.email}</p>
            <span className="patient-id">Patient ID: #PAT001234</span>
          </div>
        </div>
      </div>

      <div className="form-sections">
        <div className="form-section">
          <h3>Basic Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-input"
                value={profileData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-input"
                value={profileData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Email</label>
              <div className="input-with-icon">
                <Mail size={20} className="input-icon" />
                <input
                  type="email"
                  className="form-input"
                  value={profileData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Phone</label>
              <div className="input-with-icon">
                <Phone size={20} className="input-icon" />
                <input
                  type="tel"
                  className="form-input"
                  value={profileData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Date of Birth</label>
              <div className="input-with-icon">
                <Calendar size={20} className="input-icon" />
                <input
                  type="date"
                  className="form-input"
                  value={profileData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Gender</label>
              <select
                className="form-select"
                value={profileData.gender}
                onChange={(e) => handleInputChange('gender', e.target.value)}
                disabled={!isEditing}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Address Information</h3>
          <div className="form-group">
            <label className="form-label">Street Address</label>
            <div className="input-with-icon">
              <MapPin size={20} className="input-icon" />
              <input
                type="text"
                className="form-input"
                value={profileData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">City</label>
              <input
                type="text"
                className="form-input"
                value={profileData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="form-group">
              <label className="form-label">State</label>
              <input
                type="text"
                className="form-input"
                value={profileData.state}
                onChange={(e) => handleInputChange('state', e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="form-group">
              <label className="form-label">ZIP Code</label>
              <input
                type="text"
                className="form-input"
                value={profileData.zipCode}
                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                disabled={!isEditing}
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Emergency Contact</h3>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-input"
                value={profileData.emergencyName}
                onChange={(e) => handleInputChange('emergencyName', e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Relationship</label>
              <input
                type="text"
                className="form-input"
                value={profileData.emergencyRelation}
                onChange={(e) => handleInputChange('emergencyRelation', e.target.value)}
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <div className="input-with-icon">
              <Phone size={20} className="input-icon" />
              <input
                type="tel"
                className="form-input"
                value={profileData.emergencyPhone}
                onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                disabled={!isEditing}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMedicalInfo = () => (
    <div className="tab-content">
      <div className="form-sections">
        <div className="form-section">
          <h3>Basic Medical Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Blood Type</label>
              <select
                className="form-select"
                value={profileData.bloodType}
                onChange={(e) => handleInputChange('bloodType', e.target.value)}
                disabled={!isEditing}
              >
                <option value="">Select blood type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Height</label>
              <input
                type="text"
                className="form-input"
                value={profileData.height}
                onChange={(e) => handleInputChange('height', e.target.value)}
                disabled={!isEditing}
                placeholder="e.g., 5'10&quot;"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Weight</label>
              <input
                type="text"
                className="form-input"
                value={profileData.weight}
                onChange={(e) => handleInputChange('weight', e.target.value)}
                disabled={!isEditing}
                placeholder="e.g., 175 lbs"
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Allergies</h3>
          <div className="tags-section">
            <div className="tags-list">
              {profileData.allergies.map((allergy, index) => (
                <div key={index} className="tag allergy-tag">
                  <AlertTriangle size={14} />
                  <span>{allergy}</span>
                  {isEditing && (
                    <button 
                      className="tag-remove"
                      onClick={() => removeItem('allergies', index)}
                    >
                      <X size={12} />
                    </button>
                  )}
                </div>
              ))}
            </div>
            {isEditing && (
              <div className="add-item">
                <input
                  type="text"
                  className="form-input"
                  value={newAllergy}
                  onChange={(e) => setNewAllergy(e.target.value)}
                  placeholder="Add new allergy"
                  onKeyPress={(e) => e.key === 'Enter' && addItem('allergies', newAllergy, setNewAllergy)}
                />
                <button 
                  className="btn btn-secondary"
                  onClick={() => addItem('allergies', newAllergy, setNewAllergy)}
                >
                  <Plus size={16} />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="form-section">
          <h3>Current Medications</h3>
          <div className="tags-section">
            <div className="tags-list">
              {profileData.medications.map((medication, index) => (
                <div key={index} className="tag medication-tag">
                  <span>{medication}</span>
                  {isEditing && (
                    <button 
                      className="tag-remove"
                      onClick={() => removeItem('medications', index)}
                    >
                      <X size={12} />
                    </button>
                  )}
                </div>
              ))}
            </div>
            {isEditing && (
              <div className="add-item">
                <input
                  type="text"
                  className="form-input"
                  value={newMedication}
                  onChange={(e) => setNewMedication(e.target.value)}
                  placeholder="Add new medication"
                  onKeyPress={(e) => e.key === 'Enter' && addItem('medications', newMedication, setNewMedication)}
                />
                <button 
                  className="btn btn-secondary"
                  onClick={() => addItem('medications', newMedication, setNewMedication)}
                >
                  <Plus size={16} />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="form-section">
          <h3>Medical Conditions</h3>
          <div className="tags-section">
            <div className="tags-list">
              {profileData.conditions.map((condition, index) => (
                <div key={index} className="tag condition-tag">
                  <span>{condition}</span>
                  {isEditing && (
                    <button 
                      className="tag-remove"
                      onClick={() => removeItem('conditions', index)}
                    >
                      <X size={12} />
                    </button>
                  )}
                </div>
              ))}
            </div>
            {isEditing && (
              <div className="add-item">
                <input
                  type="text"
                  className="form-input"
                  value={newCondition}
                  onChange={(e) => setNewCondition(e.target.value)}
                  placeholder="Add new condition"
                  onKeyPress={(e) => e.key === 'Enter' && addItem('conditions', newCondition, setNewCondition)}
                />
                <button 
                  className="btn btn-secondary"
                  onClick={() => addItem('conditions', newCondition, setNewCondition)}
                >
                  <Plus size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderInsuranceInfo = () => (
    <div className="tab-content">
      <div className="form-sections">
        <div className="form-section">
          <h3>Insurance Information</h3>
          <div className="form-group">
            <label className="form-label">Insurance Provider</label>
            <input
              type="text"
              className="form-input"
              value={profileData.insuranceProvider}
              onChange={(e) => handleInputChange('insuranceProvider', e.target.value)}
              disabled={!isEditing}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Policy Number</label>
              <input
                type="text"
                className="form-input"
                value={profileData.policyNumber}
                onChange={(e) => handleInputChange('policyNumber', e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Group Number</label>
              <input
                type="text"
                className="form-input"
                value={profileData.groupNumber}
                onChange={(e) => handleInputChange('groupNumber', e.target.value)}
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="insurance-card">
            <h4>Insurance Card</h4>
            <div className="card-placeholder">
              <Camera size={32} />
              <p>Upload insurance card photo</p>
              <button className="btn btn-secondary">Upload Card</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPreferences = () => (
    <div className="tab-content">
      <div className="form-sections">
        <div className="form-section">
          <h3>Communication Preferences</h3>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Preferred Language</label>
              <select
                className="form-select"
                value={profileData.preferredLanguage}
                onChange={(e) => handleInputChange('preferredLanguage', e.target.value)}
                disabled={!isEditing}
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="Chinese">Chinese</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Communication Method</label>
              <select
                className="form-select"
                value={profileData.communicationPreference}
                onChange={(e) => handleInputChange('communicationPreference', e.target.value)}
                disabled={!isEditing}
              >
                <option value="email">Email</option>
                <option value="sms">SMS/Text</option>
                <option value="phone">Phone Call</option>
                <option value="portal">Patient Portal Only</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Notification Settings</h3>
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={profileData.reminderSettings.appointments}
                onChange={(e) => handleInputChange('reminderSettings', {
                  ...profileData.reminderSettings,
                  appointments: e.target.checked
                })}
                disabled={!isEditing}
              />
              <span>Appointment reminders</span>
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={profileData.reminderSettings.medications}
                onChange={(e) => handleInputChange('reminderSettings', {
                  ...profileData.reminderSettings,
                  medications: e.target.checked
                })}
                disabled={!isEditing}
              />
              <span>Medication reminders</span>
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={profileData.reminderSettings.healthTips}
                onChange={(e) => handleInputChange('reminderSettings', {
                  ...profileData.reminderSettings,
                  healthTips: e.target.checked
                })}
                disabled={!isEditing}
              />
              <span>Health tips and wellness content</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="patient-profile">
      <div className="profile-header-section">
        <div className="profile-title">
          <h1>Patient Profile</h1>
          <p>Manage your personal and medical information</p>
        </div>
        
        <div className="profile-actions">
          {!isEditing ? (
            <button 
              className="btn btn-primary"
              onClick={() => setIsEditing(true)}
            >
              <Edit3 size={20} />
              Edit Profile
            </button>
          ) : (
            <div className="edit-actions">
              <button 
                className="btn btn-secondary"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
              <button 
                className="btn btn-success"
                onClick={handleSave}
              >
                <Save size={20} />
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-tabs">
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

        <div className="profile-tab-content">
          {activeTab === 'personal' && renderPersonalInfo()}
          {activeTab === 'medical' && renderMedicalInfo()}
          {activeTab === 'insurance' && renderInsuranceInfo()}
          {activeTab === 'preferences' && renderPreferences()}
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
