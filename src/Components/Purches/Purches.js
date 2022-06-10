import React, { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";
import "./Purches.css";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useSelector, useDispatch } from "react-redux";
import NumberFormat from "react-number-format";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import { removeBasket, updateBasket } from "../../Reducer/Basket";

export function Purches() {
  const basket = useSelector((state) => state.reBasket);
  const [totalPrice, setTotalPrice] = useState(0);
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  // functin for auto scrol to bottom
  const el = useRef(null);
  useEffect(() => {
    if (el.current) {
      el.current.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  }, [basket]);

  // Total cost calculation function
  useEffect(() => {
    let total = 0;
    basket.map((item) => {
      total += item.price * item.count;
      return null;
    });
    setTotalPrice(total);
  }, [basket]);

  return (
    <div id="purches">
      <div id="purches-header">
        <p>
          <span>{basket.length}</span>
          <span>Maxsulot</span>
        </p>
        <Button>
          <FormatListBulletedIcon fontSize="medium" />
        </Button>
      </div>
      <div id="purches-body">
        {basket.map((item, index) => {
          return (
            <div
              id="purches-item"
              key={item.id}
              ref={el}
              onClick={() => {
                setOpen(index);
                setCount(item.count);
              }}
            >
              <p>
                <span>{index + 1}</span>
                <span>{item.name}</span>
                <span>
                  <i>x{item.count}</i>
                </span>
              </p>

              <p>
                <NumberFormat
                  value={(item.price * item.count).toFixed(0)}
                  displayType="text"
                  thousandSeparator={true}
                  renderText={(value) => <span>{value}s</span>}
                />
              </p>

              <div
                id="edite-purches-item"
                style={open === index ? { display: "flex" } : {}}
              >
                <Button
                  onClick={() => {
                    setTimeout(() => {
                      setOpen(false);
                    }, 1);
                  }}
                >
                  <ClearIcon fontSize="medium" />
                </Button>

                <input
                  type="text"
                  value={count}
                  onChange={(e) => {
                    setCount(e.target.value === "0" ? 1 : e.target.value);
                  }}
                  autoFocus
                />

                <Button
                  onClick={() => {
                    if (count) {
                      dispatch(updateBasket({ id: item.id, count: count }));
                      setCount(false);
                      setTimeout(() => {
                        setOpen(false);
                      }, 1);
                    }
                  }}
                >
                  <CheckIcon fontSize="medium" />
                </Button>
                <Button
                  onClick={() => {
                    dispatch(removeBasket(item.id));
                    setTimeout(() => {
                      setOpen(false);
                    }, 1);
                  }}
                >
                  <DeleteIcon fontSize="medium" />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <div id="purches-report">
        <p>
          <NumberFormat
            value={totalPrice}
            displayType="text"
            thousandSeparator={true}
            renderText={(value) => <span>{value} sum</span>}
          />
        </p>
        <Button>Xarid</Button>
      </div>
    </div>
  );
}
