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
  Visibility as FiEye,
  VisibilityOff as FiEyeOff,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { SiteSmallMark } from "../../compoents/SiteMark/SiteMark";
import CustomSnackbar from "../../utils/CustomSnackbar";
import api from "../../utils/api";
import { loginSite } from "../../redux/reducers/userReducer";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "2rem",
  borderRadius: "15px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  background: "#ffffff",
}));

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorHandling, setErrorHandling] = useState({
    email: {
      value: false,
      msg: "",
    },
    password: {
      value: false,
      msg: "",
    }
  });

  const [showPassword, setShowPassword] = useState(false);

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
      email: "Email",
      password: "Password"
    };

    var error = { [_index]: { value: false, msg: "" } };

    if(_index === "password" && (_value.length < 8 || _value.length > 60)) {
      error[_index]["value"] = true;
      error[_index]["msg"] = `Password must be between 8 and 60 characters long.`;
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
    var error = errorHandling,
      isValid = false;

    for (let i = 0; i < Object.keys(errorHandling).length; i++) {
      let item = inputValidation(
        Object.keys(errorHandling)[i],
        formData[Object.keys(errorHandling)[i]]
      );

      isValid = isValid || item[Object.keys(errorHandling)[i]].value;
      error = { ...error, ...item };
    }

    setErrorHandling({ ...error });

    if (isValid) return;

    api
      .post("api/user/login", { ...formData })
      .then((res) => {
        setSnackOpt({
          ...snackOpt,
          open: true,
          type: "success",
          message: res.data.message,
        });
        
        localStorage.setItem("token", res.data.data.token);
        dispatch(loginSite(
          {
            isLogged: true,
            email: res.data.data.email,
            fullname: res.data.data.fullname
          }
        ));
        api.defaults.headers.common["auth-token"] = `${res.data.data.token}`;

        setTimeout(() => {
          navigate("/matchstanding");
        }, 1000);
      })
      .catch((err) => {
        if(typeof err.response === "undefined") {
          setSnackOpt({
            ...snackOpt,
            open: true,
            type: "error",
            message: err.message,
          });
          return;
        }
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
      maxWidth="sm"
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
            Sign in the Football News
          </Typography>

          <Grid2 container spacing={3}>
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
                sx={{
                  marginBottom: "0.5rem"
                }}
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

            <Grid2 item size={12}>
              <TextField
                fullWidth
                error={errorHandling.password.value}
                helperText={errorHandling.password.msg}
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
                sx={{
                  marginBottom: "0.5rem"
                }}
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
              Sign in
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
