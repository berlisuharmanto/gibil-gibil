import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import HeroDetailPurchase from "../HeroDetailPurchase";
import HeroRecomendation from "../HeroRecomendation";
import HeroVariation from "../HeroVariation";
import { variation } from "./Data";

function DetailPurchase() {
  const { id } = useParams();

  useEffect(() => {
    fetchItems();
  }, []);

  const [item, setItem] = useState({});

  const [specs, setSpecs] = useState([]);

  const fetchItems = async () => {
    const fetchItem = await fetch(
      `http://localhost:5000/api/v1/products/${id}`
    );
    const item = await fetchItem.json();

    console.log(item.data);
    setItem(item.data);
    setSpecs(item.data.prodSpec);
  };
  return (
    <>
      <HeroDetailPurchase item={item} specs={specs} />
      <HeroVariation />
      <HeroRecomendation />
    </>
  );
}

export default DetailPurchase;
