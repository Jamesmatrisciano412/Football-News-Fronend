import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./layouts/Header/Header";
import Landing from "./pages/Landing/Landing";
import Footer from "./layouts/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Landing />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
