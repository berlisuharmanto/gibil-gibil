import React from "react";
import { useHistory, useLocation } from "react-router";
import "./AddButton.css";

function AddButton() {
  const location = useLocation();
  let history = useHistory();

  if (location.pathname === "/adminarticles") {
    return (
      <>
        <button
          className="admin-button"
          onClick={() => history.push("admin-add-article")}
        >
          <img src={process.env.PUBLIC_URL + "/images/add.svg"} alt="" />
        </button>
      </>
    );
  }
}

export default AddButton;
