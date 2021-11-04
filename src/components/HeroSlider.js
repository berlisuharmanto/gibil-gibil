import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import "./HeroSlider.css";

function HeroSlider({ item }) {
  return (
    <>
      <div className="hero_trend_main">
        {item.map((item) => (
          <Link
            to={`/trend/${item._id}`}
            className="hero_trend_container"
            key={item._id}
          >
            <div className="hero_trend_content">
              <div className="hero_image">
                <img src={item.img[0]} alt="article image" />
              </div>
              <div className="text-wrapper">
                <h2>{item.title}</h2>
                <p>{item.preview}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default HeroSlider;
