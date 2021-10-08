import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import "./HeroSlider.css";

function HeroSlider({
  header,
  img01,
  img02,
  img03,
  img04,
  desc01,
  desc02,
  desc03,
  desc04,
}) {
  return (
    <>
      <div className="hero_slider_group">
        <div className="hero_slider_container">
          <div className="hero_slider_header">{header}</div>
          <Carousel>
            <div className="hero_slider_list">
              <Link to="/article" className="img-container">
                <img src={img01} alt={img01} />
                <div className="img-hover">{desc01}</div>
              </Link>
              <Link to="/article" className="img-container">
                <img src={img02} alt={img02} />
                <div className="img-hover">{desc02}</div>
              </Link>
              <Link to="/article" className="img-container">
                <img src={img03} alt={img03} />
                <div className="img-hover">{desc03}</div>
              </Link>
              <Link to="/article" className="img-container">
                <img src={img04} alt={img04} />
                <div className="img-hover">{desc04}</div>
              </Link>
            </div>
            <div className="hero_slider_list">
              <Link to="/article" className="img-container">
                <img src={img01} alt={img01} />
                <div className="img-hover">{desc01}</div>
              </Link>
              <Link to="/article" className="img-container">
                <img src={img02} alt={img02} />
                <div className="img-hover">{desc02}</div>
              </Link>
              <Link to="/article" className="img-container">
                <img src={img03} alt={img03} />
                <div className="img-hover">{desc03}</div>
              </Link>
              <Link to="/article" className="img-container">
                <img src={img04} alt={img04} />
                <div className="img-hover">{desc04}</div>
              </Link>
            </div>
            <div className="hero_slider_list">
              <Link to="/article" className="img-container">
                <img src={img01} alt={img01} />
                <div className="img-hover">{desc01}</div>
              </Link>
              <Link to="/article" className="img-container">
                <img src={img02} alt={img02} />
                <div className="img-hover">{desc02}</div>
              </Link>
              <Link to="/article" className="img-container">
                <img src={img03} alt={img03} />
                <div className="img-hover">{desc03}</div>
              </Link>
              <Link to="/article" className="img-container">
                <img src={img04} alt={img04} />
                <div className="img-hover">{desc04}</div>
              </Link>
            </div>
            <div className="hero_slider_list">
              <Link to="/article" className="img-container">
                <img src={img01} alt={img01} />
                <div className="img-hover">{desc01}</div>
              </Link>
              <Link to="/article" className="img-container">
                <img src={img02} alt={img02} />
                <div className="img-hover">{desc02}</div>
              </Link>
              <Link to="/article" className="img-container">
                <img src={img03} alt={img03} />
                <div className="img-hover">{desc03}</div>
              </Link>
              <Link to="/article" className="img-container">
                <img src={img04} alt={img04} />
                <div className="img-hover">{desc04}</div>
              </Link>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default HeroSlider;
