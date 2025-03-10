import React from 'react';
import logo from '../../assets/airCanadaLogo.png';

function BPHeader() {
  return (
    <div className="bp-header">
      <div className="logo">
        <img src={logo} alt="Air Canada Logo" />
      </div>
      <div className="flight-info">
        <span className="flight-number">AC794</span>
        <span className="status">On time</span>
      </div>
    </div>
  );
}

export default BPHeader;