import React, { useState } from "react";
import "./FormSignIn.css";
import { Link, useHistory } from "react-router-dom";


function FormSignIn({img, title1, title2, emailLabel, passLabel, button1, button2,spanText}){
  let history = useHistory();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === ''){
      alert("Email is required");
    }else if (password === ''){
      alert("Password is required");
    }else if (password.length < 7){
      alert("Password at least 8 character");
    }else{
      history.push("/Home");
    }
  }
  return (
    <>
      <div className="hero-sign-in">
        <div className="sign-in-banner">
          <img src={img} alt="banner"/>
        </div>
        <div className="form_main">
          <div className="container-form">
            <div className="text-wrapper">
              <b className="title1">{title1}</b>
              <b className="title2">{title2}</b>
            </div>
            <form onSubmit={(e)=>handleLogin(e)}>
              <label>{emailLabel}</label>
              <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <label>{passLabel}</label>
              <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
              <div className="sign-in-button">
                <button type="submit">{button1}</button>
                <div className="or">
                  <img src={spanText} alt="or"/>
                </div>
                <Link to="/SignUp">{button2}</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
    ); 
}

export default FormSignIn;