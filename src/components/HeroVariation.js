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
