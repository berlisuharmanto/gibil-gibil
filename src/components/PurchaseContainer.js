import React from "react";
import formatK from "./actions/kFormatter";
import { useHistory, useLocation } from "react-router";

function PurchaseContainer({ item }) {
  const location = useLocation();
  let history = useHistory();

  const removeItem = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://gibil-server.vercel.app/api/v1/products/delete/${item._id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => window.location.reload())
      .catch((error) => console.log("error", error));
  };
  return (
    <>
      <div className="card-container" style={{ display: "flex" }}>
        <div className="img-container">
          <img src={item.prodImage} />
        </div>
        <div>
          <div>{item.name}</div>
          <span>Rp {item.price ? formatK(item.price) : 0}</span>
        </div>
        <div className="button-container">
          <button onClick={() => history.push(`/adminproducts/${item._id}`)}>
            <img src={process.env.PUBLIC_URL + "/images/edit.svg"} />
          </button>
          <button onClick={removeItem}>
            <img src={process.env.PUBLIC_URL + "/images/remove.svg"} />
          </button>
        </div>
      </div>
    </>
  );
}

export default PurchaseContainer;
