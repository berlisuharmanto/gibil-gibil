import React from "react";
import { Link } from "react-router-dom";
import "./HeroCard.css";

function HeroCard({
  imgSC,
  imgDA,
  imgCA,
  imgCC,
  imgFC,
  imgFS,
  imgTC,
  title01,
  title02,
  title03,
  title04,
  title05,
  title06,
  d11,
  d12,
  d13,
  d14,
  d15,
  d16,
  d17,
  d21,
  d22,
  d23,
  d24,
  d25,
  d26,
  d27,
  d31,
  d32,
  d33,
  d34,
  d35,
  d36,
  d37,
  d41,
  d42,
  d43,
  d44,
  d45,
  d46,
  d47,
  d51,
  d52,
  d53,
  d54,
  d55,
  d56,
  d57,
  d61,
  d62,
  d63,
  d64,
  d65,
  d66,
  d67,
}) {
  return (
    <>
      <div className="hero_card_main">
        <div className="hero_card_container">
          <div className="card_row01">
            <div className="card_col01">
              <div className="card_content">
                <img src={imgSC} alt={imgSC} />
                <div className="text-wrapper">
                  <h2>{title01}</h2>
                  <p>{d11}</p>
                  <p>{d12}</p>
                  <p>{d13}</p>
                  <p>{d14}</p>
                  <p>{d15}</p>
                  <b className="available">{d16}</b>
                  <b className="price">{d17}</b>
                </div>
                <Link to="/">Buy</Link>
              </div>
            </div>
            <div className="card_col02">
              <div className="card_content">
                <img src={imgDA} alt={imgDA} />
                <div className="text-wrapper">
                  <h2>{title02}</h2>
                  <p>{d21}</p>
                  <p>{d22}</p>
                  <p>{d23}</p>
                  <p>{d24}</p>
                  <p>{d25}</p>
                  <b className="available">{d26}</b>
                  <b className="price">{d27}</b>
                </div>
                <Link to="/">Buy</Link>
              </div>
            </div>
            <div className="card_col03">
              <div className="card_content">
                <img src={imgCA} alt={imgCA} />
                <div className="text-wrapper">
                  <h2>{title03}</h2>
                  <p>{d31}</p>
                  <p>{d32}</p>
                  <p>{d33}</p>
                  <p>{d34}</p>
                  <p>{d35}</p>
                  <b className="available">{d36}</b>
                  <b className="price">{d37}</b>
                </div>
                <Link to="/">Buy</Link>
              </div>
            </div>
          </div>
          <div className="card_row02">
            <div className="card_col01">
              <div className="card_content">
                <img src={imgFC} alt={imgFC} />
                <div className="text-wrapper">
                  <h2>{title04}</h2>
                  <p>{d41}</p>
                  <p>{d42}</p>
                  <p>{d43}</p>
                  <p>{d44}</p>
                  <p>{d45}</p>
                  <b className="available">{d46}</b>
                  <b className="price">{d47}</b>
                </div>
                <Link to="/">Buy</Link>
              </div>
            </div>
            <div className="card_col02">
              <div className="card_content">
                <img src={imgFS} alt={imgFS} />
                <div className="text-wrapper">
                  <h2>{title05}</h2>
                  <p>{d51}</p>
                  <p>{d52}</p>
                  <p>{d53}</p>
                  <p>{d54}</p>
                  <p>{d55}</p>
                  <b className="available">{d56}</b>
                  <b className="price">{d57}</b>
                </div>
                <Link to="/">Buy</Link>
              </div>
            </div>
            <div className="card_col03">
              <div className="card_content">
                <img src={imgTC} alt={imgTC} />
                <div className="text-wrapper">
                  <h2>{title06}</h2>
                  <p>{d61}</p>
                  <p>{d62}</p>
                  <p>{d63}</p>
                  <p>{d64}</p>
                  <p>{d65}</p>
                  <b className="available">{d66}</b>
                  <b className="price">{d67}</b>
                </div>
                <Link to="/">Buy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroCard;
