import React from 'react';
import "./LandJoin.css";
import { Button } from '@mui/material';

function LandJoin() {
  return (
    <div className='join-us-container'>
        Welcome to Football News – your ultimate source for the latest football match results! <br/> Please join our community today to get live updates, expert analysis, and more. 
        <p>
            <Button variant="outlined" size='large'>Join us</Button>
        </p>
    </div>
  )
}

export default LandJoin