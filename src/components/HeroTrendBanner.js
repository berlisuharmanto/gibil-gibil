import React from "react";
import "./HeroTrendBanner.css";

function HeroBanner({ title, desc }) {
  return (
    <>
      <div className="test">
        <div className="hero_banner_container">
          <div className="hero_banner_row">
            <div className="text-wrapper">
              <b>{title}</b>
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
