import { useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderComponent() {
  return (
    <header>
      <Link to="/">
        <img src="/avatar_small.jpg" alt="profile photo" />
        <span>Andy Ryan</span>
      </Link>
      <div className="header-links">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </header>
  );
}
