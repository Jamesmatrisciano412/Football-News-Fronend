import React from "react";
import { Grid2, Typography } from "@mui/material";
import { NoBackpack } from "@mui/icons-material";

function EmptyMatch() {
  return (
    <Grid2 container size={12}>
      <Grid2 size={12} display={"flex"} justifyContent={"center"}>
        <div>
          <Typography
            sx={{
              fontSize: {
                xs: "2.5rem",
                md: "3rem",
              },
              color: "grey",
              textAlign: "center",
              marginTop: {
                xs: "1.5rem",
                md: "3rem"
              }
            }}
          >
            <NoBackpack fontSize="4rem" />
          </Typography>
          <Grid2>
            <Typography
              sx={{
                fontSize: {
                  xs: "1.5rem",
                  md: "2rem",
                },
                color: "grey",
                marginBottom: {
                  xs: "1rem",
                  md: "7.5rem"
                }
              }}
            >
              No matches found.
            </Typography>
          </Grid2>
        </div>
      </Grid2>
    </Grid2>
  );
}

export default EmptyMatch;
