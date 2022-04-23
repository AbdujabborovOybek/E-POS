import React, { useState } from "react";
import "../Assets/Css/Login.css";
import basket from "../Assets/Icons/basket.svg";
import eye_on from "../Assets/Icons/eye-Regular.svg";
import eye_off from "../Assets/Icons/eye-slash-Regular.svg";
import lock from "../Assets/Icons/lock.svg";
import user from "../Assets/Icons/user.svg";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

import { acLogin } from "../Redux/Actions/acLogin";
import { acLoading } from "../Redux/Actions/acLoading";

export function Login() {
  const [eye, setEye] = useState(false);
  const [data, setData] = useState({ login: "", password: "" });
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  function hendlSubmit(e) {
    e.preventDefault();
    dispatch(acLoading(true));

    if (data.login !== "" && data.password !== "") {
      setTimeout(() => {
        if (data.login === "admin" && data.password === "admin") {
          dispatch(acLogin(true));
          dispatch(acLoading(false));
          enqueueSnackbar("Tizimga xush kelibsiz", { variant: "success" });
          localStorage.setItem("auth", JSON.stringify("qwfqwfqeg42"));
        } else {
          dispatch(acLoading(false));
          enqueueSnackbar("Login yoki parol noto'g'ri", { variant: "error" });
        }
      }, 2000);
    } else {
      dispatch(acLoading(false));
      enqueueSnackbar("Login va Parolni kiriting", { variant: "error" });
    }

    setData({ login: "", password: "" });
  }

  return (
    <div id="login">
      <form id="login-form" onSubmit={hendlSubmit}>
        <img src={basket} alt="" />

        <div>
          <img src={user} alt="" />
          <input
            type="text"
            placeholder="Login"
            value={data.login}
            onChange={(e) => setData({ ...data, login: e.target.value })}
          />
        </div>

        <div>
          <img src={lock} alt="" />
          <input
            type={eye ? "text" : "password"}
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button type="button" onClick={() => setEye(!eye)}>
            <img src={eye ? eye_on : eye_off} alt="" />
          </button>
        </div>

        <input type="submit" value="LOGIN" />
      </form>
    </div>
  );
}
