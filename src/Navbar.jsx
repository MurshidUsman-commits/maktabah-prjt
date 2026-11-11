import { useState } from "react";
import "./navbar.css";

const navLinks = [
  { label: "PERSONALITIES", path: "/personalities" },
  { label: "AQIDAH", path: "/aqidah" },
  { label: "MANHAJ", path: "/manhaj" },
  { label: "FIQH", path: "/fiqh" },
  { label: "ABOUT", path: "/about" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const logo = (
    <a href="/">
      <img
        className="navbar-logo-img"
        src="src\assets\maktaba-logo-light.png"
        alt="Maktabah As Sunnah Wa As Salafiyyah"
      />
    </a>
  );

  const mobileNavBar = (
    <div className={`mobile-navbar navbar`}>
      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="material-symbols-outlined">
          {menuOpen ? "close" : "menu"}
        </span>
      </button>

      {logo}

      <button type="button" className="share-button">
        SHARE
      </button>

    {menuOpen && (
      <div className="mobile-nav-links">
        {navLinks.map(({ label, path }) => (
          <div key={path}>
            <a href={path}>{label}</a>
          </div>
        ))}
      </div>
    )}

    </div>
  );

  const desktopNavbar = (
    <div className={`desktop-navbar navbar`}>
      {logo}

      <div className="nav-links">
        {navLinks.map(({ label, path }) => (
          <div key={path}>
            <a href={path}>{label}</a>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="material-symbols-outlined">
          {menuOpen ? "close" : "menu"}
        </span>
      </button>
    </div>
  );

  return (
    <div className={menuOpen ? "menu-open" : ""}>
      {mobileNavBar}
      {desktopNavbar}
    </div>
  );
}

export default Navbar;
