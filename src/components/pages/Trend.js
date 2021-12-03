import React, { useEffect, useState } from "react";
import HeroTrendBanner from "../HeroTrendBanner";
import HeroSlider from "../HeroSlider";
import { trendBanner } from "./Data";
import HeroCarousel from "../HeroCarousel";

function Trend() {
  useEffect(() => {
    fetchItems();
    fetchFeatured();
  }, []);

  const [featured, setFeatured] = useState([]);

  const fetchFeatured = async () => {
    const data = await fetch("http://localhost:5000/api/v1/article/");
    const featured = await data.json();
    const featuredFilter = featured.article.filter(
      (item) => item.featured === true
    );
    setFeatured(featuredFilter);
  };

  const [item, setItem] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("http://localhost:5000/api/v1/article/");
    const items = await data.json();
    setItem(items.article);
  };
  return (
    <div>
      <HeroTrendBanner {...trendBanner} />
      <HeroCarousel item={featured} />
      <HeroSlider item={item} />
    </div>
  );
}

export default Trend;
