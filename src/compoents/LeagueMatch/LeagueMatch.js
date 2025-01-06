import { Box, Divider, Grid2, Typography } from "@mui/material";
import React from "react";
import "./LeagueMatch.css";
// import {Button} from "@mui/material";
// import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import dayjs from "dayjs";

function LeagueMatch(props) {
  const { info } = props;

  return (
    <Box style={{ marginTop: "1rem" }}>
      <Grid2
        size={12}
        sx={{
          display: "flex",
          alignItems: "center",
          fontSize: { xs: "1rem", md: "1.5rem" },
        }}
      >
        <img alt="league mark" src={info.mark} className="league-icon" /> {info.league}
      </Grid2>

      <Grid2 container spacing={3} sx={{ marginTop: "1rem" }}>
        {info.matches.length
          ? info.matches.map((item, key) => {
              return (
                <Grid2
                  key={key}
                  container
                  size={{ xs: 12, md: 4 }}
                  className="match-cell"
                >
                  <Grid2 size={8}>
                    <Grid2
                      container
                      size={12}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Grid2
                        container
                        size={11}
                        sx={{ display: "flex", alignItems: "center" }}
                        className="team-info"
                      >
                        <Grid2
                          size={3}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img alt="team mark1" src={item.teams[0].mark} />
                        </Grid2>
                        <Grid2 size={9}>{item.teams[0].name}</Grid2>
                      </Grid2>
                      <Grid2 size={1}>{item.result[0] == null ? "" : item.result[0]}</Grid2>
                    </Grid2>
                    <Grid2
                      container
                      size={12}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Grid2
                        container
                        size={11}
                        sx={{ display: "flex", alignItems: "center" }}
                        className="team-info"
                      >
                        <Grid2
                          size={3}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img alt="team mark2" src={item.teams[1].mark} />
                        </Grid2>
                        <Grid2 size={9}>{item.teams[1].name}</Grid2>
                      </Grid2>
                      <Grid2 size={1}>{item.result[1] == null ? "" : item.result[1]}</Grid2>
                    </Grid2>
                  </Grid2>
                  <Grid2
                    size={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Grid2>
                      <Typography sx={{ textAlign: "center" }}>
                        {dayjs(item.date).format("DD/MM/YYYY").toString()}
                      </Typography>
                      <Typography sx={{ textAlign: "center" }}>
                        {item.other}
                      </Typography>
                    </Grid2>
                  </Grid2>
                </Grid2>
              );
            })
          : ""}
      </Grid2>

      <Grid2 size={12} sx={{marginTop: "1rem", marginBottom: "1.5rem"}}>
        <Divider />
        {/* <Button sx={{textTransform: "none"}}>Go to "{info.league}" Standing <KeyboardDoubleArrowRight /></Button> */}
      </Grid2>
    </Box>
  );
}

export default LeagueMatch;
