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
      <h1>Route not exist</h1>
    </>
  );
}

export default RouteNotExist;
