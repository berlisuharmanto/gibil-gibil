import React, { useState } from "react";
import "./FormSignUp.css";
import { useHistory } from "react-router-dom";

function FormSignUp({
  img,
  title1,
  NameLabel,
  EmailLabel,
  Address,
  passLabel,
  passConfirmation,
  button1,
  bg,
}) {
  let history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirm, setPasswordConfirmation] = useState("");

  const register = (e) => {
    e.preventDefault();

    if (name === "") {
      alert("Name is required");
    } else if (email === "") {
      alert("Email is required");
    } else if (address === "") {
      alert("Address is required");
    } else if (password === "") {
      alert("Password is required");
    } else if (password.length < 7) {
      alert("Password at least 8 character");
    } else if (passConfirm === "") {
      alert("Password Confirmation is required");
    } else if (password !== passConfirm) {
      alert("Password and Password Confirmation doesn't match");
    } else {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        email,
        plainPassword: password,
        name,
        address,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://gibil-server.herokuapp.com/api/v1/register",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          const { id, name, token } = result;
          localStorage.setItem("id", id);
          localStorage.setItem("name", name);
          localStorage.setItem("token", token);
          history.push("/");
        })
        .catch((error) => console.log("error", error));
    }
  };
  return (
    <div className="hero-sign-up" style={{ backgroundImage: `url(${bg})` }}>
      <div className="CardSignUp">
        <div className="LogoWrapper">
          <img src={img} alt="banner" />
          <b className="title1">{title1}</b>
        </div>
        <div className="CardForm">
          <form onSubmit={(e) => register(e)}>
            <label>{NameLabel}</label>
            <input
              type="text"
              name="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>{EmailLabel}</label>
            <input
              type="email"
              name="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>{Address}</label>
            <input
              type="tel"
              name="Phone Number"
              max="13"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></input>
            <label>{passLabel}</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>{passConfirmation}</label>
            <input
              type="password"
              name="password Confirmation"
              value={passConfirm}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <div className="Terms">
              <input className="check-box" type="checkbox" required />
              <label for="Agreement">
                I agree with the terms and conditions
              </label>
            </div>
            <button id="button" type="submit">
              {button1}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormSignUp;
