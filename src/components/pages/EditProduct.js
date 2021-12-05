import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AdminProductForm from "../AdminProductForm";
import useLoading from "../actions/useLoading";
import Loading from "../Loading";
import Auth from "../actions/Auth";
import NotAuthorize from "../NotAuthorize";
import RouteNotExist from "./RouteNotExist";

function EditProduct() {
  const { id } = useParams();

  useEffect(() => {
    fetchItems();
    setIsLoading(false);
  }, [id]);

  const [isLoading, setIsLoading] = useState(true);

  const [item, setItem] = useState({});

  const [status, setStatus] = useState("");

  const fetchItems = async () => {
    const fetchItem = await fetch(
      `https://gibil-server.herokuapp.com/api/v1/products/${id}`
    );
    const item = await fetchItem.json();
    setStatus(item.status);

    if (item.status === "success") {
      setItem(item.data);
    }
  };
  const loadingPage = useLoading();

  const [login, admin] = Auth();

  if (loadingPage) {
    return <Loading />;
  } else if (!login && !admin) {
    return <NotAuthorize />;
  } else if (login && !admin) {
    return <NotAuthorize />;
  } else if (status === "Something wrong, please try again") {
    return <RouteNotExist />;
  }

  return (
    <>
      <AdminProductForm item={item} key={item._id} />
    </>
  );
}

export default EditProduct;
