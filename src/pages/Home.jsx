import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [categories, setCategories] = useState([]);

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
      <Navbar />
      <div className="row hero-image">
        <div className="col-12">
          <div className="d-flex justify-content-center align-items-center hero-text h-100 position-relative">
            <div>
              <p className="animation-first-phrase hero-title hero-title1-sm mb-4">
                In soft sculpture
              </p>
              <p className="animation-second-phrase hero-title hero-title2-sm mb-4">
                The mohair
              </p>
              <p className="animation-third-phrase hero-title hero-title3-sm mb-4">
                The winter edit
              </p>
              <h4 className="hero-cta hero-cta-sm">SHOP OUR COLLECTIONS</h4>
            </div>
          </div>
        </div>
      </div>

      {categories.length > 0 && (
        <>
          <div className="featured-section mx-auto">
            <div className="d-flex justify-content-center w-100 mb-5">
              <h2>Featured</h2>
            </div>
            <div className="row g-4">
              {featured.map((product) => {
                return (
                  <div key={product.id} className="col-12 col-md-6 col-lg-3">
                    <Link
                      to={`product/${product.id}`}
                      className="text-decoration-none text-black"
                    >
                      <div className="featured-card card d-flex flex-fill h-100">
                        <img
                          src={`${process.env.REACT_APP_BACKEND_URL}/${product.images[0]}`}
                          alt={`${product.name}`}
                          className="rounded-top"
                        />
                        <div className="card-body d-flex flex-column justify-content-between">
                          <div>
                            <h5 className="card-title featured-card-title">
                              {product.name}
                            </h5>
                            <p className="card-text featured-card-text">
                              {product.description}
                            </p>
                          </div>
                          <p className="card-text mt-4">
                            <small className="bold card-price">
                              From US$ {`${product.price}`}
                            </small>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="d-flex justify-content-center team-section">
            <div className="rounded text-center cta">
              Meet our team <i className="bi bi-arrow-up-right-square ms-2"></i>
            </div>
          </div>

          <div className="categories-section">
            <div className="d-flex justify-content-center w-100 mb-5">
              <h2>Shop by categories</h2>
            </div>
            <div className="row g-2 mx-auto categories-container h-100 mb-2">
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="row g-2 h-100">
                  <div className="col-12">
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

                  <div className="col-6">
                    <div
                      className="d-flex justify-content-center align-items-center rounded category-card"
                      style={{
                        backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL}/${categories[1].image})`,
                        backgroundRepeat: "no-Repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <h3 className="text-white display-6">
                        {categories[1].name}
                      </h3>
                    </div>
                  </div>
                  <div className="col-6">
                    <div
                      className="d-flex justify-content-center align-items-center rounded category-card"
                      style={{
                        backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL}/${categories[2].image})`,
                        backgroundRepeat: "no-Repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <h3 className="text-white display-6">
                        {categories[2].name}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div
                  className="d-flex justify-content-center align-items-center rounded category-card-right"
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
          </div>
        </>
      )}
      <div className="inspiration-section">
        <div className="row mx-auto inspiration-section-row">
          <div className="col-lg-4">
            <img src="/img/inspiration.webp" alt="inspiration" width="100%" />
          </div>

          <div className="col-lg-8">
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
              <h4 className="fs-2 mt-5">Get Inspired</h4>
              <p className="mb-5 text-secondary text-center">
                Discover our favorite looks across the home to inspire your
                space.
              </p>
              <div className="rounded text-center inspiration-cta">
                Shop by set <i className="bi bi-handbag ms-2"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
