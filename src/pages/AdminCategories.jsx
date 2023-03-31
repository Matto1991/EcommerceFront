import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import NavbarAdmin from "../components/NavbarAdmin";
import { Link, Navigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function AdminCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/categories`,
      });

      setCategories(response.data);
    };

    getCategories();
  }, []);

  const handleDelete = async (id) => {
    const response = await axios({
      method: "delete",
      url: `${process.env.REACT_APP_BACKEND_URL}/categories/${id}`,
    });
    setCategories(
      categories.filter((item) => item.id !== Number(response.data))
    );
  };
  return (
    <>
      <NavbarAdmin />
      <div className="container ">
        <div className="d-flex justify-content-between pt-4">
          <h2 className="d-inline">Categories</h2>
          <Link to="/admin/createCategory">
            <button className="btn btn-outline-success btn-m me-auto">
              Add Category
            </button>
          </Link>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-hover border border rounded shadow mt-5">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
              </tr>
            </thead>
            {categories.map((category) => {
              return (
                <>
                  <tbody>
                    <tr>
                      <td scope="row">{category.id}</td>

                      <td>{category.name}</td>
                      <td>
                        <Link to={`/admin/editCategory/${category.id}`}>
                          <button className="btn btn-outline-success btn-m">
                            Edit
                          </button>
                        </Link>
                      </td>
                      <td>
                        <IconButton
                          type="submit"
                          aria-label="delete"
                          size="small"
                          onClick={() => handleDelete(category.id)}
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
      </div>
    </>
  );
}

export default AdminCategories;
