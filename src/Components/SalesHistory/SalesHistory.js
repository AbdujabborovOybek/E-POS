import React, { useEffect, useState } from "react";
import "./SalesHistory.css";
import axios from "axios";
import NumberFormat from "react-number-format";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";
const HOST = process.env.REACT_APP_HOST;

export function SalesHistory() {
  const [history, setHistory] = useState([]);
  const user = useSelector((state) => state.reUser);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    axios(`${HOST}/api/view_purchase_history`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: 123456789,
      },
    })
      .then((res) => {
        setHistory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [enqueueSnackbar]);

  return (
    <div id="salesHistory">
      {history.map((item, index) => {
        if (item.user_id === user.id) {
          return (
            <div id="sales-product" key={item.id}>
              <h2>
                {item.date} {item.time}
              </h2>
              {Product(item.shopping)}
              <h3>
                <span>Xisob: </span>
                <NumberFormat
                  value={item.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  renderText={(value) => <span>{value} so`m</span>}
                />
              </h3>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

function Product(arrData) {
  return arrData.map((item, index) => {
    return (
      <div key={item.id} id="pr_list">
        <p>
          <span>{index + 1}</span>
          <span>{item.name}</span>
          <span>
            {item.count} {item.type}
          </span>
          <NumberFormat
            value={item.price}
            displayType={"text"}
            thousandSeparator={true}
            renderText={(value) => <span id="product-price">{value}sum</span>}
          />
        </p>
      </div>
    );
  });
}
