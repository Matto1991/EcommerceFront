import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import NavbarAdmin from "../components/NavbarAdmin";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AdminDash from "../components/AdminDash";
import { Avatar } from "@mui/material";

function AdminUser() {
  const token = useSelector((state) => state.session.token);
  const [users, setUsers] = useState([]);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/users`,
      });
      setUsers(response.data);
    };

    const getAdmins = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/admins`,
      });
      setAdmins(response.data);
    };

    getUsers();
    getAdmins();
  }, []);

  const handleUserDelete = async (userId) => {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "DELETE",
      url: `${process.env.REACT_APP_BACKEND_URL}/users/${userId}`,
    });
    setUsers(users.filter((user) => user.id !== Number(response.data)));
  };

  const handleAdminDelete = async (adminId) => {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "DELETE",
      url: `${process.env.REACT_APP_BACKEND_URL}/admins/${adminId}`,
    });

    setAdmins(admins.filter((admin) => admin.id !== Number(response.data)));
  };

  return (
    <div>
      <NavbarAdmin />

      <div className="d-flex">
        <AdminDash />

        <section className="container">
          <div className="d-flex justify-content-between pt-4">
            <h2 className="d-inline">Users</h2>
            <Link to="/admin/create/user">
              <button className="btn cta-sobre-proyecto text-white btn-m">
                Add user
              </button>
            </Link>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-hover border border rounded shadow mt-5">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Avatar</th>
                  <th scope="col">Full name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Administrator</th>
                </tr>
              </thead>
              {users.map((user) => {
                return (
                  <tbody key={user.id}>
                    <tr>
                      <th scope="row">{user.id}</th>
                      <td>
                        {" "}
                        <Avatar
                          alt="User"
                          src={
                            typeof user.avatar === "object"
                              ? `${process.env.REACT_APP_BACKEND_URL}/${user.avatar}`
                              : `${process.env.REACT_APP_BACKEND_URL}/img/users/${user.avatar} `
                          }
                          className="navbar-avatar ms-4"
                        />
                      </td>
                      <td>
                        {" "}
                        {user.firstname} {user.lastname}{" "}
                      </td>
                      <td> {user.email} </td>
                      <td>No</td>
                      <td>
                        <Link to={`/admin/edit/user/${user.id}`}>
                          <button className="edit-btn mb-2 w-100">Edit</button>
                        </Link>
                      </td>
                      <td>
                        <IconButton
                          type="submit"
                          aria-label="delete"
                          size="small"
                          onClick={() => handleUserDelete(user.id)}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
              {admins.map((admin) => {
                return (
                  <tbody key={admin.id}>
                    <tr>
                      <th scope="row">{admin.id}</th>
                      <td>
                        {" "}
                        <Avatar
                          alt={admin.firstname}
                          src={
                            typeof admin.avatar === "object"
                              ? `${process.env.REACT_APP_BACKEND_URL}/${admin.avatar}`
                              : `${process.env.REACT_APP_BACKEND_URL}/img/users/${admin.avatar} `
                          }
                          className="navbar-avatar ms-4"
                        />
                      </td>
                      <td>
                        {" "}
                        {admin.firstname} {admin.lastname}{" "}
                      </td>
                      <td> {admin.email} </td>
                      <td>Yes</td>
                      <td>
                        <Link to={`/admin/edit/admin/${admin.id}`}>
                          <button className="edit-btn mb-2 w-100">Edit</button>
                        </Link>
                      </td>
                      <td>
                        <IconButton
                          type="submit"
                          aria-label="delete"
                          size="small"
                          onClick={() => handleAdminDelete(admin.id)}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
            {users.length === 0 && (
              <div className="no-orders rounded mx-auto">
                <h2 className="no-orders-title text-center">
                  There are no users to display!
                </h2>
                <h2 className="no-orders-message text-center">
                  When available, you will find them here.
                </h2>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AdminUser;
