import React from "react";
import { Link } from "react-router-dom";
import formatK from "./actions/kFormatter";
import "./HeroRecommendation.css";

function HeroRecomendation({ items }) {
  return (
    <>
      <div className="hero_recommendation_main">
        <div className="rec_content">
          <h1>Recommendation</h1>
          <div className="card_layout">
            {items.map((item) => (
              <Link
                key={item._id}
                to={`/purchase/${item._id}`}
                className="card_content"
              >
                <div className="img_container">
                  <img src={item.prodImage} alt="item image" />
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
