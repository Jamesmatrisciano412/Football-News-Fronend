import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./layouts/Header/Header";
import Landing from "./pages/Landing/Landing";
import Footer from "./layouts/Footer/Footer";
import "./App.css";
import SignIn from "./pages/SignIn/SignIn";
import Layout from "./layouts/Layout";
import { Lan } from "@mui/icons-material";
import Joinpage from "./pages/JoinPage/Joinpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
        </Route>
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/join" element={<Joinpage />} />
      </Routes>
    </Router>
  );
}

export default App;
