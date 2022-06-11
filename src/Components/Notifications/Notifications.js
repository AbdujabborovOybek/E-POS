import React, { useEffect, useRef } from "react";
import "./Notifications.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const Notifications = () => {
  // functin for auto scrol to bottom
  const el = useRef(null);
  useEffect(() => {
    if (el.current) {
      el.current.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  }, []);

  return (
    <div id="notifications-message">
      <div id="message" ref={el}>
        <p>
          <AccessTimeIcon />
          <span>12:45</span>
          <span>06.05.2022</span>
        </p>

        <h2>Oybek Abdujabborov</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
          tempora excepturi nisi ea magni nihil facilis sit magnam laboriosam,
          minus veniam? Eius asperiores ipsa quaerat facere, nostrum non earum
          odit, fugiat sed at cupiditate accusantium doloremque animi in cum
          porro repellendus numquam. Error, commodi facilis!
        </p>
      </div>
    </div>
  );
};
