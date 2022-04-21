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
  const search = useSelector((state) => state.reSeach);

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
              <Button>-</Button>
              <p>{item.count}</p>
              <Button>+</Button>
            </div>
          </div>
        );
      })}
    </>
  );
}
