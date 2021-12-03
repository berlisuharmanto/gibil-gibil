import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AdminArticleForm from "../AdminArticleForm";

function EditArticle() {
  const { id } = useParams();

  useEffect(() => {
    fetchItems();
    setIsLoading(false);
  }, [id]);

  const [isLoading, setIsLoading] = useState(true);

  const [item, setItem] = useState({});

  const fetchItems = async () => {
    const fetchItem = await fetch(`http://localhost:5000/api/v1/article/${id}`);
    const item = await fetchItem.json();

    setItem(item.data);
  };
  return (
    <>
      <AdminArticleForm item={item} key={item._id} />
    </>
  );
}

export default EditArticle;
