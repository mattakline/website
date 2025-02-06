import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex bg-transparent items-center sticky top-0 z-20">
      <div className="absolute left-[60px] py-2 top-4 flex items-center">
        {/* Logo */}
        <h1 className="font-tradegothic uppercase text-xs" style={{ marginRight: "102px" }}>
          <NavLink to="/" className="font-tradegothic uppercase text-xs whitespace-nowrap">
          M KLINE
          </NavLink>
        </h1>
      </div>
      <div className="flex py-4 w-full">
        {/* Navigation */}
        <nav className="absolute left-[200px] top-4 flex items-center">
          <ul className="flex gap-x-6 items-center">
            <li className="flex items-center">
              <NavLink
                to="/work"
                className={({ isActive }) =>
                  `font-tradegothic uppercase items-center text-xs whitespace-nowrap hover:underline ${isActive ? "underline" : ""}`
                }
              >
                SELECTED WORK
              </NavLink>
            </li>
            <li className="flex items-center">
              <NavLink
                to="/clients"
                className={({ isActive }) =>
                  `font-tradegothic uppercase py-2 text-xs hover:underline ${isActive ? "underline" : ""}`
                }
              >
                CLIENTS
              </NavLink>
            </li>
            <li className="flex items-center">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `font-tradegothic uppercase py-2 text-xs hover:underline ${isActive ? "underline" : ""}`
                }
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="absolute right-10 top-5 hidden min-[540px]:block">
        <img src="/images/mk-logo.png" alt="MK" className="w-6 h-auto" />
        </div>
      </div>
    </header>
  );
};

export default Header;