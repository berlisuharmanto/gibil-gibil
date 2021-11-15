import React, { useState } from "react";
import { useLocation } from "react-router";
import CartContainer from "./CartContainer";
import "./CartItem.css";
import formatK from "./actions/kFormatter";
import { cartIcon } from "./pages/Data";

function CartItem({ item, minusIcon, plusIcon, removeIcon }) {
  const location = useLocation();

  if (location.pathname === "/paymentdetails") {
    return (
      <>
        <div className="container-items">
          <div className="title">
            <h3>Items</h3>
          </div>
          {item.map((item) => (
            <CartContainer key={item._id} item={item} />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container-items">
        <div className="title">
          <h3>Items</h3>
        </div>
        {item.map((item) => (
          <CartContainer key={item._id} item={item} {...cartIcon} />
        ))}
      </div>
    </>
  );
}

export default CartItem;
