import React from "react";
import HeroBundleBanner from "../HeroBundleBanner";
import HeroCard from "../HeroCard";
import { bundleBanner } from "./Data";
import Styled from "styled-components";

function Bundle() {
  const CardMain = Styled.div`
  @media (max-width: 1366px) {
      margin: -160px 0;
      transform: scale(0.8);
  }
  `;

  return (
    <>
      <HeroBundleBanner {...bundleBanner} />
      <CardMain
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="hero_card_container" style={{ display: "flex" }}>
          <div
            className="card_row"
            style={{ display: "flex", flexWrap: "wrap", width: "1560px" }}
          >
            <HeroCard />
          </div>
        </div>
      </CardMain>
    </>
  );
}

export default Bundle;
