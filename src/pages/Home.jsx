import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function Home() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const getFeatured = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/products`,
      });

      const featuredProducts = response.data.splice(0, 4);
      setFeatured(featuredProducts);

      console.log(featuredProducts);
    };

    getFeatured();
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

      <div className="container mt-5">
        <div className="d-flex justify-content-center w-100 mt-5 mb-5">
          <h2>Featured</h2>
        </div>
        <div className="row g-4">
          {featured.map((product, index) => {
            return (
              <>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="featured-card card d-flex flex-fill h-100">
                    <img
                      src={`${process.env.REACT_APP_BACKEND_URL}/${product.images[0]}`}
                      alt={`${product.name}`}
                      className="rounded-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">{product.description}</p>
                      <p className="card-text">
                        <small className="bold card-price">
                          US$ {`${product.price}`}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="categories-section">
        <div className="d-flex justify-content-center w-100 mb-5">
          <h2>Shop by categories</h2>
        </div>
        <div className="row h-100 mx-auto categories-container gx-3">
          <div className="col-12 d-flex justify-content-center align-items-center rounded category-card living-category mb-3">
            <h3 className="text-white fs-2 ">Living</h3>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center rounded category-card bedroom-category mb-3">
            <h3 className="text-white fs-2">Bedroom</h3>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center rounded category-card dining-category mb-3">
            <h3 className="text-white fs-2 ">Dining</h3>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center rounded category-card sets-category">
            <h3 className="text-white fs-2">Sets</h3>
          </div>
        </div>
      </div>
    </>
  );
}
