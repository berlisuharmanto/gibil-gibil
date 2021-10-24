import React, { useEffect, useState } from "react";
import HeroTrendBanner from "../HeroTrendBanner";
import HeroSlider from "../HeroSlider";
import { trendBanner, trendCarousel, trendObjThree, trendObjTwo } from "./Data";
import HeroCarousel from "../HeroCarousel";
import { useParams } from "react-router";

function Trend() {
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchItems();
  }, []);

  const [item, setItem] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("http://localhost:5000/api/v1/article/");
    const items = await data.json();
    const itemsFilter = items.article.filter((item) => item._id !== id);
    setItem(itemsFilter);
  };
  return (
    <div>
      <HeroTrendBanner {...trendBanner} />
      <HeroCarousel item={item} />
      <HeroSlider item={item} />
    </div>
  );
}

export default Trend;
