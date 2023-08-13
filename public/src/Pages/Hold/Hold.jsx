import React from "react";
import "./Hold.css";

export const Hold = () => {
  const newHold = [];

  for (let i = 0; i < 50; i++) {
    const newId = newHold.length + i + 1;
    const newQuantity = Math.floor(Math.random() * 100) + 1;
    const newPrice = Math.floor(Math.random() * 1000000) + 1000000;
    const newAdded = new Date().toISOString();

    const newObj = {
      id: newId,
      quantity: newQuantity,
      price: newPrice,
      added: newAdded,
    };

    newHold.push(newObj);
  }

  return (
    <div className="hold">
      <table border="1">
        <thead>
          <tr>
            <th>№</th>
            <th>Added</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {newHold.map((item, index) => {
            return (
              <tr>
                <th>{index + 1}</th>
                <th>
                  {new Date(item.added).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </th>
                <th>{item.quantity}</th>
                <td>
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                </td>

                <th className="hold_action">
                  <button>Cancel</button>
                  <button>View</button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
