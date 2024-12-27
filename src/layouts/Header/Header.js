import * as React from 'react';
import { Grid2 } from '@mui/material';
import "./Header.css";
import { Button } from '@mui/material';
import { SiteLargeMark } from '../../compoents/SiteMark/SiteMark';

export default function Header() {
  return (
    <Grid2 container spacing={1} className='header-container'>
      <Grid2 size={{ xs: 6, md: 8 }}>
        <SiteLargeMark />
      </Grid2>
      <Grid2 size={{ xs: 6, md: 4 }} className='user-container'>
        <Button variant="outlined" size='large'>
          Sign in
        </Button>

        <Button variant="contained" size='large'>
          Join
        </Button>
      </Grid2>
    </Grid2>
  );
}