import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cart from "../components/Cart";
import "./ProductStyles.css";
import Categories from "./Categories";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/products/${id}`,
      });

      console.log(response.data);
      setProduct(response.data);
    };

    getProduct();
  }, [id]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/categories`,
      });

      setCategories(response.data);

      console.log(response.data);
    };

    getCategories();
  }, []);

  return (
    <>
      <div>
        <div className="card mb-3 pt-5">
          <div className="row g-4 pt-5">
            <div className="col-12 col-lg-8">
              <img
                className="img-fluid"
                src={`${process.env.REACT_APP_BACKEND_URL}/${product.images}`}
                alt={product.name}
              />
            </div>
            <div className="col-12 col-lg-4">
              <div className="card-body ">
                <h1 className="title card-title ">{product.name}</h1>
                <p>Ships in 1 week | Unlimited White Glove Delivery for $145</p>

                <h4 className="border-top bold card-price pt-2">
                  US$ {product.price}
                </h4>
                <h5 className="card-text border-bottom pt-4 pb-3 ">
                  {product.description}
                </h5>
                <h5>SHOWN</h5>
                <p>Fabric or Leather: Mohair - Mink Size: 100" Wide</p>
              </div>

              <div class="d-flex justify-content-around align-items-end ">
                <h4 class="card-text pt-5  bold card-price">Free shipping</h4>
                <Cart />
                Add to cart
              </div>
            </div>
          </div>
        </div>
      </div>
      {categories.length > 0 && (
        <>
          <div className="categories-section">
            <Categories data={categories} />
          </div>
        </>
      )}
    </>
  );
}

export default Product;

// {product && <p>{ product.images}</p>}
