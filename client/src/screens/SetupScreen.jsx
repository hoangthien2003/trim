import React from "react";
import { Outlet } from "react-router-dom";

function SetupScreen() {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
}

export default SetupScreen;
