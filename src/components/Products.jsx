import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarOther from "../components/NavbarOther";
function Products() {
  const navigate = useNavigate();
  const handleGoTo = (url) => {
    navigate(url);
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/products`,
      });

      setProducts(response.data);
    };

    getProducts();
  }, []);
  return (
    <>
      <NavbarOther />
      <div className="container">
        <div className="row g-4 container-fluid pt-5 ">
          <h2 className="pt-5">All products</h2>
          {products.map((product) => {
            return (
              <div key={product.id} className="col-12 col-md-6 mt-5">
                <div
                  className="featured-card card d-flex flex-fill h-100"
                  onClick={() => handleGoTo(`/product/${product.id}`)}
                >
                  <img
                    src={
                      typeof product.images === "object"
                        ? `${process.env.REACT_APP_BACKEND_URL}/${product.images[0]}`
                        : `${process.env.REACT_APP_BACKEND_URL}/img/users/${product.images} `
                    }
                    alt={`${product.name}`}
                    className="rounded-top"
                  />
                  <div className="card-body rounded-bottom featured-card-body d-flex justify-content-between">
                    <div>
                      <h4 className="card-title featured-card-title">
                        {product.name}
                      </h4>
                      <p className="d-flex flex-column product-subtitle mt-3  ">
                        MADE TO ORDER{" "}
                        <span className=" featured-card-text">
                          Ships in 3-5 days
                        </span>{" "}
                      </p>
                    </div>
                    <p className="card-text">
                      <small className="bold card-price">
                        From U$S {`${product.price}`}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
