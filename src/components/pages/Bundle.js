import React from "react";
import HeroBundleBanner from "../HeroBundleBanner";
import HeroCard from "../HeroCard";
import { bundleBanner, bundleCard } from "./Data";
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
          <div className="card_row" style={{ display: "flex" }}>
            <HeroCard {...bundleCard} />
            <HeroCard {...bundleCard} />
            <HeroCard {...bundleCard} />
          </div>
          <div className="card_row" style={{ display: "flex" }}>
            <HeroCard {...bundleCard} />
            <HeroCard {...bundleCard} />
            <HeroCard {...bundleCard} />
          </div>
        </div>
      </CardMain>
    </>
  );
}

export default Bundle;
