import React from "react";
import AdminArticleForm from "../AdminArticleForm";
import useLoading from "../actions/useLoading";
import Loading from "../Loading";
import Auth from "../actions/Auth";
import NotAuthorize from "../NotAuthorize";

function AddArticle() {
  const item = "";

  const loadingPage = useLoading();

  const [login, admin] = Auth();

  if (loadingPage) {
    return <Loading />;
  } else if (!login && !admin) {
    return <NotAuthorize />;
  }
  return (
    <>
      <AdminArticleForm item={item} />
    </>
  );
}

export default AddArticle;
