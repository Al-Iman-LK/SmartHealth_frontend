import React from 'react';
import './Dashboard.css';

const Dashboard = ({ user }) => {
  console.log('Dashboard component rendered with user:', user);
  
  return (
    <div className="dashboard" style={{ padding: '20px', backgroundColor: 'white', minHeight: '500px' }}>
      <h1 style={{ color: 'red', fontSize: '24px' }}>Dashboard Test - This should be visible!</h1>
      <p>User: {user?.name || 'No user'}</p>
      <p>Email: {user?.email || 'No email'}</p>
      <div style={{ backgroundColor: 'lightblue', padding: '20px', margin: '20px 0' }}>
        <h2>Test Content Block</h2>
        <p>If you can see this blue box, the component is rendering correctly.</p>
      </div>
      <div style={{ backgroundColor: 'lightgreen', padding: '20px' }}>
        <h3>Another Test Block</h3>
        <p>This green box should also be visible.</p>
      </div>
    </div>
  );
};

export default Dashboard;
