import React, { useEffect, useState } from "react";
import { articleContent } from "./Data";
import { useParams } from "react-router";
import HeroArticle from "../HeroArticle";

function Article() {
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchItems();
  }, []);

  const [item, setItem] = useState({});

  const fetchItems = async () => {
    const fetchItem = await fetch(`http://localhost:5000/api/v1/article/${id}`);
    const item = await fetchItem.json();

    console.log(item.data);
    setItem(item.data);
  };

  console.log(item);
  return (
    <>
      <HeroArticle item={item} {...articleContent} />
    </>
  );
}

export default Article;
