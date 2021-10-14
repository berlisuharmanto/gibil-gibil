import React, { useState } from "react";
import "./FormSignUp.css";
import { Link, useHistory } from "react-router-dom";

function FormSignUp({
  img,
  title1,
  NameLabel,
  EmailLabel,
  PhoneNumber,
  passLabel,
  passConfirmation,
  button1,
  bg,
}) {
  let history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirm, setPasswordConfirmation] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (name === "") {
      alert("Name is required");
    } else if (email === "") {
      alert("Email is required");
    } else if (phoneNumber === "") {
      alert("Phone Number is required");
    } else if (phoneNumber.length < 9) {
      alert("Phone Number at least 10 character");
    } else if (password === "") {
      alert("Password is required");
    } else if (password.length < 7) {
      alert("Password at least 8 character");
    } else if (passConfirm === "") {
      alert("Password Confirmation is required");
    } else if (password !== passConfirm) {
      alert("Password and Password Confirmation doesn't match");
    } else {
      history.push("/Home");
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
          <form onSubmit={(e) => handleLogin(e)}>
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
            <label>{PhoneNumber}</label>
            <input
              type="tel"
              name="Phone Number"
              max="13"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
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
              <input className="check-box" type="checkbox" />
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
