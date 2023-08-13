import React, { memo } from "react";
import "./Menu.css";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { acMenu } from "../../Context/menu";
import menu from "./data";
import { FiLogOut } from "react-icons/fi";

export const Menu = memo(() => {
  const open = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

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

      <button className="logout_btn" onClick={handleLogout}>
        <FiLogOut />
        <i>Logout</i>
      </button>
    </div>
  );
});
