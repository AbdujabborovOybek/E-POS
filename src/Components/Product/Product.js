import React, { useEffect, useState } from "react";
import "./Product.css";
import Dialog from "@mui/material/Dialog";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../../Reducer/Basket";
import NumberFormat from "react-number-format";
import axios from "axios";
import { acSearch } from "../../Reducer/Search";

export function Product() {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.reBasket);
  const search = useSelector((state) => state.reSearch);
  const [products, setProducts] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    axios("http://localhost:5000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: 123456789,
      },
    })
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [update]);

  // savatni saqlash funktsiyasi
  useEffect(() => {
    sessionStorage.setItem("basket", JSON.stringify(basket));
    dispatch(acSearch(""));
  }, [basket, dispatch]);

  // search function
  const result = products.filter((product) => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      {result.length !== 0 ? (
        result.map((item, index) => {
          return (
            <div
              id="product"
              key={item.id}
              onClick={() => {
                setOpen(true);
                setProduct({ ...item, count: 1 });
                setCount(1);
              }}
            >
              <p>{item.name}</p>
              <p>
                <NumberFormat
                  value={item.price}
                  displayType={"text"}
                  thousandSeparator={true}
                />
                <span> 1{item.type}</span>
              </p>
            </div>
          );
        })
      ) : (
        <h1 id="unsuccessful-search">Maxsulot Topilmadi</h1>
      )}

      <Dialog open={open} id="dialog">
        <Button
          id="close-modal"
          onClick={() => {
            setOpen(false);
          }}
        >
          <CloseIcon />
        </Button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCount(1);
            delete product.amount;
            dispatch(addBasket(product));
            setOpen(false);
            setUpdate(!update);
          }}
        >
          <div id="dialog-content">
            <p>{product.name}</p>
            <p>{"Mavjud " + +product.amount + product.type}</p>
            <p>
              <NumberFormat
                value={product.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"so'm "}
              />

              <span> 1{product.type}</span>
            </p>
            <div id="change-count">
              <NumberFormat
                value={(product.price * count).toFixed(0)}
                displayType={"text"}
                thousandSeparator={true}
              />

              <NumberFormat
                thousandSeparator={true}
                prefix={product.type + " "}
                placeholder="Miqdori"
                name="amount"
                autoComplete="off"
                removeFormatting={true}
                value={count}
                onValueChange={(values) => {
                  const { value } = values;
                  setCount(value);
                  setProduct({ ...product, count: value });
                }}
              />
            </div>

            <div>
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  setCount(count <= 1 ? 1 : count - 1);
                  setProduct({ ...product, count: count <= 1 ? 1 : count - 1 });
                }}
              >
                <RemoveIcon fontSize="large" />
              </Button>
              <Button
                disabled={+product.amount - count < 1}
                variant="contained"
                color="primary"
                onClick={() => {
                  setCount(parseFloat(count ? count : 0) + 1);
                  setProduct({
                    ...product,
                    count: parseFloat(count ? count : 0) + 1,
                  });
                }}
              >
                <AddIcon />
              </Button>
            </div>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={count <= 0 ? true : false}
            >
              Ok
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
}
