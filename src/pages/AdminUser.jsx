import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import NavbarAdmin from "../components/NavbarAdmin";
import { Link } from "react-router-dom";

function AdminUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_BACKEND_URL}/users`,
      });
      setUsers(response.data);
      console.log(response.data);
    };
    getUsers();
  }, []);

  return (
    <div>
      {/* <AdminOptions /> */}
      <NavbarAdmin />
      <section className="container">
        <div className="d-flex justify-content-between pt-4">
          <h2 className="d-inline">Users</h2>
          <Link to="">
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
                        <a href="/panel/admin/item.id/edit ">
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
