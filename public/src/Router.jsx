import { Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import { Home } from "./Pages/Home/Home";
import { Customers } from "./Pages/Customers/Customers";
import { Orders } from "./Pages/Orders/Orders";
import { AddProduct } from "./Pages/AddProduct/AddProduct";
import { Hold } from "./Pages/Hold/Hold";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="customers" element={<Customers />} />
        <Route path="orders" element={<Orders />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="hold" element={<Hold />} />
        <Route path="contact" element={<h1>Contact</h1>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  );
};
