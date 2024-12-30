import React from 'react';
import "./LandJoin.css";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';

function LandJoin(props) {

  const {statement, linkeButton} = props;

  const navigate = useNavigate();

  return (
    <div className='join-us-container'>
        <div dangerouslySetInnerHTML={{ __html: statement.replace(/\n/g, '<br />')}}></div>
        <p>
            {linkeButton ? (<Button variant="outlined" size='large' onClick={() => navigate("/join")}>Join us</Button>) : ""}
        </p>
    </div>
  )
}

export default LandJoin