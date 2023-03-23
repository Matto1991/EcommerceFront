import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Products from "../components/Products";


export default function Home() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await axios({
      method: "get",
      url: `${process.env.REACT_APP_APIURL}/products`,
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
        <div className="col-12 position-relative">
          <div className="hero-text">
            <h1 className="hero-title mb-3">In soft sculpture</h1>
            <h4 className="hero-cta">SHOP THE COLLECTION</h4>
          </div>
        </div>
      </div>
      <div className="categories-section">
        <div className="d-flex justify-content-center w-100 mb-5">
          <h2>Shop by categories</h2>
        </div>
        <div className="row h-100 mx-auto categories-container gx-3">
          <div className="col-6 d-flex justify-content-center align-items-center rounded category-card living-category">
            <h3 className="text-white fs-2">Living</h3>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center rounded category-card bedroom-category">
            <h3 className="text-white fs-2 ">Bedroom</h3>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center rounded category-card dining-category">
            <h3 className="text-white fs-2 ">Dining</h3>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center rounded category-card sets-category">
            <h3 className="text-white fs-2">Sets</h3>
          </div>
        </div>
      </div>
       
      { products.length && <div className="container pt-3">
        <Products data={products} />
      </div>}
    </>
  );
}
