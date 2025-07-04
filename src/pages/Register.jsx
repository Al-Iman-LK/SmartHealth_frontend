import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Phone, Calendar } from 'lucide-react';
import './Auth.css';

const Register = ({ onRegister }) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    
    // Account Info
    password: '',
    confirmPassword: '',
    userType: 'patient',
    
    // Medical Info (for patients)
    emergencyContact: '',
    emergencyPhone: '',
    bloodType: '',
    allergies: '',
    
    // Professional Info (for providers)
    licenseNumber: '',
    specialization: '',
    experience: '',
    
    // Terms
    agreeToTerms: false,
    agreeToPrivacy: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const userData = {
        id: 1,
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        role: formData.userType === 'patient' ? 'Patient' : 'Healthcare Provider',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b7c7?w=150&h=150&fit=crop&crop=face'
      };
      
      onRegister(userData);
      setIsLoading(false);
      navigate('/dashboard');
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const renderStep1 = () => (
    <>
      <div className="step-header">
        <h2>Personal Information</h2>
        <p>Let's start with your basic information</p>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">First Name</label>
          <div className="input-with-icon">
            <User size={20} className="input-icon" />
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your first name"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Last Name</label>
          <div className="input-with-icon">
            <User size={20} className="input-icon" />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Email Address</label>
        <div className="input-with-icon">
          <Mail size={20} className="input-icon" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            placeholder="Enter your email"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <div className="input-with-icon">
            <Phone size={20} className="input-icon" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your phone"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Date of Birth</label>
          <div className="input-with-icon">
            <Calendar size={20} className="input-icon" />
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="form-select"
          required
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </select>
      </div>
    </>
  );

  const renderStep2 = () => (
    <>
      <div className="step-header">
        <h2>Account Setup</h2>
        <p>Create your secure account credentials</p>
      </div>

      <div className="form-group">
        <label className="form-label">Account Type</label>
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              name="userType"
              value="patient"
              checked={formData.userType === 'patient'}
              onChange={handleChange}
            />
            <span className="radio-custom"></span>
            Patient - I need healthcare services
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="userType"
              value="provider"
              checked={formData.userType === 'provider'}
              onChange={handleChange}
            />
            <span className="radio-custom"></span>
            Healthcare Provider - I provide healthcare services
          </label>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Password</label>
        <div className="input-with-icon">
          <Lock size={20} className="input-icon" />
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
            placeholder="Create a strong password"
            required
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <div className="password-hints">
          <small>Password must be at least 8 characters with letters and numbers</small>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Confirm Password</label>
        <div className="input-with-icon">
          <Lock size={20} className="input-icon" />
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="form-input"
            placeholder="Confirm your password"
            required
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      {formData.userType === 'provider' && (
        <>
          <div className="form-group">
            <label className="form-label">Medical License Number</label>
            <input
              type="text"
              name="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your license number"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Specialization</label>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Select specialization</option>
                <option value="family-medicine">Family Medicine</option>
                <option value="internal-medicine">Internal Medicine</option>
                <option value="cardiology">Cardiology</option>
                <option value="dermatology">Dermatology</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="psychiatry">Psychiatry</option>
                <option value="orthopedics">Orthopedics</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Years of Experience</label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Select experience</option>
                <option value="0-2">0-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="11-15">11-15 years</option>
                <option value="16+">16+ years</option>
              </select>
            </div>
          </div>
        </>
      )}
    </>
  );

  const renderStep3 = () => (
    <>
      <div className="step-header">
        <h2>Additional Information</h2>
        <p>Help us provide better care with additional details</p>
      </div>

      {formData.userType === 'patient' && (
        <>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Emergency Contact Name</label>
              <input
                type="text"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleChange}
                className="form-input"
                placeholder="Emergency contact name"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Emergency Contact Phone</label>
              <input
                type="tel"
                name="emergencyPhone"
                value={formData.emergencyPhone}
                onChange={handleChange}
                className="form-input"
                placeholder="Emergency contact phone"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Blood Type (Optional)</label>
            <select
              name="bloodType"
              value={formData.bloodType}
              onChange={handleChange}
              className="form-select"
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
            <label className="form-label">Known Allergies (Optional)</label>
            <textarea
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
              className="form-textarea"
              placeholder="List any known allergies or medical conditions"
              rows="3"
            />
          </div>
        </>
      )}

      <div className="terms-section">
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            required
          />
          I agree to the <a href="#" className="terms-link">Terms of Service</a>
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="agreeToPrivacy"
            checked={formData.agreeToPrivacy}
            onChange={handleChange}
            required
          />
          I agree to the <a href="#" className="terms-link">Privacy Policy</a> and HIPAA compliance
        </label>
      </div>
    </>
  );

  return (
    <div className="auth-container">
      <div className="auth-wrapper register-wrapper">
        <div className="auth-left">
          <div className="auth-image">
            <img 
              src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&h=800&fit=crop" 
              alt="Healthcare Registration"
            />
          </div>
        </div>
        
        <div className="auth-right">
          <div className="auth-form-container">
            <div className="auth-header">
              <h1>Create Your Account</h1>
              <p>Join SmartHealth to access comprehensive healthcare management</p>
            </div>

            <div className="progress-indicator">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                />
              </div>
              <div className="progress-steps">
                <span className={currentStep >= 1 ? 'active' : ''}>1</span>
                <span className={currentStep >= 2 ? 'active' : ''}>2</span>
                <span className={currentStep >= 3 ? 'active' : ''}>3</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}

              <div className="form-navigation">
                {currentStep > 1 && (
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => setCurrentStep(currentStep - 1)}
                  >
                    Previous
                  </button>
                )}
                
                <button 
                  type="submit" 
                  className={`btn btn-primary ${isLoading ? 'loading' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating Account...' : 
                   currentStep === 3 ? 'Create Account' : 'Next Step'}
                </button>
              </div>
            </form>

            <div className="auth-footer">
              <p>
                Already have an account? 
                <button 
                  className="auth-link"
                  onClick={() => navigate('/login')}
                >
                  Sign In
                </button>
              </p>
            </div>

            <div className="auth-back">
              <button 
                className="btn btn-secondary"
                onClick={() => navigate('/')}
              >
                ← Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
