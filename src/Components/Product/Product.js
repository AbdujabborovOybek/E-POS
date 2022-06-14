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

export function Product() {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.reBasket);
  const search = useSelector((state) => state.reSearch);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://e-pos.my-api.uz/products", {
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
  }, []);

  // savatni saqlash funktsiyasi
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

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
                {item.price}uzs <span>1{item.type}</span>
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
            dispatch(addBasket(product));
            setOpen(false);
          }}
        >
          <div id="dialog-content">
            <p>{product.name}</p>
            <p>
              {product.price}sum 1{product.type}
            </p>
            <div id="change-count">
              <span>
                ${(parseFloat(product.price) * parseFloat(count)).toFixed(1)}
              </span>
              <NumberFormat
                autoComplete="off"
                id="count"
                thousandSeparator={true}
                value={parseFloat(count)}
                onValueChange={(e) => {
                  setCount(e.value === 0 || e.value === "" ? 1 : e.value);
                  setProduct({
                    ...product,
                    count: e.value === 0 || e.value === "" ? 1 : e.value,
                  });
                }}
              />
            </div>

            <div>
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  setCount(parseFloat(count) >= 0 ? 1 : parseFloat(count) - 1);
                  setProduct({
                    ...product,
                    count: parseFloat(count) >= 0 ? 1 : parseFloat(count) - 1,
                  });
                }}
              >
                <RemoveIcon fontSize="large" />
              </Button>
              <Button
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

            <Button type="submit" variant="contained" color="primary">
              Ok
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
}
