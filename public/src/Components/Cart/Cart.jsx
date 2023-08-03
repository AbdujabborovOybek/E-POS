import React, { memo } from "react";
import "./Cart.css";
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHome, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { NumericFormat } from "react-number-format";
import { BsDatabaseAdd } from "react-icons/bs";

export const Cart = memo(() => {
  return (
    <div className="cart">
      <div className="cart_header">
        <NavLink to="/">
          <AiOutlineHome />
          <i>Home</i>
        </NavLink>
        <NavLink to="/add-product">
          <BsDatabaseAdd />
          <i>Add Product</i>
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
          <button>Hold</button>
          <button>Pay</button>
        </div>
      </div>
    </div>
  );
});
