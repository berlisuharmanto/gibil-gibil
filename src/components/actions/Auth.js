import React, { useEffect } from "react";

function Auth() {
  const [user, setUser] = React.useState({});
  const [login, setLogin] = React.useState(localStorage.getItem("token"));
  const [admin, setAdmin] = React.useState();

  const requestOptions = {
    method: "GET",
  };

  const fetchUser = async () => {
    const data = await fetch(
      `https://gibil-server.herokuapp.com/api/v1/user/${localStorage.getItem(
        "id"
      )}`,
      requestOptions
    );
    const userData = await data.json();
    setUser(userData.user);
    console.log(userData.user.isAdmin);
  };

  useEffect(() => {
    fetchUser();
    setLogin(localStorage.getItem("token"));
    setAdmin(user.isAdmin);
  }, [localStorage.getItem("token")]);

  return [login, admin];
}

export default Auth;
