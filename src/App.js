import React from "react";
import "./Assets/Css/App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Purches } from "./Components/Purches/Purches";
import { Product } from "./Components/Product/Product";
import { Login } from "./Components/Login/Login";
import { useSelector } from "react-redux";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export function App() {
  const isLogin = useSelector((state) => state.reLogin);
  const isLoading = useSelector((state) => state.reLoading);

  console.log(isLoading);

  return (
    <>
      {isLogin ? (
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
        <Login />
      )}

      <Backdrop
        open={isLoading}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 99999 }}
      >
        <CircularProgress
          style={{
            color: "white",
            width: "70px",
            height: "70px",
          }}
        />
      </Backdrop>
    </>
  );
}
