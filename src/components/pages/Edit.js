import React, { useEffect, useState } from "react";
import UserEditForm from "../UserEditForm";

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
      `http://localhost:5000/api/v1/user/${localStorage.getItem("id")}`,
      requestOptions
    );
    const user = await data.json();
    setUser(user.user);
  };
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
