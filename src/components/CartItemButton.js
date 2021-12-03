import React from "react";
import { useHistory } from "react-router";
import "./CartItemButton.css";
function CartItemButton() {
  let history = useHistory();

  return (
    <>
      <div className="container-button-cart">
        <div className="container-cart-btn">
          <button onClick={() => history.push("/paymentdetails")}>
            <h1>Check Out</h1>
          </button>
        </div>
      </div>
    </>
  );
}
export default CartItemButton;
