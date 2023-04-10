import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import NavbarAdmin from "../components/NavbarAdmin";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function EditProduct() {
  const token = useSelector((state) => state.session.token);
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [featured, setFeatured] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [image, setImage] = useState(null);
  const setProduct = (product) => {
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setStock(product.stock);
    setFeatured(product.featured);
    setCategoryId(product.categoryId);
    setImage(product.images);
  };

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/products/${id}`,
      });

      setProduct(response.data);
    };

    getProduct();
  }, []);

  const handleProductEdit = async (event) => {
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
        Authorization: `bearer ${token}`,
      },
      method: "PATCH",
      url: `${process.env.REACT_APP_BACKEND_URL}/products/${id}`,
      data: formData,
    });
    navigate(-1);
  };

  return (
    <>
      <NavbarAdmin />
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
          <h2 className="create-admin-title fs-1">Edit product</h2>
          <form
            className="row g-3"
            onSubmit={(event) => {
              handleProductEdit(event);
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
                Category
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
                Stock
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
            <div className="col-6 mx-auto">
              <button
                className="cta-dashboard text-white rounded border-0 w-75  fs-5 "
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

export default EditProduct;
