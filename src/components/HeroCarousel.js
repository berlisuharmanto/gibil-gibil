import React from "react";
import "./HeroCarousel.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

function HeroCarousel({ item }) {
  return (
    <>
      <div className="hero_carousel_container-01">
        <div className="hero_carousel_container-02">
          <Carousel autoPlay>
            {item.map((item) => (
              <div>
                <Link to="/trend/:id" className="img-container" key={item._id}>
                  <img src={item?.img} alt="article image" />
                  <div className="img-hover">{item?.title}</div>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default HeroCarousel;
