// LuxuryCard.jsx
import React from "react";
import "../styles/LuxuryCard.css";
import { useNavigate } from 'react-router-dom';

const LuxuryCard = ({ title, description, iconType,linkTo }) => {
  const navigate = useNavigate();
  const renderIcon = () => {
    if (iconType === "ocean") {
      return (
        <svg className="card-icon" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" fill="#9BC1D5" opacity="0.2"/>
          <path 
            d="M40 100 Q60 90, 80 100 T120 100 T160 100" 
            stroke="#9BC1D5" 
            strokeWidth="3" 
            fill="none"
            strokeLinecap="round"
          />
          <path 
            d="M40 120 Q60 110, 80 120 T120 120 T160 120" 
            stroke="#D4C19C" 
            strokeWidth="2" 
            fill="none"
            strokeLinecap="round"
            opacity="0.7"
          />
          <circle cx="100" cy="60" r="25" fill="#D4C19C" opacity="0.4"/>
        </svg>
      );
    } else if (iconType === "sunset") {
      return (
        <svg className="card-icon" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="90" r="35" fill="#D4C19C" opacity="0.6"/>
          <line x1="100" y1="30" x2="100" y2="50" stroke="#D4C19C" strokeWidth="2" strokeLinecap="round"/>
          <line x1="140" y1="50" x2="125" y2="65" stroke="#D4C19C" strokeWidth="2" strokeLinecap="round"/>
          <line x1="155" y1="90" x2="135" y2="90" stroke="#D4C19C" strokeWidth="2" strokeLinecap="round"/>
          <line x1="60" y1="50" x2="75" y2="65" stroke="#D4C19C" strokeWidth="2" strokeLinecap="round"/>
          <line x1="45" y1="90" x2="65" y2="90" stroke="#D4C19C" strokeWidth="2" strokeLinecap="round"/>
          <path 
            d="M40 130 Q100 110, 160 130" 
            stroke="#9BC1D5" 
            strokeWidth="3" 
            fill="none"
            strokeLinecap="round"
          />
          <rect x="70" y="140" width="60" height="30" fill="#1A2E3A" opacity="0.3" rx="2"/>
        </svg>
      );
    }
  };

  return (
    <div className="luxury-card">
      <div className="card-icon-container">
        {renderIcon()}
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
       <button className="card-button" onClick={() => navigate(linkTo)}>
        Explore
        <span className="button-arrow">→</span>
      </button>
      </div>
      <div className="card-shimmer"></div>
    </div>
  );
};

export default LuxuryCard;