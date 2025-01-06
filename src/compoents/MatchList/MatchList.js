import {
  Box,
  Container,
  Grid2,
  Typography,
  InputAdornment,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

import LeagueMatch from "../LeagueMatch/LeagueMatch";
import EmptyMatch from "../EmptyMatch/EmptyMatch";

function MatchStanding(props) {
  const { MatchList, getMatchesData } = props;

  const [matchData, setMatchData] = useState([]);
  const [searchConditions, setSearchConditions] = useState({
    league: "",
    date: dayjs(),
  });

  const handleInputChange = (prams) => {
    const { name, value } = prams;

    setSearchConditions({...searchConditions, [name] : value});
    if(name === "date") {
      getMatchesData(value);
    }
  };

  useEffect(() => {
    let searchString = searchConditions.league;
    if(searchString !== "") {
      let re = RegExp(searchString, "i");
      let filteredData = MatchList.filter((item) => {
        return item.league.search(re) === -1 ? false : true;
      });

      setMatchData(filteredData);
      return;
    }

    setMatchData(MatchList);
  }, [MatchList, searchConditions.league]);

  return (
    <Box>
      <Container maxWidth="xl" sx={{ marginBottom: "1rem" }}>
        <Grid2 container sx={{ paddingTop: "1rem" }}>
          <Grid2 size={{ xs: 12, md: 5 }}>
            <Typography
              sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, paddingTop: "8px" }}
            >
              Match List
            </Typography>
            <Typography sx={{ color: "#282828" }}>
            {searchConditions.date.format("dddd, D MMMM YYYY").toString()}
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
              name="league"
              label="Filter"
              placeholder="Use the input field to filter competitions."
              type={"text"}
              onChange={(e) => handleInputChange({name: e.target.name, value: e.target.value})}
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
                    handleInputChange({name: "date", value: newValue})
                  }
                  label="Select Date"
                />
              </DemoContainer>
            </LocalizationProvider>
          </Grid2>
        </Grid2>

        {/* <Grid2 size={12}>
          
        </Grid2> */}

        {matchData.length ? matchData.map((item, index) => {
          return <LeagueMatch key={index} info={item} />;
        }) : <EmptyMatch />}
      </Container>
    </Box>
  );
}

export default MatchStanding;
