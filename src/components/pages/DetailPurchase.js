import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import HeroDetailPurchase from "../HeroDetailPurchase";
import HeroRecomendation from "../HeroRecomendation";
import HeroVariation from "../HeroVariation";
import { variation } from "./Data";

function DetailPurchase() {
  return (
    <>
      <HeroDetailPurchase />
      <HeroVariation {...variation} />
      <HeroRecomendation />
    </>
  );
}

export default DetailPurchase;
