import React from 'react';
import logo from '../../assets/flightBlueImage.png';

function FlightRoute() {
  return (
    <div className="flight-route">
      <div className="airport">
        <span className="code">LAX</span>
        <div className="city">Los Angeles, US</div>
      </div>
      <img src={logo} alt="Flight Path" />
      <div className="airport">
        <span className="code">YYZ</span>
        <div className="city">Toronto, Canada</div>
      </div>
    </div>
  );
}

export default FlightRoute;