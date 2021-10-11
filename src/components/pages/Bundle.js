import React from "react";
import HeroBundleBanner from "../HeroBundleBanner";
import HeroCard from "../HeroCard";
import { bundleBanner, bundleCard } from "./Data";

function Bundle() {
  return (
    <>
      <HeroBundleBanner {...bundleBanner} />
      <HeroCard {...bundleCard} />
    </>
  );
}

export default Bundle;
