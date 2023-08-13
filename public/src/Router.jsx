import { Routes, Route } from "react-router-dom";
import { Auth } from "./Pages/Login/Auth";
import { Login } from "./Pages/Login/Login";

import { Layout } from "./Components/Layout/Layout";
import { Home } from "./Pages/Home/Home";
import { Customers } from "./Pages/Customers/Customers";
import { Orders } from "./Pages/Orders/Orders";
import { AddProduct } from "./Pages/AddProduct/AddProduct";
import { Hold } from "./Pages/Hold/Hold";
import { Profile } from "./Pages/Profile/Profile";
import { Products } from "./Pages/Products/Products";
import { AddCustomer } from "./Pages/AddCustomer/AddCustomer";
import { History } from "./Pages/History/History";

export const Router = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route element={<Auth />}>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="add-customer" element={<AddCustomer />} />
          <Route path="customers" element={<Customers />} />
          <Route path="orders" element={<Orders />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="hold" element={<Hold />} />
          <Route path="profile" element={<Profile />} />
          <Route path="products" element={<Products />} />
          <Route path="history" element={<History />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Route>
    </Routes>
  );
};
