import React from "react";
import "./CartItemButton.css";
function CartItemButton() {
  return (
    <>
      <div className="container-button-cart">
        <div className="container-cart-btn">
          <button>
            <h1>Check All</h1>
          </button>
          <button>
            <h1>Check Out</h1>
          </button>
        </div>
      </div>
    </>
  );
}
export default CartItemButton;
