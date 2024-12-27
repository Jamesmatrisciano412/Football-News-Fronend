import React from 'react';
import Mark from "../../assets/images/sitemark.png";
import "./SiteMark.css";

export function SiteLargeMark() {
    return (
        <div className='site-mark-container'>
            <img src={Mark} className='site-mark' alt='site-mark' />
            <span className='site-title'>Football <span>News</span></span>
        </div>
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