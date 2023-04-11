import React, { useState } from "react";
import { useSelector } from "react-redux";
import NavbarAdmin from "../components/NavbarAdmin";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateCategory() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.session.token);
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const handleCategoryCreation = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);

    formData.append("image", image);
    await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      url: `${process.env.REACT_APP_BACKEND_URL}/categories/store`,
      data: formData,
    });
    navigate(-1);
  };

  return (
    <>
      <NavbarAdmin />

      <div className="container p-5 ">
        <div
          onClick={() => navigate(-1)}
          className="text-black text-decoration-none mb-2 cursor-pointer"
        >
          <h4 className="fs-5">
            <i className="bi bi-arrow-left fs-5"></i> Return
          </h4>
        </div>
        <div className="col-md-5 col-lg-5 mx-auto">
          <div className="d-flex flex-column align-items-center w-100">
            <h2 className=" create-admin-title fs-1 mb-4">Create Category</h2>
            <form
              onSubmit={(event) => {
                handleCategoryCreation(event);
              }}
            >
              <label htmlFor="inputEmail4" className="form-label">
                Name
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="name"
                name="name"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
              <div className="text-center">
                <div className="">
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
                    <small className="me-2 input-tx text-dark">Upload</small>{" "}
                    <PhotoCamera className="input-tx text-dark" />
                  </IconButton>
                </div>
                <button
                  className="cta-dashboard text-white rounded border-0 w-75 m-4 fs-5 d-block "
                  type="submit"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateCategory;
