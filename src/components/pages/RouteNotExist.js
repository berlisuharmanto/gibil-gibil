import React from "react";
import useLoading from "../actions/useLoading";
import Loading from "../Loading";

function RouteNotExist() {
  const loadingPage = useLoading();

  if (loadingPage) {
    return <Loading />;
  }
  return (
    <>
      <div
        className="not-found-page"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px 0",
          width: "100%",
          height: "100vh",
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/notFound.png"}
          alt="Route does not exist"
        />
      </div>
    </>
  );
}

export default RouteNotExist;
