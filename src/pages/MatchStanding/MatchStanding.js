import React, { useEffect, useState } from "react";
import LandJoin from "../../compoents/LandJoin/LandJoin";
import MatchList from "../../compoents/MatchList/MatchList";
import CustomSnackbar from "../../utils/CustomSnackbar";
import api from "../../utils/api";
import dayjs from "dayjs";
import { useNavigate } from "react-router";
import { Backdrop, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

function MatchStanding() {
  const navigate = useNavigate();
  const authState = useSelector((state) => state.authState);
  const statement =
    "Welcome to the ultimate destination for football fans! <br/>Get instant access to the latest match results, live scores, and real-time updates—all in one place. Stay ahead with breaking news and exclusive insights into your favorite teams and players. <br/>Love football? Join thousands of fans who rely on us for their daily dose of action. Don’t miss a moment—bookmark us now and visit again soon!";

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackOpt({ ...snackOpt, open: false });
  };

  const [MatchListData, setMatchListData] = useState([]);

  const [snackOpt, setSnackOpt] = useState({
    open: false,
    handleClose: handleClose,
    type: "",
    vertical: "top",
    horizontal: "right",
    message: "",
  });

  const [open, setOpen] = useState(false);

  const getMatchesData = async (_date) => {
    setOpen(true);
    api
      .post("/api/news/", {
        date: dayjs(_date).format("YYYY-MM-DD").toString(),
      })
      .then((res) => {
        setMatchListData(res.data.MatchList);
        setOpen(false);
      })
      .catch((err) => {
        if (err.status === 401) {
          setMatchListData([]);
          setSnackOpt({
            ...snackOpt,
            open: true,
            type: "error",
            message: "Access denied. Please sign in to the site.",
          });
          setTimeout(() => {
            navigate("/signin");
          }, 3000);
          setOpen(false);
          return;
        }

        setSnackOpt({
          ...snackOpt,
          open: true,
          type: "error",
          message:
            "The request could not be completed. Please try again later.",
        });
        console.log(err, "this is error.");
        setMatchListData([]);
        setOpen(false);
        return;
      });
  };

  useEffect(() => {
    if(authState.isLogged) getMatchesData(dayjs());
  }, [authState]);

  return (
    <div>
      <LandJoin statement={statement} linkButton={false} />
      <MatchList MatchList={MatchListData} getMatchesData = {getMatchesData} />

      <CustomSnackbar
        type={snackOpt.type}
        message={snackOpt.message}
        open={snackOpt.open}
        vertical={snackOpt.vertical}
        horizontal={snackOpt.horizontal}
        handleClose={snackOpt.handleClose}
      />
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 2 })}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default MatchStanding;
