import React, { useEffect, useState } from "react";
import AddButton from "../AddButton";
import HeroPurchase from "../HeroPurchase";
import HeroPurchaseBanner from "../HeroPurchaseBanner";
import { purchaseBanner } from "./Data";

function AdminProducts() {
  useEffect(() => {
    fetchItems();
    fetchFeatured();
  }, []);

  const accHeaders = "Accessories";
  const mediaHeaders = "Media";

  const [accessories, setAccessories] = useState([]);

  const fetchFeatured = async () => {
    const data = await fetch(
      "https://gibil-server.herokuapp.com/api/v1/products/"
    );
    const items = await data.json();
    const itemsFilter = items.products.filter(
      (item) => item.type === "Accessories"
    );

    setAccessories(itemsFilter);
  };

  const [item, setItem] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://gibil-server.herokuapp.com/api/v1/products/"
    );
    const items = await data.json();
  };
  return (
    <>
      <HeroPurchaseBanner {...purchaseBanner} />
      <HeroPurchase header={accHeaders} />
      <HeroPurchase header={mediaHeaders} />
      <AddButton />
    </>
  );
}

export default AdminProducts;
