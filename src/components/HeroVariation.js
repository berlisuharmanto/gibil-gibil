import React from "react";
import "./HeroVariation.css";

const addToCart = (e) => {
  const cart = [];
  const items = [{ name: "Berli" }, { name: "Suharmanto" }];
  cart.push(items);
  console.log(cart);
};

function HeroVariation({ size1, size2, size3, size4, size5, size6 }) {
  return (
    <>
      <div className="hero_variation_main">
        <div className="variation_container">
          <fieldset>
            <legend>choose variation</legend>
            <div className="variation_col">
              <button>{size1}</button>
              <button>{size2}</button>
              <button>{size3}</button>
            </div>
            <div className="variation_col">
              <button>{size4}</button>
              <button>{size5}</button>
              <button>{size6}</button>
            </div>
          </fieldset>
          <div className="transaction">
            <button onClick={(e) => addToCart(e)}>Add to cart</button>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroVariation;
