import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Work from "./components/Work";
import Showcase from "./components/Showcase";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    //This tells React Router that your app is served from /website
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/work" element={<Work />} />
        {/* New route for Showcase with a dynamic dish id */}
        <Route path="/portfolio/:id" element={<Showcase />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bio" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;