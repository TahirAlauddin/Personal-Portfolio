import { useState } from "react";
import myLogo from "../../public/assets/img/logo-removebg.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const [selected, setSelected] = useState("home");

  const handleMenuItemClick = (item: string) => {
    setSelected(item);
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="sm:max-w-[90%] container px-0">
        <div className="logo">
          <img src={myLogo} alt="Tech Hoseki" />
        </div>
        <div
          className={`menu mt-[0] md:mt-0 pl-[23px] ${menuOpen ? "open" : ""}`}
        >
          <a
            href="/"
            className={`w-full text-left menu-item ${
              selected === "home" ? "selected" : ""
            }`}
            onClick={() => handleMenuItemClick("home")}
          >
            Home
          </a>
          <a
            href="#about"
            className={`w-full text-left menu-item ${
              selected === "about" ? "selected" : ""
            }`}
            onClick={() => handleMenuItemClick("about")}
          >
            About
          </a>
          <a
            href="/portfolio"
            className={`w-full text-left menu-item ${
              selected === "portfolio" ? "selected" : ""
            }`}
            onClick={() => handleMenuItemClick("portfolio")}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className={`w-full text-left menu-item ${
              selected === "contact" ? "selected" : ""
            }`}
            onClick={() => handleMenuItemClick("contact")}
          >
            Contact
          </a>
          <a href="https://wa.me/923233428060" className={`hire-me`}>
            Whatsapp
          </a>
        </div>
        <button
          className="menu-toggle z-1"
          onClick={handleMenuToggle}
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          {menuOpen ? (
            <svg
              className="logo-icon"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="logo-icon"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
