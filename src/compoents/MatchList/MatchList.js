import {
  Box,
  Container,
  Grid2,
  Typography,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

import PremierLeague from "../../assets/images/competition_mark/Premier League.avif";
import IpswichTown from "../../assets/images/team_mark/Ipswich Town.avif";
import Chelsea from "../../assets/images/team_mark/Chelsea.avif";
import Aston from "../../assets/images/team_mark/Aston Villa.avif";
import Brighton from "../../assets/images/team_mark/Brighton & Hove Albion.avif";
import Manchester from "../../assets/images/team_mark/Manchester United.avif";
import Newcastle from "../../assets/images/team_mark/Newcastle United.avif";
import SerieA from "../../assets/images/competition_mark/Serie A.avif";
import Como from "../../assets/images/team_mark/Como.avif";
import Lecce from "../../assets/images/team_mark/Lecce.avif";
import Bologna from "../../assets/images/team_mark/bologna.avif";
import Hellas from "../../assets/images/team_mark/Hellas Verona.avif";
import LeagueMatch from "../LeagueMatch/LeagueMatch";

const MatchList = [
  {
    league: "Premier League",
    mark: PremierLeague,
    matches: [
      {
        teams: [
          { name: "Ipswich Town", mark: IpswichTown },
          { name: "Chelsea", mark: Chelsea },
        ],
        date: dayjs("2024-12-29"),
        result: [3, 2],
        other: "Full time",
      },
      {
        teams: [
          { name: "Aston Villa", mark: Aston },
          { name: "Brighton & Hove Albion", mark: Brighton },
        ],
        date: dayjs("2024-12-29"),
        result: [2, 1],
        other: "Full time",
      },
      {
        teams: [
          { name: "Manchester United", mark: Manchester },
          { name: "Newcastle United", mark: Newcastle },
        ],
        date: dayjs("2024-12-29"),
        result: [3, 0],
        other: "Full time",
      }
    ]
  },
  {
    league: "Serie A",
    mark: SerieA,
    matches: [
      {
        teams: [
          { name: "Como", mark: Como },
          { name: "Lecce", mark: Lecce },
        ],
        date: dayjs("2024-12-29"),
        result: [1, 0],
        other: "Full time",
      },
      {
        teams: [
          { name: "Bologna", mark: Bologna },
          { name: "Hellas Verona", mark: Hellas },
        ],
        date: dayjs("2024-12-29"),
        result: [2, 1],
        other: "Full time",
      }
    ]
  },
];

function MatchStanding() {
  const [searchConditions, setSearchConditions] = useState({
    league: "",
    date: dayjs(),
  });

  return (
    <Box>
      <Container maxWidth="xl" sx={{marginBottom: "1rem"}}>
        <Grid2 container sx={{ paddingTop: "1rem" }}>
          <Grid2 size={{ xs: 12, md: 5 }}>
            <Typography
              sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, paddingTop: "8px" }}
            >
              Match List
            </Typography>
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 7 }}
            spacing={3}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
            }}
          >
            <TextField
              name="search"
              label="Filter"
              placeholder="Type here to search for a league"
              type={"text"}
              onChange={(event) =>
                setSearchConditions({
                  ...searchConditions,
                  league: event.target.value,
                })
              }
              value={searchConditions.league}
              sx={{ width: { xs: "100%", md: "65%" }, marginTop: "8px" }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                },
              }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                sx={{
                  width: { xs: "100%", md: "35%" },
                  marginLeft: { xs: "0px", md: "2px" },
                }}
                components={["DatePicker"]}
              >
                <DatePicker
                  name="date"
                  value={searchConditions.date}
                  onChange={(newValue) =>
                    setSearchConditions({ ...searchConditions, date: newValue })
                  }
                  label="Select Date"
                />
              </DemoContainer>
            </LocalizationProvider>
          </Grid2>
        </Grid2>

        <Grid2 size={12}>
          <Typography sx={{ color: "#282828" }}>
            {searchConditions.date.format("dddd, D MMMM YYYY").toString()}
          </Typography>
        </Grid2>
        
        {
            MatchList.map((item, index) => {
                return (
                    <LeagueMatch key={index} info={item} />
                )
            })
        }
      </Container>
    </Box>
  );
}

export default MatchStanding;
