import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedUser } from "../redux/sessionReducer";
import { useNavigate, Link } from "react-router-dom";
import "./form.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Information from "../components/Information";

export default function LoginAdmin() {
  const user = useSelector((state) => state.session);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const invalidCredentials = () => toast.error("Invalid Credentials!");
  const adminNotFound = () => toast.error("You are not registered yet!");

  const handleAdminLogin = async (event) => {
    event.preventDefault();

    const response = await axios({
      headers: {
        Authorization: `bearer: ${user.token}`,
      },
      method: "POST",
      url: `${process.env.REACT_APP_BACKEND_URL}/auth/admins`,
      data: {
        email,
        password,
      },
    });

    if (response.data.message === "Invalid credentials") {
      invalidCredentials();
    } else if (response.data.message === "Admin not found") {
      adminNotFound();
    } else {
      dispatch(setLoggedUser(response.data));
      navigate("/admin");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="form-login">
        <div className="container sign-up p-5">
          <div className="row formulary ">
            <div className="formulary-welcome-message col-md-6 col-lg-6 text-center d-flex flex-column justify-content-center">
              <h2>Welcome to Ecozy Luxury</h2>
            </div>
            <div className="col-md-5 col-lg-5">
              <form onSubmit={(event) => handleAdminLogin(event)}>
                <h2 className="create-account">Admin login</h2>

                <label htmlFor="email"></label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  className="input-tx"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />

                <label htmlFor="password"></label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  className="input-tx"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />

                <button
                  className="log-in-btn rounded border-0 w-75 mt-5 mb-4  d-block mx-auto"
                  type="submit"
                >
                  Log in
                </button>
              </form>
              <div className="icons">
                <div className="border-icon">
                  <i className="bi bi-instagram"></i>
                </div>
                <div className="border-icon">
                  <i className="bi bi-facebook"></i>
                </div>
                <div className="border-icon">
                  <i className="bi bi-linkedin"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Information />
    </>
  );
}
