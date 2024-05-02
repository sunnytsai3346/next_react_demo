
import Link from "next/link";
import React from "react";

const AddProductButton = () => {
  return (
    <div>
      <Link href="./addProduct">
        <button className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
          Add Product
        </button>
      </Link>
      
    </div>
  );
};

export default AddProductButton;
