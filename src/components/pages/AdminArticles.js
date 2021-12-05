import React, { useEffect, useState } from "react";
import HeroTrendBanner from "../HeroTrendBanner";
import HeroSlider from "../HeroSlider";
import { trendBanner } from "./Data";
import useLoading from "../actions/useLoading";
import Loading from "../Loading";
import AddButton from "../AddButton";
import NotAuthorize from "../NotAuthorize";
import Auth from "../actions/Auth";

function AdminArticles() {
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

  const [login, admin] = Auth();

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
  } else if (!login && !admin) {
    return <NotAuthorize />;
  } else if (login && !admin) {
    return <NotAuthorize />;
  }

  return (
    <div>
      <HeroTrendBanner {...trendBanner} />
      <AddButton />
      <HeroSlider item={item} />
    </div>
  );
}

export default AdminArticles;
