import React from "react";
import { Link } from "react-router-dom";
import "./HeroAside.css";

function HeroAside({ title, item }) {
  return (
    <>
      <div className="hero_aside_main">
        <div className="hero_aside_title">
          <h1>{title}</h1>
        </div>
        <div className="hero_aside_content">
          {item.map((item) => (
            <Link className="hero_article_card" to="/article" key={item._id}>
              <img src={item.img[0]} alt={item.img[0]} />
              <div className="text-wrapper">
                <p>{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default HeroAside;
