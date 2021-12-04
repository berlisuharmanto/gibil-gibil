import React from "react";
import Carousel from "react-grid-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import formatK from "./actions/kFormatter";
import "./HeroPurchase.css";
import PurchaseContainer from "./PurchaseContainer";

function HeroPurchase({ headers, items }) {
  const location = useLocation();

  if (location.pathname === "/adminproducts") {
    return (
      <>
        <div className="hero_purchase_group">
          <div className="hero_purchase_container">
            <div className="hero_purchase_header">{headers}</div>
            <Carousel cols={5} showDots loop>
              {items.map((val, i) => (
                <Carousel.Item key={i}>
                  <PurchaseContainer item={val} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="hero_purchase_group">
        <div className="hero_purchase_container">
          <div className="hero_purchase_header">{headers}</div>
          <Carousel cols={5} showDots loop>
            {items.map((val, i) => (
              <Carousel.Item key={i}>
                <div
                  className="card-container"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <Link
                    to={`/purchase/${val._id}`}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <div className="img-container">
                      <img src={val.prodImage} />
                    </div>
                    <div>
                      <div>{val.name}</div>
                      <span>Rp {val.price ? formatK(val.price) : 0}</span>
                    </div>
                  </Link>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default HeroPurchase;
