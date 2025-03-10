import React from 'react';
import BPHeader from './BPHeader';
import FlightRoute from './FlightRoute';
import FlightDetails from './FlightDetails';
import QRRow from './QRRow';
import MembershipStatus from './MembershipStatus';
import PassengerInfo from './PassengerInfo';

function BoardingPassCard() {
  return (
    <div className="boarding-pass">
      <BPHeader />
      <FlightRoute />
      <FlightDetails />
      <QRRow />
      <MembershipStatus />
      <PassengerInfo />
    </div>
  );
}

export default BoardingPassCard;