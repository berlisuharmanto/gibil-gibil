import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./HeroSlider.css";

function HeroSlider({ item }) {
  let history = useHistory();

  const location = useLocation();

  if (location.pathname === "/adminarticles") {
    return (
      <>
        <div className="hero_trend_main">
          {item.map((item) => (
            <div className="hero_trend_container_admin" key={item._id}>
              <div className="hero_trend_content">
                <div className="hero_image">
                  <img src={item.img[0]} alt="article image" />
                </div>
                <div className="text-wrapper">
                  <h2>{item.title}</h2>
                  <p>{item.preview}</p>
                </div>
              </div>
              <div
                className="button-container"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <button>
                  <img src={process.env.PUBLIC_URL + "/images/edit.svg"} />
                </button>
                <button>
                  {" "}
                  <img src={process.env.PUBLIC_URL + "/images/remove.svg"} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

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
