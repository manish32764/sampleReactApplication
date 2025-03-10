import React from 'react';

function Notifications() {
  return (
    <div className="notifications">
      <p>
        <span style={{ fontSize: '1.2em' }}>&#9888;</span>{' '}
        <strong>Important:</strong> Flight AC123 delayed by 15 mins. Gate change to B15.
      </p>
    </div>
  );
}

export default Notifications;