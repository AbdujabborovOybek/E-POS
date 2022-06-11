import React from "react";
import "./SalesHistory.css";
import { Button } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

export function SalesHistory() {
  return (
    <div id="salesHistory">
      <div id="sales-product">
        <p>12.06.2022 01:02</p>
        <div>
          <p>
            <span>1 Bexi 1kg</span>
            <span>34000sum</span>
          </p>
          <Button>
            <RefreshIcon />
          </Button>
        </div>
        <div>
          <p>
            <span>2 Bexi 1kg</span>
            <span>34000sum</span>
          </p>
          <Button>
            <RefreshIcon />
          </Button>
        </div>
        <div>
          <p>
            <span>3 Bexi 1kg</span>
            <span>34000sum</span>
          </p>
          <Button>
            <RefreshIcon />
          </Button>
        </div>
        <div>
          <p>
            <span>4 Bexi 1kg</span>
            <span>34000sum</span>
          </p>
          <Button>
            <RefreshIcon />
          </Button>
        </div>

        <h3>
          <span>Xisob:</span>
          <span>136000sum</span>
        </h3>
      </div>
    </div>
  );
}
