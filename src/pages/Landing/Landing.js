import React from 'react';
import LandJoin from '../../compoents/LandJoin/LandJoin';
import "./Landing.css";
import Introduction from '../../compoents/Introduction/Introduction';

function Landing() {

  const statement = "Welcome to Football News – your ultimate source for the latest football match results! <br/> Please join our community today to get live updates, expert analysis, and more. ";

  return (
    <div>
      <LandJoin statement={statement} linkeButton = {true} />
      <Introduction />
    </div>
  )
}

export default Landing