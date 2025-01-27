const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const container = document.getElementById("scroll-container");

    if (element && container) {
      const offsetLeft = element.offsetLeft;
      container.scrollTo({
        left: offsetLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="bg-white top-0 z-20">
      <div className="container mx-auto px-6 py-6 flex items-center">
        {/* Logo */}
        <div>
          <h1 className="font-tradegothic uppercase text-xs">
            <a href="/">parallel</a>
          </h1>
        </div>
        {/* Desktop Navigation */}
        <nav className="md:flex hidden mx-10 px-20 items-center">
          <ul className="flex gap-x-6 items-center list-none m-0 p-0">
            <li className="flex items-center">
              <button
                onClick={() => scrollToSection("hero")}
                className="font-tradegothic uppercase text-xs hover:underline"
              >
                Home
              </button>
            </li>
            <li className="flex items-center">
              <button
                onClick={() => scrollToSection("dishes")}
                className="font-tradegothic uppercase text-xs hover:underline"
              >
                Dishes
              </button>
            </li>
            <li className="flex items-center">
              <button
                onClick={() => scrollToSection("about")}
                className="font-tradegothic uppercase text-xs hover:underline"
              >
                About
              </button>
            </li>
            <li className="flex items-center">
              <button
                onClick={() => scrollToSection("contact")}
                className="font-tradegothic uppercase text-xs hover:underline"
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