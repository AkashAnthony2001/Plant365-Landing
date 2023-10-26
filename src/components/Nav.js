import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { Link, useLocation } from "react-router-dom";
import Login from "./Login";
import logo from "../assets/img/logo/white/Meyi-Logo_@2x.png";
import { BiChevronDown, BiUserCircle } from "react-icons/bi";
import { motion } from "framer-motion";

const Nav = ({
  showSignin,
  setShowSignin,
  isUserLogin,
  setIsUserLogin,
  user,
  setUser,
}) => {
  const [activeRoute, setActiveRoute] = useState("/");
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [disableNavbar, setDisableNavbar] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setActiveRoute(location.pathname);
    const pathName = location.pathname.split("/");
    if (pathName.includes("supplier")) {
      setDisableNavbar(true);
    } else {
      setDisableNavbar(false);
    }
  }, [location]);
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((res) => {
        setUser(res);
        setIsUserLogin(true);
        setProfileDropdown(false);
      })
      .catch((err) => {
        setIsUserLogin(false);
      });
  }, [isUserLogin, showSignin]);

  const pathStartsWith = (path, route) => path.startsWith(route);
  const hoverVarients = {
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.1,
        type: "spring",
        stiffness: 500,
      },
    },
  };

  const handleSignOut = () => {
    Auth.signOut()
      .then(() => {
        setIsUserLogin(false);
      })
      .catch(() => {
        setIsUserLogin(true);
      });
  };

  const currentRoute = location.pathname;

  const logoClass =
    pathStartsWith(currentRoute, "/products") ||
    pathStartsWith(currentRoute, "/contactus") ||
    pathStartsWith(currentRoute, "/order") ||
    pathStartsWith(currentRoute, "/terms&conditions") ||
    pathStartsWith(currentRoute, "/privacypolicy");
  return (
    <header>
      <>
        {!disableNavbar && (
          <nav
            className="navbar navbar-expand-lg navbar-light sticky"
            data-offset="500"
          >
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">
                <img
                  src="https://cdn.dev.meyi.in/common/img/logo/Plant365.png"
                  className={`logo ${logoClass}`}
                  alt=""
                />
              </Link>
              {activeRoute !== "/order" && (
                <>
                  <button
                    className="navbar-toggler navbar-dark"
                    data-toggle="collapse"
                    data-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="navbar-collapse collapse" id="navbarContent">
                    <ul
                      className={`navbar-nav ml-auto ${
                        activeRoute.includes("/order") ||

                        activeRoute === "/products" ||
                        activeRoute === "/contactus" ||
                        activeRoute === "/terms&conditions" ||
                        activeRoute === "/privacypolicy"
                          ? "dark-nav"
                          : ""
                      }`}
                    >
                      <motion.li
                        variants={hoverVarients}
                        whileHover="hover"
                        className={`nav-item ${
                          activeRoute === "/" ? "active" : ""
                        }`}
                      >
                        <Link to="/" className="nav-link">
                          Home
                        </Link>
                      </motion.li>
                      <motion.li
                        variants={hoverVarients}
                        whileHover="hover"
                        className={`nav-item ${
                          activeRoute === "/buyers" ? "active" : ""
                        }`}
                      >
                        <Link to="/buyers" className="nav-link">
                          Buyers
                        </Link>
                      </motion.li>
                      <motion.li
                        variants={hoverVarients}
                        whileHover="hover"
                        className={`nav-item ${
                          activeRoute === "/suppliers" ? "active" : ""
                        }`}
                      >
                        <Link to="/suppliers" className="nav-link">
                          Suppliers
                        </Link>
                      </motion.li>
                      <motion.li
                        variants={hoverVarients}
                        whileHover="hover"
                        className={`nav-item ${
                          activeRoute === "/products" ? "active" : ""
                        }`}
                      >
                        <Link to="/products" className="nav-link">
                          Products
                        </Link>
                      </motion.li>

                      <motion.li
                        variants={hoverVarients}
                        whileHover="hover"
                        className={`nav-item ${
                          activeRoute === "/contactus" ? "active" : ""
                        }`}
                      >
                        <Link to="/contactus" className="nav-link">
                          Contact us
                        </Link>
                      </motion.li>
                      {!isUserLogin ? (
                        <li
                          className="nav-item"
                          onClick={() => setShowSignin(true)}
                        >
                          <a className="btn btn-primary ml-lg-2" href="#">
                            Order Now
                          </a>
                        </li>
                      ) : (
                        <>
                          <li className="nav-item">
                            <motion.a
                              variants={hoverVarients}
                              whileHover="hover"
                              className="nav-link"
                              style={{ color: "#27b643", cursor: "pointer" }}
                              onClick={() =>
                                setProfileDropdown(!profileDropdown)
                              }
                            >
                              Welcome,{" "}
                              {(user.attributes && user.attributes.name) ||
                                "User"}{" "}
                              <BiChevronDown />
                            </motion.a>
                            <ul
                              className={`profile ${
                                profileDropdown ? "openDropdown" : ""
                              }`}
                            >
                              <li>
                                <BiUserCircle /> Profile
                              </li>
                              <li onClick={handleSignOut}>
                                <a
                                  className="btn btn-primary profile-btn"
                                  href="#"
                                >
                                  Sign Out
                                </a>
                              </li>
                            </ul>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </nav>
        )}
        <Login showSignin={showSignin} setShowSignin={setShowSignin} />
      </>
    </header>
  );
};

export default Nav;
