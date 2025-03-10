import React from 'react';
import IPhoneFrame from '../components/login/IPhoneFrame';
import BoardingPassCard from '../components/boardingPass/BoardingPassCard';

function BoardingPassPage() {
  return (
    <IPhoneFrame>
      <div className="screen">
        <BoardingPassCard />
      </div>
    </IPhoneFrame>
  );
}

export default BoardingPassPage;