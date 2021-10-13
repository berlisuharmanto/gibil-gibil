import React from "react";
import HeroDetailPurchase from "../HeroDetailPurchase";
import HeroReccomendation from "../HeroReccomendation";
import HeroVariation from "../HeroVariation";
import { detailPurchase, recommendation, variation } from "./Data";

function DetailPurchase() {
  return (
    <>
      <HeroDetailPurchase {...detailPurchase} />
      <HeroVariation {...variation} />
      <HeroReccomendation {...recommendation} />
    </>
  );
}

export default DetailPurchase;
