import React, { useState } from "react";
import { useLocation } from "react-router";
import formatK from "./actions/kFormatter";
import "./CartItem.css";

function CartItem({ item, minusIcon, plusIcon, removeIcon }) {
  const [counter, setCounter] = useState(1);

  const decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const increment = () => {
    if (counter < 100) {
      setCounter(counter + 1);
    }
  };

  console.log(item);

  const location = useLocation();

  if (location.pathname === "/paymentdetails") {
    return (
      <>
        <div className="container-items">
          <div className="title">
            <h3>Items</h3>
          </div>
          <div className="container-form">
            <div className="container_box">
              <div className="container-image">
                <img src={item.prodImage} alt={item.prodImage} />
              </div>
              <div className="container-descrip">
                <h1>{item.prodName}</h1>
                <h2>Quantity : {item.quantity}</h2>
              </div>
              <div className="container-option">
                <div className="container-amount">
                  <div className="container-price">
                    <h1>Price Rp. {item.price ? formatK(item.price) : 0}</h1>
                  </div>
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
      <div className="container-items">
        <div className="title">
          <h3>Items</h3>
        </div>
        {item.map((item) => (
          <div key={item._id} className="container-form">
            <div className="container_box">
              <div className="container-image">
                <img src={item.prodImage} alt={item.prodImage} />
              </div>
              <div className="container-descrip">
                <h1>{item.prodName}</h1>
                <h2>variation : {item.quantity}</h2>
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
                    <button className="remove-icon">
                      <img src={removeIcon} />
                    </button>
                  </div>
                  <div className="container-price">
                    <h1>Price Rp. {item.price ? formatK(item.price) : 0}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CartItem;
