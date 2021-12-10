import React from "react";
import useLoading from "../actions/useLoading";
import Loading from "../Loading";
import AdminProductForm from "../AdminProductForm";
import Auth from "../actions/Auth";
import NotAuthorize from "../NotAuthorize";

function AddProduct() {
  const loadingPage = useLoading();

  const item = "";

  const [login, admin] = Auth();

  if (loadingPage) {
    return <Loading />;
  } else if (!login && !admin) {
    return <NotAuthorize />;
  } else if (login && !admin) {
    return <NotAuthorize />;
  }

  return (
    <>
      <AdminProductForm item={item} />
    </>
  );
}

export default AddProduct;
