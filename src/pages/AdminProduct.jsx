import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavbarAdmin from "../components/NavbarAdmin";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AdminDash from "../components/AdminDash";

export default function AdminProduct() {
  const token = useSelector((state) => state.session.token);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/products`,
      });
      setProducts(response.data);
    };

    getProduct();
  }, []);

  const handlProductDelete = async (id) => {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "DELETE",
      url: `${process.env.REACT_APP_BACKEND_URL}/products/${id}`,
    });
    setProducts(
      products.filter((product) => product.id !== Number(response.data))
    );
  };

  return (
    <>
      <NavbarAdmin />

      <div className="d-flex">
        <AdminDash />

        <section className="container">
          <div className="d-flex justify-content-between pt-4">
            <h2 className="d-inline">Products</h2>
            <Link to="/admin/create/product">
              <button className="btn cta-sobre-proyecto text-white btn-m">
                Add product
              </button>
            </Link>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-hover border border rounded shadow mt-5 ">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Stock</th>
                  <th scope="col" className="text-end">
                    Options
                  </th>
                </tr>
              </thead>
              {products.map((product) => {
                return (
                  <tbody key={product.id}>
                    <tr>
                      <th scope="row"> {product.name}</th>
                      <td> US$ {product.price} </td>
                      <td> {product.stock}</td>
                      <td className="d-flex justify-content-end">
                        <Link to={`/admin/edit/product/${product.id}`}>
                          <button className="edit-btn mb-2 w-100 me-3">
                            Edit
                          </button>
                        </Link>
                        <IconButton
                          type="submit"
                          aria-label="delete"
                          size="small"
                          onClick={() => handlProductDelete(product.id)}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </section>
      </div>
    </>
  );
}
