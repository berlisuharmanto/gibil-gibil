import React from "react";
import CartItem from "../CartItem";
import { cartIcon } from "./Data";

function PaymentDetails() {
  return (
    <>
      <div style={{ minHeight: "55vh" }}>
        <CartItem {...cartIcon} />
      </div>
    </>
  );
}

export default PaymentDetails;
