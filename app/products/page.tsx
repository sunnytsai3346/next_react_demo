"use client";
import React, { Component, useEffect, useState } from "react";
import AddProductButton from "./AddProductButton";

type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
  unitprice: string;
};

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  const getData = async () => {
    const response = await fetch("https://localhost:7219/api/Products");
    const data = await response.json();
    setProducts(data);
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <h1>Product List</h1>
      <table className="table">
        <thead className="font-bold">
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Category</th>
          <th>UnitPrice</th>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.category}</td>
              <td>{item.unitprice}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-10">
        <AddProductButton />
      </div>
    </div>
  );
}
