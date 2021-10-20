import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import HeroDetailPurchase from "../HeroDetailPurchase";
import HeroRecomendation from "../HeroRecomendation";
import HeroVariation from "../HeroVariation";
import { detailPurchase, items, recommendation, variation } from "./Data";

function DetailPurchase() {
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
    const data = await fetch("http://localhost:5000/api/v1/products/");
    const items = await data.json();
    const itemsFilter = items.products.filter((item) => item._id !== id);
    setRecommendation(itemsFilter);
  };

  const fetchItems = async () => {
    const fetchItems = await fetch(
      `http://localhost:5000/api/v1/products/${id}`
    );
    const item = await fetchItems.json();

    console.log(item.data);
    setItem(item.data);
    setLoading(false);
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <HeroDetailPurchase item={item} />
      <HeroVariation {...variation} />
      <HeroRecomendation items={recommendation} />
    </>
  );
}

export default DetailPurchase;
