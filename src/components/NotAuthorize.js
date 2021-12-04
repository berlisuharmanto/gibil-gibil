import React from "react";

function NotAuthorize() {
  return (
    <>
      <div
        className="not-authorize"
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px 0",
        }}
      >
        <img src={process.env.PUBLIC_URL + "/images/notAuthorize.png"} alt="" />
      </div>
    </>
  );
}

export default NotAuthorize;
