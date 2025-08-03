import { useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderComponent() {
  return (
    <>
      <header>
        <Link to="/">
          <img src="/avatar_small.jpg" alt="profile photo" />
          <span>Andy Ryan</span>
        </Link>
        <span>
          Crafting websites that are | simple | functional | beautiful
        </span>
        <div className="header-links">
          <div>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <div className="background"></div>
          </div>
          <div>
            <a
              href="https://github.com/aRav3n"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="my GitHub"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a
              href="https://www.linkedin.com/in/andrew-ryan-/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="my LinkedIn"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a
              href="https://www.instagram.com/4funnervibes/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="my Instagram"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <div className="background"></div>
          </div>
        </div>
      </header>
    </>
  );
}
