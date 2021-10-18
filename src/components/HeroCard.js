import React from "react";
import { Link } from "react-router-dom";
import "./HeroCard.css";

function HeroCard({
  imgSC,
  imgDA,
  imgCA,
  imgFC,
  imgFS,
  imgTC,
  title01,
  title02,
  title03,
  title04,
  title05,
  title06,
  d11,
  d12,
  d13,
  d14,
  d15,
  d16,
  d17,
  d21,
  d22,
  d23,
  d24,
  d25,
  d26,
  d27,
  d31,
  d32,
  d33,
  d34,
  d35,
  d36,
  d37,
  d41,
  d42,
  d43,
  d44,
  d45,
  d46,
  d47,
  d51,
  d52,
  d53,
  d54,
  d55,
  d56,
  d57,
  d61,
  d62,
  d63,
  d64,
  d65,
  d66,
  d67,
  bg01,
  bg02,
  bg03,
  bg04,
  bg05,
  bg06,
}) {
  return (
    <>
      <div
        className="card_col"
        style={{
          backgroundImage: `url(${bg01})`,
        }}
      >
        <div className="card_content">
          <img src={imgSC} alt={imgSC} />
          <div className="text-wrapper">
            <h2>{title01}</h2>
            <p>{d11}</p>
            <p>{d12}</p>
            <p>{d13}</p>
            <p>{d14}</p>
            <p>{d15}</p>
            <b className="available">{d16}</b>
            <b className="price">{d17}</b>
          </div>
          <Link to="/detailpurchase">Buy</Link>
        </div>
      </div>
    </>
  );
}

export default HeroCard;
