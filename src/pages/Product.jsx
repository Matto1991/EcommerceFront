import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart } from "../redux/cartReducer";
import "./ProductStyles.css";
import Categories from "../components/Categories";
import NavbarOther from "../components/NavbarOther";
import Rating from "@mui/material/Rating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);

  const [value, setValue] = useState(4);

  const products = useSelector((state) => state.cart.products);

  const notify = () => {
    toast.success(`Added ${product.name} to cart`, {
      position: "bottom-left",
    });
  };

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/products/${id}`,
      });
      setProduct(response.data);
    };

    getProduct();
  }, []);

  const handleAddToCart = () => {
    notify();
    dispatch(addToCart({ product }));
  };

  return (
    product.images && (
      <>
        <NavbarOther />
        <div className="container mt-5">
          <div className="card mb-3 pt-5 border-0">
            <div className="row g-4 pt-5">
              <div className="col-12 col-lg-8">
                <img
                  className="img-fluid h-100"
                  src={
                    typeof product.images === "object"
                      ? `${process.env.REACT_APP_BACKEND_URL}/${product.images[0]}`
                      : `${process.env.REACT_APP_BACKEND_URL}/img/users/${product.images} `
                  }
                  alt={product.name}
                />
              </div>
              <div className="col-12 col-lg-4">
                <div className="card-body ">
                  <h1 className="product-title card-title ">{product.name}</h1>
                  <p>Ships in 1 week</p>

                  <Rating
                    name="simple-controlled"
                    className="brown"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                  <h4 className="bold product-price pt-2">
                    <small className="product-price-small">from</small> U$S{" "}
                    {product.price}
                  </h4>
                  <h5 className="border-top card-text product-description border-bottom pt-4 pb-3 fs-5">
                    {product.description}
                  </h5>
                  <h5 className="product-additional-info">SHOWN</h5>
                  <p className="product-additional-info">
                    Fabric or Leather: Mohair - Mink Size: 100" Wide
                  </p>
                </div>

                <div className="d-flex justify-content-around align-items-end ">
                  <h4 className="card-text pt-5 fw-light card-price">
                    Free shipping
                  </h4>
                  <button
                    className="product-btn rounded"
                    onClick={() => handleAddToCart()}
                  >
                    Add to cart
                  </button>
                  <ToastContainer className="toast-message" />
                </div>
              </div>
            </div>
            <div className="d-flex mt-4">
              <Link to="/products" className="text-black text-decoration-none">
                <h4 className="fs-5">
                  <i className="bi bi-arrow-left fs-5"></i> Back to all products
                </h4>
              </Link>
            </div>
          </div>
        </div>
        {categories.length > 0 && (
          <>
            <div className="categories-section border-top pt-5">
              <Categories />
            </div>
          </>
        )}
      </>
    )
  );
}

export default Product;
