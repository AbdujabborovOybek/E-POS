import React, { memo } from "react";
import "./Menu.css";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlineUserAdd } from "react-icons/ai";
import { BsDatabase } from "react-icons/bs";
import { acMenu } from "../../Context/menu";
import { AiOutlineHistory } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

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

const menu = [
  {
    name: "Home",
    path: "/",
    icon: <AiOutlineHome />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <CgProfile />,
  },
  {
    name: "Add a new Customer",
    path: "/add",
    icon: <AiOutlineUserAdd />,
  },
  {
    name: "Get all Products",
    path: "/products",
    icon: <BsDatabase />,
  },
  {
    name: "History",
    path: "/history",
    icon: <AiOutlineHistory />,
  },
];
