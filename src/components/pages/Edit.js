import React, { useEffect, useState } from "react";
import UserEditForm from "../UserEditForm";
import useLoading from "../actions/useLoading";
import Loading from "../Loading";
import Auth from "../actions/Auth";
import NotAuthorize from "../NotAuthorize";

function Edit() {
  useEffect(() => {
    fetchUser();
  }, []);

  const requestOptions = {
    method: "GET",
  };
  const [user, setUser] = useState({});
  const fetchUser = async () => {
    const data = await fetch(
      `https://gibil-server.vercel.app/api/v1/user/${localStorage.getItem(
        "id"
      )}`,
      requestOptions
    );
    const user = await data.json();
    setUser(user.user);
  };

  const loadingPage = useLoading();

  const [login, admin] = Auth();

  if (loadingPage) {
    return <Loading />;
  } else if (!login) {
    return <NotAuthorize />;
  }
  return (
    <>
      <div
        className="edit-user"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <UserEditForm user={user} key={user._id} />
      </div>
    </>
  );
}

export default Edit;
