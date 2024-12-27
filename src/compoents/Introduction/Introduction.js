import React from 'react';
import "./Introduction.css";
import WorldCup from "../../assets/images/worldcup.png";
import Kick from "../../assets/images/kick.jpg";
import Wow from "../../assets/images/wow.jpg";
import Goal from "../../assets/images/goal.jpg";
import { Typography, Box } from '@mui/material';
import { Flare } from '@mui/icons-material';

function Introduction() {
    return (
        <div className='intro-container'>
            <div>
                <img src={WorldCup} alt='worldcup' />
            </div>
            <div>
                <h1>Stay Updated with Football News </h1>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: {
                            xs: 'column',
                            md: "row"
                        }
                    }}
                >
                    <Box>
                        <p>Get the latest football scores as they happen with Football News!</p>
                        <p>Whether you're at home or on the go, we bring you real-time match updates from leagues, tournaments, and international competitions worldwide.</p>
                        <ul>
                            <li>🔴 Live Scores: Instant updates from every game, in every league.</li>
                            <li>🌍 Global Coverage: From the Premier League to La Liga, Serie A to international matches – we cover it all!</li>
                            <li>📱 On-the-Go Access: Get updates wherever you are with our mobile-friendly site.</li>
                            <li>⚡ Fast & Accurate: Dependable results with lightning-fast refreshes, so you're always in the know.</li>
                        </ul>

                        <p>Never miss a goal – visit Football News today for the latest scores, stats, and more!</p>
                    </Box>
                    <Box sx={{
                        display: "flex"
                    }}>
                        <img src={Kick} alt='kick the ball' style={{ maxWidth: 300 }} />
                        {/* <img src={Goal} alt='Goal!!' />
                        <img src={Wow} alt='Wow!!' /> */}
                    </Box>
                </Box>
                <div className='intro-detail-container'>
                    <div>
                        <p>Get the latest football scores as they happen with Football News!</p>
                        <p>Whether you're at home or on the go, we bring you real-time match updates from leagues, tournaments, and international competitions worldwide.</p>
                        <ul>
                            <li>🔴 Live Scores: Instant updates from every game, in every league.</li>
                            <li>🌍 Global Coverage: From the Premier League to La Liga, Serie A to international matches – we cover it all!</li>
                            <li>📱 On-the-Go Access: Get updates wherever you are with our mobile-friendly site.</li>
                            <li>⚡ Fast & Accurate: Dependable results with lightning-fast refreshes, so you're always in the know.</li>
                        </ul>

                        <p>Never miss a goal – visit Football News today for the latest scores, stats, and more!</p>
                    </div>

                    <div>
                        <img src={Kick} alt='kick the ball' />
                        <img src={Goal} alt='Goal!!' />
                        <img src={Wow} alt='Wow!!' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction