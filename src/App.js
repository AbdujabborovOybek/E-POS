import React, { useState } from "react";
import "./Assets/Css/App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Purches } from "./Components/Purches/Purches";
import { Product } from "./Components/Product/Product";
import { Login } from "./Components/Login/Login";

export function App() {
  const [isLogin, setIsLogin] = useState(false);

  return isLogin ? (
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
  ) : (
    <Login setIsLogin={setIsLogin} />
  );
}
