import React from "react";
import "./HeroCarousel.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

function HeroCarousel({ img01, desc01 }) {
  return (
    <>
      <div className="hero_carousel_container-01">
        <div className="hero_carousel_container-02">
          <Carousel autoPlay>
            <div>
              <Link to="/article" className="img-container">
                <img src={img01} alt={img01} />
                <div className="img-hover">{desc01}</div>
              </Link>
            </div>
            <div>
              <Link to="/article" className="img-container">
                <img src={img01} alt={img01} />
                <div className="img-hover">{desc01}</div>
              </Link>
            </div>
            <div>
              <Link to="/article" className="img-container">
                <img src={img01} alt={img01} />
                <div className="img-hover">{desc01}</div>
              </Link>
            </div>
            <div>
              <Link to="/article" className="img-container">
                <img src={img01} alt={img01} />
                <div className="img-hover">{desc01}</div>
              </Link>
            </div>
            <div>
              <Link to="/article" className="img-container">
                <img src={img01} alt={img01} />
                <div className="img-hover">{desc01}</div>
              </Link>
            </div>
            <div>
              <Link to="/article" className="img-container">
                <img src={img01} alt={img01} />
                <div className="img-hover">{desc01}</div>
              </Link>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default HeroCarousel;
