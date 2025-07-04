# SmartHealth Medical Portal

A modern healthcare management platform built with React and Vite. Features include patient registration, appointment scheduling, telemedicine consultations, medical records management, prescription tracking, and secure doctor-patient communication. Designed with a professional UI/UX inspired by modern healthcare applications.

## Tech Stack
React 18, Vite, React Router, Lucide Icons, CSS3

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project4
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Demo Credentials
For testing the application, use these demo credentials:
- **Email**: demo@smarthealth.com
- **Password**: demo123

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Main navigation header
│   └── Sidebar.jsx     # Sidebar navigation
├── pages/              # Main application pages
│   ├── LandingPage.jsx # Homepage with features overview
│   ├── Login.jsx       # Authentication page
│   ├── Register.jsx    # User registration
│   ├── Dashboard.jsx   # Main dashboard
│   ├── PatientProfile.jsx # Patient information management
│   ├── Appointments.jsx   # Appointment scheduling
│   ├── Telemedicine.jsx   # Video consultation interface
│   ├── MedicalRecords.jsx # Medical records management
│   ├── Prescriptions.jsx  # Medication management
│   ├── Messages.jsx       # Doctor-patient messaging
│   ├── Insurance.jsx      # Insurance management
│   └── Settings.jsx       # User preferences
├── App.jsx             # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles
```

## Key Pages Overview

### 🏠 Landing Page
- Hero section with healthcare messaging
- Feature highlights and benefits
- Patient testimonials
- Call-to-action sections

### 📊 Dashboard
- Health metrics overview
- Quick stats and summaries
- Upcoming appointments
- Recent activity timeline
- Health tips and recommendations

### 👤 Patient Profile
- Personal information management
- Medical history tracking
- Insurance information
- Emergency contacts
- Preferences and settings

### 📅 Appointments
- Calendar view of appointments
- Appointment booking system
- Filter and search functionality
- Appointment history

### 💻 Telemedicine
- Video call simulation interface
- Upcoming consultations
- Call history and notes
- Provider information

### 📋 Medical Records
- Document management system
- Upload and download capabilities
- Record categorization
- Search and filter options

### 💊 Prescriptions
- Active medication list
- Prescription history
- Refill management
- Medication reminders
- Dosage tracking

### 💬 Messages
- Secure messaging with healthcare providers
- Conversation history
- File attachments support
- Real-time messaging simulation

### 🛡️ Insurance
- Insurance card display
- Coverage details
- Claims tracking
- Benefits overview
- Provider contact information

### ⚙️ Settings
- Account preferences
- Privacy settings
- Notification management
- Security options
- Appearance customization

## Design Inspiration

The design draws inspiration from HealthifyMe's clean, modern interface:
- Professional healthcare color palette
- Clean typography and spacing
- Intuitive navigation patterns
- Mobile-first responsive design
- Accessibility-focused components

## Features Implemented

✅ Complete frontend implementation  
✅ Responsive design for all screen sizes  
✅ Interactive components with realistic data  
✅ Modern CSS styling with gradients and animations  
✅ Professional healthcare imagery  
✅ Simulated backend responses for demonstrations  
✅ HIPAA-compliant UI patterns  
✅ Comprehensive navigation system  
✅ Form validation and user feedback  
✅ Modern loading states and interactions  

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run code linting

### Customization

The application is built with modularity in mind. Each component and page can be easily customized:

- **Styling**: Each component has its own CSS file for easy customization
- **Data**: Mock data is clearly separated and can be replaced with API calls
- **Components**: Reusable components can be easily modified or extended

## Future Enhancements

- Backend API integration
- Real-time notifications
- Advanced appointment scheduling
- Integration with electronic health records (EHR)
- Mobile app development
- Advanced analytics dashboard
- Multilingual support

## License

This project is for demonstration purposes and showcases modern React development practices for healthcare applications.

## Support

For questions or support, please contact the development team.

---

**Note**: This is a frontend-only implementation. All data is mocked for demonstration purposes. In a production environment, this would be connected to a secure healthcare backend with proper HIPAA compliance measures.
