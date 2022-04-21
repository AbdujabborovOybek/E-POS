import React, { useState } from "react";
import { Button } from "@mui/material";
import "../Assets/Css/Products.css";
import NumberFormat from "react-number-format";
import { Data } from "../Data/Data";

import { useSelector } from "react-redux";

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

export function Products() {
  const [produc, setProduc] = useState(Data);
  const search = useSelector((state) => state.reSeach);

  const data = produc.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.code
        .toLowerCase()
        .includes(search === "" ? item.code : search.toLowerCase())
    );
  });

  function Count(e, type) {
    const MyData = [...data];

    MyData.map((item) => {
      if (type === "inc") {
        if (item.id === e.id) {
          item.count++;
          setProduc(MyData);
        }
      }
      if (type === "dec") {
        if (item.id === e.id) {
          item.count < 1 ? (item.count = 0) : item.count--;
          setProduc(MyData);
        }
      }
      return item;
    });
  }

  return (
    <>
      {data.map((item, index) => {
        return (
          <div id="product" key={index} style={{ background: colors(index) }}>
            <div id="product-info">
              <p>{item.name}</p>
              <NumberFormat
                value={item.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Uzs "}
              />
              <p>{fixAbout(item.about)}</p>
            </div>
            <div id="product-count">
              <Button onClick={Count.bind(this, item, "dec")}>-</Button>
              <p>{item.count}</p>
              <Button onClick={Count.bind(this, item, "inc")}>+</Button>
            </div>
          </div>
        );
      })}
    </>
  );
}
