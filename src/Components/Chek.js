import "../Assets/Css/Chek.css";
import NumberFormat from "react-number-format";

import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export function Chek() {
  const basket = useSelector((state) => state.reBasket);

  console.log(basket);

  return (
    <>
      {basket.map((item, index) => {
        return (
          <div
            id="chek-product"
            style={{ background: colors(index) }}
            key={index}
          >
            <div>
              <p>{item.name}</p>
              <p>{item.count}x</p>
              <NumberFormat
                value={item.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </div>
            <div>
              <Button>
                <DeleteIcon />
              </Button>
              <Button>
                <RemoveIcon />
              </Button>
              <Button>
                <AddIcon />
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
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
