import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CartItem from "../CartItem";

function BuyNow() {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchItems();
    setIsLoading(false);
  }, [id]);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const fetchItem = await fetch(
      `http://localhost:5000/api/v1/products/${id}`
    );
    const item = await fetchItem.json();

    setItems(item.data);
  };
  return (
    <>
      <div style={{ minHeight: "55vh" }}>
        <CartItem item={items} />
      </div>
    </>
  );
}

export default BuyNow;
