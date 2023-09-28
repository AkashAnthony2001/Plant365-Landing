import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Products = ({ initiator }) => {
  console.log(initiator);
  const [prodDetails, setProdDetails] = useState({});
  useEffect(() => {
    loadDetails();
  }, []);
  const loadDetails = async () => {
    const response = await fetch(
      `https://8ekr3oajcd.execute-api.ap-south-1.amazonaws.com/v1/sp/product`
    );
    const productDetails = await response.json();
    setProdDetails(productDetails);
  };
  return (
    <div className="page-section-contact bg-light page-content top-header">
      <div className="container">
        <div className="text-center wow fadeInUp">
          <h3 className="tw-text-heading tw-font-bold tw-text-primary tw-text-center tw-leading-none tw-mb-5">
            Choose your Products
          </h3>
          <div className="divider mx-auto"></div>
        </div>
        {initiator ? (
          <div className="row">
            {prodDetails.Product &&
              prodDetails.Product.map((product) => (
                <div className="col-lg-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="card-service wow products-blog"
                  >
                    <div className="header">
                      <img src={product.img} alt="" />
                    </div>
                    <div className="body">
                      <h5 className="text-secondary pb-2">{product.Name}</h5>
                      <Link
                        to="/order"
                        state={{ product }}
                        className="btn btn-primary order-button-blog"
                      >
                        Order Now
                      </Link>
                    </div>
                  </motion.div>
                </div>
              ))}
          </div>
        ) : (
          <>
            {prodDetails.Product &&
              prodDetails.Product.map((product) => (
                <div className="row product">
                  <div className="col-md-4 header">
                    <img src={product.img} alt="" />
                    <br />
                    <Link
                      to="/order"
                      state={{ product }}
                      className="btn btn-outline-primary order-button mb-3"
                    >
                      Order Now
                    </Link>
                  </div>
                  <div className="col-md-8 body">
                    <h5 className="text-secondary product-head pb-2">
                      {product.Name}
                    </h5>
                    <div className="divider"></div>
                    <p className="regular-text">{product.desc}</p>
                    <h5 className="text-secondary product-head pb-2">
                      Specifications
                    </h5>
                    <ul className="specifications-list">
                      {product.Spec &&
                        product.Spec.map((spec) => <li>{spec.Values}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
