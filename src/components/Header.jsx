import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex bg-transparent items-center sticky z-20 mt-4 sm:mt-4">
      <div className="ml-4 sm:ml-[40px] md:ml-[45px] sm:py-2 flex items-center">
        {/* Logo */}
        <h1 className="font-tradegothic uppercase text-xs">
          <NavLink to="/" className="font-tradegothic uppercase text-xs whitespace-nowrap">
            M KLINE
          </NavLink>
        </h1>
      </div>
      <div className="flex w-full">
        {/* Navigation: push to right on mobile */}
        <nav className="mr-4 ml-auto sm:ml-[74px] md:ml-[108px] flex items-center">
          <ul className="flex gap-x-6 items-center">
            <li className="flex items-center">
              <NavLink
                to="/work"
                className={({ isActive }) =>
                  `font-tradegothic uppercase text-xs whitespace-nowrap hover:underline ${isActive ? "underline" : ""}`
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
      </div>
    </header>
  );
};

export default Header;