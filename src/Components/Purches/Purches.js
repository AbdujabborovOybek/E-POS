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
import { acLoading } from "../../Reducer/Loading";
import { useSnackbar } from "notistack";
import { clearBasket } from "../../Reducer/Basket";
import { Dialog } from "@mui/material";
import { SalesHistory } from "../SalesHistory/SalesHistory";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

export function Purches() {
  const basket = useSelector((state) => state.reBasket);
  const [totalPrice, setTotalPrice] = useState(0);
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [salesHistory, setSalesHistory] = useState(false);
  const user = useSelector((state) => state.reUser);

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
        <Button
          onClick={() => {
            setSalesHistory(true);
          }}
        >
          <FormatListBulletedIcon fontSize="medium" />
        </Button>
        {basket.length !== 0 ? (
          <p>
            <span>{basket.length}</span>
            <span>Maxsulot</span>
          </p>
        ) : (
          <p>Xisobot Oynasi</p>
        )}
      </div>
      <div id="purches-body">
        {basket.length !== 0 ? (
          basket.map((item, index) => {
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
                    <i>
                      {item.count}
                      {item.type}
                    </i>
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
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
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

                    <NumberFormat
                      thousandSeparator={true}
                      value={count}
                      onChange={(e) => {
                        setCount(e.target.value === "0" ? 1 : e.target.value);
                      }}
                      autoFocus
                    />

                    <Button
                      type="submit"
                      onClick={() => {
                        dispatch(updateBasket({ id: item.id, count: count }));
                        setCount(false);
                        setTimeout(() => {
                          setOpen(false);
                        }, 11);
                      }}
                    >
                      <CheckIcon fontSize="medium" />
                    </Button>
                    <Button
                      onClick={() => {
                        dispatch(removeBasket(item.id));
                        setTimeout(() => {
                          setOpen(false);
                        }, 1000);
                      }}
                    >
                      <DeleteIcon fontSize="medium" />
                    </Button>
                  </form>
                </div>
              </div>
            );
          })
        ) : (
          <h2 id="blank-list">Onlina Kassaga xush kelibsiz </h2>
        )}
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
        <Button
          variant="contained"
          color="primary"
          disabled={basket.length !== 0 ? false : true}
          onClick={() => {
            dispatch(acLoading(true));

            axios("https://e-pos.my-api.uz/purchase_history", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                Authorization: 123456789,
              },
              data: {
                employee: user.name,
                user_id: user.id,
                shopping: JSON.stringify(basket),
                price: totalPrice,
                date: new Date().toLocaleDateString("en-GB"),
                time: new Date().toLocaleTimeString("en-GB"),
              },
              timeout: 10000,
            })
              .then((res) => {
                dispatch(acLoading(false));
                enqueueSnackbar(res.data.message, {
                  variant: "success",
                  autoHideDuration: 2000,
                });
                dispatch(clearBasket());
              })
              .catch((err) => {
                dispatch(acLoading(false));
                enqueueSnackbar(err.response.data.message, {
                  variant: "error",
                  autoHideDuration: 2000,
                });
              });
          }}
        >
          Xarid
        </Button>
      </div>

      <Dialog open={salesHistory}>
        <Button
          id="close-modal"
          onClick={() => {
            setSalesHistory(false);
          }}
        >
          <CloseIcon />
        </Button>
        <div>
          <SalesHistory />
        </div>
      </Dialog>
    </div>
  );
}
