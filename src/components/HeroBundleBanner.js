import React from "react";
import "./HeroBundleBanner.css";

function HeroBundleBanner({ title, desc01, desc02 }) {
  return (
    <>
      <div className="hero_bundle_banner_container">
        <div className="text-wrapper">
          <b>{title}</b>
          <p>{desc01}</p>
          <p>{desc02}</p>
        </div>
      </div>
    </>
  );
}

export default HeroBundleBanner;
