import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNavigate = (pageIndex) => {
    setCurrentPage(pageIndex); // Update the current page
  };

  const pages = [
    <Hero key="hero" />,
    <Services key="services" />,
    <Portfolio key="work" />,
    <Contact key="contact" />,
  ];

  return (
    <div>
      {/* Pass handleNavigate to Header */}
      <Header onNavigate={handleNavigate} />
      <div className="relative w-screen h-screen overflow-hidden">
        {/* Pages Container */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {pages.map((Page, index) => (
            <div key={index} className="w-screen h-screen flex-shrink-0">
              {Page}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;