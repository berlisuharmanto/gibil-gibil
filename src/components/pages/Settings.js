import React from "react";
import SettingsContent from "../SettingsContent";
import { settingObj } from "./Data";

function Settings() {
  return (
    <>
      <SettingsContent {...settingObj}/>
    </>
  );
}
  
export default Settings;