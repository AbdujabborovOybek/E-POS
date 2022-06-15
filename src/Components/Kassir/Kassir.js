import React from "react";
import "./Kassir.css";
import { useSelector } from "react-redux";
// import NumberFormat from "react-number-format";

export function Kassir() {
  const user = useSelector((state) => state.reUser);

  return (
    <div id="kassir">
      <div id="kassir-left-card">
        <figure>
          <img src={user.img} alt="" />
        </figure>
      </div>
      <div id="kassir-right-card">
        <h1>{user.name}</h1>
        <p>Tel: {user.tel}</p>
      </div>
    </div>
  );
}
