// src/components/TripCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function TripCard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/boarding-pass');
  };

  return (
    <div className="trip-card clickable" onClick={handleClick}>
      <h3>Upcoming Flight</h3>
      <div className="trip-info">Flight AC123 - Departure: 10:30 AM</div>
      <div className="trip-info">Gate: B12 | Seat: 21A</div>
      <div className="trip-info">Status: Checked-In</div>
    </div>
  );
}

export default TripCard;