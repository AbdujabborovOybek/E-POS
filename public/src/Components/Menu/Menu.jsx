import React, { memo } from "react";
import "./Menu.css";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { acMenu } from "../../Context/menu";
import menu from "./data";
export const Menu = memo(() => {
  const open = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  return (
    <div className={!open ? "menu open" : "menu"}>
      <nav>
        {menu.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => dispatch(acMenu(!open))}
            >
              {item.icon}
              <i>{item.name}</i>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
});
