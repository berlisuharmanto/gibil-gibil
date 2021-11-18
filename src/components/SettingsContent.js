import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./SettingsContent.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "20%",
    borderRadius: "10px",
  },
};

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

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

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
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2
          style={{
            color: "#000",
            textAlign: "center",
            fontSize: "20px",
            padding: "50px 0",
          }}
        >
          Are you sure you want to log out?
        </h2>
        <div
          className="modal-buttons"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "30px 20px",
          }}
        >
          <button className="yes-button" onClick={(e) => logout(e)}>
            Yes
          </button>
          <button className="no-button" onClick={closeModal}>
            No
          </button>
        </div>
      </Modal>
      <div className="content">
        <>
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
            <button onClick={openModal} className="button">
              {" "}
              Log Out{" "}
            </button>
          </div>
        </>
      </div>
    </>
  );
}

export default SettingsContent;
