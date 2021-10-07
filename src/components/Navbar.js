import React from "react";
import "./Navbar.css";

function navbar() {
  return (
    <>
      <nav>
        <div className="navbar-container">
          <div className="apalah">
            <div className="menu-icon">
              <a className="navbar-logo" href="#">
                <img src={process.env.PUBLIC_URL + "/Logo.svg"} />{" "}
              </a>
            </div>
            <ul>
              <li className="nav-item">
                <a className="nav-links" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-links" href="#">
                  Trend
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-links" href="#">
                  Bundle
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-links" href="#">
                  Purchase
                </a>
              </li>
            </ul>
          </div>

          <ul>
            <li className="nav-button">
              <a className="button-links" href="#">
                Sign In
              </a>
            </li>
            <li>
              <a className="icon" href="#">
                <img src={process.env.PUBLIC_URL + "/cart.svg"} />{" "}
              </a>
            </li>
            <li>
              <a className="icon" href="#">
                <img src={process.env.PUBLIC_URL + "/gear.svg"} />{" "}
              </a>
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
