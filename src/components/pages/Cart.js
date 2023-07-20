import React, { useEffect, useState } from "react";
import CartItem from "../CartItem";
import CartItemButton from "../CartItemButton";
import EmptyCart from "../EmptyCart";
import { cartIcon, emptyCart } from "./Data";
import useLoading from "../actions/useLoading";
import Loading from "../Loading";
import NotAuthorize from "../NotAuthorize";
import Auth from "../actions/Auth";

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
      "https://gibil-server.vercel.app/api/v1/cart/",
      requestOptions
    );
    const items = await data.json();
    const featured = items.carts.filter(
      (item) => item.userId == localStorage.getItem("id")
    );
    setItems(featured);
  };

  const loadingPage = useLoading();

  const [login, admin] = Auth();

  if (loadingPage) {
    return <Loading />;
  } else if (!login) {
    return <NotAuthorize />;
  } else if (items.length === 0) {
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
