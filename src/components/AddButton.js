import React from "react";
import "./AddButton.css";

function AddButton() {
  return (
    <>
      <button className="admin-button">
        <img src={process.env.PUBLIC_URL + "/images/add.svg"} alt="" />
      </button>
    </>
  );
}

export default AddButton;
