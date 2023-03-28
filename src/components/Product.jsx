import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./ProductStyles.css";
import Categories from "./Categories";
import NavbarOther from "../components/NavbarOther";
import { addToCart } from "../redux/cartReducer";


function Product() {

  const { id } = useParams();

  const item = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);


  const handleAddToCart = () => {
    dispatch(
      addToCart({productId: product.id}) 
    )
  }

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/products/${id}`,
      });

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
    };

    getCategories();
  }, []);

  return (
    <>
      <NavbarOther />
      <div className="container">
        <div className="card mb-3 pt-5 border-0">
          <div className="row g-4 pt-5">
            <div className="col-12 col-lg-8">
              <img
                className="img-fluid h-100"
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
               <button
               onClick={handleAddToCart}
               > Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {categories.length > 0 && (
        <>
          <div className="categories-section border-top pt-5">
            <Categories data={categories} />
          </div>
        </>
      )}
    </>
  );
}

export default Product;

// {product && <p>{ product.images}</p>}
