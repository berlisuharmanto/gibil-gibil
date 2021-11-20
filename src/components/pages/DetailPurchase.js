import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import HeroDetailPurchase from "../HeroDetailPurchase";
import HeroRecomendation from "../HeroRecomendation";
import HeroVariation from "../HeroVariation";
import { variation } from "./Data";

function DetailPurchase() {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchItems();
    fetchRecommendation();
    setIsLoading(false);
  }, [id]);

  const [item, setItem] = useState({});

  const [specs, setSpecs] = useState([]);

  const fetchItems = async () => {
    const fetchItem = await fetch(
      `http://localhost:5000/api/v1/products/${id}`
    );
    const item = await fetchItem.json();

    setItem(item.data);
    setSpecs(item.data.prodSpec);
  };

  const [recommendation, setRecommendation] = useState([]);

  const fetchRecommendation = async () => {
    const data = await fetch("http://localhost:5000/api/v1/products/");
    const items = await data.json();
    const itemsFilter = items.products.filter((item) => item._id !== id);
    setRecommendation(itemsFilter);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <HeroDetailPurchase item={item} specs={specs} />
      <HeroVariation />
      <HeroRecomendation item={recommendation} />
    </>
  );
}

export default DetailPurchase;
