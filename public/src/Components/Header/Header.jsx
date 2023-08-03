import React from "react";
import "./Header.css";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { acMenu } from "../../Context/menu";
import { Link } from "react-router-dom";

export const Header = () => {
  const menu = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch(acMenu(!menu));
  };

  return (
    <header className="header">
      <div>
        <button onClick={toggleMenu}>
          {menu ? <MdMenuOpen /> : <MdMenu />}
        </button>

        <Link to="/">
          <span>E-POS</span>
          <i>system</i>
        </Link>

        <h2>Point of Sale</h2>
      </div>

      <input
        type="search"
        placeholder="Name, Code, Barcode, etc."
        autoComplete="off"
        autoFocus
      />
    </header>
  );
};
