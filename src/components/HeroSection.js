import React from "react";

function HeroSection({ homeTitle01, homeDesc01, homeTitle02, homeDesc02 }) {
  return (
    <>
      <div className="home_hero row">
        <div className="col col-01">
          <div className="text-wrapper">
            <b>{homeTitle01}</b>
            <p>{homeDesc01}</p>
          </div>
        </div>

        <div className="col col-02">
          <img src={process.env.PUBLIC_URL + "/cupang.png"} />{" "}
          <div className="text-wrapper">
            <b>{homeTitle02}</b>
            <p>{homeDesc02}</p>
            <a href="#" className="button">
              Explore
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
