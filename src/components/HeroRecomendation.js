import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import formatK from "./actions/kFormatter";
import "./HeroRecommendation.css";

function HeroRecomendation({ item }) {
  const { id } = useParams();

  return (
    <>
      <div className="hero_recommendation_main">
        <div className="rec_content">
          <h1>Recommendation</h1>
          <div className="card_layout">
            {item.slice(0, 5).map((item) => (
              <Link
                key={item._id}
                to={`/purchase/${item._id}`}
                className="card_content"
              >
                <div className="img_container">
                  <img
                    style={{ maxWidth: "170px" }}
                    src={item.prodImage}
                    alt="item image"
                  />
                </div>
                <p>{item.name}</p>
                <p>Rp. {item.price ? formatK(item.price) : 0}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroRecomendation;
