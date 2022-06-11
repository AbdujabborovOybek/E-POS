import React, { useState } from "react";
import "./Navbar.css";
import "./User.css";
import { Button } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Search } from "../Search/Search";
import { Dialog } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { acLogin } from "../../Reducer/Authentication";
import { Notifications } from "../Notifications/Notifications";

export function Navbar() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);

  return (
    <nav>
      <div id="cashier-reference">
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          AO
        </Button>
        <p>
          <span>Kassir</span>
          <span>Oybek Abdujabborov</span>
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

      <Dialog open={open}>
        <Button
          id="close-modal"
          onClick={() => {
            setOpen(false);
          }}
        >
          <CloseIcon />
        </Button>
        <div id="JoneDoe">
          <div id="level">
            <button>Tajribasi</button>
            <figure></figure>
            <button>12 Oy</button>
          </div>
          <div id="City">
            <div className="rght">
              <div className="ism">
                <b>Jane Doe</b>
              </div>
              <div id="name">
                <div id="name1">
                  <p>Ish kunlari:</p>
                  <p>Xamyon:</p>
                </div>
                <div id="name2">
                  <p>23 kun</p>
                  <p>2,260,000 sum</p>
                </div>
              </div>
            </div>
            <div id="oyin">
              <div id="logofuter">
                <p>Cofee</p>
                <div id="image"></div>
                <p>2</p>
              </div>
              <div id="logofuter">
                <p>Cofee</p>
                <div id="image"></div>
                <p>2</p>
              </div>
              <div id="logofuter">
                <p>Cofee</p>
                <div id="image"></div>
                <p>2</p>
              </div>
              <div id="logofuter">
                <p>Cofee</p>
                <div id="image"></div>
                <p>2</p>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </nav>
  );
}
