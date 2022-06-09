import { Button } from "@mui/material";
import React from "react";
import "./Purches.css";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

export function Purches() {
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
        <div id="purches-item">
          <p>
            <span>1</span>
            <span>Покупка</span>
            <span>x2</span>
          </p>

          <p>
            <span>$</span>
            <span>120</span>
          </p>
        </div>
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
