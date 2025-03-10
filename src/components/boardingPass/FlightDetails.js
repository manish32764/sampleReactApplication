import React from 'react';

function FlightDetails() {
  return (
    <div className="details">
      <div className="item">
        <span className="label">Thursday</span>
        <span className="value">Mar 7</span>
      </div>
      <div className="item">
        <span className="label">Gate</span>
        <span className="value">D20</span>
      </div>
      <div className="item">
        <span className="label">Boarding</span>
        <span className="value">06:45</span>
      </div>
    </div>
  );
}

export default FlightDetails;