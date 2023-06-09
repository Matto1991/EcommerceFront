import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart } from "../redux/cartReducer";
import "./productStyles.css";
import Categories from "../components/Categories";
import NavbarOther from "../components/NavbarOther";
import Rating from "@mui/material/Rating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  //eslint-disable-next-line
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
    //eslint-disable-next-line
  }, []);

  const handleAddToCart = () => {
    const currentProduct = products.find((item) => item.id === product.id);

    if (currentProduct && currentProduct.quantity >= currentProduct.stock)
      return toast.error(`Can´t add ${product.name} to cart`, {
        position: "bottom-left",
      });
    dispatch(addToCart({ product }));
    notify();
  };

  return (
    product && (
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
                      ? `${process.env.REACT_APP_IMAGES_URL}/${product.images[0]}`
                      : `${process.env.REACT_APP_IMAGES_URL}/users/${product.images} `
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
                    <small className="product-price-small">from</small> US${" "}
                    {product.price}
                  </h4>
                  <h5 className="border-top card-text product-description border-bottom pt-4 pb-3">
                    {product.description}
                  </h5>
                  <h5 className="product-additional-info">SHOWN</h5>
                  <p className="product-additional-info">
                    Fabric or Leather: Mohair - Mink Size: 100" Wide
                  </p>
                  <div className="d-flex justify-content-between">
                    <p className="mt-3">Stock: {product.stock}</p>
                    {product.stock === 0 && (
                      <p className="mt-2 me-2 back-soon-product">Back soon</p>
                    )}
                  </div>
                  <ToastContainer className="toast-success" />
                </div>

                <div className="d-flex justify-content-between align-items-end ">
                  <h4 className="card-text pt-5 fw-light card-price ms-3">
                    Free shipping
                  </h4>
                  <button
                    className="product-btn rounded me-3"
                    onClick={() => handleAddToCart()}
                    disabled={product.stock === 0}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex mt-4">
              <h4 className="fs-5 cursor-pointer" onClick={() => navigate(-1)}>
                <i className="bi bi-arrow-left fs-5"></i> Return
              </h4>
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
