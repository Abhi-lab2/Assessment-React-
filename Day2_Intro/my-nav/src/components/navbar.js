import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="logo">
        <strong>Mobile Co.</strong>
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="services">Services</a>
            <a href="projects">Projects</a>
            <a href="about">About</a>
          </li>
        </ul>
      </div>
      <div>
        <button>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
