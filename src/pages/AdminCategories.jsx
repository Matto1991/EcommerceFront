import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import NavbarAdmin from "../components/NavbarAdmin";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AdminDash from "../components/AdminDash";

function AdminCategories() {
  const token = useSelector((state) => state.session.token);
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
      headers: {
        Authorization: `Bearer ${token}`,
      },
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

      <div className="d-flex">
        <AdminDash />

        <div className="container ">
          <div className="d-flex justify-content-between pt-4">
            <h2 className="d-inline">Categories</h2>
            <Link to="/admin/create/category">
              <button className="btn cta-dashboard text-white btn-m me-auto">
                Add Category
              </button>
            </Link>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-hover border border rounded shadow mt-5 text-center">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Options</th>
                </tr>
              </thead>
              {categories.map((category) => {
                return (
                  <>
                    <tbody>
                      <tr>
                        <td>{category.id}</td>

                        <td>{category.name}</td>
                        <td>
                          <Link to={`/admin/edit/category/${category.id}`}>
                            <button className="btn edit-btn btn-m">Edit</button>
                          </Link>
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
            {categories.length === 0 && (
              <div className="no-orders rounded mx-auto">
                <h2 className="no-orders-title text-center">
                  There are no categories to display!
                </h2>
                <h2 className="no-orders-message text-center">
                  When available, you will find them here.
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminCategories;
