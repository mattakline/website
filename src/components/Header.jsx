import React from "react";

const Header = ({ onNavigate }) => {
  return (
    <header className="bg-white sticky top-0 z-20">
      <div className="flex items-center py-6" style={{ marginLeft: "10%" }}>
        {/* Logo */}
        <h1 className="font-tradegothic uppercase text-xs mr-16">
          <button
            onClick={() => onNavigate(0)}
            className="font-tradegothic uppercase text-xs"
          >
            Parallel
          </button>
        </h1>

        {/* Navigation */}
        <nav className="md:flex hidden">
          <ul className="flex gap-x-6 items-center">
            <li>
              <button
                onClick={() => onNavigate(1)}
                className="font-tradegothic uppercase py-2 text-xs hover:underline"
              >
                SERVICES
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate(2)}
                className="font-tradegothic uppercase py-2 text-xs hover:underline"
              >
                SELECTED WORK
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate(3)}
                className="font-tradegothic uppercase py-2 text-xs hover:underline"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;