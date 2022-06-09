import React from "react";
import "./Assets/Css/App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Purches } from "./Components/Purches/Purches";

export function App() {
  return (
    <div id="main-window">
      <div id="header">
        <Navbar />
      </div>
      <div id="content">
        <div id="content-left">
          <div id="content-left-header"></div>
          <div id="content-left-body"></div>
        </div>
        <div id="content-right">
          <Purches />
        </div>
      </div>
    </div>
  );
}
