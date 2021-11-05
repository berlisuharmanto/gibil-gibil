import React, { useEffect, useState } from "react";
import { asideContent } from "./pages/Data";
import "./HeroArticle.css";
import HeroAside from "./HeroAside";
import { useParams } from "react-router";

function HeroArticle({ banner, item }) {
  const { id } = useParams();
  const [recommendation, setRecommendation] = useState([]);

  useEffect(() => {
    fetchRecommendation();
  }, []);

  const fetchRecommendation = async () => {
    const data = await fetch("http://localhost:5000/api/v1/article/");
    const items = await data.json();
    const itemsFilter = items.article.filter((item) => item._id !== id);
    setRecommendation(itemsFilter);
  };
  console.log(item);
  return (
    <>
      <div className="hero_article_main">
        <div className="hero_related_article"></div>
        <div className="hero_article_content">
          <div
            className="hero_article_banner"
            style={{
              backgroundImage: `url(${banner})`,
            }}
          ></div>
          <div className="hero_article_core">
            <div className="text-wrapper">
              <div dangerouslySetInnerHTML={{ __html: item.article }} />
            </div>
          </div>
        </div>
        <HeroAside item={recommendation} />
      </div>
    </>
  );
}

export default HeroArticle;
