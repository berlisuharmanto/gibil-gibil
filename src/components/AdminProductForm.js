import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import "./AdminProductForm.css";

function AdminProductForm({ item }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [numOfProducts, setNumOfProducts] = useState();
  const [prodImage, setProdImage] = useState("");
  const [prodDesc, setProdDesc] = useState("");
  const [prodSpec, setProdSpec] = useState([]);
  const [type, setType] = useState("Accessories");
  const [prodBg, setProdBg] = useState("");
  const [curName, setCurName] = useState(item.name);
  const [curPrice, setCurPrice] = useState(item.price);
  const [curNumOfProducts, setCurNumOfProducts] = useState(item.numOfProducts);
  const [curProdImage, setCurProdImage] = useState(item.prodImage);
  const [curProdDesc, setCurProdDesc] = useState(item.prodDesc);
  const [curProdSpec, setCurProdSpec] = useState(item.prodSpec);
  const [curType, setCurType] = useState(item.type);

  let history = useHistory();

  const location = useLocation();

  const editProduct = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      name: curName,
      price: curPrice,
      numOfProducts: curNumOfProducts,
      prodImage: curProdImage,
      prodDesc: curProdDesc,
      prodSpec: curProdSpec,
      type: curType,
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `https://gibil-server.herokuapp.com/api/v1/products/update/${item._id}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        history.push("/adminproducts");
      })
      .catch((error) => console.log("error", error));
  };

  const addProduct = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name,
      price,
      numOfProducts,
      prodImage,
      prodBg,
      prodDesc,
      prodSpec,
      type,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://gibil-server.herokuapp.com/api/v1/products/", requestOptions)
      .then((response) => response.json())
      .then((result) => history.push("/adminproducts"))
      .catch((error) => console.log("error", error));
  };

  if (location.pathname === `/adminproducts/${item._id}`) {
    return (
      <>
        <div
          className="add-product-main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/addProduct.png"
            })`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <form
            action=""
            className="admin-product-form"
            onSubmit={(e) => editProduct(e)}
          >
            <div className="add-product-main-title">
              <h1>Add Product</h1>
            </div>
            <div className="add-product-main-form">
              <div className="add-product-main-form-input">
                <label htmlFor="">Product Name</label>
                <input
                  type="text"
                  placeholder="Product Name"
                  value={curName}
                  onChange={(e) => setCurName(e.target.value)}
                />
              </div>
              <div className="add-product-main-form-input">
                <label htmlFor="">Product Price</label>
                <input
                  type="text"
                  placeholder="Product Price"
                  value={curPrice}
                  onChange={(e) => setCurPrice(e.target.value)}
                />
              </div>
              <div className="add-product-main-form-input">
                <label htmlFor="">Product Description</label>
                <input
                  type="text"
                  placeholder="Product Description"
                  value={curProdDesc}
                  onChange={(e) => setCurProdDesc(e.target.value)}
                />
              </div>
              <div className="add-product-main-form-input">
                <label htmlFor="">Product Image</label>
                <input
                  type="text"
                  placeholder="Product Image"
                  value={curProdImage}
                  onChange={(e) => setCurProdImage(e.target.value)}
                />
              </div>
              <div className="add-product-main-form-input">
                <label htmlFor="">Product Spec</label>
                <textarea
                  type="text"
                  placeholder="Product Spec"
                  value={curProdSpec}
                  onChange={(e) => setCurProdSpec(e.target.value)}
                />
              </div>

              <div className="add-product-main-form-input">
                <label htmlFor="">Number of Products</label>
                <input
                  type="number"
                  placeholder="Number of Products"
                  value={curNumOfProducts}
                  min="0"
                  onChange={(e) => setCurNumOfProducts(e.target.value)}
                />
              </div>
              <div className="add-product-main-form-input">
                <label htmlFor="">Product Category</label>
                <select
                  name="type"
                  id=""
                  value={curType}
                  onChange={(e) => setCurType(e.target.value)}
                >
                  <option value="Accessories">Accessories</option>
                  <option value="Media">Media</option>
                </select>
              </div>
            </div>
            <button type="submit">Update Product</button>
          </form>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className="add-product-main"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/addProduct.png"
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <form
          action=""
          className="admin-product-form"
          onSubmit={(e) => addProduct(e)}
        >
          <div className="add-product-main-title">
            <h1>Add Product</h1>
          </div>
          <div className="add-product-main-form">
            <div className="add-product-main-form-input">
              <label htmlFor="">Product Name</label>
              <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="add-product-main-form-input">
              <label htmlFor="">Product Price</label>
              <input
                type="text"
                placeholder="Product Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="add-product-main-form-input">
              <label htmlFor="">Product Description</label>
              <input
                type="text"
                placeholder="Product Description"
                value={prodDesc}
                onChange={(e) => setProdDesc(e.target.value)}
              />
            </div>
            <div className="add-product-main-form-input">
              <label htmlFor="">Product Image</label>
              <input
                type="text"
                placeholder="Product Image"
                value={prodImage}
                onChange={(e) => setProdImage(e.target.value)}
              />
            </div>
            <div className="add-product-main-form-input">
              <label htmlFor="">Product Spec</label>
              <textarea
                type="text"
                placeholder="Product Spec"
                value={prodSpec}
                onChange={(e) => setProdSpec(e.target.value.split(","))}
              />
            </div>

            <div className="add-product-main-form-input">
              <label htmlFor="">Number of Products</label>
              <input
                type="number"
                placeholder="Number of Products"
                value={numOfProducts}
                min="0"
                onChange={(e) => setNumOfProducts(e.target.value)}
              />
            </div>
            <div className="add-product-main-form-input">
              <label htmlFor="">Product Category</label>
              <select
                name="type"
                id=""
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Accessories">Accessories</option>
                <option value="Media">Media</option>
              </select>
            </div>
          </div>
          <button type="submit">Add Product</button>
        </form>
      </div>
    </>
  );
}

export default AdminProductForm;
