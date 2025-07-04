import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard-test';
import PatientProfile from './pages/PatientProfile';
import Appointments from './pages/Appointments';
import Telemedicine from './pages/Telemedicine';
import MedicalRecords from './pages/MedicalRecords';
import Prescriptions from './pages/Prescriptions';
import Messages from './pages/Messages';
import Insurance from './pages/Insurance';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Register from './pages/Register';
import LandingPage from './pages/LandingPage';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Check for existing authentication on app load
  useEffect(() => {
    console.log('App useEffect running...');
    const savedAuth = localStorage.getItem('smarthealth_auth');
    const savedUser = localStorage.getItem('smarthealth_user');
    
    console.log('Saved auth:', savedAuth);
    console.log('Saved user:', savedUser);
    
    if (savedAuth === 'true' && savedUser) {
      setIsAuthenticated(true);
      setCurrentUser(JSON.parse(savedUser));
      console.log('Authentication restored from localStorage');
    }
    // Remove auto-login for debugging
  }, []);

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setCurrentUser(userData);
    // Persist authentication state
    localStorage.setItem('smarthealth_auth', 'true');
    localStorage.setItem('smarthealth_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    // Clear persisted authentication
    localStorage.removeItem('smarthealth_auth');
    localStorage.removeItem('smarthealth_user');
  };

  // Protected Route Component
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <LandingPage />} />
          <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login onLogin={handleLogin} />} />
          <Route path="/register" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Register onRegister={handleLogin} />} />
          
          {/* Protected Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <div className="app-layout">
                <Header 
                  user={currentUser} 
                  onLogout={handleLogout}
                  onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
                />
                <div className="main-content">
                  <Sidebar 
                    isOpen={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                  />
                  <div className="content-area">
                    <Dashboard user={currentUser} />
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } />
          
          <Route path="/profile" element={
            <ProtectedRoute>
              <div className="app-layout">
                <Header 
                  user={currentUser} 
                  onLogout={handleLogout}
                  onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
                />
                <div className="main-content">
                  <Sidebar 
                    isOpen={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                  />
                  <div className="content-area">
                    <PatientProfile user={currentUser} />
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } />
          
          <Route path="/appointments" element={
            <ProtectedRoute>
              <div className="app-layout">
                <Header 
                  user={currentUser} 
                  onLogout={handleLogout}
                  onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
                />
                <div className="main-content">
                  <Sidebar 
                    isOpen={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                  />
                  <div className="content-area">
                    <Appointments user={currentUser} />
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } />
          
          <Route path="/telemedicine" element={
            <ProtectedRoute>
              <div className="app-layout">
                <Header 
                  user={currentUser} 
                  onLogout={handleLogout}
                  onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
                />
                <div className="main-content">
                  <Sidebar 
                    isOpen={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                  />
                  <div className="content-area">
                    <Telemedicine user={currentUser} />
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } />
          
          <Route path="/records" element={
            <ProtectedRoute>
              <div className="app-layout">
                <Header 
                  user={currentUser} 
                  onLogout={handleLogout}
                  onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
                />
                <div className="main-content">
                  <Sidebar 
                    isOpen={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                  />
                  <div className="content-area">
                    <MedicalRecords user={currentUser} />
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } />
          
          <Route path="/prescriptions" element={
            <ProtectedRoute>
              <div className="app-layout">
                <Header 
                  user={currentUser} 
                  onLogout={handleLogout}
                  onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
                />
                <div className="main-content">
                  <Sidebar 
                    isOpen={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                  />
                  <div className="content-area">
                    <Prescriptions user={currentUser} />
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } />
          
          <Route path="/messages" element={
            <ProtectedRoute>
              <div className="app-layout">
                <Header 
                  user={currentUser} 
                  onLogout={handleLogout}
                  onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
                />
                <div className="main-content">
                  <Sidebar 
                    isOpen={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                  />
                  <div className="content-area">
                    <Messages user={currentUser} />
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } />
          
          <Route path="/insurance" element={
            <ProtectedRoute>
              <div className="app-layout">
                <Header 
                  user={currentUser} 
                  onLogout={handleLogout}
                  onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
                />
                <div className="main-content">
                  <Sidebar 
                    isOpen={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                  />
                  <div className="content-area">
                    <Insurance user={currentUser} />
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } />
          
          <Route path="/settings" element={
            <ProtectedRoute>
              <div className="app-layout">
                <Header 
                  user={currentUser} 
                  onLogout={handleLogout}
                  onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
                />
                <div className="main-content">
                  <Sidebar 
                    isOpen={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                  />
                  <div className="content-area">
                    <Settings user={currentUser} />
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
