import React from 'react';

function IPhoneFrame({ children }) {
  return (
    <div className="iphone-frame">
      <div className="iphone">
        {children}
      </div>
    </div>
  );
}

export default IPhoneFrame;