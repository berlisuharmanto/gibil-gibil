import React from "react";
import CartItem from "../CartItem";
import CartItemButton from "../CartItemButton";
import { items } from "./Data";

function cart() {
  return (
    <>
      <CartItem {...items} />
      <CartItemButton />
    </>
  );
}

export default cart;
