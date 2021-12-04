import React, { useEffect, useState } from "react";
import { articleContent } from "./Data";
import { useParams } from "react-router";
import useLoading from "../actions/useLoading";
import Loading from "../Loading";
import HeroArticle from "../HeroArticle";

function Article() {
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

  if (loadingPage) {
    return <Loading />;
  }

  return (
    <>
      <HeroArticle item={item} {...articleContent} />
    </>
  );
}

export default Article;
