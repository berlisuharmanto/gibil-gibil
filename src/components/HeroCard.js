import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import formatK from "./actions/kFormatter";
import "./HeroCard.css";

function HeroCard() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState([]);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const fetchItems = async () => {
    const data = await fetch(
      "http://localhost:5000/api/v1/products/",
      requestOptions
    );
    const items = await data.json();
    console.log(items.products);
    setItems(items.products);
  };
  return (
    <>
      {items.map((item) => (
        <div
          key={item._id}
          className="card_col"
          style={{ backgroundImage: `url(${item.prodBg})` }}
        >
          <div className="card_content">
            <img src={item.prodImage} alt={item.name} />
            <div className="text-wrapper">
              <h2>{item.name}</h2>
              <p>{item.prodDesc}</p>
              <p>{item.prodSpec[0]}</p>
              <p>{item.prodSpec[1]}</p>
              <p>{item.prodSpec[2]}</p>
              <p>{item.prodSpec[3]}</p>
              <b className="available">Available</b>
              <b className="price">
                Rp. {item.price ? formatK(item.price) : 0}
              </b>
            </div>
            <Link to={`/purchase/${item._id}`}>Buy</Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default HeroCard;
