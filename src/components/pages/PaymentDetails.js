import React, { useEffect, useState } from "react";
import CartItem from "../CartItem";
import useLoading from "../actions/useLoading";
import Loading from "../Loading";
import NotAuthorize from "../NotAuthorize";
import Auth from "../actions/Auth";

function PaymentDetails() {
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
  const loadingPage = useLoading();

  const [login, admin] = Auth();

  if (loadingPage) {
    return <Loading />;
  } else if (!login) {
    return <NotAuthorize />;
  }
  return (
    <>
      <div style={{ minHeight: "55vh" }}>
        <CartItem item={items} />
      </div>
    </>
  );
}

export default PaymentDetails;
