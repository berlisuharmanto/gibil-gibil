import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import CartContainer from "./CartContainer";
import "./CartItem.css";
import formatK from "./actions/kFormatter";
import { cartIcon } from "./pages/Data";
import Modal from "react-modal";

const customStyles = {
  content: {
    display: "flex",
    flexDirection: "column",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    borderRadius: "10px",
    alignItems: "center",
  },
};

const date = new Date();

function CartItem({ item }) {
  useEffect(() => {
    fetchItems();
    fetchUser();
  }, []);
  const [product, setProduct] = useState([]);

  const requestOptions = {
    method: "GET",
  };

  const [user, setUser] = useState({});

  const fetchUser = async () => {
    const data = await fetch(
      `http://localhost:5000/api/v1/user/${localStorage.getItem("id")}`,
      requestOptions
    );
    const userData = await data.json();
    setUser(userData.user);
  };

  const fetchItems = async () => {
    const data = await fetch(
      "http://localhost:5000/api/v1/products/",
      requestOptions
    );
    const items = await data.json();
    setProduct(items.products);
  };

  const location = useLocation();
  const [shipPrice, setShipPrice] = useState(12000);
  let history = useHistory();

  const [modalIsOpen, setIsOpen] = React.useState(false);

  if (location.pathname === `/paymentdetails/${item._id}`) {
    const goToHome = (e) => {
      e.preventDefault();
      localStorage.removeItem("total");
      history.push("/");
    };

    function decreaseQuantity(item) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      console.log(item.quantity);

      const items = product.filter((product) => product._id === item._id);

      let raw = JSON.stringify({
        prodId: item._id,
        quantity: 1,
        numOfProducts: items.map((prod) => {
          return prod.numOfProducts;
        }),
      });

      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:5000/api/v1/products/buy", requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }

    function clearCarts() {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        userId: localStorage.getItem("id"),
      });

      const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:5000/api/v1/cart/clear", requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }

    function openModal() {
      localStorage.setItem("total", item.price + shipPrice);
      decreaseQuantity(item);
      setIsOpen(true);
    }

    function afterOpenModal() {}

    function closeModal() {
      setIsOpen(false);
    }

    return (
      <>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img
            style={{ width: "85px", margin: "0 auto" }}
            src={process.env.PUBLIC_URL + "/images/success.svg"}
            alt=""
          />
          <h1
            style={{
              color: "#6C63FF",
              textAlign: "center",
              padding: "15px 0",
            }}
          >
            Payment Successful
          </h1>
          <div
            className="transactions-container"
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              padding: "5px 0",
            }}
          >
            <h2>Name</h2>
            <h2>{localStorage.getItem("name")}</h2>
          </div>
          <div
            className="transactions-container"
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              padding: "5px 0",
            }}
          >
            <h2>Transaction ID</h2>
            <h2>{Math.floor(Math.random() * (1000000 - 99999) + 99999)}</h2>
          </div>
          <div
            className="transactions-container"
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              padding: "5px 0",
            }}
          >
            <h2>Payment Type</h2>
            <h2>Master Card</h2>
          </div>
          <div
            className="transactions-container"
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              padding: "5px 0",
            }}
          >
            <h2>Amount</h2>
            <h2>
              Rp.{" "}
              {localStorage.getItem("total")
                ? formatK(localStorage.getItem("total"))
                : 0}
            </h2>
          </div>
          <div
            className="transactions-container"
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              padding: "5px 0",
            }}
          >
            <h2>Transaction Time</h2>
            <h2>{`${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`}</h2>
          </div>
          <div
            className="modal-buttons"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "30px 20px",
            }}
          >
            <button
              className="no-button"
              style={{ width: "240px", height: "70px" }}
              onClick={(e) => goToHome(e)}
            >
              <h3>Back To Menu</h3>
            </button>
          </div>
        </Modal>
        <div className="container-items">
          <div className="title">
            <h3>Items</h3>
          </div>
          <CartContainer key={item._id} item={item} />
        </div>
        <div className="container-items">
          <div className="title">
            <h3>Shipping</h3>
          </div>
          <div className="container-form" style={{ width: "1050px" }}>
            <div className="container_box">
              <div
                className="container-descrip"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "306px",
                  marginRight: "80px",
                  padding: "10px",
                }}
              >
                <b style={{ fontSize: "20px", padding: "10px" }}>Si Kirim</b>
                <b style={{ fontSize: "18px", padding: "0 10px" }}>
                  Estimated 1 - 5 days{" "}
                  <span style={{ paddingLeft: "20px" }}>Regular</span>
                </b>
                <b style={{ fontSize: "16px", padding: "10px" }}>
                  One time guarantee
                </b>
              </div>

              <div
                className="container-option"
                style={{
                  flexDirection: "column",
                  width: "224px",
                  justifyContent: "center",
                  marginRight: "80px",
                }}
              >
                <div className="container-address" style={{ width: "100%" }}>
                  <b
                    style={{
                      fontSize: "20px",
                      color: "#575757",
                      maxWidth: "224px",
                    }}
                  >
                    {user.address}
                  </b>
                </div>
                <div
                  className="button-container"
                  style={{
                    display: "flex",
                    justifyContent: "right",
                    width: "100%",
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "#fff",
                      border: "none",
                      cursor: "pointer",
                      color: "#797878",
                      fontSize: "16px",
                      float: "right",
                    }}
                  >
                    Edit{" "}
                    <img
                      style={{ paddingLeft: "17px" }}
                      src={process.env.PUBLIC_URL + "/edit_pen.svg"}
                    />{" "}
                  </button>
                </div>
              </div>

              <div className="container-option">
                <div className="container-amount">
                  <div className="container-price">
                    <h1>Price Rp. {shipPrice ? formatK(shipPrice) : 0}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <span
          style={{
            display: "block",
            width: "1050px",
            backgroundColor: "#5D5FEF",
            height: "3px",
            margin: "auto",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        ></span>

        <div className="container-items" style={{ marginTop: "60px" }}>
          <div
            className="container-form"
            style={{
              width: "1050px",
            }}
          >
            <div
              className="container_box"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                className="container-total"
                style={{
                  display: "flex",
                  width: "100%",
                  marginLeft: "3rem",
                  padding: "10px",
                }}
              >
                <b
                  style={{ fontSize: "20px", padding: "10px", width: "100px" }}
                >
                  Sub Total
                </b>

                <div
                  className="container-total"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <b
                    style={{
                      fontSize: "20px",
                      paddingLeft: "547px",
                      width: "200px",
                    }}
                  >
                    Price Rp.{" "}
                    {item.price + shipPrice
                      ? formatK(item.price + shipPrice)
                      : 0}
                  </b>
                  <img
                    src={process.env.PUBLIC_URL + "images/arrowDown.svg"}
                    alt="Arrow Down"
                    style={{ paddingLeft: "20px" }}
                  />
                </div>
              </div>
              <span
                style={{
                  display: "block",
                  width: "1000px",
                  backgroundColor: "#ABABAB",
                  height: "2px",
                }}
              ></span>
              <div
                className="container-total"
                style={{
                  display: "flex",
                  width: "100%",
                  marginLeft: "3rem",
                  padding: "10px 10px 0 10px",
                }}
              >
                <b
                  style={{ fontSize: "16px", padding: "10px", width: "190px" }}
                >
                  Total Items cost ( 1 items)
                </b>

                <div
                  className="container-total"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <b
                    style={{
                      fontSize: "16px",
                      paddingLeft: "447px",
                      width: "200px",
                    }}
                  >
                    Price Rp. {item.price ? formatK(item.price) : 0}
                  </b>
                </div>
              </div>
              <div
                className="container-total"
                style={{
                  display: "flex",
                  width: "100%",
                  marginLeft: "3rem",
                  padding: "0 10px 10px 10px",
                }}
              >
                <b
                  style={{ fontSize: "16px", padding: "10px", width: "190px" }}
                >
                  Total Shipping cost
                </b>

                <div
                  className="container-total"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <b
                    style={{
                      fontSize: "16px",
                      paddingLeft: "447px",
                      width: "200px",
                    }}
                  >
                    Price Rp. {shipPrice ? formatK(shipPrice) : 0}
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-items"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <div
            className="container-button"
            style={{
              display: "flex",
              width: "1050px",
              flexDirection: "row-reverse",
            }}
          >
            <button className="button-proceed" onClick={openModal}>
              Proceed
            </button>
            <button className="button-cancel" onClick={() => history.goBack()}>
              Cancel
            </button>
          </div>
        </div>
      </>
    );
  }

  if (location.pathname === "/paymentdetails") {
    const harga = item.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0);

    const jumlah = item.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);

    const goToHome = (e) => {
      e.preventDefault();
      localStorage.removeItem("total");
      history.push("/");
    };

    function buy() {
      item.forEach(decreaseQuantity);
    }

    function decreaseQuantity(item) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      console.log(item.quantity);

      const items = product.filter((product) => product._id === item.prodId);

      let raw = JSON.stringify({
        prodId: item.prodId,
        quantity: item.quantity,
        numOfProducts: items.map((prod) => {
          return prod.numOfProducts;
        }),
      });

      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:5000/api/v1/products/buy", requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }

    function clearCarts() {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        userId: localStorage.getItem("id"),
      });

      const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:5000/api/v1/cart/clear", requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }

    function openModal() {
      localStorage.setItem("total", harga + shipPrice);
      buy();
      clearCarts();
      setIsOpen(true);
    }

    function afterOpenModal() {}

    function closeModal() {
      setIsOpen(false);
    }

    return (
      <>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img
            style={{ width: "85px", margin: "0 auto" }}
            src={process.env.PUBLIC_URL + "/images/success.svg"}
            alt=""
          />
          <h1
            style={{
              color: "#6C63FF",
              textAlign: "center",
              padding: "15px 0",
            }}
          >
            Payment Successful
          </h1>
          <div
            className="transactions-container"
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              padding: "5px 0",
            }}
          >
            <h2>Name</h2>
            <h2>{localStorage.getItem("name")}</h2>
          </div>
          <div
            className="transactions-container"
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              padding: "5px 0",
            }}
          >
            <h2>Transaction ID</h2>
            <h2>{Math.floor(Math.random() * (1000000 - 99999) + 99999)}</h2>
          </div>
          <div
            className="transactions-container"
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              padding: "5px 0",
            }}
          >
            <h2>Payment Type</h2>
            <h2>Master Card</h2>
          </div>
          <div
            className="transactions-container"
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              padding: "5px 0",
            }}
          >
            <h2>Amount</h2>
            <h2>
              Rp.{" "}
              {localStorage.getItem("total")
                ? formatK(localStorage.getItem("total"))
                : 0}
            </h2>
          </div>
          <div
            className="transactions-container"
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              padding: "5px 0",
            }}
          >
            <h2>Transaction Time</h2>
            <h2>{`${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`}</h2>
          </div>
          <div
            className="modal-buttons"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "30px 20px",
            }}
          >
            <button
              className="no-button"
              style={{ width: "240px", height: "70px" }}
              onClick={(e) => goToHome(e)}
            >
              <h3>Back To Menu</h3>
            </button>
          </div>
        </Modal>
        <div className="container-items">
          <div className="title">
            <h3>Items</h3>
          </div>
          {item.map((item) => (
            <CartContainer key={item._id} item={item} />
          ))}
        </div>
        <div className="container-items">
          <div className="title">
            <h3>Shipping</h3>
          </div>
          <div className="container-form" style={{ width: "1050px" }}>
            <div className="container_box">
              <div
                className="container-descrip"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "306px",
                  marginRight: "80px",
                  padding: "10px",
                }}
              >
                <b style={{ fontSize: "20px", padding: "10px" }}>Si Kirim</b>
                <b style={{ fontSize: "18px", padding: "0 10px" }}>
                  Estimated 1 - 5 days{" "}
                  <span style={{ paddingLeft: "20px" }}>Regular</span>
                </b>
                <b style={{ fontSize: "16px", padding: "10px" }}>
                  One time guarantee
                </b>
              </div>

              <div
                className="container-option"
                style={{
                  flexDirection: "column",
                  width: "224px",
                  justifyContent: "center",
                  marginRight: "80px",
                }}
              >
                <div
                  className="container-address"
                  style={{
                    maxWidth: "224px",
                  }}
                >
                  <b
                    style={{
                      fontSize: "20px",
                      color: "#575757",
                      maxWidth: "224px",
                      display: "inline-block",
                    }}
                  >
                    {user.address}
                  </b>
                </div>
                <div
                  className="button-container"
                  style={{
                    display: "flex",
                    justifyContent: "right",
                    width: "100%",
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "#fff",
                      border: "none",
                      cursor: "pointer",
                      color: "#797878",
                      fontSize: "16px",
                      float: "right",
                    }}
                  >
                    Edit{" "}
                    <img
                      style={{ paddingLeft: "17px" }}
                      src={process.env.PUBLIC_URL + "/edit_pen.svg"}
                    />{" "}
                  </button>
                </div>
              </div>

              <div className="container-option">
                <div className="container-amount">
                  <div className="container-price">
                    <h1>Price Rp. {shipPrice ? formatK(shipPrice) : 0}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <span
          style={{
            display: "block",
            width: "1050px",
            backgroundColor: "#5D5FEF",
            height: "3px",
            margin: "auto",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        ></span>

        <div className="container-items" style={{ marginTop: "60px" }}>
          <div
            className="container-form"
            style={{
              width: "1050px",
            }}
          >
            <div
              className="container_box"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                className="container-total"
                style={{
                  display: "flex",
                  width: "100%",
                  marginLeft: "3rem",
                  padding: "10px",
                }}
              >
                <b
                  style={{ fontSize: "20px", padding: "10px", width: "100px" }}
                >
                  Sub Total
                </b>

                <div
                  className="container-total"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <b
                    style={{
                      fontSize: "20px",
                      paddingLeft: "547px",
                      width: "200px",
                    }}
                  >
                    Price Rp.{" "}
                    {harga + shipPrice ? formatK(harga + shipPrice) : 0}
                  </b>
                  <img
                    src={process.env.PUBLIC_URL + "images/arrowDown.svg"}
                    alt="Arrow Down"
                    style={{ paddingLeft: "20px" }}
                  />
                </div>
              </div>
              <span
                style={{
                  display: "block",
                  width: "1000px",
                  backgroundColor: "#ABABAB",
                  height: "2px",
                }}
              ></span>
              <div
                className="container-total"
                style={{
                  display: "flex",
                  width: "100%",
                  marginLeft: "3rem",
                  padding: "10px 10px 0 10px",
                }}
              >
                <b
                  style={{ fontSize: "16px", padding: "10px", width: "190px" }}
                >
                  Total Items cost ( {jumlah} items)
                </b>

                <div
                  className="container-total"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <b
                    style={{
                      fontSize: "16px",
                      paddingLeft: "447px",
                      width: "200px",
                    }}
                  >
                    Price Rp. {harga ? formatK(harga) : 0}
                  </b>
                </div>
              </div>
              <div
                className="container-total"
                style={{
                  display: "flex",
                  width: "100%",
                  marginLeft: "3rem",
                  padding: "0 10px 10px 10px",
                }}
              >
                <b
                  style={{ fontSize: "16px", padding: "10px", width: "190px" }}
                >
                  Total Shipping cost
                </b>

                <div
                  className="container-total"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <b
                    style={{
                      fontSize: "16px",
                      paddingLeft: "447px",
                      width: "200px",
                    }}
                  >
                    Price Rp. {shipPrice ? formatK(shipPrice) : 0}
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-items"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <div
            className="container-button"
            style={{
              display: "flex",
              width: "1050px",
              flexDirection: "row-reverse",
            }}
          >
            <button className="button-proceed" onClick={openModal}>
              Proceed
            </button>
            <button className="button-cancel" onClick={() => history.goBack()}>
              Cancel
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container-items">
        <div className="title">
          <h3>Items</h3>
        </div>
        {item.map((item) => (
          <CartContainer key={item._id} item={item} {...cartIcon} />
        ))}
      </div>
    </>
  );
}

export default CartItem;
