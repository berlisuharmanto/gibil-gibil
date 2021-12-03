import React, { useEffect, useState } from "react";
import CartItem from "../CartItem";
import CartItemButton from "../CartItemButton";
import EmptyCart from "../EmptyCart";
import { cartIcon, emptyCart } from "./Data";

function Cart() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState([]);

  const requestOptions = {
    method: "GET",
  };

  const fetchItems = async () => {
    const data = await fetch(
      "https://gibil-server.herokuapp.com/api/v1/cart/",
      requestOptions
    );
    const items = await data.json();
    const featured = items.carts.filter(
      (item) => item.userId == localStorage.getItem("id")
    );
    setItems(featured);
  };

  if (items.length === 0) {
    return (
      <>
        <EmptyCart {...emptyCart} />
      </>
    );
  }

  return (
    <>
      <div style={{ minHeight: "55vh" }}>
        <CartItem item={items} {...cartIcon} />
      </div>
      <CartItemButton />
    </>
  );
}

export default Cart;
