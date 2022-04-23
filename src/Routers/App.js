import React, { useEffect } from "react";
import "../Assets/Css/App.css";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import { SnackbarProvider } from "notistack";
import { Login } from "../Pages/Login";
import { acLogin } from "../Redux/Actions/acLogin";
import { useDispatch } from "react-redux";
import { Router } from "./Router";

const auth = JSON.parse(localStorage.getItem("auth"));

export function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.reLoading);
  const login = useSelector((state) => state.reLogin);

  useEffect(() => {
    if (auth === "qwfqwfqeg42") {
      dispatch(acLogin(true));
    }
  }, [dispatch]);

  return (
    <SnackbarProvider maxSnack={3}>
      {login ? <Router /> : <Login />}

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </SnackbarProvider>
  );
}
