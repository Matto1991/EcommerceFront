import React from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function AdminCreateProduct() {
  const token = useSelector((state) => state.session.token);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [featured, setFeatured] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [image, setImage] = useState(null);

  const handleCreateProduct = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("featured", featured);
    formData.append("image", image);
    formData.append("categoryId", categoryId);

    const response = await axios({
      headers: {
        "Content-Type": "multipart/form-data",
        //   Authorization: `bearer ${token}`,
      },
      method: "POST",
      url: `${process.env.REACT_APP_BACKEND_URL}/products`,
      data: formData,
    });
    console.log(response.data);
  };

  return (
    <>
      <NavbarAdmin />

      <div className="container p-5">
        <div className="col-md-5 col-lg-5 mx-auto">
          <h2 className=" text-dark create-account fs-1">Create</h2>

          <form
            className="row g-3"
            onSubmit={(event) => {
              handleCreateProduct(event);
            }}
          >
            <div className="col-md-6">
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

            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Description
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="Lastname"
                name="description"
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                category
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="Lastname"
                name="category"
                id="category"
                value={categoryId}
                onChange={(event) => setCategoryId(event.target.value)}
                required
              />
            </div>
            <div className="col-12">
              <label htmlFor="Price" className="form-label"></label>
              Price
              <input
                type="text"
                className="form-control"
                placeholder="price"
                name="price"
                id="price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                required
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">
                Featured
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="featured"
                name="featured"
                id="featured"
                value={featured}
                onChange={(event) => setFeatured(event.target.value)}
                required
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">
                stock
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="stock"
                name="stock"
                id="stock"
                value={stock}
                onChange={(event) => setStock(event.target.value)}
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
              <small className="me-2 input-tx text-dark">Upload </small>{" "}
              <PhotoCamera className="input-tx text-dark" />
            </IconButton>
            <div className="col-6">
              <button
                className="btn btn-success sign-up-btn border-0 w-75 m-4 fs-5 d-block mx-auto"
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

export default AdminCreateProduct;