import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Leave Summary</h1>
        <p className="home-description">
          Welcome to the Leave Summary application. Manage and track leave requests efficiently.
        </p>
        
        <div className="home-actions">
          <Link to="/1" className="home-button primary">
            Start New Report
          </Link>
          <button className="home-button secondary" onClick={() => console.log('View Reports clicked')}>
            View Reports
          </button>
        </div>

        <div className="home-features">
          <div className="feature-card">
            <h3>Quick Reporting</h3>
            <p>Create leave reports quickly with our streamlined interface</p>
          </div>
          <div className="feature-card">
            <h3>Track Progress</h3>
            <p>Monitor the status of your leave requests in real-time</p>
          </div>
          <div className="feature-card">
            <h3>Easy Management</h3>
            <p>Manage all your leave documentation in one place</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;