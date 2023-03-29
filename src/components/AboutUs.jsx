import "../components/Aboutus.css";
import Footer from "../components/Footer";
import NavbarOther from "../components/NavbarOther";
export default function AboutUs() {
  return (
    <>
      <NavbarOther />

      <div className="row hero-image-aboutUs">
        <div className="col-12 position-relative">
          <div className="hero-text"></div>
        </div>
      </div>

      <h1 className="mb-3 text-center about-title">About Ecozy</h1>
      <div className="row p-3 g-3">
        <div className="col-md-4 p-3">
          <p className="fs-4">
            We are an online store dedicated to offering a wide selection of
            high-quality, uniquely designed furniture made from sustainable and
            environmentally-friendly materials. We take pride in providing a
            diverse range of styles and designs to meet the needs of our most
            discerning customers, from modern and minimalist furniture to more
            traditional and classic pieces.
          </p>
        </div>
        <div className="col-md-4 p-3">
          <p className=" fs-4 ">
            All of our furniture is crafted with high-quality materials, such as
            solid wood, bamboo, cane, and other sustainable materials, which
            gives them exceptional durability and resilience. Moreover, all of
            our products are designed and manufactured with a focus on
            sustainability, which means they are designed to minimize
            environmental impact and reduce the carbon footprint.
          </p>
        </div>
        <div className=" col-md-4 p-3">
          <p className=" fs-4">
            Our goal is to offer our customers the best possible shopping
            experience, with fast and secure shipping, exceptional customer
            service, and competitive pricing. If you are looking for
            high-quality, uniquely designed furniture, but also want to do your
            part in protecting the environment, then you have come to the right
            place. Explore our selection of eco-friendly furniture and find the
            perfect piece for your home!
          </p>
        </div>
      </div>

      <div className=" d-flex justify-content-center team-section">
        <div className="rounded text-center cta">About this proyect</div>
      </div>

      <div className="categories-section">
        <div className="d-flex justify-content-center w-100 mb-5">
          <h2 className="fs-1">Business values</h2>
        </div>
        <div className="row g-2 mx-auto categories-container h-50 mb-2">
          <div className="col-8">
            <div className="d-flex justify-content-center align-items-center rounded category-card ethics-politics">
              <h3 className="about-title display-5 category-card-title text-center">
                Strong Ethics
              </h3>
            </div>
          </div>
          <div className="col-4">
            <div className="d-flex justify-content-center align-items-center rounded category-card equity-politics">
              <h3 className="about-title display-5 text-center">
                Equity and Diversity
              </h3>
            </div>
          </div>
        </div>
        <div className="row g-2 mx-auto categories-container h-50">
          <div className="col-4">
            <div className="d-flex justify-content-center align-items-center rounded category-card safety-politics">
              <h3 className="about-title display-5 text-center">
                Safety Workplace
              </h3>
            </div>
          </div>
          <div className="col-8">
            <div className="d-flex justify-content-center align-items-center rounded category-card sustainability-politics">
              <h3 className="about-title display-5 text-center">
                Sustainability
              </h3>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
