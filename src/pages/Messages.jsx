import React, { useState } from 'react';
import { 
  MessageCircle, 
  Send, 
  Search, 
  Phone, 
  Video, 
  Paperclip,
  MoreVertical,
  User
} from 'lucide-react';
import './Messages.css';

const Messages = ({ user }) => {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [newMessage, setNewMessage] = useState('');
  
  const conversations = [
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'Your test results look good. Let\'s schedule a follow-up.',
      timestamp: '2 hours ago',
      unread: 2
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'General Practice',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'How are you feeling after the medication change?',
      timestamp: '1 day ago',
      unread: 0
    },
    {
      id: 3,
      doctor: 'Dr. Emily Rodriguez',
      specialty: 'Dermatology',
      avatar: 'https://images.unsplash.com/photo-1594824047368-dd3bd66da05e?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'Thanks for sending the photos. The treatment is working well.',
      timestamp: '3 days ago',
      unread: 0
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'doctor',
      content: 'Hello John! I\'ve reviewed your blood test results from last week.',
      timestamp: '10:30 AM'
    },
    {
      id: 2,
      sender: 'patient',
      content: 'Hi Dr. Johnson! How do they look?',
      timestamp: '10:32 AM'
    },
    {
      id: 3,
      sender: 'doctor',
      content: 'Your cholesterol levels have improved significantly! The medication is working well. We should schedule a follow-up in 3 months.',
      timestamp: '10:35 AM'
    },
    {
      id: 4,
      sender: 'patient',
      content: 'That\'s great news! Should I continue with the same dosage?',
      timestamp: '10:37 AM'
    },
    {
      id: 5,
      sender: 'doctor',
      content: 'Yes, continue with the current dosage. I\'ll send you a prescription refill. Any side effects or concerns?',
      timestamp: '10:40 AM'
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage('');
    }
  };

  const selectedDoctor = conversations.find(c => c.id === selectedConversation);

  return (
    <div className="messages-page">
      <div className="messages-container">
        <div className="conversations-sidebar">
          <div className="sidebar-header">
            <h2>Messages</h2>
            <div className="search-input">
              <Search size={16} />
              <input type="text" placeholder="Search conversations..." />
            </div>
          </div>

          <div className="conversations-list">
            {conversations.map(conversation => (
              <div 
                key={conversation.id}
                className={`conversation-item ${selectedConversation === conversation.id ? 'active' : ''}`}
                onClick={() => setSelectedConversation(conversation.id)}
              >
                <img src={conversation.avatar} alt={conversation.doctor} className="conversation-avatar" />
                <div className="conversation-content">
                  <div className="conversation-header">
                    <h4>{conversation.doctor}</h4>
                    <span className="timestamp">{conversation.timestamp}</span>
                  </div>
                  <p className="specialty">{conversation.specialty}</p>
                  <p className="last-message">{conversation.lastMessage}</p>
                </div>
                {conversation.unread > 0 && (
                  <div className="unread-badge">{conversation.unread}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="chat-area">
          {selectedDoctor && (
            <>
              <div className="chat-header">
                <div className="doctor-info">
                  <img src={selectedDoctor.avatar} alt={selectedDoctor.doctor} className="doctor-avatar" />
                  <div>
                    <h3>{selectedDoctor.doctor}</h3>
                    <p>{selectedDoctor.specialty}</p>
                  </div>
                </div>
                <div className="chat-actions">
                  <button className="btn btn-secondary">
                    <Phone size={16} />
                  </button>
                  <button className="btn btn-secondary">
                    <Video size={16} />
                  </button>
                  <button className="btn btn-secondary">
                    <MoreVertical size={16} />
                  </button>
                </div>
              </div>

              <div className="messages-area">
                {messages.map(message => (
                  <div 
                    key={message.id}
                    className={`message ${message.sender === 'patient' ? 'outgoing' : 'incoming'}`}
                  >
                    {message.sender === 'doctor' && (
                      <img src={selectedDoctor.avatar} alt={selectedDoctor.doctor} className="message-avatar" />
                    )}
                    <div className="message-content">
                      <p>{message.content}</p>
                      <span className="message-time">{message.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="message-input-area">
                <div className="message-input">
                  <button className="attachment-btn">
                    <Paperclip size={20} />
                  </button>
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <button 
                    className="send-btn"
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
