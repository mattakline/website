import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const leftPositionForMobileMenu = isOpen ? "left-0" : "left-[-150%]";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return (
    // Add sticky
    <header className="bg-white top-0 z-20">
      <div className="container mx-auto px-6 py-6 flex items-center">
        {/* Logo */}
        <div>
          <h1 className="font-tradegothic uppercase text-xs">
            <a href='/'>
            parallel
            </a>
          </h1>
        </div>
        {/* Desktop Navigation */}
        <nav className="md:flex hidden mx-10 px-20 items-center">
        <ul className="flex gap-x-6 items-center list-none m-0 p-0">
            <li className="flex items-center">
            <a className="font-tradegothic uppercase text-xs hover:underline" href="#menu">
                Selected work
              </a>
            </li>
            <li className="flex items-center">
            <a className="font-tradegothic uppercase text-xs hover:underline" href="#about">
                Creative
              </a>
            </li>
            <li className="flex items-center">
            <a className="font-tradegothic uppercase text-xs hover:underline" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        {!isOpen && (
          <div
            onClick={() => setIsOpen(true)}
            className="flex md:hidden cursor-pointer ml-auto"
          >
            <GiHamburgerMenu size={30} />
          </div>
        )}

        {/* Close Menu Icon */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="flex md:hidden z-50 cursor-pointer ml-auto"
          >
            <IoClose size={30} />
          </div>
        )}

        {/* Mobile Navigation */}
        <div
          className={`fixed z-40 top-0 ${leftPositionForMobileMenu} h-screen w-screen duration-1000 bg-black/50 overflow-y-auto`}
        >
          <div className="bg-blue-900 w-[80%] flex justify-center items-center min-h-screen overflow-y-auto py-3 flex-col gap-4">
            <nav>
              <ul className="flex flex-col gap-y-4 justify-center items-center text-white">
                <li onClick={() => setIsOpen(false)}>
                  <a className="hover:text-blue-500" href="#home">
                    Home
                  </a>
                </li>
                <li onClick={() => setIsOpen(false)}>
                  <a className="hover:text-blue-500" href="#menu">
                    Menu
                  </a>
                </li>
                <li onClick={() => setIsOpen(false)}>
                  <a className="hover:text-blue-500" href="#about">
                    About
                  </a>
                </li>
                <li onClick={() => setIsOpen(false)}>
                  <a className="hover:text-blue-500" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;