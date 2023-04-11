import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import NavbarOther from "../components/NavbarOther";
import Footer from "../components/Footer";
import Information from "../components/Information";
function Category() {
  const { name } = useParams();
  const [category, setCategory] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/categories/${name}`,
      });

      setCategory(response.data);

      setProducts(response.data.products);
    };

    getCategories();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      {!category && products.length === 0 ? (
        <p>NO DATA</p>
      ) : (
        <>
          <NavbarOther />
          <div className="category-section mx-auto pt-8">
            <div className="d-flex align-items-center flex-column w-100 mb-4">
              <h2 className="category-section-title rounded mt-5 mb-3 ">
                {category.name} collection
              </h2>
              <p className="category-section-subtitle text-center">
                A small batch assortment in our most popular materials. Ready to
                ship within 3-5 days from our artisan workrooms.
              </p>
            </div>
            {products.map((product) => {
              return (
                <div className="row g-4" key={product.id}>
                  <Link
                    to={`/product/${product.id}`}
                    className="text-reset text-decoration-none"
                  >
                    <div
                      className="card mb-3 
                   border-0 rounded"
                    >
                      <div className="row pt-4">
                        <div className="col-12 col-lg-8 p-0  ">
                          <img
                            className="product-image img-fluid "
                            src={
                              typeof product.images === "object"
                                ? `${process.env.REACT_APP_IMAGES_URL}/${product.images[0]}`
                                : `${process.env.REACT_APP_IMAGES_URL}/img/users/${product.images} `
                            }
                            alt={product.name}
                          />
                        </div>
                        <div className="col-12 col-lg-4 p-0">
                          <div className="categories-card card-body h-100 justify-content-center align-items-center d-flex flex-column">
                            <h4 className="categories-card-title card-title pb-5 ">
                              {product.name}
                            </h4>
                            <p className="categories-additional-info d-flex flex-column ">
                              READY TO SHIP{" "}
                              <span className="text-center">
                                Ships in 3-5 days
                              </span>{" "}
                            </p>

                            <p className="categories-additional-info d-flex flex-column">
                              MADE TO ORDER{" "}
                              <span className="text-center">
                                Ships in 2 weeks
                              </span>{" "}
                            </p>

                            <h5 className="categories-price bold card-price pt-2">
                              <span className="text-dark">from</span> US${" "}
                              {product.price}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <Information />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Category;
