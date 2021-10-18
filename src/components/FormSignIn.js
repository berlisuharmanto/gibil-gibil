import React, { useState } from "react";
import "./FormSignIn.css";
import { Link, useHistory } from "react-router-dom";

function FormSignIn({
  img,
  logo,
  title1,
  title2,
  emailLabel,
  passLabel,
  button1,
  button2,
  spanText,
}) {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "") {
      alert("Email is required");
    } else if (password === "") {
      alert("Password is required");
    } else if (password.length < 7) {
      alert("Password at least 8 character");
    } else {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        email,
        password,
      });

      const loginPost = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:5000/api/v1/login", loginPost)
        .then((response) => response.text())
        .then((result) => {
          myHeaders.append("Accept", "*/*");
          myHeaders.append("Connection", "keep-alive");
          myHeaders.append(
            "Authorization",
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjM0NDQyMTE5LCJleHAiOjE2MzQ1Mjg1MTl9.xmP2HsutAQYdWxNCFyxl2gN9qhTPybwBC6h94PFxgt0"
          );

          const authorized = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
          };

          fetch("http://localhost:5000/api/v1/dashboard", authorized)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
        })
        .catch((error) => console.log("error", error));

      history.push("/");
    }
  };
  return (
    <>
      <div className="hero-sign-in">
        <div
          className="sign-in-banner"
          style={{ backgroundImage: `url(${img})` }}
        >
          <img src={logo} alt={logo} />
        </div>
        <div className="form_main">
          <div className="container-form">
            <div className="text-wrapper">
              <b className="title1">{title1}</b>
              <b className="title2">{title2}</b>
            </div>
            <form onSubmit={(e) => handleLogin(e)}>
              <label>{emailLabel}</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>{passLabel}</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="sign-in-button">
                <button type="submit">{button1}</button>
                <div className="or">
                  <img src={spanText} alt="or" />
                </div>
                <Link to="/signup">{button2}</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormSignIn;
