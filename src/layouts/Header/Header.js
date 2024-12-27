import * as React from 'react';
import Box from '@mui/material/Box';
import {Grid2} from '@mui/material';
import "./Header.css";
import Mark from "../../assets/images/sitemark.png";
import { Button } from '@mui/material';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={1} className='header-container'>
        <Grid2 size={{xs : 6, md: 8}}>
          <div className='site-mark-container'>
            <img src={Mark} className='site-mark' alt='site-mark' />
            <span className='site-title'>Football <span>News</span></span>
          </div>
        </Grid2>
        <Grid2 size={{xs : 6, md: 4}} className='user-container'>
          <Button variant="outlined" size='large'>
            Sign in
          </Button>

          <Button variant="contained" size='large'>
            Join
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
}