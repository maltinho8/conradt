import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavigationBar from "../Bar/NavigationBar/index.js";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Impressum from "../Organisation/Imprint/Imprint.js";
import DataSafety from "../Organisation/Contact/DataSafety.js";
import Footer from "../Footer/index.js";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Routing = () => {
  return (
    <Router>
      <ScrollToTop />
      <NavigationBar />

      <Routes>
      <Route path="/" element={<Navigate replace to="/LandingPage" />} />
        <Route path="/LandingPage" element={<LandingPage />}>
        </Route>
        <Route path="/Impressum" element={<Impressum />} />
        <Route path="/DataSafety" element={<DataSafety />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routing;
