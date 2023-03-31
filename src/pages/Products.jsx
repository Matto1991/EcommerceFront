import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarOther from "../components/NavbarOther";

function Products() {
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
      <div className="product-section mx-auto">
        <div className="d-flex align-items-center flex-column w-100 mb-4">
          <h2 className="product-section-title rounded mt-2 mb-3">
            All products
          </h2>
          <p className="category-section-subtitle text-center fs-5 ">
            Rooted in sculpted forms, luxurious texture, and a reverence for
            craftsmanship, each piece is definitively modern, yet an enduring
            classic.
          </p>
        </div>
        <div className="row g-4 container-fluid">
          {products.map((product) => {
            return (
              <div key={product.id} className="col-12 col-md-6 mt-5 p-3">
                <Link
                  to={`/product/${product.id}`}
                  className="text-reset text-decoration-none"
                >
                  <div className="product-card">
                    <img
                      src={
                        typeof product.images === "object"
                          ? `${process.env.REACT_APP_BACKEND_URL}/${product.images[0]}`
                          : `${process.env.REACT_APP_BACKEND_URL}/img/users/${product.images} `
                      }
                      alt={`${product.name}`}
                      className="product-image rounded-top "
                      width="100%"
                    />
                    <div className="card-body rounded-bottom featured-card-body d-flex justify-content-between p-4">
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
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
