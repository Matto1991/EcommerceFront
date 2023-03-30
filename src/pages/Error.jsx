import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="container text-center error ">
      <img src="/img/Error404.png" alt="404 error" className="w-50" />
      <h1>There's nothing here: Error 404! </h1>
      <Link to={"/"}>
        <button className="btn text-white footer-cta mt-4">Back home</button>
      </Link>
    </div>
  );
}

export default Error;
