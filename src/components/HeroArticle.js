import React, { useEffect, useState } from "react";
import { asideContent } from "./pages/Data";
import "./HeroArticle.css";
import HeroAside from "./HeroAside";
import { useParams } from "react-router";

function HeroArticle({ banner, item }) {
  const { id } = useParams();
  const [recommendation, setRecommendation] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRecommendation();
    setIsLoading(false);
  }, [id]);

  const fetchRecommendation = async () => {
    const data = await fetch("http://localhost:5000/api/v1/article/");
    const items = await data.json();
    const itemsFilter = items.article.filter((item) => item._id !== id);
    setRecommendation(itemsFilter);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
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
        <HeroAside item={recommendation} {...asideContent} />
      </div>
    </>
  );
}

export default HeroArticle;
