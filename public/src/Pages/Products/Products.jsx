import React from "react";
import "./Products.css";

export const Products = () => {
  return (
    <div className="products">
      <div className="products__header">
        <input type="search" placeholder="Search by name or code" />
      </div>

      <table border="1">
        <thead>
          <tr>
            <th>№</th>
            <th>Product</th>
            <th>Code</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Added</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.code}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <th>{new Date(item.added).toLocaleDateString()}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const data = [
  {
    id: 1,
    name: "Mol go'shti",
    code: "P32dc24sdv",
    price: 100,
    unit: "kg",
    quantity: 10,
    added: "2023-08-13T00:00:00.000Z",
    updated: null,
    responsibleId: "13c32a23h4df",
  },
  {
    id: 2,
    name: "Mol go'shti",
    code: "P32dc24sdv",
    price: 100,
    unit: "kg",
    quantity: 10,
    added: "2023-08-13T00:00:00.000Z",
    updated: null,
    responsibleId: "13c32a23h4df",
  },
  {
    id: 1,
    name: "Mol go'shti",
    code: "P32dc24sdv",
    price: 100,
    unit: "kg",
    quantity: 10,
    added: "2023-08-13T00:00:00.000Z",
    updated: null,
    responsibleId: "13c32a23h4df",
  },
  {
    id: 2,
    name: "Mol go'shti",
    code: "P32dc24sdv",
    price: 100,
    unit: "kg",
    quantity: 10,
    added: "2023-08-13T00:00:00.000Z",
    updated: null,
    responsibleId: "13c32a23h4df",
  },
  {
    id: 1,
    name: "Mol go'shti",
    code: "P32dc24sdv",
    price: 100,
    unit: "kg",
    quantity: 10,
    added: "2023-08-13T00:00:00.000Z",
    updated: null,
    responsibleId: "13c32a23h4df",
  },
  {
    id: 2,
    name: "Mol go'shti",
    code: "P32dc24sdv",
    price: 100,
    unit: "kg",
    quantity: 10,
    added: "2023-08-13T00:00:00.000Z",
    updated: null,
    responsibleId: "13c32a23h4df",
  },
  {
    id: 1,
    name: "Mol go'shti",
    code: "P32dc24sdv",
    price: 100,
    unit: "kg",
    quantity: 10,
    added: "2023-08-13T00:00:00.000Z",
    updated: null,
    responsibleId: "13c32a23h4df",
  },
  {
    id: 2,
    name: "Mol go'shti",
    code: "P32dc24sdv",
    price: 100,
    unit: "kg",
    quantity: 10,
    added: "2023-08-13T00:00:00.000Z",
    updated: null,
    responsibleId: "13c32a23h4df",
  },
  {
    id: 1,
    name: "Mol go'shti",
    code: "P32dc24sdv",
    price: 100,
    unit: "kg",
    quantity: 10,
    added: "2023-08-13T00:00:00.000Z",
    updated: null,
    responsibleId: "13c32a23h4df",
  },
  {
    id: 2,
    name: "Mol go'shti",
    code: "P32dc24sdv",
    price: 100,
    unit: "kg",
    quantity: 10,
    added: "2023-08-13T00:00:00.000Z",
    updated: null,
    responsibleId: "13c32a23h4df",
  },
  {
    id: 1,
    name: "Mol go'shti",
    code: "P32dc24sdv",
    price: 100,
    unit: "kg",
    quantity: 10,
    added: "2023-08-13T00:00:00.000Z",
    updated: null,
    responsibleId: "13c32a23h4df",
  },
  {
    id: 2,
    name: "Mol go'shti",
    code: "P32dc24sdv",
    price: 100,
    unit: "kg",
    quantity: 10,
    added: "2023-08-13T00:00:00.000Z",
    updated: null,
    responsibleId: "13c32a23h4df",
  },
  {
    id: 1,
    name: "Mol go'shti",
    code: "P32dc24sdv",
    price: 100,
    unit: "kg",
    quantity: 10,
    added: "2023-08-13T00:00:00.000Z",
    updated: null,
    responsibleId: "13c32a23h4df",
  },
  {
    id: 2,
    name: "Mol go'shti",
    code: "P32dc24sdv",
    price: 100,
    unit: "kg",
    quantity: 10,
    added: "2023-08-13T00:00:00.000Z",
    updated: null,
    responsibleId: "13c32a23h4df",
  },
  {
    id: 1,
    name: "Mol go'shti",
    code: "P32dc24sdv",
    price: 100,
    unit: "kg",
    quantity: 10,
    added: "2023-08-13T00:00:00.000Z",
    updated: null,
    responsibleId: "13c32a23h4df",
  },
  {
    id: 2,
    name: "Mol go'shti",
    code: "P32dc24sdv",
    price: 100,
    unit: "kg",
    quantity: 10,
    added: "2023-08-13T00:00:00.000Z",
    updated: null,
    responsibleId: "13c32a23h4df",
  },
  {
    id: 1,
    name: "Mol go'shti",
    code: "P32dc24sdv",
    price: 100,
    unit: "kg",
    quantity: 10,
    added: "2023-08-13T00:00:00.000Z",
    updated: null,
    responsibleId: "13c32a23h4df",
  },
  {
    id: 2,
    name: "Mol go'shti",
    code: "P32dc24sdv",
    price: 100,
    unit: "kg",
    quantity: 10,
    added: "2023-08-13T00:00:00.000Z",
    updated: null,
    responsibleId: "13c32a23h4df",
  },
  {
    id: 1,
    name: "Mol go'shti",
    code: "P32dc24sdv",
    price: 100,
    unit: "kg",
    quantity: 10,
    added: "2023-08-13T00:00:00.000Z",
    updated: null,
    responsibleId: "13c32a23h4df",
  },
  {
    id: 2,
    name: "Mol go'shti",
    code: "P32dc24sdv",
    price: 100,
    unit: "kg",
    quantity: 10,
    added: "2023-08-13T00:00:00.000Z",
    updated: null,
    responsibleId: "13c32a23h4df",
  },
  {
    id: 1,
    name: "Mol go'shti",
    code: "P32dc24sdv",
    price: 100,
    unit: "kg",
    quantity: 10,
    added: "2023-08-13T00:00:00.000Z",
    updated: null,
    responsibleId: "13c32a23h4df",
  },
  {
    id: 2,
    name: "Mol go'shti",
    code: "P32dc24sdv",
    price: 100,
    unit: "kg",
    quantity: 10,
    added: "2023-08-13T00:00:00.000Z",
    updated: null,
    responsibleId: "13c32a23h4df",
  },
  {
    id: 1,
    name: "Mol go'shti",
    code: "P32dc24sdv",
    price: 100,
    unit: "kg",
    quantity: 10,
    added: "2023-08-13T00:00:00.000Z",
    updated: null,
    responsibleId: "13c32a23h4df",
  },
  {
    id: 2,
    name: "Mol go'shti",
    code: "P32dc24sdv",
    price: 100,
    unit: "kg",
    quantity: 10,
    added: "2023-08-13T00:00:00.000Z",
    updated: null,
    responsibleId: "13c32a23h4df",
  },
  {
    id: 1,
    name: "Mol go'shti",
    code: "P32dc24sdv",
    price: 100,
    unit: "kg",
    quantity: 10,
    added: "2023-08-13T00:00:00.000Z",
    updated: null,
    responsibleId: "13c32a23h4df",
  },
  {
    id: 2,
    name: "Mol go'shti",
    code: "P32dc24sdv",
    price: 100,
    unit: "kg",
    quantity: 10,
    added: "2023-08-13T00:00:00.000Z",
    updated: null,
    responsibleId: "13c32a23h4df",
  },
];
