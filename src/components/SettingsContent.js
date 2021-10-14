import React from "react";
import { Link } from "react-router-dom";
import "./SettingsContent.css";

function SettingsContent({settingsTitle, settingsCont01, settingsCont02, settingsCont03, settingsCont04, no_account}) {
    return (
        <>
            <div className="content">
                <table>
                    <tr>
                        <b className="title">{settingsTitle}</b>
                    </tr>
                    <tr>
                        <td>
                            {settingsCont01}
                        </td>
                        <td className="edit">
                            <Link to="/">Edit <img src={process.env.PUBLIC_URL + "/edit_pen.svg"} /> </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {settingsCont02}
                        </td>
                        <td className="edit">
                            <Link to="/">Edit <img src={process.env.PUBLIC_URL + "/edit_pen.svg"} /> </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {settingsCont03}
                        </td>
                        <td className="edit">
                            <Link to="/">Edit <img src={process.env.PUBLIC_URL + "/edit_pen.svg"} /> </Link>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" className="payment_method">
                            <Link to="/" className="payment_text">
                                {settingsCont04} <p className="no_account">{no_account}</p>
                            </Link>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="logout">
                <button className="button"> Log Out </button>
            </div>
        </>
    );
}

export default SettingsContent;