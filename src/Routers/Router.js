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
      setTimeout(() => {
        dispatch(acLoading(false));
        dispatch(clearBasket());
        enqueueSnackbar("Xarid amalga oshirildi", { variant: "success" });
      }, 2000);
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
