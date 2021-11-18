import React, { useState } from "react";
import { useLocation } from "react-router";
import formatK from "./actions/kFormatter";

function CartContainer({ item, minusIcon, plusIcon, removeIcon }) {
  const [counter, setCounter] = useState(item.quantity);

  const [pricer, setPricer] = useState(item.price * counter);

  const decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
      setPricer(pricer - item.price);

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        cartId: item._id,
        userId: item.userId,
        quantity: counter - 1,
      });

      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:5000/api/v1/cart/update", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }
  };

  const increment = () => {
    if (counter < 100) {
      setCounter(counter + 1);
      setPricer(pricer + item.price);

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        cartId: item._id,
        userId: item.userId,
        quantity: counter + 1,
      });

      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:5000/api/v1/cart/update", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }
  };

  const removeItem = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      userId: item.userId,
      cartId: item._id,
    });

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:5000/api/v1/cart/delete", requestOptions)
      .then((response) => response.json())
      .then((result) => window.location.reload())
      .catch((error) => console.log("error", error));
  };

  const location = useLocation();

  if (location.pathname === "/paymentdetails") {
    return (
      <>
        <div className="container-form">
          <div className="container_box">
            <div className="container-image">
              <img
                style={{ maxHeight: "130px", maxWidth: "160px" }}
                src={item.prodImage}
                alt={item.prodImage}
              />
            </div>
            <div className="container-descrip">
              <h1>{item.prodName}</h1>
              <h2>Quantity : {item.quantity}</h2>
            </div>
            <div className="container-option">
              <div className="container-amount">
                <div className="container-price">
                  <h1>
                    Price Rp.{" "}
                    {item.price ? formatK(item.price * item.quantity) : 0}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container-form">
        <div className="container_box">
          <div className="container-image">
            <img
              style={{ maxHeight: "130px", maxWidth: "160px" }}
              src={item.prodImage}
              alt={item.prodImage}
            />
          </div>
          <div className="container-descrip">
            <h1>{item.prodName}</h1>
            <div className="container-price">
              <h3>Price Rp. {item.price ? formatK(pricer) : 0}</h3>
            </div>
          </div>
          <div className="container-option">
            <div className="container-amount">
              <div className="container-inline">
                <button onClick={decrement} className="amount-icon">
                  <img src={minusIcon} />
                </button>
                <div className="amount-number">
                  <h1>{counter}</h1>
                </div>
                <button onClick={increment} className="amount-icon">
                  <img src={plusIcon} />
                </button>
                <button onClick={removeItem} className="remove-icon">
                  <img src={removeIcon} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartContainer;
