export default function Footer() {
  return (
    <div className="footer">
      <div className="row footer-container mx-auto">
        <div className="col-8">
          <div className="row">
            <div className="col-4">
              <ul className="list-unstyled footer-list">
                <li>Our Story</li>
                <li>Order Swatches</li>
                <li>Ready to Ship</li>
                <li>Gift cards</li>
                <li>Lookbooks</li>
                <li>Journal</li>
              </ul>
            </div>
            <div className="col-4">
              <ul className="list-unstyled footer-list">
                <li>Design Services</li>
                <li>Trade Program</li>
                <li>Contract Program</li>
                <li>Ambassador Program</li>
                <li>Comfort Guide</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="col-4">
              <ul className="list-unstyled footer-list">
                <li>Contact Us</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Do Not Sell My Information</li>
                <li>Terms and Conditions</li>
                <li>Journal</li>
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
              <i className="bi bi-pinterest me-2 fs-5"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
