import React, { useEffect, useState } from "react";
import "../Assets/Css/Router.css";
import { Navbar } from "../Components/Navbar";
import { Products } from "../Components/Products";
import { Admin } from "../Components/Admin";
import { Button } from "@mui/material";
import NumberFormat from "react-number-format";
import { Chek } from "../Components/Chek";
import { useSelector } from "react-redux";

export function Router() {
  const [totalPrice, setTotalPrice] = useState(0);
  const basket = useSelector((state) => state.reBasket);
  useEffect(() => {
    setTotalPrice(
      basket.reduce((acc, item) => {
        return acc + item.price * item.count;
      }, 0)
    );
  }, [basket]);

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
          <Chek />
        </div>

        <Button>
          {totalPrice <= 0 ? (
            ":( "
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
