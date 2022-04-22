import React, { useEffect } from "react";
import "../Assets/Css/Chek.css";
import NumberFormat from "react-number-format";
import { shadows } from "@mui/system";

import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { deleteItem, increment, decrement } from "../Redux/Actions/acBasket";

export function Chek() {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.reBasket);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  function Delete(id) {
    dispatch(deleteItem(id));
  }

  function Decrement(id) {
    dispatch(decrement(id));
  }

  function Increment(id) {
    dispatch(increment(id));
  }

  return (
    <>
      {basket.map((item, index) => {
        return (
          <div id="chek-product" key={index}>
            <div>
              <p>{item.name}</p>
              <p>{item.count}x</p>
              <NumberFormat
                value={item.price * item.count}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />

              <i>
                {">"} {item.have - item.count}
              </i>
            </div>
            <div>
              <Button
                sx={{ boxShadow: 1 }}
                onClick={Delete.bind(this, item.id)}
              >
                <DeleteIcon />
              </Button>
              <Button
                sx={{ boxShadow: 1 }}
                onClick={Decrement.bind(this, item.id)}
              >
                <RemoveIcon />
              </Button>
              <Button
                sx={{ boxShadow: 1 }}
                onClick={Increment.bind(this, item.id)}
              >
                <AddIcon />
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
}
