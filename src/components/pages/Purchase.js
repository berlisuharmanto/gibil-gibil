import React from "react";
import HeroPurchase from "../HeroPurchase";
import HeroPurchaseBanner from "../HeroPurchaseBanner";
import { accessories, medias, purchaseBanner } from "./Data";

function Purchase() {
  return (
    <>
      <HeroPurchaseBanner {...purchaseBanner} />
      <HeroPurchase {...accessories} />
      <HeroPurchase {...medias} />
    </>
  );
}

export default Purchase;
