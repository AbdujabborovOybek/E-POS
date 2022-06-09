import React from "react";
import "./Assets/Css/App.css";
import { Navbar } from "./Components/Navbar/Navbar";

export function App() {
  return (
    <div id="main-window">
      <div id="header">
        <Navbar />
      </div>
      <div id="content">
        <div id="content-left"></div>
        <div id="content-right"></div>
      </div>
    </div>
  );
}
