import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function navbar() {
  const isLoaded = true;
  if (window.location.pathname.match("/signin")) {
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
                  to="/home"
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

export default navbar;
