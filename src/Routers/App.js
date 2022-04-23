import React from "react";
import "../Assets/Css/App.css";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import { SnackbarProvider } from "notistack";

import { Router } from "./Router";

export function App() {
  const loading = useSelector((state) => state.reLoading);
  return (
    <SnackbarProvider maxSnack={3}>
      <Router />

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </SnackbarProvider>
  );
}
