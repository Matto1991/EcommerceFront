import React from "react";

function Products({ data }) {
  return (
    //----------------Mejorar estilos, height de las card, hacer un .map en vez de hardcodearlas
    <div className="row g-4">
      <div className="col-12 col-md-6 col-lg-3">
        <div className="card d-flex flex-fill">
          <img
            src={`${process.env.REACT_APP_APIURL}/${data[7].images[0]}`}
            alt="image"
          />
          <div className="card-body">
            <h5 className="card-title">{data[7].name}</h5>
            <p className="card-text">{data[7].description}</p>
            <p className="card-text">
              <small>US$ {`${data[7].price}`}</small>
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <div className="card d-flex flex-fill">
          <img
            src={`${process.env.REACT_APP_APIURL}/${data[8].images[0]}`}
            alt="image"
          />
          <div className="card-body">
            <h5 className="card-title">{data[8].name}</h5>
            <p className="card-text">{data[8].description}</p>
            <p className="card-text">
              <small>US$ {`${data[8].price}`}</small>
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <div className="card d-flex flex-fill">
          <img
            src={`${process.env.REACT_APP_APIURL}/${data[9].images[0]}`}
            alt="image"
          />
          <div className="card-body">
            <h5 className="card-title">{data[9].name}</h5>
            <p className="card-text">{data[9].description}</p>
            <p className="card-text">
              <small>US$ {`${data[9].price}`}</small>
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <div className="card d-flex flex-fill">
          <img
            src={`${process.env.REACT_APP_APIURL}/${data[9].images[0]}`}
            alt="image"
          />
          <div className="card-body">
            <h5 className="card-title">{data[9].name}</h5>
            <p className="card-text">{data[9].description}</p>
            <p className="card-text">
              <small>US$ {`${data[9].price}`}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
