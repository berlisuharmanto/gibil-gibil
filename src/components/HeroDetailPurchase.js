import React from "react";
import "./HeroDetailPurchase.css";

function HeroDetailPurchase({
  img,
  title,
  price,
  desc01,
  desc02,
  f1,
  f2,
  f3,
  f4,
  f5,
  f6,
  f7,
  f8,
}) {
  return (
    <>
      <div className="hero_detail_purchase_main">
        <div className="detail_left_container">
          <img src={img} alt={img} />
        </div>
        <div className="detail_right_container">
          <div className="detail_right_main">
            <div className="text-wrapper">
              <h2>{title}</h2>
              <h2>{price}</h2>
              <p>{desc01}</p>
              <h3>{desc02}</h3>
              <p>{f1}</p>
              <p>{f2}</p>
              <p>{f3}</p>
              <p>{f4}</p>
              <p>{f5}</p>
              <p>{f6}</p>
              <p>{f7}</p>
              <p>{f8}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroDetailPurchase;
