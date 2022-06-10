import React from "react";
import "./Assets/Css/App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Purches } from "./Components/Purches/Purches";
import { Product } from "./Components/Product/Product";

export function App() {
  return (
    <div id="main-window">
      <div id="header">
        <Navbar />
      </div>
      <div id="content">
        <div id="content-left">
          <Product />
        </div>
        <div id="content-right">
          <Purches />
        </div>
      </div>
    </div>
  );
}
