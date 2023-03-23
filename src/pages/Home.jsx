import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
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
          <div className="d-flex justify-content-center align-items-center hero-text h-100">
            <div className="hero-title-container rounded">
              <h1 className="hero-title mb-4">In soft sculpture</h1>
              <div className="d-flex justify-content-end w-100">
                <h4 className="hero-cta">ABOUT THIS PROYECT</h4>
              </div>
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
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
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
            <div className="rounded text-center cta">Meet our team</div>
          </div>

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
