import React, { memo, Fragment, useState } from "react";
import "./Cart.css";
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHome, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { NumericFormat } from "react-number-format";
import { FaHandHoldingMedical } from "react-icons/fa";
import { data } from "./data";

export const Cart = memo(() => {
  const [modal, setModal] = useState(false);
  const [products, setProducts] = useState(data);
  const [discount, setDiscount] = useState(0);
  const total = products?.reduce((a, i) => a + i.price * i.count, 0);

  const handlePlus = (id) => {
    const newProducts = products.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setProducts(newProducts);
  };

  const handleMinus = (id) => {
    const newProducts = products.map((item) => {
      if (item.id === id) {
        if (item.count === 1) {
          return item;
        }

        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    setProducts(newProducts);
  };

  const handleDelete = (id) => {
    const newProducts = products.filter((item) => item.id !== id);
    setProducts(newProducts);
  };

  return (
    <Fragment>
      <div className="cart">
        <div className="cart_header">
          <NavLink to="/">
            <AiOutlineHome />
            <i>Home</i>
          </NavLink>
          <NavLink to="/hold">
            <FaHandHoldingMedical />
            <i>Hold</i>
          </NavLink>
          <NavLink to="/customers">
            <FaRegUser />
            <i>Customers</i>
          </NavLink>
        </div>

        <div className="cart_body">
          <img
            className={!products.length ? "empty_card active" : "empty_card"}
            src={require("./icon.svg").default}
            alt="empty_cart"
          />

          {products?.map((item) => {
            return (
              <div className="cart_item" key={item.id}>
                <h1>{item.name}</h1>
                <div className="cart_item_action">
                  <h1>
                    <span>
                      {item.price} * {item.count} ={" "}
                    </span>
                    <i>{item.price * item.count}</i>
                  </h1>

                  <div className="cart_item_btn">
                    <button onClick={() => handleMinus(item.id)}>
                      <AiOutlineMinus />
                    </button>
                    <span>{item.count}</span>
                    <button onClick={() => handlePlus(item.id)}>
                      <AiOutlinePlus />
                    </button>
                  </div>

                  <button onClick={() => handleDelete(item.id)}>
                    <BsTrash3 />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="cart_total">
          <div className="cart_total_header">
            <div>
              <h1>
                <span>Items:</span>

                <NumericFormat
                  allowLeadingZeros
                  thousandSeparator=" "
                  placeholder="Discount"
                  suffix="x products"
                  value={products.length}
                  displayType="text"
                />
              </h1>

              <NumericFormat
                allowLeadingZeros
                thousandSeparator=" "
                placeholder="Discount"
                suffix=" so'm"
                value={discount}
                onValueChange={(values) => {
                  const { value } = values;
                  setDiscount(value);
                }}
              />
            </div>

            <div>
              <h1>
                <span>Total:</span>

                <NumericFormat
                  allowLeadingZeros
                  thousandSeparator=" "
                  placeholder="Discount"
                  suffix=" so'm"
                  value={total}
                  displayType="text"
                />
              </h1>

              <h1>
                <span>Payable:</span>
                <NumericFormat
                  allowLeadingZeros
                  thousandSeparator=" "
                  placeholder="Discount"
                  suffix=" so'm"
                  value={total - discount}
                  displayType="text"
                />
              </h1>
            </div>
          </div>

          <div className="cart_total_action">
            <button>Cancel</button>
            <button onClick={() => setModal(true)}>Hold</button>
            <button>Pay</button>
          </div>
        </div>
      </div>

      <div className={modal ? "modal_hold active" : "modal_hold"}>
        <form className="modal_hold__form">
          <div className="modal_hold_header">
            <h1>
              {new Date().toLocaleTimeString("en-US", {
                hour12: false,
                month: "long",
                hour: "numeric",
                minute: "numeric",
                day: "numeric",
                year: "numeric",
              })}
            </h1>
            <button type="button" onClick={() => setModal(false)}>
              close
            </button>
          </div>

          <div className="modal_hold_body">
            <label>
              <span>Customer:</span>
              <input
                type="text"
                name="customer"
                placeholder="Customer"
                autoComplete="off"
              />
            </label>
            <label>
              <input type="submit" value="Hold Order" />
            </label>
          </div>
        </form>
      </div>
    </Fragment>
  );
});
