import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarAdmin from "../components/NavbarAdmin";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const token = useSelector((state) => state.session.token);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const toastMessage = (error) => toast.error(error);

  const navigate = useNavigate();

  const handleUserCreation = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("firstname", firstName);
    formData.append("lastname", lastName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", image);

    const response = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      url: `${process.env.REACT_APP_BACKEND_URL}${
        isAdmin ? "/admins" : "/users"
      }`,
      data: formData,
    });

    if (response.data.error) {
      if (response.data.error === "Repeated email") {
        toastMessage("You are already registered!");
      } else {
        toastMessage("Unexpected error");
      }
    } else {
      toast.success(`Successfully created ${isAdmin ? "Admin" : "User"}`);
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
          <h2 className="create-admin-title fs-1">Create User</h2>

          <form
            className="row g-3"
            onSubmit={(event) => {
              handleUserCreation(event);
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
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <IconButton
              aria-label="upload picture"
              component="label"
              className=" mt-3"
            >
              <input
                hidden
                accept="image/*"
                type="file"
                name="image"
                onChange={(event) => setImage(event.target.files[0])}
                required
              />
              <small className="me-2 input-tx text-dark ">Upload </small>{" "}
              <PhotoCamera className="input-tx text-dark" />
            </IconButton>

            <div className="col-12">
              <div className="form-check ">
                <input
                  className="form-check-input "
                  type="checkbox"
                  id="gridCheck"
                  value={isAdmin}
                  onChange={() => setIsAdmin(!isAdmin)}
                />
                <label className="form-check-label  " htmlFor="gridCheck">
                  Admin
                </label>
              </div>
            </div>
            <div className="col-6 mx-auto">
              <button
                className="create-admin-form rounded border-0 w-75 m-4 fs-5 d-block mx-auto"
                type="submit"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateUser;
