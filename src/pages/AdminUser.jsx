import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import NavbarAdmin from "../components/NavbarAdmin";
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function AdminUser() {
  const [users, setUsers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const navigate = useNavigate();
  const handleGoTo = (url, isAdmin) => {
    navigate(url, {
      state: {
        isAdmin,
      },
    });
  };
  const getUsers = async () => {
    const response = await axios({
      method: "get",
      url: `${process.env.REACT_APP_BACKEND_URL}/users`,
    });
    setUsers(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    getUsers();

    const getAdmins = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_BACKEND_URL}/admins`,
      });
      setAdmins(response.data);
      console.log(response.data);
    };
    getAdmins();
  }, []);

  const handleDelete = async (id) => {
    const response = await axios({
      method: "delete",
      url: `${process.env.REACT_APP_BACKEND_URL}/users/${id}`,
    });
    // console.log(typeof response.data);
    // console.log(users);
    setUsers(users.filter((item) => item.id !== Number(response.data)));
  };

  return (
    <div>
      {/* <AdminOptions /> */}
      <NavbarAdmin />
      <section className="container">
        <div className="d-flex justify-content-between pt-4">
          <h2 className="d-inline">Users</h2>
          <Link to="/admin/newUser">
            <button className="btn btn-outline-success btn-m">Add user</button>
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
                <>
                  <tbody>
                    <tr>
                      <th scope="row">{user.id}</th>
                      <td>{user.avatar}</td>
                      <td>
                        {" "}
                        {user.firstname} {user.lastname}{" "}
                      </td>
                      <td> {user.email} </td>
                      <td> admin yes/no</td>
                      <td>
                        {/* <Link to={`/admin/EditUser`}>
                          <button className="edit-btn mb-2 w-100">Edit</button>
                        </Link> */}
                        <a
                          onClick={() =>
                            handleGoTo(`/admin/edit-user/${user.id}`)
                          }
                        >
                          <button className="edit-btn mb-2 w-100">Edit</button>
                        </a>
                      </td>
                      <td>
                        <IconButton
                          type="submit"
                          aria-label="delete"
                          size="small"
                          onClick={() => handleDelete(user.id)}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </td>
                    </tr>
                  </tbody>
                </>
              );
            })}
            {admins.map((admin) => {
              return (
                <>
                  <tbody>
                    <tr>
                      <th scope="row">{admin.id}</th>
                      <td>{admin.avatar}</td>
                      <td>
                        {" "}
                        {admin.firstname} {admin.lastname}{" "}
                      </td>
                      <td> {admin.email} </td>
                      <td> admin yes/no</td>
                      <td>
                        <a
                          onClick={() =>
                            handleGoTo(`/admin/edit-user/${admin.id}`)
                          }
                        >
                          <button className="edit-btn mb-2 w-100">Edit</button>
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

export default AdminUser;
