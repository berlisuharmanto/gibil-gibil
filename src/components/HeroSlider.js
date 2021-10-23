import React from "react";
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
      <div className="hero_trend_main">
        <Link to="/article" className="hero_trend_container">
          <div className="hero_trend_content">
            <div className="hero_image">
              <img src={img01} alt="image" />
            </div>
            <div className="text-wrapper">
              <h2>Memeluk Ikan Lumba-Lumba</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                sapien sem, tristique vel molestie in, euismod eu odio. Vivamus
                vulputate ultricies feugiat. Donec tempus nunc mauris, semper
                suscipit sapien fermentum ac. Sed et semper lorem. Morbi blandit
                est a mi ullamcorper hendrerit. Ut purus nunc....
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default HeroSlider;
