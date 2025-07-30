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
          I build websites that are simple, functional, and beautiful.
        </span>
        <div className="header-links">
          <div>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <Link to="https://github.com/aRav3n">
              <ion-icon name="logo-github"></ion-icon>
            </Link>
            <Link to="https://www.linkedin.com/in/andrew-ryan-/">
              <ion-icon name="logo-linkedin"></ion-icon>
            </Link>
            <Link to="https://www.instagram.com/4funnervibes/">
              <ion-icon name="logo-instagram"></ion-icon>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
