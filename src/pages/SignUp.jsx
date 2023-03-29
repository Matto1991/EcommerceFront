import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SingUp() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const userAlreadyExists = () => toast.error("You are already registered!");

  const handleUserCreation = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("firstname", firstName);
    formData.append("lastname", lastName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", image);
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/users`,
      formData
    );
    if (response.data.message === "User already exists") {
      userAlreadyExists();
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <ToastContainer className="toastify--error" />
      <div className="form-login">
        <div className="container p-5">
          <div className="row formulary">
            <div className="formulary-welcome-message justify-content-center col-md-6 col-lg-6 text-center d-flex flex-column">
              <h2>Welcome to Ecozy Luxury</h2>
              <p>
                {" "}
                <span className="me-1 formulary-subtitle">
                  Already have an account?
                </span>
                <Link
                  to="/login"
                  className="formulary-subtitle text-decoration-none fw-bold link-sign-up fs-6"
                >
                  {" "}
                  Sign in
                </Link>
              </p>
              {/* <button className="btn btn-lg btn-success sign-up-btn border-0">Sign Up</button> */}
            </div>

            <div className="form-auth col-md-5 col-lg-5">
              <form
                onSubmit={(event) => {
                  handleUserCreation(event);
                }}
              >
                <h2 className="create-account">Register</h2>

                <input
                  type="text"
                  placeholder="Firstname"
                  name="firstname"
                  id="firstname"
                  className="input-tx mt-3"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Lastname"
                  name="lastname"
                  id="lastname"
                  className="input-tx mt-3"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  className="input-tx mt-3"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  className="input-tx mt-3"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />

                <IconButton
                  aria-label="upload picture"
                  component="label"
                  className="mt-3"
                >
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={(event) => setImage(event.target.files[0])}
                    required
                  />
                  <small className="me-2 input-tx form-auth-field">
                    Upload{" "}
                  </small>{" "}
                  <PhotoCamera className="input-tx" />
                </IconButton>

                <button
                  className="sign-up-btn rounded border-0 w-75 m-4 d-block mx-auto"
                  type="submit"
                >
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingUp;
