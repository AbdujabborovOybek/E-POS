import React from "react";
import "./AddCustomer.css";
import { PatternFormat } from "react-number-format";

export const AddCustomer = () => {
  return (
    <div className="add-customer">
      <form autoComplete="off">
        <h1>Add a new customer</h1>
        <label>
          <span>Full Name</span>
          <input
            type="text"
            name="name"
            placeholder="Oybek Abdujabborov"
            required
            autoComplete="off"
          />
        </label>

        <label>
          <span>Telephone Number</span>
          <PatternFormat
            format="+998 ## ### ####"
            allowEmptyFormatting
            mask="_"
            name="phone"
          />
        </label>

        <label>
          <span>Address</span>
          <input
            type="text"
            name="address"
            placeholder="Namangan, Uzbekistan"
            required
            autoComplete="off"
          />
        </label>
        <label>
          <input type="submit" value="Save" />
        </label>
      </form>
    </div>
  );
};
