import * as React from "react";
import { Box, Container, Grid2 } from "@mui/material";
import "./Header.css";
import { Button, IconButton } from "@mui/material";
import { SiteLargeMark } from "../../compoents/SiteMark/SiteMark";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import { Menu } from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";

export default function Header() {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      //keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <p>Sign in</p>
      </MenuItem>
      <MenuItem>
        <p>Join</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box className="header-container">
      <Container maxWidth="xl">
        <Grid2 container>
          <Grid2 size={{ xs: 11, md: 8 }}>
            <SiteLargeMark />
          </Grid2>
          <Grid2
            size={{ xs: 0, md: 4 }}
            sx={{ display: { xs: "none", md: "flex" } }}
            className="user-container"
          >
            <Button variant="outlined" size="large">
              Sign in
            </Button>

            <Button variant="contained" size="large">
              Join
            </Button>
          </Grid2>
          <Grid2
            size={{ xs: 1, md: 0 }}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Grid2>
        </Grid2>
      </Container>
      {renderMobileMenu}
    </Box>
  );
}
