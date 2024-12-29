import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Grid2,
  IconButton,
  InputAdornment,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  Mail as FiMail,
  Lock as FiLock,
  Person as FiUser,
  Phone as FiPhone,
  Visibility as FiEye,
  VisibilityOff as FiEyeOff,
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import { SiteSmallMark } from "../../compoents/SiteMark/SiteMark";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "2rem",
  borderRadius: "15px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  background: "#ffffff",
}));

export default function Joinpage() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Container
      maxWidth="md"
      sx={{ py: 4, marginTop: { xs: "2rem", md: "5rem" } }}
    >
      <StyledPaper>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid2 sx={{ display: "flex", justifyContent: "center" }}>
            <SiteSmallMark />
          </Grid2>
          <Typography
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#1976d2",
              fontSize: { xs: "1.5rem", md: "2.125rem" },
            }}
          >
            Join the Football News Community
          </Typography>

          <Grid2 container spacing={3}>
            <Grid2 item size={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <FiUser />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Grid2>

            <Grid2 item size={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <FiMail />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Grid2>

            <Grid2 item size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <FiLock />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <FiEyeOff /> : <FiEye />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Grid2>

            <Grid2 item size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleInputChange}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <FiLock />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Grid2>

            <Grid2 item size={12}>
              <TextField
                fullWidth
                label="Phone Number (Optional)"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <FiPhone />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Grid2>
          </Grid2>

          <Box
            sx={{
              mt: 4,
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              sx={{
                minWidth: 150,
                textTransform: "none",
                fontSize: "1.1rem",
              }}
            >
              Join
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              sx={{
                minWidth: 150,
                textTransform: "none",
                fontSize: "1.1rem",
              }}
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </StyledPaper>
    </Container>
  );
}
