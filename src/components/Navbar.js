import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  console.log(location.pathname);

  if (location.pathname === "/signin" || location.pathname === "/signup") {
    return null;
  }
  return (
    <>
      <nav>
        <div className="navbar-container">
          <div className="nav-con">
            <div className="menu-icon">
              <NavLink className="navbar-logo" to="/">
                <img src={process.env.PUBLIC_URL + "/Logo.svg"} />{" "}
              </NavLink>
            </div>
            <ul>
              <li className="nav-item">
                <NavLink
                  className="nav-links"
                  activeClassName="main-nav-active"
                  exact
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-links"
                  activeClassName="main-nav-active"
                  to="/trend"
                >
                  Trend
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-links"
                  activeClassName="main-nav-active"
                  to="/bundle"
                >
                  Bundle
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-links"
                  activeClassName="main-nav-active"
                  to="/purchase"
                >
                  Purchase
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="nav_right_container">
            <ul>
              <li className="nav-button">
                <Link className="button-links" to="/signin">
                  Sign In
                </Link>
              </li>
              <li>
                <Link className="icon" to="/cart">
                  <img src={process.env.PUBLIC_URL + "images/cart.svg"} />{" "}
                </Link>
              </li>
              <li>
                <Link className="icon" to="/">
                  <img src={process.env.PUBLIC_URL + "images/gear.svg"} />{" "}
                </Link>
              </li>
            </ul>
          </div>
          <div className="menu-toggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
