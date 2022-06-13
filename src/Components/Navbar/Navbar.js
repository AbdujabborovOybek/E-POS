import React, { useState } from "react";
import "./Navbar.css";
import { Button } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Search } from "../Search/Search";
import { Dialog } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { acLogin } from "../../Reducer/Authentication";
import { Notifications } from "../Notifications/Notifications";
import { Kassir } from "../Kassir/Kassir";

export function Navbar() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);
  const user = useSelector((state) => state.reUser);

  return (
    <nav>
      <div id="cashier-reference">
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          <img src={user.img} alt="" />
        </Button>
        <p>
          <span>{user.role}</span>
          <span>{user.name}</span>
        </p>
      </div>

      <Search />

      <h1>POS Касса №1</h1>

      <div id="notifications">
        <Button
          onClick={() => {
            setOpenNotifications(true);
          }}
        >
          <NotificationsNoneIcon fontSize="large" />
        </Button>
        <Button
          onClick={() => {
            dispatch(acLogin(false));
            window.location.reload();
          }}
        >
          <PowerSettingsNewIcon fontSize="large" />
        </Button>
      </div>

      <Dialog open={openNotifications}>
        <Button
          id="close-modal"
          onClick={() => {
            setOpenNotifications(false);
          }}
        >
          <CloseIcon fontSize="large" />
        </Button>
        <div id="Notifications-card">
          <Notifications />
        </div>
      </Dialog>

      <Dialog open={open} id="kassir-modal">
        <Button
          id="close-modal"
          onClick={() => {
            setOpen(false);
          }}
        >
          <CloseIcon />
        </Button>
        <div>
          <Kassir />
        </div>
      </Dialog>
    </nav>
  );
}
