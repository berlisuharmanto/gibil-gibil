import React from "react";
import useLoading from "../actions/useLoading";
import HeroSection from "../HeroSection";
import Loading from "../Loading";
import { homeObjOne } from "./Data";

function Home() {
  const loadingPage = useLoading();

  if (loadingPage) {
    return <Loading />;
  }
  return (
    <>
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Home;
