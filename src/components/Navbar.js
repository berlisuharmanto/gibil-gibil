import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Modal from "react-modal";

function Navbar() {
  const location = useLocation();

  const name = localStorage.getItem("name");

  console.log(location.pathname);

  const [loading, setLoading] = useState(true);

  const [login, setLogin] = useState(localStorage.getItem("token"));

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    fetchUser();
    setLoading(false);
    setLogin(localStorage.getItem("token"));
  }, [localStorage.getItem("token")]);

  const requestOptions = {
    method: "GET",
  };

  const [user, setUser] = useState({});

  const fetchUser = async () => {
    const data = await fetch(
      `https://gibil-server.herokuapp.com/api/v1/user/${localStorage.getItem(
        "id"
      )}`,
      requestOptions
    );
    const userData = await data.json();
    setUser(userData.user);
  };

  const customStyles = {
    content: {
      position: "fixed",
      display: "flex",
      flexDirection: "column",
      top: "8%",
      left: "80%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      transform: "rotate(360deg)",
      zIndex: "2",
    },
    overlay: { background: "none" },
  };

  if (location.pathname === "/signin" || location.pathname === "/signup") {
    return null;
  }

  if (loading) {
    return (
      <div className="loading">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  } else if (!login && !loading) {
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
                  <Link className="icon" to="/signin">
                    <img src={process.env.PUBLIC_URL + "images/cart.svg"} />{" "}
                  </Link>
                </li>
                <li>
                  <Link className="icon" to="/signin">
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
  } else if (user.isAdmin == true && !loading) {
    return (
      <>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Link
            to="/adminproducts"
            onClick={closeModal}
            style={{ padding: "5px", color: "#000" }}
          >
            <h3>Product</h3>
          </Link>
          <Link
            to="/adminarticles"
            onClick={closeModal}
            style={{ padding: "5px", color: "#000" }}
          >
            <h3>Article</h3>
          </Link>
        </Modal>
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
                <li
                  className="nav-button"
                  style={{ height: "30px", width: "30px" }}
                >
                  <button
                    className="button-links"
                    onClick={openModal}
                    style={{
                      color: "#5d5fef",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      style={{ height: "24px", width: "24px" }}
                      src={process.env.PUBLIC_URL + "images/admin.svg"}
                    />{" "}
                  </button>
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
