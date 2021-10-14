import React from "react";
import "./HeroPurchaseBanner.css";

function HeroPurchaseBanner({ banner }) {
  return (
    <>
      <div
        className="hero_purchase_banner_main"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      ></div>
    </>
  );
}

export default HeroPurchaseBanner;
