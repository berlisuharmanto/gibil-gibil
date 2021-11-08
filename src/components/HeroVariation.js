import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./HeroVariation.css";

function HeroVariation({ item }) {
  useEffect(() => {
    setLogin(localStorage.getItem("token"));
  }, [localStorage.getItem("token")]);

  let history = useHistory();

  const [login, setLogin] = useState(localStorage.getItem("token"));

  function addToCart(e) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({});

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:5000/api/v1/cart/add", requestOptions)
      .then((response) => response.json())
      .then((result) => history.push("/cart"))
      .catch((error) => console.log("error", error));
    history.push("/cart");
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
            <button onClick={(e) => addToCart(e)}>Add to cart</button>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroVariation;
