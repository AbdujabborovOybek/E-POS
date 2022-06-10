import React from "react";
import "./Navbar.css";
import { Button } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Search } from "../Search/Search";

export function Navbar() {
  return (
    <nav>
      <div id="cashier-reference">
        <Button>AO</Button>
        <p>
          <span>Kassir</span>
          <span>Oybek Abdujabborov</span>
        </p>
      </div>

      <Search />

      <h1>POS Касса №1</h1>

      <div id="notifications">
        <Button>
          <MailOutlineIcon fontSize="large" />
        </Button>
        <Button>
          <NotificationsNoneIcon fontSize="large" />
        </Button>
        <Button>
          <PowerSettingsNewIcon fontSize="large" />
        </Button>
      </div>
    </nav>
  );
}
