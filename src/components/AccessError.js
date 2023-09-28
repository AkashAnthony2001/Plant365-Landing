import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import ErrorImage from "../assets/img/logo/img-error-404.svg";
const AccessError = () => {
  return (
    <div className="page-section-contact bg-dark page-content  top-header">
      <div className="container-fluid bg-light vh-100 accessError">
        <img src={ErrorImage} />
        <h1>Page Not Found</h1>
        <h4>
          The page you are looking was moved, removed, renamed, or might never
          exist!
        </h4>
        <Link to="/" className="nav-link">
          <button className="btn btn-primary ml-lg-2">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default AccessError;
