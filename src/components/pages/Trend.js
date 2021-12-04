import React, { useEffect, useState } from "react";
import HeroTrendBanner from "../HeroTrendBanner";
import HeroSlider from "../HeroSlider";
import { trendBanner } from "./Data";
import HeroCarousel from "../HeroCarousel";
import useLoading from "../actions/useLoading";
import Loading from "../Loading";

function Trend() {
  useEffect(() => {
    fetchItems();
    fetchFeatured();
  }, []);

  const [featured, setFeatured] = useState([]);

  const fetchFeatured = async () => {
    const data = await fetch(
      "https://gibil-server.herokuapp.com/api/v1/article/"
    );
    const featured = await data.json();
    const featuredFilter = featured.article.filter(
      (item) => item.featured === true
    );
    setFeatured(featuredFilter);
  };

  const [item, setItem] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://gibil-server.herokuapp.com/api/v1/article/"
    );
    const items = await data.json();
    setItem(items.article);
  };
  const loadingPage = useLoading();

  if (loadingPage) {
    return <Loading />;
  }
  return (
    <div>
      <HeroTrendBanner {...trendBanner} />
      <HeroCarousel item={featured} />
      <HeroSlider item={item} />
    </div>
  );
}

export default Trend;
