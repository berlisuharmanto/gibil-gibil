import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import HeroDetailPurchase from "../HeroDetailPurchase";
import HeroRecomendation from "../HeroRecomendation";
import HeroVariation from "../HeroVariation";
import useLoading from "../actions/useLoading";
import Loading from "../Loading";
import RouteNotExist from "./RouteNotExist";

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

  const [status, setStatus] = useState("");

  const fetchItems = async () => {
    const fetchItem = await fetch(
      `https://gibil-server.herokuapp.com/api/v1/products/${id}`
    );
    const item = await fetchItem.json();

    setStatus(item.status);

    if (item.status === "success") {
      setItem(item.data);
      setSpecs(item.data.prodSpec);
    }
  };

  const [recommendation, setRecommendation] = useState([]);

  const fetchRecommendation = async () => {
    const data = await fetch(
      "https://gibil-server.herokuapp.com/api/v1/products/"
    );
    const items = await data.json();
    const itemsFilter = items.products.filter((item) => item._id !== id);
    setRecommendation(itemsFilter);
  };

  const loadingPage = useLoading();

  if (loadingPage) {
    return <Loading />;
  } else if (status === "Something wrong, please try again") {
    return <RouteNotExist />;
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
