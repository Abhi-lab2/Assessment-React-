import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

export const Navbar = () => {
  return (
    <div className="navbar-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          PROPER
          <img
            src="https://www.applemobility.hk/wp-content/uploads/2016/02/HKM-Logo.png"
            alt=""
            width="80px"
            height="40px"
          />
          {/* <span>
            <img
              src="https://static.vecteezy.com/system/resources/previews/002/520/838/original/apple-logo-black-isolated-on-transparent-background-free-vector.jpg"
              alt="apple logo"
              width="50px"
              height="40px"
            />
          </span> */}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only"></span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                Cart
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link " to="/service">
                Service
              </a>
            </li> */}
          </ul>
        </div>
        <div className="logos">
          <img
            src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-shopping-bag-icon-png-image_695741.jpg"
            alt=""
            width="40px"
            height="40px"
          />
        </div>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Login">
            Login
          </NavLink>
        </li>
      </nav>
    </div>
  );
};
