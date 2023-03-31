import axios from "axios";
import React, { useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import { IconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useNavigate, useParams } from "react-router-dom";

function EditCategory() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleCategoryEdit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);

    formData.append("image", image);
    const response = await axios({
      method: "patch",
      url: `${process.env.REACT_APP_BACKEND_URL}/categories/${id}`,
      data: formData,
    });
  };

  return (
    <>
      <NavbarAdmin />

      <div className="container p-5">
        <div
          onClick={() => navigate(-1)}
          className="text-black text-decoration-none cursor-pointer"
        >
          <h4 className="fs-5">
            <i className="bi bi-arrow-left fs-5"></i> Return
          </h4>
        </div>
        <div className="col-md-5 col-lg-5 mx-auto">
          <h2 className=" text-dark create-account fs-1">Edit</h2>

          <form
            className="row g-3"
            onSubmit={(event) => {
              handleCategoryEdit(event);
            }}
          >
            <div className=" col-12  ">
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
            </div>

            <div className=" ">
              <IconButton
                aria-label="upload picture"
                component="label"
                className=" mt-3 "
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
            </div>
            <div className="col-6">
              <button
                className="btn cta text-white sign-up-btn border-0 w-75 fs-5 d-block"
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

export default EditCategory;
