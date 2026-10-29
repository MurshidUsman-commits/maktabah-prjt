import { useState } from "react";

const navLinks = [
  { name: "PERSONALITIES", path: "/personalities" },
  { name: "AQIDAH", path: "/aqidah" },
  { name: "MANHAJ", path: "/manhaj" },
  { name: "FIQH", path: "/fiqh" },
  { name: "ABOUT", path: "/about" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
        <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <a href="/" className="navbar-logo">
        <img
          src="src\assets\maktaba-logo-light.png"
          alt="Maktabah As Sunnah Wa As Salafiyyah"
        />
      </a>

      <ul className="nav-links">
        {navLinks.map(({ name, path }) => (
          <li key={path}>
            <a href={path}>{name}</a>
          </li>
        ))}
      </ul>

      <button type="button" className="share-button">
        SHARE
      </button>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen( !menuOpen)}
      >
        <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
      </button>
    </nav>
    </div>
  );
}

export default Navbar;
