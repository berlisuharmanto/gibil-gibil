import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="col col-01">
          <ul>
            <li>
              <a href="#" className="footer-links">
                <b>Gibil - Gibil</b>
              </a>
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
              <a href="#" className="footer-links">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="footer-links">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="footer-links">
                Instagram
              </a>
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
        <div className="col col-04">
          <ul>
            <li>
              <b>Legal</b>
            </li>
            <li>
              <a href="#" className="footer-links">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="footer-links">
                Privacy
              </a>
            </li>
          </ul>
        </div>
        <div className="col col-05">
          <ul>
            <li>
              <b>Explore</b>
            </li>
            <li>
              <a href="#" className="footer-links">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="footer-links">
                Trend
              </a>
            </li>
            <li>
              <a href="#" className="footer-links">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="col col-06">@ 2021 Gibil-Gibil & Co. PT. Persero</div>
      </footer>
    </>
  );
}

export default Footer;
