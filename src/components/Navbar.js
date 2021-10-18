import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  const name = localStorage.getItem("name");

  console.log(location.pathname);

  const [login, setLogin] = useState(localStorage.getItem("token"));

  useEffect(() => {
    setLogin(localStorage.getItem("token"));
  }, [localStorage.getItem("token")]);

  if (location.pathname === "/signin" || location.pathname === "/signup") {
    return null;
  }

  if (!login) {
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
                  <Link className="icon" to="/settings">
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
                <div className="button-links" style={{ color: "#5d5fef" }}>
                  {name}
                </div>
              </li>
              <li>
                <Link className="icon" to="/cart">
                  <img src={process.env.PUBLIC_URL + "images/cart.svg"} />{" "}
                </Link>
              </li>
              <li>
                <Link className="icon" to="/settings">
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
