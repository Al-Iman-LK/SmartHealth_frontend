import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import './Auth.css';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const userData = {
        id: 1,
        name: 'John Doe',
        email: formData.email,
        role: 'Patient',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      };
      
      onLogin(userData);
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleDemoLogin = () => {
    setIsLoading(true);
    
    // Set demo credentials
    const demoData = {
      email: 'demo@smarthealth.com',
      password: 'demo123',
      rememberMe: false
    };
    
    setFormData(demoData);
    
    // Simulate API call with demo credentials
    setTimeout(() => {
      const userData = {
        id: 1,
        name: 'John Doe',
        email: 'demo@smarthealth.com',
        role: 'Patient',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      };
      
      onLogin(userData);
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-left">
          <div className="auth-image">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=800&fit=crop" 
              alt="Healthcare Technology"
            />
          </div>
        </div>
        
        <div className="auth-right">
          <div className="auth-form-container">
            <div className="auth-header">
              <h1>Welcome Back</h1>
              <p>Sign in to your SmartHealth account to access your healthcare dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
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
                    placeholder="Enter your password"
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
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  Remember me
                </label>
                <button type="button" className="forgot-password">
                  Forgot password?
                </button>
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary auth-submit ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </button>

              <div className="auth-divider">
                <span>or</span>
              </div>

              <button 
                type="button" 
                className={`btn btn-secondary ${isLoading ? 'loading' : ''}`}
                onClick={handleDemoLogin}
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Try Demo Account'}
              </button>
            </form>

            <div className="auth-footer">
              <p>
                Don't have an account? 
                <button 
                  className="auth-link"
                  onClick={() => navigate('/register')}
                >
                  Create Account
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

export default Login;
