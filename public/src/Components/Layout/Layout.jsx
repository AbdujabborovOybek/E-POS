import React from "react";
import "./Layout.css";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Menu } from "../Menu/Menu";
import { Cart } from "../Cart/Cart";

export const Layout = () => {
  return (
    <main className="main">
      <section>
        <Header />
        <Outlet />
        <Menu />
      </section>
      <aside>
        <Cart />
      </aside>
    </main>
  );
};
