import axios from "axios";
import React, { useEffect, useState } from "react";
import OffCanvas from "../components/OffCanvas";

function AdminProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_BACKEND_URL}/products`,
      });
      setProducts(response.data);
      console.log(response.data);
    };
    getProduct();
  }, []);

  return (
    <div>
      <section className="container">
        <h1></h1>
        <OffCanvas />
        <div className="d-flex justify-content-between pt-4">
          <h2 className="d-inline">Products</h2>
          <a href="/panel/admin/crear">
            <button className="btn btn-success btn-m">New</button>
          </a>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-hover border border rounded shadow mt-5">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Stock</th>
                    </tr>
                  </thead>
            {products.map((product) => {
              return (
                <>
                  <tbody>
                    <tr>
                      <th scope="row"> {product.name}</th>
                      <td> US$ {product.price} </td>
                      <td> {product.stock}</td>
                      <td>
                        <a href="/panel/admin/item.id/edit ">
                          <button className="btn btn-dark mb-2 w-100">
                            Edit
                          </button>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </>
              );
            })}
          </table>
        </div>
      </section>
    </div>
  );
}

export default AdminProduct;
