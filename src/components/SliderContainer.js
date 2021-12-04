import React from "react";
import { useHistory } from "react-router";

function SliderContainer({ item }) {
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
      `https://gibil-server.herokuapp.com/api/v1/article/delete/${item._id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => window.location.reload())
      .catch((error) => console.log("error", error));
  };
  return (
    <>
      <div className="hero_trend_container_admin" key={item._id}>
        <div className="hero_trend_content">
          <div className="hero_image">
            <img src={item.img[0]} alt="article image" />
          </div>
          <div className="text-wrapper">
            <h2>{item.title}</h2>
            <p>{item.preview}</p>
          </div>
        </div>
        <div
          className="button-container"
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <button onClick={() => history.push(`/adminarticles/${item._id}`)}>
            <img src={process.env.PUBLIC_URL + "/images/edit.svg"} />
          </button>
          <button onClick={removeItem}>
            {" "}
            <img src={process.env.PUBLIC_URL + "/images/remove.svg"} />
          </button>
        </div>
      </div>
    </>
  );
}

export default SliderContainer;
