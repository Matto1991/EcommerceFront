import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Category() {
  const { name } = useParams();
  const [category, setCategory] = useState();
  const [products, setProducts] = useState([]);
  const getCategories = async () => {
    const response = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_BACKEND_URL}/categories/${name}`,
    });

    setCategory(response.data);
    setProducts(response.data.products);
  };

  useEffect(() => {
    getCategories();
  }, [name]);

  return (
    <div>
      {!category && products.length === 0 ? (
        <p>NO DATA</p>
      ) : (
        <>
          <div className="container pt-8">
            <h2>{category.name}</h2>
            {products.map((product) => {
              return (
                <div className="row g-4" key={product.id}>
                  <div
                    className=" card mb-3 
                   border-0"
                  >
                    <div className="row pt-5">
                      <div className="col-12 col-lg-8 p-0 ">
                        <img
                          className="img-fluid h-100 w-100"
                          src={`${process.env.REACT_APP_BACKEND_URL}/${product.images}`}
                          alt={product.name}
                        />
                      </div>
                      <div className="col-12 col-lg-4 p-0">
                        <div className="categories-card card-body h-100 justify-content-center align-items-center d-flex flex-column">
                          <h4 className="title card-title pb-5 ">
                            {product.name}
                          </h4>
                          <p className="d-flex flex-column ">
                            READY TO SHIP <span>Ships in 3-5 days</span>{" "}
                          </p>

                          <p className="d-flex flex-column">
                            MADE TO ORDER <span>Ships in 2 weeks</span>{" "}
                          </p>

                          <h5 className=" bold card-price pt-2">
                            <span className="text-dark">From</span> US${" "}
                            {product.price}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Category;
