
import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/style.css";
import "../Js/custom.js";

import headerLogo from "../images/Logo copy 1.png";
import headerIcon1 from "../images/Layer 2.png";
import headerIcon2 from "../images/Vector.png";
import headerIcon3 from "../images/Vector (1).png";
import headerIcon4 from "../images/Vector (2).png";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg header">
        <div className="container bg-transparent d-flex">
          <NavLink to="/" className="navbar-brand">
            <img src={headerLogo} alt="LogoImg" />
          </NavLink>
          <span className="d-flex d-lg-none d-block iconform">
            <NavLink to="/">
              <img src={headerIcon1} alt="icons" className="hIcons" />
            </NavLink>
            <NavLink to="/">
              <img src={headerIcon2} alt="icons" className="hIcons" />
            </NavLink>
            <NavLink to="/payment">
              <img src={headerIcon3} alt="icons" className="hIcons" />
            </NavLink>
            <NavLink to="/profile">
              <img src={headerIcon4} alt="icons" className="hIcons" />
            </NavLink>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse NavItems" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 NavListItems list-unstyled">
              <li className="nav-item ms-2 ms-md-0">
                <NavLink
                  to="/"
                  className="nav-link"
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item ms-2 ms-md-0">
                <NavLink
                  to="/about"
                  className="nav-link"
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item ms-2 ms-md-0">
                <NavLink
                  to="/category"
                  className="nav-link"
                 
                >
                  CATEGORY
                </NavLink>
              </li>
              <li className="nav-item ms-2 ms-md-0">
                <NavLink
                  to="/combos"
                  className="nav-link"
                  
                >
                  COMBOS
                </NavLink>
              </li>
              <li className="nav-item ms-2 ms-md-0">
                <NavLink
                  to="/gifts"
                  className="nav-link"
                >
                  GIFTS
                </NavLink>
              </li>
            </ul>
          </div>
          <span className="d-flex iconform d-lg-block d-none">
            <NavLink to="/">
              <button className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-search hIcons"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </button>
            </NavLink>
            <NavLink to="/">
              <button className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-geo-alt-fill hIcons"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
              </button>
            </NavLink>
            <NavLink to="/payment">
              <button className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-cart3 hIcons"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0-2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
              </button>
            </NavLink>
            <NavLink to="/profile">
              <button className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-person hIcons"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
                </svg>
              </button>
            </NavLink>
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
