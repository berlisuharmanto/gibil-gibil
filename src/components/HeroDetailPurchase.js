import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import formatK from "./actions/kFormatter";
import "./HeroDetailPurchase.css";

function HeroDetailPurchase({ item, specs }) {
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
              <p>{specs[0]}</p>
              <p>{specs[1]}</p>
              <p>{specs[2]}</p>
              <p>{specs[3]}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroDetailPurchase;
