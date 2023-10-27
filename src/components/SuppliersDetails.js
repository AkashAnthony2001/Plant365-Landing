import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SuppliersDetails = ({ initiator }) => {
  const [suppliersDetails, setSuppliersDetails] = useState({});
  useEffect(() => {
    loadDetails();
  }, []);
  const loadDetails = async () => {
    console.log(process.env.REACT_APP_BASE_URL, process.env.REACT_APP_STAGE);
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_STAGE}/suppliers`
    );
    const suppliers = await response.json();
    const filteredSuppliers =
      Array.isArray(suppliers) &&
      suppliers.length > 0 &&
      suppliers.filter((supplier) => {
        return supplier.logo !== null && supplier.companyName;
      });
    setSuppliersDetails(filteredSuppliers);
  };
  
  return (
    <div className="page-section bg-light">
      <div className="container">
        {initiator === "Home" ? (
          // <div className="text-center wow fadeInUp">
          //   <div className="subhead">
          //     <p className="tw-border-b-2 tw-border-primary">Our Suppliers</p>
          //   </div>
          // </div>
          <div className="tw-flex tw-justify-center tw-mb-10 wow fadeInUp">
            <h3 className=" tw-mt-8 tw-py-2 tw-border-b-2 tw-border-spacing-y-0.5 tw-text-2xl tw-text-heading tw-text-primary tw-font-semibold tw-border-primary tw-tracking-wider">
              Our Suppliers
            </h3>
          </div>
        ) : (
          <div className="text-center wow fadeInUp pb-5 tw-mt-6">
            <h2 className="title-section">
              Want to join us and Sell your products with multiple features
            </h2>
            <Link to="/contactus" className="btn btn-primary mt-3">
              Join us
            </Link>
          </div>
        )}

        <div className="row">
          {suppliersDetails &&
            Array.isArray(suppliersDetails) &&
            suppliersDetails.length > 0 &&
            suppliersDetails.map((supplier, index) => {
              const companyName =
                (supplier.companyName &&
                  (supplier.companyName.length > 25
                    ? supplier.companyName.slice(0, 25) + ".."
                    : supplier.companyName)) ||
                "Supplier";
              return (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="col-md-3 col-sm-3 col-6"
                  onClick={() => {
                    window.location.href = `${process.env.REACT_APP_URL}supplier/${supplier["companySlug"]}`;
                  }}
                >
                  <div className="supplier">
                    <div className="supplier-logo">
                      {supplier?.logo ? (
                        <img src={supplier.logo} />
                      ) : (
                        <span className="mai-business"></span>
                      )}
                    </div>
                    <h5>{companyName}</h5>
                    
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SuppliersDetails;
