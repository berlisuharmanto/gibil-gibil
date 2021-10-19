import React, { useState } from "react";
import "./CartItem.css";

function CartItem({
  img,
  title,
  variation,
  note,
  minusIcon,
  plusIcon,
  removeIcon,
}) {
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

  return (
    <>
      <div className="container-items">
        <div className="container-form">
          <div className="container_box">
            <div className="container-checkbox">
              <input type="checkbox" />
            </div>
            <div className="container-image">
              <img src={img} alt={img} />
            </div>
            <div className="container-descrip">
              <h1>{title}</h1>
              <h2>variation : {variation}</h2>
              <p>note : {note}</p>
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
                  <h1>Price Rp.000.000</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
