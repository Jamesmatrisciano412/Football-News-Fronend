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
import CustomSnackbar from "../../utils/CustomSnackbar";
import api from "../../utils/api";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "2rem",
  borderRadius: "15px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  background: "#ffffff",
}));

export default function Joinpage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirm: "",
    phone: "",
  });

  const [errorHandling, setErrorHandling] = useState({
    fullname: {
      value: false,
      msg: "",
    },
    email: {
      value: false,
      msg: "",
    },
    password: {
      value: false,
      msg: "",
    },
    confirm: {
      value: false,
      msg: "",
    },
    phone: {
      value: false,
      msg: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackOpt({ ...snackOpt, open: false });
  };

  const [snackOpt, setSnackOpt] = useState({
    open: false,
    handleClose: handleClose,
    type: "",
    vertical: "top",
    horizontal: "right",
    message: "",
  });

  const inputValidation = (_index, _value) => {
    const title = {
      fullname: "Full name",
      email: "Email",
      password: "Password",
      confirm: "Confirm password",
      phone: "Phone number",
    };

    var error = { [_index]: { value: false, msg: "" } };

    if (_index === "password" || _index === "confirm") {
      if (_value.length < 8 || _value.length > 60) {
        error[_index]["value"] = true;
        error[_index]["msg"] =
          `${title[_index]} must be between 8 and 60 characters long.`;
      } else if (
        _value !== formData[_index === "password" ? "confirm" : "password"]
      ) {
        error = {
          ...error,
          confirm: {
            value: true,
            msg: "You must confirm your password correctly.",
          },
        };
      }
    } else if (_value === "") {
      error[_index]["value"] = true;
      error[_index]["msg"] = `${title[_index]} is required.`;
    }

    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let error = inputValidation(name, value);
    setErrorHandling({ ...errorHandling, ...error });

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var error = errorHandling, isValid = false;

    for (let i = 0; i < Object.keys(errorHandling).length; i++) {
      let item = inputValidation(
        Object.keys(errorHandling)[i],
        formData[Object.keys(errorHandling)[i]]
      );

      isValid = isValid || item[Object.keys(errorHandling)[i]].value;
      error = {...error, ...item};
    }

    setErrorHandling({...error});

    if (isValid) return;

    api
      .post("api/user/register", { ...formData })
      .then((res) => {
        setSnackOpt({
          ...snackOpt,
          open: true,
          type: "success",
          message: res.data.message,
        });

        setTimeout(() => {
          navigate("/signin");
        }, 1000);
      })
      .catch((err) => {
        var resError = err.response.data;

        if (resError.type === "validation") {
          //is validation error
          let errors = errorHandling;
          for (let i = 0; i < Object.keys(errors).length; i++) {
            //initialize error handling
            errors[Object.keys(errors)[i]].value = false;
            errors[Object.keys(errors)[i]].msg = "";
          }

          errors = resError.errors.reduce(
            (accumulator, currentValue) => {
              if (typeof accumulator[currentValue.path])
                accumulator[currentValue.path].value = true;
              accumulator[currentValue.path].msg = currentValue.msg;

              return accumulator;
            },
            { ...errors }
          );

          setErrorHandling({ ...errors });
        } else {
          setSnackOpt({
            ...snackOpt,
            open: true,
            type: "error",
            message: resError.message,
          });
        }
      });
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
                error={errorHandling.fullname.value}
                helperText={errorHandling.fullname.msg}
                fullWidth
                label="Full Name"
                name="fullname"
                value={formData.fullname}
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
                error={errorHandling.email.value}
                helperText={errorHandling.email.msg}
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
                error={errorHandling.password.value}
                helperText={errorHandling.password.msg}
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
                error={errorHandling.confirm.value}
                helperText={errorHandling.confirm.msg}
                label="Confirm Password"
                name="confirm"
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
                error={errorHandling.phone.value}
                helperText={errorHandling.phone.msg}
                label="Phone Number"
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

              <CustomSnackbar
                type={snackOpt.type}
                message={snackOpt.message}
                open={snackOpt.open}
                vertical={snackOpt.vertical}
                horizontal={snackOpt.horizontal}
                handleClose={snackOpt.handleClose}
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
