import React from "react";
import "./Kassir.css";
import { useSelector } from "react-redux";
import NumberFormat from "react-number-format";

export function Kassir() {
  const user = useSelector((state) => state.reUser);

  return (
    <div id="kassir">
      <div id="kassir-left-card">
        <figure>
          <img src={user.img} alt="" />
        </figure>
        <p>Ish tajribasi</p>
        <p>4oy</p>
      </div>
      <div id="kassir-right-card">
        <h1>{user.name}</h1>
        <div>
          <p>
            <span>Xisob:</span>
            <NumberFormat
              value={user.fund}
              displayType="text"
              thousandSeparator={true}
            />
          </p>

          <p>
            <span>Ish kuni:</span>
            <span>25 kun</span>
          </p>
        </div>

        <p>{user.tel}</p>
      </div>
    </div>
  );
}
