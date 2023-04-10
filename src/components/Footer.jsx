import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="row footer-container mx-auto">
        <div className="col-8">
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className="h-100 d-flex flex-column justify-content-center align-items-left">
                <img
                  src="/img/logo-png-removebg-preview.png"
                  alt=""
                  className="img-footer"
                />
                <p className="fs-5 fw-light">Ecozy Luxury</p>
              </div>
            </div>
            <div className="col-3">
              <ul className="list-unstyled footer-list">
                <li className="fs-5">Pages</li>
                <li>Home</li>
                <li>Categories</li>
                <li>About Us</li>
                <li>Cart</li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3">
              <ul className="list-unstyled footer-list">
                <li className="fs-5">Categories</li>
                <li>Living</li>
                <li>Bedroom</li>
                <li>Dining</li>
                <li>Sets</li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3">
              <ul className="list-unstyled footer-list">
                <li className="fs-5">Contact Us</li>
                <Link
                  to="https://www.linkedin.com/in/andr%C3%A9s-viera/"
                  className="text-decoration-none text-black contact-us-name"
                  target="_blank"
                >
                  <li>Andres Viera</li>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/virginia-barbaro/"
                  className="text-decoration-none text-black contact-us-name"
                  target="_blank"
                >
                  <li>Virginia Barbaro</li>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/mathias-sandin/"
                  target="_blank"
                  className="text-decoration-none text-black contact-us-name"
                >
                  <li>Mathias Sandín</li>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/aline-farias-111035268/"
                  className="text-decoration-none text-black contact-us-name"
                  target="_blank"
                >
                  <li>Aline Farias</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <div className="input-group mb-3">
              <input
                type="text"
                placeholder="Email"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                className=" form-control w-50 "
              />
              <button
                className="btn btn-outline-secondary footer-cta text-white"
                type="button"
                id="button-addon2"
              >
                Catalogue
              </button>
            </div>
            <p className="mb-5 footer-text">
              Peek into the world behind our design-driven, handcrafted
              furniture and discover our latest arrivals.
            </p>
            <div>
              <i className="bi bi-instagram me-2 fs-5"></i>
              <i className="bi bi-twitter me-2 fs-5"></i>
              <i className="bi bi-facebook me-2 fs-5"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
