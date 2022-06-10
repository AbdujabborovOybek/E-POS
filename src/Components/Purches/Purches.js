import React, { useEffect, useRef } from "react";
import { Button } from "@mui/material";
import "./Purches.css";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useSelector } from "react-redux";
import NumberFormat from "react-number-format";

export function Purches() {
  const basket = useSelector((state) => state.reBasket);

  const el = useRef(null);

  useEffect(() => {
    if (el.current) {
      el.current.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  }, [basket]);

  return (
    <div id="purches">
      <div id="purches-header">
        <p>
          <span>76</span>
          <span>Xarid</span>
        </p>
        <Button>
          <FormatListBulletedIcon fontSize="large" />
        </Button>
      </div>
      <div id="purches-body">
        {basket.map((item, index) => {
          return (
            <div id="purches-item" key={item.id} ref={el}>
              <p>
                <span>{index + 1}</span>
                <span>{item.name}</span>
                <span>x{item.count}</span>
              </p>

              <p>
                <NumberFormat
                  value={item.price * item.count}
                  displayType="text"
                  thousandSeparator={true}
                  renderText={(value) => <span>{value}</span>}
                />
              </p>
            </div>
          );
        })}
      </div>

      <div id="purches-report">
        <p>
          <span>$</span>
          <span>120</span>
        </p>
        <Button>Xarid</Button>
      </div>
    </div>
  );
}
