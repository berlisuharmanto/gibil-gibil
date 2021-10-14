import React from "react";
import { Link } from "react-router-dom";
import "./HeroRecommendation.css";

function HeroReccomendation({
  img1,
  img2,
  img3,
  img4,
  img5,
  title1,
  title2,
  title3,
  title4,
  title5,
  price1,
  price2,
  price3,
  price4,
  price5,
}) {
  return (
    <>
      <div className="hero_recommendation_main">
        <div className="rec_content">
          <h1>Recommendation</h1>
          <div className="card_layout">
            <Link to="/" className="card_content">
              <div className="img_container">
                <img src={img1} alt={img1} />
              </div>
              <p>{title1}</p>
              <p>{price1}</p>
            </Link>
            <Link to="/" className="card_content">
              <div className="img_container">
                <img src={img2} alt={img2} />
              </div>
              <p>{title2}</p>
              <p>{price2}</p>
            </Link>
            <Link to="/" className="card_content">
              <div className="img_container">
                <img src={img3} alt={img3} />
              </div>
              <p>{title3}</p>
              <p>{price3}</p>
            </Link>
            <Link to="/" className="card_content">
              <div className="img_container">
                <img src={img4} alt={img4} />
              </div>
              <p>{title4}</p>
              <p>{price4}</p>
            </Link>
            <Link to="/" className="card_content">
              <div className="img_container">
                <img src={img5} alt={img5} />
              </div>
              <p>{title5}</p>
              <p>{price5}</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroReccomendation;
