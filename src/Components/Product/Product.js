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

const Products = [
  {
    id: 1,
    name: "Plombir",
    price: "6000",
    count: 0,
    type: "do",
  },
  {
    id: 2,
    name: "Alpen Gold Max Fun",
    price: "7000",
    count: 0,
    type: "do",
  },
  {
    id: 3,
    name: "Pepsi",
    price: "1000",
    count: 0,
    type: "li",
  },
  {
    id: 4,
    name: "CocoCola",
    price: "8000",
    count: 0,
    type: "do",
  },
  {
    id: 5,
    name: "Limon",
    price: "5000",
    count: 0,
    type: "kg",
  },
  {
    id: 6,
    name: "Banan",
    price: "27000",
    count: 0,
    type: "kg",
  },
  {
    id: 7,
    name: "Shakar",
    price: "19000",
    count: 0,
    type: "kg",
  },
  {
    id: 8,
    name: "Xurmo",
    price: "23000",
    count: 0,
    type: "kg",
  },
  {
    id: 9,
    name: "O`rik",
    price: "500",
    count: 0,
    type: "kg",
  },
  {
    id: 10,
    name: "Nok",
    price: "32000",
    count: 0,
    type: "kg",
  },

  {
    id: 11,
    name: "Shaftoli",
    price: "30000",
    count: 0,
    type: "kg",
  },
  {
    id: 12,
    name: "Olma",
    price: "13000",
    count: 0,
    type: "",
  },
  {
    id: 13,
    name: "Gilos",
    price: "31000",
    count: 0,
    type: "kg",
  },
  {
    id: 14,
    name: "Anjir",
    price: "1200",
    count: 0,
    type: "kg",
  },
  {
    id: 15,
    name: "Qizil Uzum",
    price: "16000",
    count: 0,
    type: "kg",
  },
  {
    id: 16,
    name: "Anor",
    price: "21000",
    count: 0,
    type: "kg",
  },
  {
    id: 17,
    name: "Anor",
    price: "21000",
    count: 0,
    type: "kg",
  },
  {
    id: 18,
    name: "Tarvuz ",
    price: "3000",
    count: 0,
    type: "kg",
  },
  {
    id: 19,
    name: "Qovun",
    price: "5000",
    count: 0,
    type: "kg",
  },
  {
    id: 20,
    name: "Anjir Shaftoli",
    price: "13000",
    count: 0,
    type: "kg",
  },
];

export function Product() {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.reBasket);
  const search = useSelector((state) => state.reSearch);

  // savatni saqlash funktsiyasi
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  // search function
  const result = Products.filter((product) => {
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
              // style={{ backgroundColor: RandomBgColor() }}
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

      <Dialog open={open}>
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
            <p>${product.price} x1</p>
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
