import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Products from "../components/Products";


export default function Home() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await axios({
      method: "get",
      url: `http://localhost:8000/products`,
    });
    setProducts(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="row hero-image">
        <div className="col-12">
          <div className="col-6 d-flex flex-column justify-content-center ms-5 h-100 w-50 ">
            <h1 className="display-3 fw-bold">Lorem ipsum </h1>
            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
          </div>
        </div>
      </div>
       
      { products.length && <div className="container pt-3">
        <Products data={products} />
      </div>}
    </>
  );
}
