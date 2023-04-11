import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const handleGoTo = (url) => {
    navigate(url);
  };

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/categories`,
      });

      setCategories(response.data);
    };

    getCategories();
  }, []);

  return (
    <>
      {categories.length > 0 && (
        <>
          <div className="d-flex justify-content-center w-100 mb-5">
            <h2 className="section-title">Shop by categories</h2>
          </div>
          <div className="row g-2 mx-auto categories-container h-100 mb-2">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="row g-2 h-100">
                {/* --------------------------------living----------------------------- */}
                <div className="col-12">
                  <div
                    className="d-flex justify-content-center align-items-center rounded category-card"
                    style={{
                      backgroundImage: `url(${process.env.REACT_APP_IMAGES_URL}/${categories[0].image})`,
                      backgroundRepeat: "no-Repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    onClick={() =>
                      handleGoTo(`/category/${categories[0].name}`)
                    }
                  >
                    <h3 className="category-name text-white category-card-title">
                      {categories[0].name}
                    </h3>
                  </div>
                </div>
                {/* --------------------------------living----------------------------- */}
                {/* --------------------------------bedroom----------------------------- */}
                <div className="col-6">
                  <div
                    className="d-flex justify-content-center align-items-center rounded category-card"
                    style={{
                      backgroundImage: `url(${process.env.REACT_APP_IMAGES_URL}/${categories[1].image})`,
                      backgroundRepeat: "no-Repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    onClick={() =>
                      handleGoTo(`/category/${categories[1].name}`)
                    }
                  >
                    <h3 className=" category-name text-white">
                      {categories[1].name}
                    </h3>
                  </div>
                </div>
                {/* --------------------------------bedroom----------------------------- */}
                {/* --------------------------------dining----------------------------- */}
                <div className="col-6">
                  <div
                    className="d-flex justify-content-center align-items-center rounded category-card"
                    style={{
                      backgroundImage: `url(${process.env.REACT_APP_IMAGES_URL}/${categories[2].image})`,
                      backgroundRepeat: "no-Repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    onClick={() =>
                      handleGoTo(`/category/${categories[2].name}`)
                    }
                  >
                    <h3 className="category-name text-white">
                      {categories[2].name}
                    </h3>
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
                  backgroundImage: `url(${process.env.REACT_APP_IMAGES_URL}/${categories[3].image})`,
                  backgroundRepeat: "no-Repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                onClick={() => handleGoTo(`/category/${categories[3].name}`)}
              >
                <h3 className="category-name text-white">
                  {categories[3].name}
                </h3>
              </div>
            </div>
            {/* --------------------------------sets----------------------------- */}
          </div>
        </>
      )}
    </>
  );
}

export default Categories;
