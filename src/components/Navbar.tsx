import { useState } from "react";

import "./Navbar.css";
interface NavbarProps {
  navigation: {
    logo: string;
    menuItems: {
      label: string;
      href: string;
      id?: string;
    }[];
  };
}

const Navbar = ({ navigation }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const [selected, setSelected] = useState(navigation.menuItems[0].href);

  const handleMenuItemClick = (item: { label: string; href: string; id?: string }) => {
    setSelected(item.href);
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="flex justify-between w-full px-0">
        <div className="logo">
          <img src={navigation.logo} alt="Tech Hoseki" />
        </div>
        <div
          className={`menu mt-[0] md:mt-0 pl-[23px] ${menuOpen ? "open" : ""}`}
        >
          {navigation.menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`w-full text-left menu-item ${
                selected === item.href ? "selected" : ""
              }`}
              onClick={() => handleMenuItemClick(item)}
            >
              {item.label}
            </a>
          ))}
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