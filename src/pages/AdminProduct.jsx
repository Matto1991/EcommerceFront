import axios from "axios";
import React, { useEffect, useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function AdminProduct() {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    const response = await axios({
      method: "get",
      url: `${process.env.REACT_APP_BACKEND_URL}/products`,
    });
    setProducts(response.data);
  };
  useEffect(() => {
    getProduct();
  }, []);

  const handleDelete = async (id) => {
    const response = await axios({
      method: "delete",
      url: `${process.env.REACT_APP_BACKEND_URL}/products/${id}`,
    });
    setProducts(products.filter((item) => item.id !== Number(response.data)));
  };

  return (
    <div>
      <NavbarAdmin />
      <section className="container">
        <div className="d-flex justify-content-between pt-4">
          <h2 className="d-inline">Products</h2>
          <Link to="">
            <button className="btn btn-outline-success btn-m">
              Add product
            </button>
          </Link>
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
                        <Link to={`/admin/edit/product/${product.id}`}>
                          <button className="edit-btn mb-2 w-100">Edit</button>
                        </Link>
                      </td>
                      <td>
                        <IconButton
                          type="submit"
                          aria-label="delete"
                          size="small"
                          onClick={() => handleDelete(product.id)}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
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
