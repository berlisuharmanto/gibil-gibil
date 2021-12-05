import React from "react";
import { Link, useLocation } from "react-router-dom";
import useLoading from "./actions/useLoading";
import "./Footer.css";

function Footer() {
  const location = useLocation();

  const loadingPage = useLoading();

  if (loadingPage) {
    return null;
  } else if (location.pathname === "/signup") {
    return null;
  }

  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="col col-01">
            <ul>
              <li>
                <Link to="/" className="footer-links">
                  <b>Gibil - Gibil</b>
                </Link>
              </li>
              <li>
                <div className="text-wrapper">
                  <p>Aquarium E - Commerce in Indonesia</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col col-02">
            <ul>
              <li>
                <b>Follow</b>
              </li>
              <li>
                <Link to="/" className="footer-links">
                  Twitter
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-links">
                  Facebook
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-links">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
          <div className="col col-03">
            <ul>
              <li>
                <b>Location</b>
              </li>
              <li>
                <div className="text-wrapper">
                  <p>Jl. Suharmanto Abadi No. 69</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col col-05">
            <ul>
              <li>
                <b>Explore</b>
              </li>
              <li>
                <Link to="/" className="footer-links">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/trend" className="footer-links">
                  Trend
                </Link>
              </li>
              <li>
                <Link to="/purchase" className="footer-links">
                  Purchase
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col col-06">@ 2021 Gibil-Gibil & Co. PT. Persero</div>
      </footer>
    </>
  );
}

export default Footer;
