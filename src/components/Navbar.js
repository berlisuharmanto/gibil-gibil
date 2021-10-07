import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function navbar() {
  return (
    <>
      <nav>
        <div className="navbar-container">
          <div className="apalah">
            <div className="menu-icon">
              <Link className="navbar-logo" to="/">
                <img src={process.env.PUBLIC_URL + "/Logo.svg"} />{" "}
              </Link>
            </div>
            <ul>
              <li className="nav-item">
                <Link className="nav-links" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-links" to="/">
                  Trend
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-links" to="/">
                  Bundle
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-links" to="/">
                  Purchase
                </Link>
              </li>
            </ul>
          </div>

          <ul>
            <li className="nav-button">
              <Link className="button-links" to="/">
                Sign In
              </Link>
            </li>
            <li>
              <Link className="icon" to="/">
                <img src={process.env.PUBLIC_URL + "/cart.svg"} />{" "}
              </Link>
            </li>
            <li>
              <Link className="icon" to="/">
                <img src={process.env.PUBLIC_URL + "/gear.svg"} />{" "}
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
