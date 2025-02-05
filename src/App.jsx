import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNavigate = (pageIndex) => {
    setCurrentPage(pageIndex); // Update the current page
  };

  const pages = [
    { component: <Hero />, key: "hero" },
    { component: <Work />, key: "work" },
    { component: <Clients />, key: "clients" },
    { component: <Contact />, key: "contact" },
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
          {pages.map(({ component, key }) => (
            <div key={key} className="w-screen h-screen flex-shrink-0">
              {component}
            </div>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
