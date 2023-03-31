import { PhotoCamera } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";

function AdminProfile() {
  return (
    <div>
      <NavbarAdmin />
      <section className="container ">
        <div className="container p-5">
          <div className="row formulary">
            <div className="formulary-welcome-message justify-content-center col-md-6 col-lg-6 text-center d-flex flex-column">
              <h2 className="mb-2">Profile</h2>
              <p>
                {" "}
                <span className="me-1 formulary-subtitle">
                  Do you want to change your user?
                </span>
              </p>
              <img
                src="/img/AlineFariasprueba.jpg"
                className="img-team shadow mx-auto mt-5"
                alt="..."
              />
              {/* <button className="btn btn-lg btn-success sign-up-btn border-0">Sign Up</button> */}
            </div>

            <div className="form-auth col-md-5 col-lg-5">
              <form
              // onSubmit={(event) => {
              //   handleUserCreation(event);
              // }}
              >
                <input
                  type="text"
                  placeholder="Firstname"
                  name="firstname"
                  id="firstname"
                  className="input-tx mt-3"
                  // value={firstName}
                  // onChange={(event) => setFirstName(event.target.value)}
                  // required
                />
                <input
                  type="text"
                  placeholder="Lastname"
                  name="lastname"
                  id="lastname"
                  className="input-tx mt-3"
                  // value={lastName}
                  // onChange={(event) => setLastName(event.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  className="input-tx mt-3"
                  // value={email}
                  // onChange={(event) => setEmail(event.target.value)}
                  // required
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  className="input-tx mt-3"
                  // value={password}
                  // onChange={(event) => setPassword(event.target.value)}
                  // required
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
                    // onChange={(event) => setImage(event.target.files[0])}
                    // required
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
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminProfile;
