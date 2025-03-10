import React from 'react';

function DashboardHeader({ username, initials }) {
  return (
    <div className="dashboard-header">
      <h2>Welcome, {username}!</h2>
      <div className="profile-icon">{initials}</div>
    </div>
  );
}

export default DashboardHeader;