import React from "react";
import earthPattern from "../assets/img/world_pattern.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="page-footer bg-image"
      style={{ backgroundImage: `url(${earthPattern})` }}
    >
      <div className="container" id="footer">
        <p className="text-center" id="copyright">
          <Link to="terms&conditions" className="terms tw-pr-1">
            Terms & Conditions{" "}
          </Link>{" "}
          |
          <Link to="privacypolicy" className="terms tw-pl-2">
            Privacy policy
          </Link>
          <br />
          Copyrights 2023 &#169; &nbsp;
          <a href={`${process.env.REACT_APP_URL}`} target="_blank">
            Plant365
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
