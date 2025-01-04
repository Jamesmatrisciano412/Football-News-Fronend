import React, { useEffect } from "react";
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
import { jwtDecode } from "jwt-decode";
import { loginSite, logoutSite, setAuthToken } from "./redux/reducers/userReducer";
import api from "./utils/api";

function App() {

  useEffect(() => {
    let token = localStorage.getItem("token");
    if(token !== null) {
      let decodeToken = jwtDecode(token);
      if(decodeToken.exp > Date.now() / 1000) {
        api.defaults.headers.common["auth-token"] = `${token}`;
        
        api.get("/api/user/verifyToken").then((res) => {
          store.dispatch(loginSite({...res.data, isLogged: true}));
          store.dispatch(setAuthToken(token));
        }).catch((err) => {
          console.log(err);
          store.dispatch(logoutSite());
          api.defaults.headers.common["auth-token"] = ``;
        });
      } else  {
        store.dispatch(logoutSite());
      }
    }
   }, []);

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
