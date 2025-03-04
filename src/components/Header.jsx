import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/"; // Check if on root page

  return (
    <header className="flex bg-transparent items-center sticky z-20 mt-2 mb-2 sm:mt-2 h-[50px]">
      <div className="ml-4 sm:ml-[40px] md:ml-[45px] flex items-center h-full">
        {/* Logo */}
        <h1 className={`font-nunito uppercase text-xs ${isHome ? "text-white" : "text-black"}`}>
          <NavLink to="/" className="font-nunito uppercase text-xs whitespace-nowrap">
            MATT KLINE
          </NavLink>
        </h1>
      </div>
      <div className="flex w-full">
        {/* Navigation */}
        <nav className="mr-4 ml-auto sm:ml-[54px] md:ml-[70px] flex items-center h-full">
          <ul className="flex gap-x-6 items-center h-full group">
            {["work", "clients", "bio"].map((item) => (
              <li key={item} className="flex items-center h-full">
                <NavLink
                  to={`/${item}`}
                  className={({ isActive }) =>
                    `font-nunito uppercase text-xs px-2 flex items-center transition-all duration-200 ${isHome ? "text-white" : "text-black"}
                    ${isActive ? "text-black" : "hover:text-black"}
                    group-hover:opacity-30 hover:!opacity-100`
                  }
                >
                  {item.toUpperCase()}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;