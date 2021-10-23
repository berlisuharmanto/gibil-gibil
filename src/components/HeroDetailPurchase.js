import React, { useEffect, useState } from "react";
import formatK from "./actions/kFormatter";
import "./HeroDetailPurchase.css";

function HeroDetailPurchase({ item }) {
  return (
    <>
      <div className="hero_detail_purchase_main">
        <div className="detail_left_container">
          <img src={item?.prodImage} alt="product image" />
        </div>
        <div className="detail_right_container">
          <div className="detail_right_main">
            <div className="text-wrapper">
              <h2>{item?.name}</h2>
              <h2>Rp. {item?.price ? formatK(item?.price) : 0}</h2>
              <p>{item?.prodDesc}</p>
              <h3>Features</h3>
              <p>{item?.prodSpec[0]}</p>
              <p>{item?.prodSpec[1]}</p>
              <p>{item?.prodSpec[2]}</p>
              <p>{item?.prodSpec[3]}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroDetailPurchase;
