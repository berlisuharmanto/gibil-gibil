import React from "react";
import { Link } from "react-router-dom";
import "./HeroAside.css";

function HeroAside({ title, img01, img02, img03, img04, img05 }) {
  return (
    <>
      <div className="hero_aside_main">
        <div className="hero_aside_title">
          <h1>{title}</h1>
        </div>
        <div className="hero_aside_content">
          <Link className="hero_article_card" to="/article">
            <img src={img01} alt={img01} />
            <div className="text-wrapper">
              <p>Lorem ipsum</p>
            </div>
          </Link>
          <Link className="hero_article_card" to="/article">
            <img src={img02} alt={img02} />
            <div className="text-wrapper">
              <p>Lorem ipsum</p>
            </div>
          </Link>
          <Link className="hero_article_card" to="/article">
            <img src={img03} alt={img03} />
            <div className="text-wrapper">
              <p>Lorem ipsum</p>
            </div>
          </Link>
          <Link className="hero_article_card" to="/article">
            <img src={img04} alt={img04} />
            <div className="text-wrapper">
              <p>Lorem ipsum</p>
            </div>
          </Link>
          <Link className="hero_article_card" to="/article">
            <img src={img05} alt={img05} />
            <div className="text-wrapper">
              <p>Lorem ipsum</p>
            </div>
          </Link>
          <Link className="hero_article_card" to="/article">
            <img src={img01} alt={img01} />
            <div className="text-wrapper">
              <p>Lorem ipsum</p>
            </div>
          </Link>
          <Link className="hero_article_card" to="/article">
            <img src={img02} alt={img02} />
            <div className="text-wrapper">
              <p>Lorem ipsum</p>
            </div>
          </Link>
          <Link className="hero_article_card" to="/article">
            <img src={img03} alt={img03} />
            <div className="text-wrapper">
              <p>Lorem ipsum</p>
            </div>
          </Link>
          <Link className="hero_article_card" to="/article">
            <img src={img04} alt={img04} />
            <div className="text-wrapper">
              <p>Lorem ipsum</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HeroAside;
