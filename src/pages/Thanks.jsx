import NavbarOther from "../components/NavbarOther";
import "./purchaseOrder.css";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { Box } from "@mui/system";
import { Slider } from "@mui/material";

import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: "Very Satisfied",
  },
};

function valuetext(value) {
  return `${value}`;
}

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

function PurchaseOrder() {
  const location = useLocation();

  const products = location.state.products;
  const details = location.state.details;

  return (
    products && (
      <>
        <NavbarOther />
        <div className="container">
          <div className="header-order-purchase p-3 text-center">
            <h4>Payment successful</h4>
            <h1 className="brown">Thanks for ordering!</h1>
            <p>
              We appreciate your order, we are currently processing it! Hold on
              and we will send you confirmation very soon!
            </p>
          </div>
          <div className="order-placed d-flex justify-content-between">
            <h3>Order</h3>
            <p>Order number: {location.state.id} </p>
          </div>
          <div className="table-responsive ">
            <table className="table table-striped table-hover border border rounded  mt-5">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Details</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              {products.map((product) => {
                return (
                  <tbody key={product.id}>
                    <tr>
                      <th>
                        {" "}
                        <img
                          src={
                            typeof product.images === "object"
                              ? `${process.env.REACT_APP_BACKEND_URL}/${product.images[0]}`
                              : `${process.env.REACT_APP_BACKEND_URL}/img/users/${product.images}`
                          }
                          alt={`${product.name}`}
                          className="rounded img-table"
                        />{" "}
                      </th>
                      <td>
                        {" "}
                        <strong>{product.name} </strong>
                        <br /> <p>{product.description}</p>
                        <br /> U$S {product.price * product.quantity}
                      </td>
                      <td className="text-center">
                        {" "}
                        <strong>{product.quantity} </strong>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
          <div className="table-responsive">
            STATUS: <strong> {location.state.status} </strong>
            <div>
              <Box sx={{ width: 300 }}>
                <Slider
                  defaultValue={2}
                  step={4}
                  marks
                  min={1}
                  max={4}
                  disabled
                />
              </Box>
            </div>
            <table className="table table-striped table-hover border border rounded  mt-5">
              <thead>
                <tr>
                  <th>Adress</th>
                  <th>Costumers</th>
                  <th>Payment</th>
                  <th className="text-end">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <strong>City {details.city}</strong>
                    <br />
                    {details.address}
                    <br /> Apartment {details.apartment}
                    <br />
                    Zipcode {details.zipcode}
                  </td>
                  <td>
                    <strong>
                      {details.firstname} {details.lastname}
                    </strong>
                    <br />
                    {details.email}
                  </td>
                  <td>{details.payment_method}</td>
                  <td>
                    <ul className="list-group text-end list-unstyled">
                      <li></li>
                      <li>Shipping U$S 0</li>
                      <li>Tax U$S 0</li>
                      <li>
                        Total:{" "}
                        <strong>
                          {" "}
                          U$S{" "}
                          {products.reduce(
                            (acc, product) =>
                              acc + product.price * product.quantity,
                            0
                          )}{" "}
                        </strong>{" "}
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center mt-4">
            <h5>Help us give you a better experience.</h5>
            <StyledRating
              name="highlight-selected-only"
              defaultValue={2}
              IconContainerComponent={IconContainer}
              getLabelText={(value) => customIcons[value].label}
              highlightSelectedOnly
              className="m-3"
            />
            <p className="brown fw-bold">Thanks for visiting us!</p>
          </div>
          <div className="text-center m-3">
            <img
              src={"/img/logo-png.png"}
              alt="logo"
              className="rounded img-table"
            />
          </div>
        </div>
        <Footer />
      </>
    )
  );
}

export default PurchaseOrder;
