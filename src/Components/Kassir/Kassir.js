import React from "react";
import "./Kassir.css";
import { useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export function Kassir() {
  const user = useSelector((state) => state.reUser);

  return (
    <div id="kassir">
      <div id="kassir-left-card">
        <figure>
          {user.img ? <img src={user.img} alt="" /> : <AccountCircleIcon />}
        </figure>
      </div>
      <div id="kassir-right-card">
        <h1>{user.name}</h1>
        <p>Tel: {user.tel}</p>
      </div>
    </div>
  );
}
