import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Howtoplay from "./components/Howtoplay";
import FantasyPoint from "./components/FantasyPoint";
import Contact from "./components/Contact";
import ScrollToTopButton from "./ScrollToTopButton";
import TermCondition from "./components/TermCondition";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Howtoplay" element={<Howtoplay />} />
        <Route path="/FantasyPoint" element={<FantasyPoint />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/TermCondition" element={<TermCondition />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <ScrollToTopButton/>
    </Router>
  );
}

export default App;
