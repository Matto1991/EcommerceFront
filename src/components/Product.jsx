import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

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

  return (
      <div>
          <Navbar/>
      <div className="card mb-3 pt-5">
        <div className="row g-4 pt-5">
          <div className="col">
            <img
              src={`${process.env.REACT_APP_BACKEND_URL}/${product.images}`}
              style={{ maxWidth: "700px" }}
            />
          </div>
          <div className="col ">
            <div className="card-body">
              <h2 className="card-title ">{product.name}</h2>
              <h5 className="border-top bold card-price pt-2">
                US$ {product.price}
              </h5>
              <p className="card-text pt-4">{product.description}</p>
              <h5 className=" card-text pt-5 bold card-price">Free shipping</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

// {product && <p>{ product.images}</p>}
