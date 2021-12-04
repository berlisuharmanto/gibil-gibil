import React from "react";
import SettingsContent from "../SettingsContent";
import { settingObj } from "./Data";
import useLoading from "../actions/useLoading";
import Loading from "../Loading";

function Settings() {
  const loadingPage = useLoading();

  if (loadingPage) {
    return <Loading />;
  }
  return (
    <>
      <SettingsContent {...settingObj} />
    </>
  );
}

export default Settings;
