import React from "react";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Link } from "react-router-dom";

function SingUp() {
  return (
    <>
      <div className="form-login">
        <div className="container sign-up p-5">
          <div className="row formulary p-3">
            <div className="message col-md-6 col-lg-6 text-center d-flex flex-column">
              <h2 className="h2-message">Welcome to Ecozy Luxury</h2>
              <p className="p-message">
                {" "}
                Have already an account?
                <Link
                  to="/login"
                  className="text-decoration-none fw-bold link-sign-up"
                >
                  {" "}
                  Sign in
                </Link>
              </p>
              {/* <button className="btn btn-lg btn-success sign-up-btn border-0">Sign Up</button> */}
            </div>

            <div className="col-md-5 col-lg-5">
              <form>
                <h2 className="create-account fs-1">Register</h2>

                <label></label>
                <input
                  type="text"
                  placeholder="Firstname"
                  name="firstname"
                  id="firstname"
                  className="input-tx"
                />
                <label></label>
                <input
                  type="text"
                  placeholder="Lastname"
                  name="lastname"
                  id="lastname"
                  className="input-tx"
                />
                <label htmlFor="password"></label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  className="input-tx"
                />
                <label htmlFor="email"></label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  className="input-tx"
                />
                <label></label>
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  id="address"
                  className="input-tx"
                />
                <label></label>
                <input
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  id="phone"
                  className="input-tx"
                />

                <IconButton aria-label="upload picture" component="label">
                  <input hidden accept="image/*" type="file" />
                  <small className="me-2 input-tx">Upload </small>{" "}
                  <PhotoCamera className="input-tx" />
                </IconButton>

                <button className="btn btn-success sign-up-btn border-0 w-75 m-4 fs-5 d-block mx-auto">
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
