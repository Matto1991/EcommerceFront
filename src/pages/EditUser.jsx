import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarAdmin from "../components/NavbarAdmin";

function EditUser() {
  const { id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const toastMessage = (error) => toast.error(error);

  const handleUserEdit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("firstname", firstName);
    formData.append("lastname", lastName);
    formData.append("email", email);
    // formData.append("password", password);
    // formData.append("image", image);

    const response = await axios({
      method: "patch",
      url: `${process.env.REACT_APP_BACKEND_URL}/users/${id}`,
      data: { firstname: firstName, lastname: lastName, email },
    });
    if (response.data.error) {
      toastMessage("Unexpected error");
    } else {
      toast.success("Success");
      handleCleanForm();
    }
  };

  const handleCleanForm = async () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    // setPassword("");
    // setImage(null);
    // setIsAdmin("");
  };

  const setUser = (user) => {
    setFirstName(user.firstname);
    setLastName(user.lastname);
    setEmail(user.email);
  };

  const getUser = async () => {
    const response = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_BACKEND_URL}/users/${id}`,
    });

    setUser(response.data);
  };

  useEffect(() => {
    getUser();
  }, [id]);

  return (
    <>
      <NavbarAdmin />
      <ToastContainer />

      <div className="container p-5">
        <div className="col-md-5 col-lg-5 mx-auto">
          <h2 className=" text-dark create-account fs-1">Edit</h2>

          <form
            className="row g-3"
            onSubmit={(event) => {
              handleUserEdit(event);
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
            {/* <div className="col-12">
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
            </div> */}
            {/* <IconButton
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
              <small className="me-2 input-tx text-dark">Upload </small>{" "}
              <PhotoCamera className="input-tx text-dark" />
            </IconButton> */}

            {/* <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  value={isAdmin}
                  onChange={() => setIsAdmin(!isAdmin)}
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Admin
                </label>
              </div>
            </div> */}
            <div className="col-6">
              <button
                className="btn btn-success sign-up-btn border-0 w-75 m-4 fs-5 d-block mx-auto"
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

export default EditUser;
