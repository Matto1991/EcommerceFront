import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
function Categories({ data }) {
  const navigate = useNavigate();
  const handleGoTo = (url) => {
    navigate(url);
  };

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center w-100 mb-5">
        <h2>Shop by categories</h2>
      </div>
      <div className="row g-2 mx-auto categories-container h-100 mb-2">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <div className="row g-2 h-100">
            {/* --------------------------------living----------------------------- */}
            <div className="col-12">
              <div
                className="d-flex justify-content-center align-items-center rounded category-card"
                style={{
                  backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL}/${data[0].image})`,
                  backgroundRepeat: "no-Repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                onClick={() => handleGoTo(`/category/${data[0].name}`)}
              >
                <h3 className="text-white display-6 category-card-title">
                  {data[0].name}
                </h3>
              </div>
            </div>
            {/* --------------------------------living----------------------------- */}
            {/* --------------------------------bedroom----------------------------- */}
            <div className="col-6">
              <div
                className="d-flex justify-content-center align-items-center rounded category-card"
                style={{
                  backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL}/${data[1].image})`,
                  backgroundRepeat: "no-Repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                onClick={() => handleGoTo(`/category/${data[1].name}`)}
              >
                <h3 className="text-white display-6">{data[1].name}</h3>
              </div>
            </div>
            {/* --------------------------------bedroom----------------------------- */}
            {/* --------------------------------dining----------------------------- */}
            <div className="col-6">
              <div
                className="d-flex justify-content-center align-items-center rounded category-card"
                style={{
                  backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL}/${data[2].image})`,
                  backgroundRepeat: "no-Repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                onClick={() => handleGoTo(`/category/${data[2].name}`)}
              >
                <h3 className="text-white display-6">{data[2].name}</h3>
              </div>
            </div>
            {/* --------------------------------dining----------------------------- */}
          </div>
        </div>
        {/* --------------------------------sets----------------------------- */}
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div
            className="d-flex justify-content-center align-items-center rounded category-card-right"
            style={{
              backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL}/${data[3].image})`,
              backgroundRepeat: "no-Repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => handleGoTo(`/category/${data[3].name}`)}
          >
            <h3 className="text-white display-6">{data[3].name}</h3>
          </div>
        </div>
        {/* --------------------------------sets----------------------------- */}
      </div>
    </>
  );
}

export default Categories;
