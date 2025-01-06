import React from 'react';
import "./LandJoin.css";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

function LandJoin(props) {

  const {statement, linkeButton} = props;

  const navigate = useNavigate();
  const authState = useSelector((state) => state.authState);

  return (
    <div className='join-us-container'>
        <div dangerouslySetInnerHTML={{ __html: statement.replace(/\n/g, '<br />')}}></div>
        <p>
            {linkeButton ? (<Button variant="outlined" size='large' onClick={() => navigate(`${authState.isLogged ? "/matchstanding" : "/signin"}`)}>{ !authState.isLogged ? "Sign in" : "Go to standing" }</Button>) : ""}
        </p>
    </div>
  )
}

export default LandJoin