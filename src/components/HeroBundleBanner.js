import React from "react";
import "./HeroBundleBanner.css";

function HeroBundleBanner({ title, desc01, desc02, banner }) {
  return (
    <>
      <div
        className="hero_bundle_banner_container"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
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
