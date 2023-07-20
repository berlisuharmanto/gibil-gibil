import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import "./HeroVariation.css";

function HeroVariation({ item }) {
  useEffect(() => {
    fetchProds();
    setLogin(localStorage.getItem("token"));
  }, [localStorage.getItem("token")]);

  const { id } = useParams();
  const [prod, setProd] = useState({});
  const [login, setLogin] = useState();
  const [userId, setUserId] = useState(localStorage.getItem("id"));
  const [prodName, setProdName] = useState();
  const [prodId, setProdId] = useState();
  const [prodImage, setProdImage] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();

  const fetchProds = async () => {
    const fetchProd = await fetch(
      `https://gibil-server.vercel.app/api/v1/products/${id}`
    );
    const prod = await fetchProd.json();

    setUserId(localStorage.getItem("id"));
    setProd(prod.data);
    setProdName(prod.data.name);
    setProdId(prod.data._id);
    setProdImage(prod.data.prodImage);
    setPrice(prod.data.price);
    setQuantity(1);
  };

  let history = useHistory();

  function addToCart() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      userId,
      prodId,
      prodName,
      prodImage,
      price,
      quantity,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://gibil-server.vercel.app/api/v1/cart/add", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        history.push("/cart");
      })
      .catch((error) => console.log("error", error));
  }

  if (!login) {
    return (
      <>
        <div className="hero_variation_main">
          <div className="variation_container">
            <div className="transaction">
              <button onClick={() => history.push("/signin")}>
                Add to cart
              </button>
              <button onClick={() => history.push("/signin")}>Buy Now</button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="hero_variation_main">
        <div className="variation_container">
          <div className="transaction">
            <button onClick={() => addToCart()}>Add to cart</button>
            <button onClick={() => history.push(`/paymentdetails/${prod._id}`)}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroVariation;
