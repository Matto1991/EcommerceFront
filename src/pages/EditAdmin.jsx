import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarAdmin from "../components/NavbarAdmin";

export default function EditAdmin() {
  const token = useSelector((state) => state.session.token);
  const { id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const toastMessage = (error) => toast.error(error);
  const navigate = useNavigate();
  const setUser = (user) => {
    setFirstName(user.firstname);
    setLastName(user.lastname);
    setEmail(user.email);
  };

  useEffect(() => {
    const getUser = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/admins/${id}`,
      });

      setUser(response.data);
    };

    getUser();
  }, []);

  const handleAdminEdit = async (event) => {
    event.preventDefault();

    const response = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "PATCH",
      url: `${process.env.REACT_APP_BACKEND_URL}/admins/${id}`,
      data: { firstname: firstName, lastname: lastName, email },
    });

    if (response.data.error) {
      toastMessage("Unexpected error");
    } else {
      toast.success("Successfully edited Admin");
    }

    navigate(-1);
  };

  return (
    <>
      <NavbarAdmin />
      <ToastContainer />

      <div className="container p-5">
        <div
          onClick={() => navigate(-1)}
          className="text-black text-decoration-none mb-2 cursor-pointer"
        >
          <h4 className="fs-5">
            <i className="bi bi-arrow-left fs-5"></i> Return
          </h4>
        </div>
        <div className="col-md-5 col-lg-5 mx-auto">
          <h2 className="create-admin-title fs-1">Edit admin</h2>

          <form
            className="row g-3"
            onSubmit={(event) => {
              handleAdminEdit(event);
            }}
          >
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Firstname
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="Firstname"
                name="firstname"
                id="firstname"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Lastname
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="Lastname"
                name="lastname"
                id="lastname"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="col-6">
              <button
                className="create-admin-form rounded border-0 w-75 m-4 fs-5 d-block mx-auto"
                type="submit"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
