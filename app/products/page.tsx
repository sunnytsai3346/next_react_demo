'use client';
import styles from "./page.module.css"


import React, { Component, useEffect, useState } from "react";
import Link from "next/link";

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
    <div className={styles.card1}>
      
      <h1>Product List</h1>
      <table className="table">
        <thead >
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
        <Link href="./addProduct">
          <button className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
            Add Product
          </button>
        </Link>
      </div>
    </div>
  );
}
