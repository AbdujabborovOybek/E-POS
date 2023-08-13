import React, { memo, Fragment, useState } from "react";
import "./Cart.css";
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHome, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { NumericFormat } from "react-number-format";
import { FaHandHoldingMedical } from "react-icons/fa";

export const Cart = memo(() => {
  const [modal, setModal] = useState(false);
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
          <div className="cart_item">
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <div className="cart_item_action">
              <h1>
                <span>120 000 * 3 = </span>
                <i>1 360 000</i>
              </h1>

              <div className="cart_item_btn">
                <button>
                  <AiOutlineMinus />
                </button>
                <span>1</span>
                <button>
                  <AiOutlinePlus />
                </button>
              </div>

              <button>
                <BsTrash3 />
              </button>
            </div>
          </div>
          <div className="cart_item">
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <div className="cart_item_action">
              <h1>
                <span>120 000 * 3 = </span>
                <i>1 360 000</i>
              </h1>

              <div className="cart_item_btn">
                <button>
                  <AiOutlineMinus />
                </button>
                <span>1</span>
                <button>
                  <AiOutlinePlus />
                </button>
              </div>

              <button>
                <BsTrash3 />
              </button>
            </div>
          </div>
          <div className="cart_item">
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <div className="cart_item_action">
              <h1>
                <span>120 000 * 3 = </span>
                <i>1 360 000</i>
              </h1>

              <div className="cart_item_btn">
                <button>
                  <AiOutlineMinus />
                </button>
                <span>1</span>
                <button>
                  <AiOutlinePlus />
                </button>
              </div>

              <button>
                <BsTrash3 />
              </button>
            </div>
          </div>
          <div className="cart_item">
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <div className="cart_item_action">
              <h1>
                <span>120 000 * 3 = </span>
                <i>1 360 000</i>
              </h1>

              <div className="cart_item_btn">
                <button>
                  <AiOutlineMinus />
                </button>
                <span>1</span>
                <button>
                  <AiOutlinePlus />
                </button>
              </div>

              <button>
                <BsTrash3 />
              </button>
            </div>
          </div>
          <div className="cart_item">
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <div className="cart_item_action">
              <h1>
                <span>120 000 * 3 = </span>
                <i>1 360 000</i>
              </h1>

              <div className="cart_item_btn">
                <button>
                  <AiOutlineMinus />
                </button>
                <span>1</span>
                <button>
                  <AiOutlinePlus />
                </button>
              </div>

              <button>
                <BsTrash3 />
              </button>
            </div>
          </div>
          <div className="cart_item">
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <div className="cart_item_action">
              <h1>
                <span>120 000 * 3 = </span>
                <i>1 360 000</i>
              </h1>

              <div className="cart_item_btn">
                <button>
                  <AiOutlineMinus />
                </button>
                <span>1</span>
                <button>
                  <AiOutlinePlus />
                </button>
              </div>

              <button>
                <BsTrash3 />
              </button>
            </div>
          </div>
          <div className="cart_item">
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <div className="cart_item_action">
              <h1>
                <span>120 000 * 3 = </span>
                <i>1 360 000</i>
              </h1>

              <div className="cart_item_btn">
                <button>
                  <AiOutlineMinus />
                </button>
                <span>1</span>
                <button>
                  <AiOutlinePlus />
                </button>
              </div>

              <button>
                <BsTrash3 />
              </button>
            </div>
          </div>
          <div className="cart_item">
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <div className="cart_item_action">
              <h1>
                <span>120 000 * 3 = </span>
                <i>1 360 000</i>
              </h1>

              <div className="cart_item_btn">
                <button>
                  <AiOutlineMinus />
                </button>
                <span>1</span>
                <button>
                  <AiOutlinePlus />
                </button>
              </div>

              <button>
                <BsTrash3 />
              </button>
            </div>
          </div>
          <div className="cart_item">
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <div className="cart_item_action">
              <h1>
                <span>120 000 * 3 = </span>
                <i>1 360 000</i>
              </h1>

              <div className="cart_item_btn">
                <button>
                  <AiOutlineMinus />
                </button>
                <span>1</span>
                <button>
                  <AiOutlinePlus />
                </button>
              </div>

              <button>
                <BsTrash3 />
              </button>
            </div>
          </div>
          <div className="cart_item">
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <div className="cart_item_action">
              <h1>
                <span>120 000 * 3 = </span>
                <i>1 360 000</i>
              </h1>

              <div className="cart_item_btn">
                <button>
                  <AiOutlineMinus />
                </button>
                <span>1</span>
                <button>
                  <AiOutlinePlus />
                </button>
              </div>

              <button>
                <BsTrash3 />
              </button>
            </div>
          </div>
          <div className="cart_item">
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <div className="cart_item_action">
              <h1>
                <span>120 000 * 3 = </span>
                <i>1 360 000</i>
              </h1>

              <div className="cart_item_btn">
                <button>
                  <AiOutlineMinus />
                </button>
                <span>1</span>
                <button>
                  <AiOutlinePlus />
                </button>
              </div>

              <button>
                <BsTrash3 />
              </button>
            </div>
          </div>
          <div className="cart_item">
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <div className="cart_item_action">
              <h1>
                <span>120 000 * 3 = </span>
                <i>1 360 000</i>
              </h1>

              <div className="cart_item_btn">
                <button>
                  <AiOutlineMinus />
                </button>
                <span>1</span>
                <button>
                  <AiOutlinePlus />
                </button>
              </div>

              <button>
                <BsTrash3 />
              </button>
            </div>
          </div>
        </div>

        <div className="cart_total">
          <div className="cart_total_header">
            <div>
              <h1>
                <span>Items:</span>
                <i>10</i>
              </h1>

              <NumericFormat
                allowLeadingZeros
                thousandSeparator=" "
                placeholder="Discount"
                suffix=" so'm"
              />
            </div>

            <div>
              <h1>
                <span>Total:</span>
                <i>10 000</i>
              </h1>

              <h1>
                <span>Payable:</span>
                <i>10 000</i>
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
