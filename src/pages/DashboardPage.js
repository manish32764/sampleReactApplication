import React from 'react';
import IPhoneFrame from '../components/login/IPhoneFrame';
import DashboardHeader from '../components/boardingPass/DashboardHeader';
import TripCard from '../components/dashboard/TripCard';
import QuickActions from '../components/dashboard/QuickActions';
import Countdown from '../components/dashboard/Countdown';
import Weather from '../components/dashboard/Weather';
import Notifications from '../components/dashboard/Notifications';
import BoardingPass from '../components/boardingPass/BoardingPass';
import Timeline from '../components/dashboard/Timeline';

function DashboardPage() {
  return (
    <IPhoneFrame>
      <div className="dashboard-screen">
        <DashboardHeader username="Manish" initials="MB" />
        <TripCard />
        <QuickActions />
        <Countdown />
        <Weather />
        <Notifications />
        <BoardingPass />
        <Timeline />
      </div>
    </IPhoneFrame>
  );
}

export default DashboardPage;
