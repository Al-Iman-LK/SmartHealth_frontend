import React, { useState } from 'react';
import { 
  Shield, 
  CreditCard, 
  FileText, 
  Phone, 
  CheckCircle,
  AlertTriangle,
  Download,
  Upload,
  Camera
} from 'lucide-react';
import './Insurance.css';

const Insurance = ({ user }) => {
  const [insuranceData] = useState({
    provider: 'Blue Cross Blue Shield',
    planType: 'PPO Premium',
    policyNumber: 'BC123456789',
    groupNumber: 'GRP001',
    memberID: 'MEM123456',
    effectiveDate: '2024-01-01',
    renewalDate: '2024-12-31',
    status: 'active',
    copay: {
      primaryCare: '$25',
      specialist: '$50',
      emergency: '$150',
      urgentCare: '$75'
    },
    deductible: {
      individual: '$1,500',
      family: '$3,000',
      remaining: '$1,200'
    },
    outOfPocketMax: {
      individual: '$6,000',
      family: '$12,000'
    }
  });

  const recentClaims = [
    {
      id: 1,
      date: '2025-01-05',
      provider: 'Dr. Sarah Johnson',
      service: 'Office Visit - Cardiology',
      amount: '$250.00',
      covered: '$200.00',
      patientPay: '$50.00',
      status: 'processed'
    },
    {
      id: 2,
      date: '2025-01-03',
      provider: 'General Hospital',
      service: 'Blood Test Panel',
      amount: '$180.00',
      covered: '$180.00',
      patientPay: '$0.00',
      status: 'processed'
    },
    {
      id: 3,
      date: '2024-12-28',
      provider: 'Radiology Center',
      service: 'Chest X-Ray',
      amount: '$320.00',
      covered: '$270.00',
      patientPay: '$50.00',
      status: 'pending'
    }
  ];

  return (
    <div className="insurance-page">
      <div className="page-header">
        <h1>Insurance Information</h1>
        <p>Manage your insurance coverage and view claims</p>
      </div>

      <div className="insurance-grid">
        <div className="main-content">
          <div className="insurance-card-section">
            <div className="insurance-card">
              <div className="card-header">
                <div className="provider-info">
                  <Shield size={32} color="#667eea" />
                  <div>
                    <h2>{insuranceData.provider}</h2>
                    <p>{insuranceData.planType}</p>
                  </div>
                </div>
                <div className="status-indicator">
                  <CheckCircle size={20} color="#4CAF50" />
                  <span className="status active">Active</span>
                </div>
              </div>

              <div className="card-details">
                <div className="detail-row">
                  <span className="label">Member ID:</span>
                  <span className="value">{insuranceData.memberID}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Policy Number:</span>
                  <span className="value">{insuranceData.policyNumber}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Group Number:</span>
                  <span className="value">{insuranceData.groupNumber}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Coverage Period:</span>
                  <span className="value">
                    {new Date(insuranceData.effectiveDate).toLocaleDateString()} - 
                    {new Date(insuranceData.renewalDate).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="card-actions">
                <button className="btn btn-primary">
                  <Download size={16} />
                  Download Card
                </button>
                <button className="btn btn-secondary">
                  <Camera size={16} />
                  Update Card Photo
                </button>
              </div>
            </div>
          </div>

          <div className="coverage-details">
            <h3>Coverage Details</h3>
            <div className="coverage-grid">
              <div className="coverage-section">
                <h4>Copayments</h4>
                <div className="coverage-list">
                  <div className="coverage-item">
                    <span>Primary Care:</span>
                    <span>{insuranceData.copay.primaryCare}</span>
                  </div>
                  <div className="coverage-item">
                    <span>Specialist:</span>
                    <span>{insuranceData.copay.specialist}</span>
                  </div>
                  <div className="coverage-item">
                    <span>Emergency Room:</span>
                    <span>{insuranceData.copay.emergency}</span>
                  </div>
                  <div className="coverage-item">
                    <span>Urgent Care:</span>
                    <span>{insuranceData.copay.urgentCare}</span>
                  </div>
                </div>
              </div>

              <div className="coverage-section">
                <h4>Deductible</h4>
                <div className="coverage-list">
                  <div className="coverage-item">
                    <span>Individual:</span>
                    <span>{insuranceData.deductible.individual}</span>
                  </div>
                  <div className="coverage-item">
                    <span>Family:</span>
                    <span>{insuranceData.deductible.family}</span>
                  </div>
                  <div className="coverage-item">
                    <span>Remaining:</span>
                    <span className="remaining">{insuranceData.deductible.remaining}</span>
                  </div>
                </div>
              </div>

              <div className="coverage-section">
                <h4>Out-of-Pocket Maximum</h4>
                <div className="coverage-list">
                  <div className="coverage-item">
                    <span>Individual:</span>
                    <span>{insuranceData.outOfPocketMax.individual}</span>
                  </div>
                  <div className="coverage-item">
                    <span>Family:</span>
                    <span>{insuranceData.outOfPocketMax.family}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="claims-section">
            <div className="section-header">
              <h3>Recent Claims</h3>
              <button className="btn btn-secondary">
                <FileText size={16} />
                View All Claims
              </button>
            </div>

            <div className="claims-list">
              {recentClaims.map(claim => (
                <div key={claim.id} className="claim-item">
                  <div className="claim-info">
                    <div className="claim-header">
                      <h4>{claim.service}</h4>
                      <span className={`claim-status ${claim.status}`}>
                        {claim.status}
                      </span>
                    </div>
                    <p className="claim-provider">{claim.provider}</p>
                    <p className="claim-date">{new Date(claim.date).toLocaleDateString()}</p>
                  </div>
                  <div className="claim-amounts">
                    <div className="amount-item">
                      <span className="amount-label">Billed:</span>
                      <span className="amount-value">{claim.amount}</span>
                    </div>
                    <div className="amount-item">
                      <span className="amount-label">Covered:</span>
                      <span className="amount-value covered">{claim.covered}</span>
                    </div>
                    <div className="amount-item">
                      <span className="amount-label">You Pay:</span>
                      <span className="amount-value patient">{claim.patientPay}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sidebar-content">
          <div className="quick-actions-card">
            <h3>Quick Actions</h3>
            <button className="btn btn-primary full-width">
              <Phone size={16} />
              Contact Insurance
            </button>
            <button className="btn btn-secondary full-width">
              <FileText size={16} />
              Submit Claim
            </button>
            <button className="btn btn-secondary full-width">
              <Upload size={16} />
              Upload Documents
            </button>
            <button className="btn btn-secondary full-width">
              <CreditCard size={16} />
              Payment History
            </button>
          </div>

          <div className="benefits-card">
            <h3>Benefits Summary</h3>
            <div className="benefit-item">
              <CheckCircle size={16} color="#4CAF50" />
              <span>Preventive Care: 100% Covered</span>
            </div>
            <div className="benefit-item">
              <CheckCircle size={16} color="#4CAF50" />
              <span>Prescription Drugs: Covered</span>
            </div>
            <div className="benefit-item">
              <CheckCircle size={16} color="#4CAF50" />
              <span>Mental Health: Covered</span>
            </div>
            <div className="benefit-item">
              <CheckCircle size={16} color="#4CAF50" />
              <span>Emergency Services: Covered</span>
            </div>
          </div>

          <div className="alerts-card">
            <h3>Important Notices</h3>
            <div className="alert-item">
              <AlertTriangle size={16} color="#ff9800" />
              <div>
                <p><strong>Policy Renewal</strong></p>
                <p>Your policy renews on Dec 31, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
