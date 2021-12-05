import React, { useState } from "react";
import { useHistory } from "react-router";
import "./UserEditForm.css";

function UserEditForm({ user }) {
  const [address, setAddress] = useState(user.address);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);

  let history = useHistory();

  const updateProfile = (e) => {
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
    } else {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        userId: user._id,
        email,
        name,
        password,
        address,
      });

      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("https://gibil-server.herokuapp.com/api/v1/edit", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          localStorage.setItem("name", name);
          history.push("/settings");
        })
        .catch((error) => console.log("error", error));
    }
  };

  return (
    <>
      <form className="form-container" onSubmit={(e) => updateProfile(e)}>
        <h2>Edit Profile</h2>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div
          className="form-group"
          style={{ display: "flex", flexDirection: "row-reverse" }}
        >
          <button className="save" type="submit">
            Save
          </button>
          <button className="cancel" onClick={() => history.goBack()}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

export default UserEditForm;
