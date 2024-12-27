import React from "react";
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Header from "./layouts/Header/Header";
import Content from "./layouts/Content/Content";
import Footer from "./layouts/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>

      <Header />
        <Routes>
          <Route exact path="/" element={<Content />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
