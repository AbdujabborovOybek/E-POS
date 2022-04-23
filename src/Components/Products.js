import React from "react";
import { Button } from "@mui/material";
import "../Assets/Css/Products.css";
import NumberFormat from "react-number-format";
import { Data } from "../Data/Data";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToBasket, increment } from "../Redux/Actions/acBasket";

import { useNavigate, useLocation } from "react-router-dom";


export function Products() {
  const location = useLocation();
  const basket = useSelector((state) => state.reBasket);
  const search = useSelector((state) => state.reSeach);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function AddToBasket(item) {
    if (location.pathname !== "/") {
      navigate("/");
    }

    if (item.count === 0) {
      item.count = 1;
    }
    if (basket.length === 0) {
      dispatch(addToBasket(item));
    } else {
      let code = true;
      basket.map((el) => {
        if (el.id === item.id) {
          dispatch(increment(item.id));
          code = false;
        }
        return null;
      });

      if (code) {
        dispatch(addToBasket(item));
      }
    }
  }

  const data = Data.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.code
        .toLowerCase()
        .includes(search === "" ? item.code : search.toLowerCase())
    );
  });

  return (
    <>
      {data.length !== 0 ? (
        data.map((item, index) => {
          return (
            <div id="product" key={index} style={{ background: colors(index) }}>
              <div id="product-info">
                <p>{item.name}</p>

                <p>{fixAbout(item.about)}</p>
              </div>
              <div id="product-count">
                <NumberFormat
                  value={item.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <Button onClick={AddToBasket.bind(this, item, item.id)}>
                  <AddShoppingCartIcon />
                </Button>
              </div>
            </div>
          );
        })
      ) : (
        <div id="err-serach">
          <p>Maxsulot topilmadi...</p>
        </div>
      )}

      
    </>
  );
}

function fixAbout(about) {
  if (about.length > 110) {
    return about.substring(0, 150) + "...";
  } else {
    return about;
  }
}

function colors(num) {
  if (num % 2 === 0 && num % 4) {
    return "#E85F31";
  }
  if (num % 2 === 0 && !(num % 4)) {
    return "#FF9338";
  }
  if (num % 1 === 0 && num % 5 === 0) {
    return "#0065AB";
  }
  if (num % 1 === 0 && num % 7 === 0) {
    return "#563F59";
  }
}
