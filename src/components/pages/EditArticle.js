import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AdminArticleForm from "../AdminArticleForm";
import useLoading from "../actions/useLoading";
import Loading from "../Loading";
import Auth from "../actions/Auth";
import NotAuthorize from "../NotAuthorize";

function EditArticle() {
  const { id } = useParams();

  useEffect(() => {
    fetchItems();
    setIsLoading(false);
  }, [id]);

  const [isLoading, setIsLoading] = useState(true);

  const [item, setItem] = useState({});

  const fetchItems = async () => {
    const fetchItem = await fetch(
      `https://gibil-server.herokuapp.com/api/v1/article/${id}`
    );
    const item = await fetchItem.json();

    setItem(item.data);
  };

  const loadingPage = useLoading();

  const [login, admin] = Auth();

  if (loadingPage) {
    return <Loading />;
  } else if (!login && !admin) {
    return <NotAuthorize />;
  }
  return (
    <>
      <AdminArticleForm item={item} key={item._id} />
    </>
  );
}

export default EditArticle;
