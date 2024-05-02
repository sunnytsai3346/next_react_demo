'use client';

import React from "react";
import Link from "next/link";
import styles from "./page.module.css"
import { useRouter } from "next/navigation";

interface NewProduct {
  name: string;
  description: string;
  category: string;
  unitprice: number;
}
const AddProduct = () => {
  const [formData, setFormData] = React.useState<NewProduct>({
    name: "",
    description: "",
    category: "",
    unitprice: 0,
  });
  const router = useRouter();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    const {name, value} = e.target;
    setFormData(prevData => ({...prevData, [name]: value}))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {   
    event.preventDefault();
    if ( (formData.name !="")&& (formData.category!="") && (formData.unitprice!=0) )
       onSubmit(formData);
      
    
  }
  const onSubmit = async(formData:NewProduct) => {  
  
    
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
  };
    const response = await fetch("https://localhost:7219/api/Products",requestOptions);
    const data = await response.json();
    setFormData(data);
    
    
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="modal-box">
        <div className={styles.card1}>
          <h1 >Add Product</h1>
        </div>
        <div className="">
          <label htmlFor="name">
            Name
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              className="input input-bordered w-full max-w-xs m-5 justify-end space-x-1"
              onChange={handleChange}  required 
            />
          </label>
        </div>
        <div className=" ">
          <label htmlFor="description">
            Description{" "}
            <input
              id="description"
              type="text"
              name="description"
              value={formData.description}
              placeholder="Description"
              className="input input-bordered w-full max-w-xs m-5  justify-end space-x-1"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className=" ">
          <label htmlFor="category">Category </label>
          <input
            id="category"
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            className="input input-bordered w-full max-w-xs m-5 justify-end space-x-1"
            onChange={handleChange}  required
          />
        </div>
        <div>
          <label htmlFor="unitprice">
            Unitprice{" "}
            <input
              id="unitprice"
              type="text"
              name="unitprice"
              value={formData.unitprice}
              placeholder="Unitprice"
              className="input input-bordered w-full max-w-xs m-5 justify space-x-1 "
              onChange={handleChange}  required
            />
          </label>
        </div>

        <div>
          
            <button className="inline-block cursor-pointer rounded-md bg-blue-500 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-blue-700"
             onClick={() => router.push('/products')}>
              Submit
            </button>
          
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
