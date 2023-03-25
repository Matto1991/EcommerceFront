import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import Cartc from "./Cartc.css";


function Cart({ name }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const products = [
    {
      name: "The Muir Sofa",
      description:
        "Artisanal woodworking meets expertly tailored, high-end comfort in The Muir Sofa. Its striking silhouette with built-in side table form a mixed material work of art.",
      images: ["/public/img/TheMuirSofa.png"],
      price: 4100,
      stock: 20,
      featured: false,
      categoryId: 1,
    },
  ];

  return (
    <>
      <Button
        onClick={handleShow}
        className="fs-2 ms-auto me-2 bi bi-cart2 btn-offCanvas-settings"
      >
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mt-8">
            <div>
              <ul className="my-4">
                {products.map((product) => (
                  <li key={product.id} className="">
                    <div className="row text-end">
                      <div className="col-4">
                        <div className="border border-2 rounded mb-2">
                          <img
                            src="img\TheLeroyChair.webp"
                            alt={product.imageAlt}
                            className=""
                          />
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="fs-5">
                          <h4>
                            <Link
                              to="/product/:name"
                              className="brown text-decoration-none"
                            >
                              {product.name}
                            </Link>
                          </h4>
                          <small className="fw-2 ">$ {product.price}</small>
                        </div>
                      </div>
                      <div className="d-flex">
                        
                      <p className="text-secondary-light text-center">
                          Qty product.quantity
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="border-top  py-6 px-4 ">
                <div className="d-flex justify-between fw-bolder">
                  <p>Subtotal</p>
                  <p>$262.00</p>
                </div>
                <p className="mt-1 text-secondary-light">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6 d-grid gap-2">
                  <Link to="/login" className="btn btn-success btn-lg green">
                    Checkout
                  </Link>
                </div>
                <div className="mt-5 d-flex justify-center text-center ">
                  <p>
                    <button type="button" className="fw-bolder">
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
