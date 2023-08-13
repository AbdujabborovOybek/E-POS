import React from "react";
import "./History.css";

export const History = () => {
  return (
    <div className="history">
      <div className="history_header">
        <input type="date" />
        <input type="date" />
      </div>

      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Amount</th>
            <th>Balance</th>
            <th>Transaction Type</th>
            <th>Transaction Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>1000</td>
            <td>1000</td>
            <td>Deposit</td>
            <td>12/12/2020</td>
          </tr>
          <tr>
            <th>1</th>
            <td>1000</td>
            <td>1000</td>
            <td>Deposit</td>
            <td>12/12/2020</td>
          </tr>
          <tr>
            <th>1</th>
            <td>1000</td>
            <td>1000</td>
            <td>Deposit</td>
            <td>12/12/2020</td>
          </tr>
          <tr>
            <th>1</th>
            <td>1000</td>
            <td>1000</td>
            <td>Deposit</td>
            <td>12/12/2020</td>
          </tr>
          <tr>
            <th>1</th>
            <td>1000</td>
            <td>1000</td>
            <td>Deposit</td>
            <td>12/12/2020</td>
          </tr>
          <tr>
            <th>1</th>
            <td>1000</td>
            <td>1000</td>
            <td>Deposit</td>
            <td>12/12/2020</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
