import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Video, 
  FileText, 
  Shield, 
  Users, 
  Heart, 
  Clock, 
  Award,
  CheckCircle,
  Star
} from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Calendar,
      title: 'Smart Appointment Scheduling',
      description: 'Book appointments with ease and get automated reminders for all your healthcare needs.'
    },
    {
      icon: Video,
      title: 'Telemedicine Platform',
      description: 'Connect with healthcare providers remotely through secure video consultations.'
    },
    {
      icon: FileText,
      title: 'Digital Medical Records',
      description: 'Access your complete medical history, test results, and treatment plans anytime.'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant Security',
      description: 'Your health data is protected with enterprise-grade security and encryption.'
    },
    {
      icon: Users,
      title: 'Care Team Coordination',
      description: 'Seamless communication between patients, doctors, and healthcare teams.'
    },
    {
      icon: Heart,
      title: 'Health Monitoring',
      description: 'Track vital signs, medications, and health metrics with intelligent insights.'
    }
  ];

  const stats = [
    { number: '100K+', label: 'Active Patients' },
    { number: '5K+', label: 'Healthcare Providers' },
    { number: '1M+', label: 'Appointments Booked' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Cardiologist',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
      text: 'SmartHealth has revolutionized how I manage patient care. The platform is intuitive and saves me hours every week.'
    },
    {
      name: 'Michael Chen',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      text: 'Having all my medical records in one place and being able to consult with doctors online has been a game-changer.'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Family Medicine',
      image: 'https://images.unsplash.com/photo-1594824047368-dd3bd66da05e?w=150&h=150&fit=crop&crop=face',
      text: 'The telemedicine features are excellent. I can provide quality care to patients regardless of their location.'
    }
  ];

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="landing-header">
        <div className="container">
          <div className="nav-bar">
            <div className="logo">
              <span className="logo-text">SmartHealth</span>
            </div>
            <div className="nav-buttons">
              <button className="btn btn-secondary" onClick={() => navigate('/login')}>
                Sign In
              </button>
              <button className="btn btn-primary" onClick={() => navigate('/register')}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="landing-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Health Made Easy<br />With AI & Technology</h1>
            <p>
              Comprehensive healthcare management platform that connects patients and providers 
              through innovative technology and personalized care.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => navigate('/register')}>
                Start Your Health Journey
              </button>
              <button className="btn btn-secondary" onClick={() => navigate('/login')}>
                <Video size={20} />
                Watch Demo
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop" 
              alt="Healthcare Technology"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Comprehensive Healthcare Solutions</h2>
            <p>Everything you need to manage your health in one secure platform</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
                    <Icon size={32} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>How SmartHealth Works</h2>
            <p>Simple steps to better healthcare management</p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Create Your Profile</h3>
              <p>Sign up and complete your medical profile with health history and preferences.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Connect with Providers</h3>
              <p>Find and connect with healthcare providers in your network or preferred specialists.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Manage Your Health</h3>
              <p>Schedule appointments, access records, and receive personalized health insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Users Say</h2>
            <p>Trusted by healthcare providers and patients worldwide</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#ffc107" color="#ffc107" />
                  ))}
                </div>
                <p>"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Healthcare Experience?</h2>
          <p>Join thousands of patients and providers who trust SmartHealth for their healthcare needs.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={() => navigate('/register')}>
              Get Started Free
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/login')}>
              I'm Already a Member
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>SmartHealth</h3>
              <p>Making healthcare accessible, secure, and efficient for everyone.</p>
            </div>
            <div className="footer-section">
              <h4>Platform</h4>
              <ul>
                <li>For Patients</li>
                <li>For Providers</li>
                <li>Telemedicine</li>
                <li>Mobile App</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>System Status</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 SmartHealth. All rights reserved. HIPAA Compliant.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
