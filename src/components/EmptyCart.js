import React from "react";
import "./EmptyCart.css";

function EmptyCart({ img }) {
  return (
    <>
      <div className="empty-cart">
        <div className="empty-cart__icon">
          <img src={img} alt="empty cart" />
        </div>
        <div className="empty-cart__text" style={{ color: "#5D5FEF" }}>
          <h2 style={{ textAlign: "center", padding: "10px" }}>
            Your cart is empty
          </h2>
          <p style={{ textAlign: "center" }}>
            You have no items in your cart. To buy one or more items, click "Add
            to cart" next to the item.
          </p>
        </div>
      </div>
    </>
  );
}

export default EmptyCart;
