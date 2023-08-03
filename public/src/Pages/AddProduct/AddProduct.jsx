import React from "react";
import "./AddProduct.css";
import { NumericFormat } from "react-number-format";

export const AddProduct = () => {
  return (
    <div className="add_product">
      <form>
        <h1>Add a new product</h1>
        <label>
          <span>Name</span>
          <input
            type="text"
            placeholder="Product Name"
            name="name"
            autoComplete="off"
            required
          />
        </label>

        <label>
          <span>Code</span>
          <input
            type="text"
            placeholder="Product Code"
            name="code"
            autoComplete="off"
            required
          />
        </label>

        <label>
          <span>Price</span>
          <NumericFormat
            allowLeadingZeros
            thousandSeparator=" "
            placeholder="Product Price"
            suffix=" so'm"
            name="price"
            autoComplete="off"
            required
          />
        </label>
        <div>
          <label>
            <span>Product type</span>

            <select name="type">
              <option value="Kg">Kg</option>
              <option value="Litr">Litr</option>
              <option value="Dona">Dona</option>
              <option value="Paket">Paket</option>
              <option value="Box">Box</option>
            </select>
          </label>

          <label>
            <span>Quantity</span>
            <NumericFormat
              allowLeadingZeros
              thousandSeparator=" "
              placeholder="Product Quantity"
              suffix=" ta"
              name="quantity"
              autoComplete="off"
            />
          </label>
        </div>

        <label>
          <input
            type="submit"
            value="Add a new product"
            style={{ cursor: "pointer" }}
          />
        </label>
      </form>
    </div>
  );
};
