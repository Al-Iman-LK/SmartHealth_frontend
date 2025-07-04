import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Upload, 
  Search, 
  Filter, 
  Calendar,
  Eye,
  Share,
  Plus,
  Folder,
  Image,
  File
} from 'lucide-react';
import './MedicalRecords.css';

const MedicalRecords = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  
  const records = [
    {
      id: 1,
      title: 'Blood Test Results',
      type: 'lab-result',
      date: '2025-01-05',
      doctor: 'Dr. Sarah Johnson',
      category: 'Laboratory',
      status: 'reviewed',
      file: 'blood_test_jan2025.pdf'
    },
    {
      id: 2,
      title: 'Chest X-Ray',
      type: 'imaging',
      date: '2025-01-03',
      doctor: 'Dr. Michael Chen',
      category: 'Radiology',
      status: 'pending',
      file: 'chest_xray_jan2025.jpg'
    },
    {
      id: 3,
      title: 'Cardiology Consultation',
      type: 'report',
      date: '2025-01-01',
      doctor: 'Dr. Sarah Johnson',
      category: 'Consultation',
      status: 'reviewed',
      file: 'cardiology_report_jan2025.pdf'
    }
  ];

  return (
    <div className="medical-records-page">
      <div className="page-header">
        <div className="header-title">
          <h1>Medical Records</h1>
          <p>Access and manage your complete medical history</p>
        </div>
        <button className="btn btn-primary">
          <Upload size={20} />
          Upload Document
        </button>
      </div>

      <div className="records-filters">
        <div className="search-section">
          <div className="search-input">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search records..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="filter-section">
          <Filter size={16} />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Records</option>
            <option value="lab-result">Lab Results</option>
            <option value="imaging">Imaging</option>
            <option value="report">Reports</option>
          </select>
        </div>
      </div>

      <div className="records-grid">
        {records.map(record => (
          <div key={record.id} className="record-card">
            <div className="record-icon">
              {record.type === 'imaging' ? <Image size={24} /> : <FileText size={24} />}
            </div>
            <div className="record-content">
              <h3>{record.title}</h3>
              <p className="record-doctor">{record.doctor}</p>
              <p className="record-date">{new Date(record.date).toLocaleDateString()}</p>
              <span className={`record-status ${record.status}`}>
                {record.status}
              </span>
            </div>
            <div className="record-actions">
              <button className="btn btn-secondary">
                <Eye size={16} />
                View
              </button>
              <button className="btn btn-secondary">
                <Download size={16} />
                Download
              </button>
              <button className="btn btn-secondary">
                <Share size={16} />
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalRecords;
