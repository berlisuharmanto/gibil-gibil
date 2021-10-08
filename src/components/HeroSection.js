import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

function HeroSection({ homeTitle01, homeDesc01, homeTitle02, homeDesc02 }) {
  return (
    <>
      <div className="hero home_hero_row-01">
        <div className="home_hero_col-01">
          <div className="text-wrapper">
            <b>{homeTitle01}</b>
            <p>{homeDesc01}</p>
          </div>
        </div>
      </div>
      <div className="hero home_hero_row-02">
        <div className="home_hero_blank"></div>
        <div className="home_hero_col-02">
          <img src={process.env.PUBLIC_URL + "images/cupang.png"} />{" "}
          <div className="text-wrapper">
            <b>{homeTitle02}</b>
            <p>{homeDesc02}</p>
            <Link to="/" className="button">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
