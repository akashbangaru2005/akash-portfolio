import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Achievements", "achievements"],
  ["Resume", "resume"],
  ["Contact", "contact"],
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        <button
          className="logo"
          onClick={() => goTo("home")}
        >
          AK<span>ASH</span>
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => goTo(id)}
            >
              {label}
            </button>
          ))}
        </div>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;