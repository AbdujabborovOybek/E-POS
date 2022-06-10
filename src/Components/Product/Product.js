import React, { useEffect, useState } from "react";
import "./Product.css";
import Dialog from "@mui/material/Dialog";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../../Reducer/Basket";

const Products = [
  {
    id: 1,
    name: "Product 1",
    price: "100",
    count: 0,
    img: "https://micro-cook.ru/images/stories/recipes/Desserts.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: "200",
    count: 0,
    img: "https://micro-cook.ru/images/stories/recipes/Desserts.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: "300",
    count: 0,
    img: "https://micro-cook.ru/images/stories/recipes/Desserts.jpg",
  },
  {
    id: 4,
    name: "Product 4",
    price: "400",
    count: 0,
    img: "https://micro-cook.ru/images/stories/recipes/Desserts.jpg",
  },
  {
    id: 5,
    name: "Product 5",
    price: "500",
    count: 0,
    img: "https://micro-cook.ru/images/stories/recipes/Desserts.jpg",
  },
  {
    id: 6,
    name: "Product 6",
    price: "600",
    count: 0,
    img: "https://micro-cook.ru/images/stories/recipes/Desserts.jpg",
  },
  {
    id: 7,
    name: "Product 7",
    price: "700",
    count: 0,
    img: "https://micro-cook.ru/images/stories/recipes/Desserts.jpg",
  },
  {
    id: 8,
    name: "Product 8",
    price: "800",
    count: 0,
    img: "https://micro-cook.ru/images/stories/recipes/Desserts.jpg",
  },
  {
    id: 9,
    name: "Product 9",
    price: "900",
    count: 0,
    img: "https://micro-cook.ru/images/stories/recipes/Desserts.jpg",
  },
  {
    id: 10,
    name: "Product 10",
    price: "1000",
    count: 0,
    img: "https://micro-cook.ru/images/stories/recipes/Desserts.jpg",
  },
];

export function Product() {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.reBasket);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
    
  }, [basket]);

  return (
    <>
      {Products.map((item, index) => {
        return (
          <div
            id="product"
            key={item.id}
            onClick={() => {
              setOpen(true);
              setProduct(item);
              setCount(0);
            }}
          >
            <figure>
              <img src={item.img} alt="" />
            </figure>

            <div id="porduct-info">
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
          </div>
        );
      })}

      <Dialog open={open}>
        <Button
          id="close-modal"
          onClick={() => {
            setOpen(false);
          }}
        >
          <CloseIcon />
        </Button>
        <div id="dialog-content">
          <p>{product.name}</p>
          <p>${product.price} x1</p>
          <p>
            <span>${+product.price * count}</span>
            <span>x{count}</span>
          </p>
          <div>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                setCount(count < 1 ? 0 : count - 1);
                setProduct({ ...product, count: count < 1 ? 0 : count - 1 });
              }}
            >
              <RemoveIcon fontSize="large" />
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setCount(count + 1);
                setProduct({ ...product, count: count + 1 });
              }}
            >
              <AddIcon />
            </Button>
          </div>

          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              if (count !== 0) {
                dispatch(addBasket(product));
                setOpen(false);
                setCount(0);
              }
            }}
          >
            Ok
          </Button>
        </div>
      </Dialog>
    </>
  );
}
