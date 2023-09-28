import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Product = ({ product, supplierDetails, data }) => {
  return (
    <div className="col-lg-4">
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="card-service wow products-blog"
      >
        <div className="header">
          <img src={data.img} alt="" />
        </div>
        <div className="body">
          <h5 className="text-secondary pb-2">{data.Name}</h5>
          <Link
            to="/order"
            state={{ product, supplierDetails }}
            className="btn btn-primary order-button"
          >
            Order Now
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Product;
