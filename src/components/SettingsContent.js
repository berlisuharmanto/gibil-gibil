import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./SettingsContent.css";

function SettingsContent({
  settingsTitle,
  settingsCont01,
  settingsCont02,
  settingsCont03,
  settingsCont04,
  no_account,
}) {
  useEffect(() => {
    setLogin(localStorage.getItem("token"));
  }, [localStorage.getItem("token")]);

  const [login, setLogin] = useState(localStorage.getItem("token"));

  let history = useHistory();
  const logout = (e) => {
    e.preventDefault();

    localStorage.removeItem("name");
    localStorage.removeItem("token");
    console.log("WHY IS IT NOT WORKING???????");
    history.push("/");
  };

  if (!login) {
    return (
      <>
        <div className="content">
          <form onSubmit={(e) => logout(e)}>
            <table>
              <tr>
                <b className="title">{settingsTitle}</b>
              </tr>
              <tr>
                <td>{settingsCont01}</td>
                <td className="edit">
                  <Link to="/">
                    Edit <img src={process.env.PUBLIC_URL + "/edit_pen.svg"} />{" "}
                  </Link>
                </td>
              </tr>
              <tr>
                <td>{settingsCont02}</td>
                <td className="edit">
                  <Link to="/">
                    Edit <img src={process.env.PUBLIC_URL + "/edit_pen.svg"} />{" "}
                  </Link>
                </td>
              </tr>
              <tr>
                <td>{settingsCont03}</td>
                <td className="edit">
                  <Link to="/">
                    Edit <img src={process.env.PUBLIC_URL + "/edit_pen.svg"} />{" "}
                  </Link>
                </td>
              </tr>
              <tr>
                <td colspan="2" className="payment_method">
                  <div className="payment_text">
                    <label htmlFor="">{settingsCont04}</label>{" "}
                    <input
                      type="text"
                      className="no_account"
                      name={no_account}
                    />
                  </div>
                </td>
              </tr>
            </table>
            <div className="logout"></div>
          </form>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="content">
        <form onSubmit={(e) => logout(e)}>
          <table>
            <tr>
              <b className="title">{settingsTitle}</b>
            </tr>
            <tr>
              <td>{settingsCont01}</td>
              <td className="edit">
                <Link to="/">
                  Edit <img src={process.env.PUBLIC_URL + "/edit_pen.svg"} />{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <td>{settingsCont02}</td>
              <td className="edit">
                <Link to="/">
                  Edit <img src={process.env.PUBLIC_URL + "/edit_pen.svg"} />{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <td>{settingsCont03}</td>
              <td className="edit">
                <Link to="/">
                  Edit <img src={process.env.PUBLIC_URL + "/edit_pen.svg"} />{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <td colspan="2" className="payment_method">
                <div className="payment_text">
                  <label htmlFor="">{settingsCont04}</label>{" "}
                  <input type="text" className="no_account" name={no_account} />
                </div>
              </td>
            </tr>
          </table>
          <div className="logout">
            <button type="submit" className="button">
              {" "}
              Log Out{" "}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SettingsContent;
