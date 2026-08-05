"use client";

import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      <a href="/" className="logo">
        WALRUOP
      </a>

      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <div className={`links ${open ? "active" : ""}`}>
        <a href="/">Home</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>

    </nav>
  );
}