import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import HeroArticle from "../HeroArticle";
import { articleContent } from "./Data";

function Article() {
  const { id } = useParams();
  console.log(id);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItems();
    fetchRecommendation();
  }, []);

  const [item, setItem] = useState({});

  const [recommendation, setRecommendation] = useState([]);

  const fetchRecommendation = async () => {
    const data = await fetch("http://localhost:5000/api/v1/article/");
    const items = await data.json();
    const itemsFilter = items.products.filter((item) => item._id !== id);
    setRecommendation(itemsFilter);
  };

  const fetchItems = async () => {
    const fetchItems = await fetch(
      `http://localhost:5000/api/v1/article/${id}`
    );
    const item = await fetchItems.json();

    console.log(item.data);
    setItem(item.data);
    setLoading(false);
  };
  return (
    <>
      <HeroArticle item={item} />
    </>
  );
}

export default Article;
