import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AdminProductForm from "../AdminProductForm";

function EditProduct() {
  const { id } = useParams();

  useEffect(() => {
    fetchItems();
    setIsLoading(false);
  }, [id]);

  const [isLoading, setIsLoading] = useState(true);

  const [item, setItem] = useState({});

  const fetchItems = async () => {
    const fetchItem = await fetch(
      `https://gibil-server.herokuapp.com/api/v1/products/${id}`
    );
    const item = await fetchItem.json();
    setItem(item.data);
  };
  return (
    <>
      <AdminProductForm item={item} key={item._id} />
    </>
  );
}

export default EditProduct;
