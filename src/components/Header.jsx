import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="sm:flex bg-transparent items-center sticky z-20">
      <div className="ml-4 sm:ml-[40px] md:ml-[74px] mt-4 sm:mt-0 sm:py-2 flex items-center">
        {/* Logo */}
        <h1 className="font-tradegothic uppercase text-xs">
          <NavLink to="/" className="font-tradegothic uppercase text-xs whitespace-nowrap">
          M KLINE
          </NavLink>
        </h1>
      </div>
      <div className="flex sm:py-4 w-full">
        {/* Navigation */}
        <nav className="ml-4 sm:ml-[40px] md:ml-[80px] top-4 flex items-center">
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