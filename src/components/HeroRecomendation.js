import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import formatK from "./actions/kFormatter";
import "./HeroRecommendation.css";

function HeroRecomendation() {
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchRecommendation();
  }, []);

  const [recommendation, setRecommendation] = useState([]);

  const fetchRecommendation = async () => {
    const data = await fetch("http://localhost:5000/api/v1/products/");
    const items = await data.json();
    const itemsFilter = items.products.filter((item) => item._id !== id);
    setRecommendation(itemsFilter);
  };
  return (
    <>
      <div className="hero_recommendation_main">
        <div className="rec_content">
          <h1>Recommendation</h1>
          <div className="card_layout">
            {recommendation.map((item) => (
              <Link
                key={item._id}
                to={`/purchase/${item._id}`}
                className="card_content"
              >
                <div className="img_container">
                  <img src={item.prodImage} alt="item image" />
                </div>
                <p>{item.name}</p>
                <p>Rp. {item.price ? formatK(item.price) : 0}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroRecomendation;
