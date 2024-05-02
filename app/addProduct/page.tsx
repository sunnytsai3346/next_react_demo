import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const AddProduct = () => {
  return (
    <div className="modal-box">
      <div>
        <h1 className="font-bold">Add Product</h1>
      </div>
      <div className="">
        <label htmlFor="name">
          Name
          <input
            id="name"
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs m-5 justify-end space-x-1 "
          />
        </label>
      </div>
      <div className=" ">
        <label htmlFor="description">
          Description{" "}
          <input
            id="description"
            type="text"
            placeholder="Description"
            className="input input-bordered w-full max-w-xs m-5  justify-end space-x-1"
          />
        </label>
      </div>
      <div className=" ">
        <label htmlFor="category">Category </label>
        <input
          id="category"
          type="text"
          placeholder="Category"
          className="input input-bordered w-full max-w-xs m-5 justify-end space-x-1"
        />
      </div>
      <div>
        <label htmlFor="unitprice">
          Unitprice{" "}
          <input
            id="unitprice"
            type="text"
            placeholder="Unitprice"
            className="input input-bordered w-full max-w-xs m-5 justify space-x-1 "
          />
        </label>
      </div>

      <div>
      <Link href="./products">
      <button className="inline-block cursor-pointer rounded-md bg-blue-500 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-blue-700"
      >
        Submit
      </button>
      </Link>
    </div>
    </div>
  );
};

export default AddProduct;
