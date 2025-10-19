import React, { useState } from 'react';
import { Calendar, Users, Mail, User, Phone, MessageSquare, Check, Sparkles } from 'lucide-react';
import '../styles/Booking.css';

function Booking() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    roomType: '',
    specialRequests: ''
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('Thank you for your reservation request! Our team will confirm within 24 hours.');
  };

  const roomTypes = [
    { value: 'azure-suite', label: 'Azure Horizon Suite', price: '$895' },
    { value: 'shimmer-penthouse', label: 'Shimmer Penthouse', price: '$1,895' },
    { value: 'driftwood-sanctuary', label: 'Driftwood Sanctuary', price: '$1,195' },
    { value: 'sunset-villa', label: 'Sunset Villa', price: '$2,495+' }
  ];

  return (
    <div className="booking-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <div className="hero-gradient" />
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <Sparkles className="hero-icon" />
            <h1 className="hero-title">
              Reserve Your Sanctuary
            </h1>
            <p className="hero-subtitle">
              Begin your journey to luminescent tranquility
            </p>
          </div>
        </div>

        {/* Decorative Wave SVG */}
        <svg 
          className="hero-wave" 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="#FCFDFC"
          />
        </svg>
      </div>

      {/* Booking Form Section */}
      <div className="form-section">
        <div className="form-wrapper">
          <div className="form-card">
            <div className="form-content">
              <div className="form-header">
                <h2 className="form-title">
                  Booking Details
                </h2>
                <p className="form-description">
                  Complete the form below and our reservations team will confirm within 24 hours
                </p>
              </div>

              <div className="form-fields">
                {/* Personal Information */}
                <div className="form-grid">
                  {/* Full Name */}
                  <div className="field-wrapper">
                    <label className="field-label">
                      Full Name *
                    </label>
                    <div className="input-container">
                      <User 
                        className="input-icon" 
                        size={20}
                        style={{ color: focusedField === 'fullName' ? '#9BC1D5' : '#8A8B8C' }}
                      />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('fullName')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter your full name"
                        className="form-input"
                        style={{ 
                          border: `2px solid ${focusedField === 'fullName' ? '#9BC1D5' : 'transparent'}`
                        }}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="field-wrapper">
                    <label className="field-label">
                      Email Address *
                    </label>
                    <div className="input-container">
                      <Mail 
                        className="input-icon" 
                        size={20}
                        style={{ color: focusedField === 'email' ? '#9BC1D5' : '#8A8B8C' }}
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="your@email.com"
                        className="form-input"
                        style={{ 
                          border: `2px solid ${focusedField === 'email' ? '#9BC1D5' : 'transparent'}`
                        }}
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="field-wrapper">
                    <label className="field-label">
                      Phone Number *
                    </label>
                    <div className="input-container">
                      <Phone 
                        className="input-icon" 
                        size={20}
                        style={{ color: focusedField === 'phone' ? '#9BC1D5' : '#8A8B8C' }}
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="+1 (555) 000-0000"
                        className="form-input"
                        style={{ 
                          border: `2px solid ${focusedField === 'phone' ? '#9BC1D5' : 'transparent'}`
                        }}
                      />
                    </div>
                  </div>

                  {/* Number of Guests */}
                  <div className="field-wrapper">
                    <label className="field-label">
                      Number of Guests *
                    </label>
                    <div className="input-container">
                      <Users 
                        className="input-icon" 
                        size={20}
                        style={{ color: focusedField === 'guests' ? '#9BC1D5' : '#8A8B8C' }}
                      />
                      <input
                        type="number"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('guests')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="2"
                        min="1"
                        className="form-input"
                        style={{ 
                          border: `2px solid ${focusedField === 'guests' ? '#9BC1D5' : 'transparent'}`
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Stay Dates */}
                <div className="form-grid">
                  {/* Check-in Date */}
                  <div className="field-wrapper">
                    <label className="field-label">
                      Check-in Date *
                    </label>
                    <div className="input-container">
                      <Calendar 
                        className="input-icon-calendar" 
                        size={20}
                        style={{ color: focusedField === 'checkIn' ? '#9BC1D5' : '#8A8B8C' }}
                      />
                      <input
                        type="date"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('checkIn')}
                        onBlur={() => setFocusedField(null)}
                        className="form-input"
                        style={{ 
                          border: `2px solid ${focusedField === 'checkIn' ? '#9BC1D5' : 'transparent'}`
                        }}
                      />
                    </div>
                  </div>

                  {/* Check-out Date */}
                  <div className="field-wrapper">
                    <label className="field-label">
                      Check-out Date *
                    </label>
                    <div className="input-container">
                      <Calendar 
                        className="input-icon-calendar" 
                        size={20}
                        style={{ color: focusedField === 'checkOut' ? '#9BC1D5' : '#8A8B8C' }}
                      />
                      <input
                        type="date"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('checkOut')}
                        onBlur={() => setFocusedField(null)}
                        className="form-input"
                        style={{ 
                          border: `2px solid ${focusedField === 'checkOut' ? '#9BC1D5' : 'transparent'}`
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Room Type Selection */}
                <div className="field-wrapper">
                  <label className="field-label">
                    Select Your Accommodation *
                  </label>
                  <div className="input-container">
                    <select
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('roomType')}
                      onBlur={() => setFocusedField(null)}
                      className="form-select"
                      style={{ 
                        border: `2px solid ${focusedField === 'roomType' ? '#9BC1D5' : 'transparent'}`,
                        color: formData.roomType ? '#1A2E3A' : '#8A8B8C'
                      }}
                    >
                      <option value="">Choose your suite or villa</option>
                      {roomTypes.map((room) => (
                        <option key={room.value} value={room.value}>
                          {room.label} - {room.price}/night
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="field-wrapper">
                  <label className="field-label">
                    Special Requests
                  </label>
                  <div className="input-container">
                    <MessageSquare 
                      className="textarea-icon" 
                      size={20}
                      style={{ color: focusedField === 'specialRequests' ? '#9BC1D5' : '#8A8B8C' }}
                    />
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('specialRequests')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Let us know if you have any special requirements or preferences..."
                      rows="4"
                      className="form-textarea"
                      style={{ 
                        border: `2px solid ${focusedField === 'specialRequests' ? '#9BC1D5' : 'transparent'}`
                      }}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="submit-section">
                  <button
                    onClick={handleSubmit}
                    className="submit-button"
                  >
                    <span className="submit-button-content">
                      Complete Reservation
                      <Check className="submit-icon" size={22} />
                    </span>
                  </button>
                  <p className="submit-disclaimer">
                    By submitting, you agree to our terms and conditions. Your reservation will be confirmed within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information Cards */}
          <div className="info-cards">
            <div className="info-card">
              <Calendar className="info-card-icon" style={{ color: '#9BC1D5' }} />
              <h3 className="info-card-title">
                Flexible Booking
              </h3>
              <p className="info-card-text">
                Free cancellation up to 48 hours before check-in
              </p>
            </div>

            <div className="info-card">
              <Sparkles className="info-card-icon" style={{ color: '#D4C19C' }} />
              <h3 className="info-card-title">
                Best Rate Guarantee
              </h3>
              <p className="info-card-text">
                Book direct for exclusive rates and benefits
              </p>
            </div>

            <div className="info-card">
              <Phone className="info-card-icon" style={{ color: '#9BC1D5' }} />
              <h3 className="info-card-title">
                24/7 Concierge
              </h3>
              <p className="info-card-text">
                Our team is available around the clock
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="contact-content">
          <h3 className="contact-title">
            Need Assistance?
          </h3>
          <p className="contact-subtitle">
            Our reservations team is here to help craft your perfect stay
          </p>
          <div className="contact-buttons">
            <button 
              onClick={() => window.location.href = 'number'}
              className="contact-button-primary"
            >
              Call Reservations
            </button>
            <button 
              onClick={() => window.location.href = 'examplegmailaddress@resort.com'}
              className="contact-button-secondary"
            >
              Email Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;