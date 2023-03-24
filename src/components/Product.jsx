import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./ProductStyles.css";
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
      <div className="nav-card">
        <Navbar />

        <div className="card mb-3 pt-5">
          <div className="row g-4 pt-5">
            <div className="col-12 col-lg-8">
              <img
                src={`${process.env.REACT_APP_BACKEND_URL}/${product.images}`}
                style={{ maxWidth: "100%" }}
                alt={product.name}
              />
            </div>
            <div className="col-12 col-lg-4">
              <div className="card-body ">
                              <h1 className="title card-title ">{product.name}</h1>
                              <p>Ships in 1 week | 
Unlimited White Glove Delivery for $145</p>

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
                <button class="button bold">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {categories.length > 0 && (
        <>
          <div className="categories-section">
            <div className="d-flex justify-content-center w-100 mb-4">
              <h2>Shop by categories</h2>
            </div>
            <div className="row g-2 mx-auto categories-container h-50 mb-2">
              <div className="col-8">
                <div
                  className="d-flex justify-content-center align-items-center rounded category-card"
                  style={{
                    backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL}/${categories[0].image})`,
                    backgroundRepeat: "no-Repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h3 className="text-white display-6 category-card-title">
                    {categories[0].name}
                  </h3>
                </div>
              </div>
              <div className="col-4">
                <div
                  className="d-flex justify-content-center align-items-center rounded category-card"
                  style={{
                    backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL}/${categories[1].image})`,
                    backgroundRepeat: "no-Repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h3 className="text-white display-6">{categories[1].name}</h3>
                </div>
              </div>
            </div>
            <div className="row g-2 mx-auto categories-container h-50">
              <div className="col-4">
                <div
                  className="d-flex justify-content-center align-items-center rounded category-card"
                  style={{
                    backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL}/${categories[2].image})`,
                    backgroundRepeat: "no-Repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h3 className="text-white display-6">{categories[2].name}</h3>
                </div>
              </div>
              <div className="col-8">
                <div
                  className="d-flex justify-content-center align-items-center rounded category-card"
                  style={{
                    backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL}/${categories[3].image})`,
                    backgroundRepeat: "no-Repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h3 className="text-white display-6">{categories[3].name}</h3>
                </div>
              </div>
            </div>
            <div className="inspiration-section">
              <div className="row mx-auto inspiration-section-row">
                <div className="col-4">
                  <img
                    src="/img/inspiration.webp"
                    alt="inspiration"
                    width="100%"
                  />
                </div>

                <div className="col-8">
                  <div className="d-flex flex-column justify-content-center align-items-center h-100">
                    <h4 className="fs-2">Get Inspired</h4>
                    <p className="mb-5 text-secondary">
                      Discover our favorite looks across the home to inspire
                      your space.
                    </p>
                    <div className="rounded text-center inspiration-cta">
                      Meet our team
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Product;

// {product && <p>{ product.images}</p>}
