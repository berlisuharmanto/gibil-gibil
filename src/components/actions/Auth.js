import React, { useEffect } from "react";

function Auth() {
  const [user, setUser] = React.useState({});
  const [login, setLogin] = React.useState(localStorage.getItem("token"));
  const [admin, setAdmin] = React.useState(false);
  const [id, setId] = React.useState(localStorage.getItem("id"));

  const requestOptions = {
    method: "GET",
  };

  const fetchUser = async () => {
    const data = await fetch(
      `https://gibil-server.vercel.app/api/v1/user/${localStorage.getItem(
        "id"
      )}`,
      requestOptions
    );
    const userData = await data.json();
    setUser(userData.user);
  };

  useEffect(() => {
    setLogin(localStorage.getItem("token"));
  }, [localStorage.getItem("token")]);

  useEffect(() => {
    if (id) {
      fetchUser();
    } else {
      setUser({});
    }
    setAdmin(user.isAdmin);
  }, [user.isAdmin === true]);

  return [login, admin];
}

export default Auth;
