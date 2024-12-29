import React from 'react';
import Mark from "../../assets/images/sitemark.png";
import "./SiteMark.css";
import { Box } from '@mui/material';

export function SiteLargeMark() {
    return (
        <Box sx={{
            width: "fit-content",
            display: "flex",
            alignItems: "center",
            cursor: "pointer"
        }} className='site-mark-container'>
            <img src={Mark} className='site-mark' alt='site-mark' />
            <span className='site-title'>Football <span>News</span></span>
        </Box>
    )
}

export function SiteSmallMark() {
    return (
        <div className='footer-mark-container'>
            <img src={Mark} alt='site-mark' />
            <span className='footer-site-title'>Football <span>News</span></span>
        </div>
    );
}