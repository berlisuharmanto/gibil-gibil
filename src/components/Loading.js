import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <div className="loading">
      <div className="loading__text">
        <img src={process.env.PUBLIC_URL + "/images/loading.svg"} alt="" />
      </div>
    </div>
  );
}

export default Loading;
