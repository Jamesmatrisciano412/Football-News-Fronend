import React from "react";
import "./Introduction.css";
import Kick from "../../assets/images/kick.jpg";
import Wow from "../../assets/images/wow.jpg";
import Goal from "../../assets/images/goal.jpg";
import {
  Box,
  Container,
  List,
  Typography,
  ListItem,
  Grid2,
  Zoom,
} from "@mui/material";

const imageGroup = [
  {
    alt: "kick the ball",
    src: Kick,
  },
  {
    alt: "Goal!!",
    src: Goal,
  },
  {
    alt: "Wow!!",
    src: Wow,
  },
];

function Introduction() {
  return (
    <Container maxWidth="xl" className="intro-container">
      <Box>
        <Typography sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
          Stay Updated with Football News{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
          className="intro-detail-container"
        >
          <Grid2
            sx={{
              width: {
                xs: "100%",
                md: "70%",
              },
            }}
          >
            <Typography>
              Get the latest football scores as they happen with Football News!
            </Typography>
            <Typography>
              Whether you're at home or on the go, we bring you real-time match
              updates from leagues, tournaments, and international competitions
              worldwide.
            </Typography>
            <List>
              <ListItem>
                🔴 Live Scores: Instant updates from every game, in every
                league.
              </ListItem>
              <ListItem>
                🌍 Global Coverage: From the Premier League to La ListItemga,
                Serie A to international matches – we cover it all!
              </ListItem>
              <ListItem>
                📱 On-the-Go Access: Get updates wherever you are with our
                mobile-friendly site.
              </ListItem>
              <ListItem>
                ⚡ Fast & Accurate: Dependable results with ListItemghtning-fast
                refreshes, so you're always in the know.
              </ListItem>
            </List>

            <Typography sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}>
              Never miss a goal – visit Football News today for the latest
              scores, stats, and more!
            </Typography>
          </Grid2>
          <Grid2
            sx={{
              width: {
                xs: "100%",
                md: "30%",
              },
              textAlign: {
                xs: "center",
                md: "right"
              }
            }}
          >
            {imageGroup.map((item, key) => {
              return (
                <Zoom
                  key={key}
                  in={true}
                  style={{
                    transitionDelay: `${key * 500}ms`
                  }}
                >
                  <img src={item.src} alt={item.alt} />
                </Zoom>
              );
            })}
          </Grid2>
        </Box>
      </Box>
    </Container>
  );
}

export default Introduction;
