import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import Categories from "../components/Categories";
import NavbarHome from "../components/NavbarHome";
import Information from "../components/Information";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Home() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    nextArrow: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const getFeatured = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/products/featured`,
      });
      setFeatured(response.data);
    };

    getFeatured();
  }, []);

  return (
    <>
      <NavbarHome />
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
              <Link to={"/products"} className="text-reset ">
                {" "}
                <h4 className="hero-cta hero-cta-sm">SHOP OUR COLLECTIONS</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <>
        <div className="featured-section mx-auto">
          <div className="d-flex justify-content-center w-100 mb-5">
            <h2 className="section-title">Featured</h2>
          </div>
          <Slider
            {...settings}
            prevArrow={<ArrowBackIosNewIcon />}
            nextArrow={<ArrowForwardIosIcon />}
          >
            {featured.map((product) => {
              return (
                <div key={product.id}>
                  <Link
                    to={`product/${product.id}`}
                    className="text-decoration-none text-black"
                  >
                    <div className="featured-card-container">
                      <div className="featured-card card d-flex flex-fill ">
                        {" "}
                        <img
                          src={
                            typeof product.images === "object"
                              ? `${process.env.REACT_APP_IMAGES_URL}/${product.images[0]}`
                              : `${process.env.REACT_APP_IMAGES_URL}/users/${product.images}`
                          }
                          alt={`${product.name}`}
                          className="featured-product-image rounded-top"
                        />
                        <div className="card-body featured-card-body-home d-flex flex-column justify-content-between rounded-bottom">
                          <div>
                            <h5 className="card-title featured-card-title">
                              {product.name}
                            </h5>
                            <p className="card-text featured-card-text">
                              {product.description}
                            </p>
                          </div>
                          <p className="card-text mt-4">
                            <small className="card-price">
                              From US$ {`${product.price}`}
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>

        <div className="team-section d-flex justify-content-center align-items-center">
          <Link
            to="/project/details"
            className="text-decoration-none text-reset"
          >
            <div className="rounded text-center cta">
              Project details{" "}
              <i className="bi bi-arrow-up-right-square ms-2"></i>
            </div>
          </Link>
        </div>

        <div className="categories-section">
          <Categories />
        </div>
      </>
      <div className="inspiration-section">
        <div className="row mx-auto inspiration-section-row">
          <div className="col-lg-4">
            <img src="/img/inspiration.webp" alt="inspiration" width="100%" />
          </div>

          <div className="col-lg-8">
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
              <h4 className="fs-2 mt-5 section-title">Get Inspired</h4>
              <p className="section-subtitle mb-5 text-secondary text-center">
                Discover our favorite looks across the home to inspire your
                space.
              </p>
              <Link
                to="/category/sets"
                className="text-decoration-none text-reset"
              >
                <div className="rounded text-center inspiration-cta">
                  Shop by set <i className="bi bi-handbag ms-2"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Information />
      <Footer />
    </>
  );
}
