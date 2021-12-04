import React, { useEffect, useState } from "react";
import AddButton from "../AddButton";
import HeroPurchase from "../HeroPurchase";
import HeroPurchaseBanner from "../HeroPurchaseBanner";
import useLoading from "../actions/useLoading";
import Loading from "../Loading";
import { purchaseBanner } from "./Data";
import Auth from "../actions/Auth";
import NotAuthorize from "../NotAuthorize";

function AdminProducts() {
  const accHeaders = "Accessories";
  const mediaHeaders = "Media";

  useEffect(() => {
    fetchAccessories();
    fetchMedia();
  }, []);

  const [Accessories, setAccessories] = useState([]);
  const [Medias, setMedias] = useState([]);

  const requestOptions = {
    method: "GET",
  };

  const AccHeaders = "Accessories";
  const MedHeaders = "Medias";

  const fetchAccessories = async () => {
    const data = await fetch(
      "https://gibil-server.herokuapp.com/api/v1/products/",
      requestOptions
    );
    const items = await data.json();
    const featured = items.products.filter(
      (item) => item.type === "Accessories"
    );
    setAccessories(featured);
  };

  const fetchMedia = async () => {
    const data = await fetch(
      "https://gibil-server.herokuapp.com/api/v1/products/",
      requestOptions
    );
    const items = await data.json();
    const featured = items.products.filter((item) => item.type === "Media");
    setMedias(featured);
  };

  const loadingPage = useLoading();

  const [login, admin] = Auth();

  if (loadingPage) {
    return <Loading />;
  } else if (!login && !admin) {
    return <NotAuthorize />;
  }

  return (
    <>
      <HeroPurchaseBanner {...purchaseBanner} />
      <HeroPurchase headers={AccHeaders} items={Accessories} />
      <HeroPurchase headers={MedHeaders} items={Medias} />
      <AddButton />
    </>
  );
}

export default AdminProducts;
