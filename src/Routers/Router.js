import React from "react";
import "../Assets/Css/Router.css";
import { Navbar } from "../Components/Navbar";
import { Products } from "../Components/Products";
import { Admin } from "../Components/Admin";
import { Button } from "@mui/material";
import NumberFormat from "react-number-format";

export function Router() {
  return (
    <div id="contener">
      <div>
        <Navbar />
        <div id="all-content">
          <Products />
        </div>
      </div>
      <div id="check">
        <Admin />

        <div>aa</div>

        <Button>
          <NumberFormat
            value={1234567}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Uzs "}
          />
        </Button>
      </div>
    </div>
  );
}
