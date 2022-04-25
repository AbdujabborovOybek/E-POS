import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "../Assets/Css/Router.css";
import { Navbar } from "../Components/Navbar";
import { Products } from "../Components/Products";
import { Admin } from "../Components/Admin";
import { Button } from "@mui/material";
import NumberFormat from "react-number-format";
import { useSelector } from "react-redux";

import { Chek } from "../Components/Chek";
import { History } from "../Components/History";
import { Message } from "../Components/Message";
import { useDispatch } from "react-redux";
import { acLoading } from "../Redux/Actions/acLoading";
import { clearBasket } from "../Redux/Actions/acBasket";
import { useSnackbar } from "notistack";
import axios from "axios";

export function Router() {
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.reBasket);
  useEffect(() => {
    let sum = 0;
    if (basket.length > 0) {
      basket.map((item) => {
        sum += item.price * item.count;
        return setTotalPrice(sum);
      });
    } else {
      setTotalPrice(0);
    }
  }, [basket]);

  const { enqueueSnackbar } = useSnackbar();

  function Buy() {
    if (basket.length > 0) {
      dispatch(acLoading(true));
      axios("https://terminal-crm.herokuapp.com/products", {
        method: "POST",
        data: {
          status: "shopping",
          data: data,
          time: time,
          total_price: totalPrice,
          kassir: "Oybek Abdujabborov",
          basket: basket,
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.data.status) {
            dispatch(acLoading(false));
            dispatch(clearBasket());
            enqueueSnackbar(res.data.msg, { variant: "success" });
          } else {
            dispatch(acLoading(false));
            enqueueSnackbar(res.data.msg, { variant: "error" });
          }
        })
        .catch((err) => {
          dispatch(acLoading(false));
          enqueueSnackbar(err, { variant: "error" });
        });
    } else {
      enqueueSnackbar("Xechnarsa tanlanmagan", { variant: "error" });
    }
  }

  return (
    <div id="contener">
      <div>
        <Navbar />
        <div id="all-content">
          <Products />
        </div>
      </div>
      <div id="check">
        <Admin />

        <div id="basket-card">
          <Routes>
            <Route path="/" element={<Chek />} />
            <Route path="/history" element={<History />} />
            <Route path="/message" element={<Message />} />
          </Routes>
        </div>

        <Button onClick={Buy}>
          {totalPrice <= 0 ? (
            "UITC IT CLUBS"
          ) : (
            <NumberFormat
              value={totalPrice}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          )}
        </Button>
      </div>
    </div>
  );
}

const data = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
