import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Landing from "./pages/Landing/Landing";
import SignIn from "./pages/SignIn/SignIn";
import Layout from "./layouts/Layout";
import Joinpage from "./pages/JoinPage/Joinpage";
import MatchStanding from "./pages/MatchStanding/MatchStanding";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import "./App.css";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="/matchstanding" element={<MatchStanding />} />
          </Route>
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/join" element={<Joinpage />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
