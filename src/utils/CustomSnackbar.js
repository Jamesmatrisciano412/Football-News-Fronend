import React from "react";
import { Snackbar, Alert } from "@mui/material";

function CustomSnackbar(props) {
  const { open, handleClose, type, vertical, horizontal, message } = props;

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: vertical, horizontal: horizontal }}
    >
      <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default CustomSnackbar;
