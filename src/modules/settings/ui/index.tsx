import React from "react";
import SettingsHeader from "./components/header";
import UserInfo from "./components/info";

export default function SettingsView() {
  return (
    <div className="flex flex-col gap-4">
      <SettingsHeader />
      <UserInfo />
    </div>
  );
}
