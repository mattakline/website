import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<div className="h-screen overflow-hidden"><Hero /></div>} />
        <Route path="/work" element={<div className="min-h-screen overflow-auto"><Work /></div>} />
        <Route path="/clients" element={<div className="min-h-screen overflow-auto"><Clients /></div>} />
        <Route path="/contact" element={<div className="h-screen overflow-hidden"><Contact /></div>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;