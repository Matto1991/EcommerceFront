import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/storeConfig";
import { PersistGate } from "redux-persist/integration/react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={
          <>
            <Button variant="primary" id="loading">
              <Spinner
                className="spinner-grow spinner-grow-sm text-center align-self-center"
                role="status"
                aria-hidden="true"
              />
              Loading page..
            </Button>{" "}
          </>
        }
        persistor={persistor}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
