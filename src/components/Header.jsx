import React from "react";

const Header = ({ onNavigate }) => {
  return (
    <header className="flex bg-white sticky top-0 z-20">
      <div className="flex items-center py-4" style={{ marginLeft: "60px"}}>
        {/* Logo */}
        <h1 className="font-tradegothic uppercase text-xs" style={{marginRight:"76px" }}>
          <button
            onClick={() => onNavigate(0)}
            className="font-tradegothic uppercase text-xs"
          >
            The Factory
          </button>
        </h1>
    </div>
    <div className="flex items-center py-4">
        {/* Navigation */}
        <nav className="md:flex hidden">
          <ul className="flex gap-x-6 items-center">
            <li>
              <button
                onClick={() => onNavigate(1)}
                className="font-tradegothic uppercase py-2 text-xs hover:underline"
              >
                SELECTED WORK
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate(2)}
                className="font-tradegothic uppercase py-2 text-xs hover:underline"
              >
                CLIENTS
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate(3)}
                className="font-tradegothic uppercase py-2 text-xs hover:underline"
              >
                CONTACT
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
