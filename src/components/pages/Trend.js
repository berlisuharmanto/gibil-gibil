import React from "react";
import HeroTrendBanner from "../HeroTrendBanner";
import HeroSlider from "../HeroSlider";
import { trendBanner, trendCarousel, trendObjThree, trendObjTwo } from "./Data";
import HeroCarousel from "../HeroCarousel";

function Trend() {
  return (
    <div>
      <HeroTrendBanner {...trendBanner} />
      <HeroCarousel {...trendCarousel} />
      <HeroSlider {...trendObjTwo} />
      <HeroSlider {...trendObjThree} />
    </div>
  );
}

export default Trend;
