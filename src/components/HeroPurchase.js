import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import "./HeroPurchase.css";

function HeroPurchase({
  header,
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img08,
  img09,
  img10,
  desc01,
  desc02,
  desc03,
  desc04,
}) {
  return (
    <>
      <div className="hero_purchase_group">
        <div className="hero_purchase_container">
          <div className="hero_purchase_header">{header}</div>
          <Carousel>
            <div className="hero_purchase_list">
              <div className="hero_purchase_row">
                <Link to="/" className="img-container">
                  <img src={img01} alt={img01} />
                  <div className="img-hover">{desc01}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img02} alt={img02} />
                  <div className="img-hover">{desc02}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img03} alt={img03} />
                  <div className="img-hover">{desc03}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img04} alt={img04} />
                  <div className="img-hover">{desc04}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img05} alt={img05} />
                  <div className="img-hover">{desc04}</div>
                </Link>
              </div>
              <div className="hero_purchase_row">
                <Link to="/" className="img-container">
                  <img src={img06} alt={img06} />
                  <div className="img-hover">{desc01}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img07} alt={img07} />
                  <div className="img-hover">{desc02}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img08} alt={img08} />
                  <div className="img-hover">{desc03}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img09} alt={img09} />
                  <div className="img-hover">{desc04}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img10} alt={img10} />
                  <div className="img-hover">{desc04}</div>
                </Link>
              </div>
            </div>
            <div className="hero_purchase_list">
              <div className="hero_purchase_row">
                <Link to="/" className="img-container">
                  <img src={img01} alt={img01} />
                  <div className="img-hover">{desc01}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img02} alt={img02} />
                  <div className="img-hover">{desc02}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img03} alt={img03} />
                  <div className="img-hover">{desc03}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img04} alt={img04} />
                  <div className="img-hover">{desc04}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img05} alt={img05} />
                  <div className="img-hover">{desc04}</div>
                </Link>
              </div>
              <div className="hero_purchase_row">
                <Link to="/" className="img-container">
                  <img src={img06} alt={img06} />
                  <div className="img-hover">{desc01}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img07} alt={img07} />
                  <div className="img-hover">{desc02}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img08} alt={img08} />
                  <div className="img-hover">{desc03}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img09} alt={img09} />
                  <div className="img-hover">{desc04}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img10} alt={img10} />
                  <div className="img-hover">{desc04}</div>
                </Link>
              </div>
            </div>
            <div className="hero_purchase_list">
              <div className="hero_purchase_row">
                <Link to="/" className="img-container">
                  <img src={img01} alt={img01} />
                  <div className="img-hover">{desc01}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img02} alt={img02} />
                  <div className="img-hover">{desc02}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img03} alt={img03} />
                  <div className="img-hover">{desc03}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img04} alt={img04} />
                  <div className="img-hover">{desc04}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img05} alt={img05} />
                  <div className="img-hover">{desc04}</div>
                </Link>
              </div>
              <div className="hero_purchase_row">
                <Link to="/" className="img-container">
                  <img src={img06} alt={img06} />
                  <div className="img-hover">{desc01}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img07} alt={img07} />
                  <div className="img-hover">{desc02}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img08} alt={img08} />
                  <div className="img-hover">{desc03}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img09} alt={img09} />
                  <div className="img-hover">{desc04}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img10} alt={img10} />
                  <div className="img-hover">{desc04}</div>
                </Link>
              </div>
            </div>
            <div className="hero_purchase_list">
              <div className="hero_purchase_row">
                <Link to="/" className="img-container">
                  <img src={img01} alt={img01} />
                  <div className="img-hover">{desc01}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img02} alt={img02} />
                  <div className="img-hover">{desc02}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img03} alt={img03} />
                  <div className="img-hover">{desc03}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img04} alt={img04} />
                  <div className="img-hover">{desc04}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img05} alt={img05} />
                  <div className="img-hover">{desc04}</div>
                </Link>
              </div>
              <div className="hero_purchase_row">
                <Link to="/" className="img-container">
                  <img src={img06} alt={img06} />
                  <div className="img-hover">{desc01}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img07} alt={img07} />
                  <div className="img-hover">{desc02}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img08} alt={img08} />
                  <div className="img-hover">{desc03}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img09} alt={img09} />
                  <div className="img-hover">{desc04}</div>
                </Link>
                <Link to="/" className="img-container">
                  <img src={img10} alt={img10} />
                  <div className="img-hover">{desc04}</div>
                </Link>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default HeroPurchase;
