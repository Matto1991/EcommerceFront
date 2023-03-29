import React from "react";

function EditProduct() {
  return (
    <>
      <div class="container">
        <form
          class="mx-auto border mt-5 shadow rounded"
          method="post"
          action="/panel/admin/<%= article.id %>/update"
          enctype="multipart/form-data"
        >
          <div class="bg-light m-0 p-0 w-100">
            <h1 class="fs-3 p-2">Edit product</h1>
          </div>
          <div class="mb-3 p-2">
            <label for="title" class="form-label fw-bold">
              Name
            </label>
            <input
              type="text"
              name="title"
              class="form-control"
              id="title"
              placeholder="Enter title..."
              value="{product.title}"
            />
          </div>
          <div class="mb-3 p-2">
            <label for="content" class="form-label fw-bold">
              Description
            </label>
            <textarea
              class="form-control"
              name="content"
              id="content"
              placeholder="Enter content..."
              rows="2"
            ></textarea>
          </div>
          <div class="mb-3 p-2">
            <label for="title" class="form-label fw-bold">
              Price
            </label>
            <input
              type="text"
              name="title"
              class="form-control"
              id="title"
              placeholder="Enter title..."
              value="{product.title}"
            />
          </div>
          <div class="mb-3 p-2">
            <label for="title" class="form-label fw-bold">
              Stock
            </label>
            <input
              type="text"
              name="title"
              class="form-control"
              id="title"
              placeholder="Enter title..."
              value="{product.title}"
            />
          </div>
          <div class="mb-3 p-2">
            <label for="title" class="form-label fw-bold">
              Featured
            </label>
            <input
              type="text"
              name="title"
              class="form-control"
              id="title"
              placeholder="Enter title..."
              value="{product.title}"
            />
          </div>

          <div class="mb-3 p-2">
            <label for="image" class="form-label fw-bold">
              Image
            </label>
            <input
              type="file"
              class="form-control"
              id="image"
              name="image"
              required
            />
          </div>

          <button type="submit" class="btn btn-success m-2">
            Save
          </button>
        </form>
        <div class="container mx-auto my-2 px-2">
          <a
            class="d-block mx-auto text-decoration-none text-dark m-5"
            href="/panel/admin/"
          >
            Return
          </a>
        </div>
      </div>
    </>
  );
}

export default EditProduct;
