import React from 'react';
import logo from '../../assets/barCode.png';

function QRRow() {
  return (
    <div className="qr-row">
      <div className="travel-class">Business</div>
      <img src={logo} alt="Boarding QR Code" className="qr-code" />
      <div className="tsa-pre">
        <span>TSA Pre✓</span>
      </div>
    </div>
  );
}

export default QRRow;