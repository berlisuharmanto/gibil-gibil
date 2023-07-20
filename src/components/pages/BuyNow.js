import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Auth from "../actions/Auth";
import useLoading from "../actions/useLoading";
import CartItem from "../CartItem";
import Loading from "../Loading";
import NotAuthorize from "../NotAuthorize";
import RouteNotExist from "./RouteNotExist";

function BuyNow() {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const loadingPage = useLoading();

  const [login, admin] = Auth();

  const [status, setStatus] = useState("");

  useEffect(() => {
    fetchItems();
    setIsLoading(false);
  }, [id]);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const fetchItem = await fetch(
      `https://gibil-server.vercel.app/api/v1/products/${id}`
    );
    const item = await fetchItem.json();

    setStatus(item.status);

    if (item.status === "success") {
      setItems(item.data);
    }
  };

  if (loadingPage) {
    return <Loading />;
  } else if (!login) {
    return <NotAuthorize />;
  } else if (status === "Something wrong, please try again") {
    return <RouteNotExist />;
  }

  return (
    <>
      <div style={{ minHeight: "55vh" }}>
        <CartItem item={items} />
      </div>
    </>
  );
}

export default BuyNow;
