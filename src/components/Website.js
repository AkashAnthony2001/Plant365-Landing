import React, { useState, useEffect } from "react";
import Product from "./Product";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { FiMapPin, FiMail, FiPhoneOutgoing } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const Website = ({ google, setShowSignin, isUserLogin }) => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [supplierDetails, setSupplierDetails] = useState([]);
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    loadDetails();
  }, [location]);

  const fetchData = async () => {
    const response = await fetch(
      `https://8ekr3oajcd.execute-api.ap-south-1.amazonaws.com/v1/sp/product`
    );
    const productsData = await response.json();
    setProducts(productsData && productsData.Product);
  };

  const loadDetails = async () => {
    console.log(process.env.REACT_APP_BASE_URL, process.env.REACT_APP_STAGE);

    let host = location.pathname.split("/");
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}${
        process.env.REACT_APP_STAGE
      }/website/${host[host.length - 1]}`
    );
    const suppliersDetails = await response.json();
    if (
      suppliersDetails &&
      Array.isArray(suppliersDetails) &&
      suppliersDetails.length > 0 &&
      suppliersDetails[0].tenantId
    ) {
      let tenantId = suppliersDetails[0].tenantId;
      const fetchProducts = await fetch(
        `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_STAGE}/products/${tenantId}`
      );
      const prodDetails = await fetchProducts.json();
      setSupplierDetails(suppliersDetails[0]);
      setProductDetails(prodDetails);
    }
  };
  return (
    <>
      {!isUserLogin && (
        <div className="supplier-buttons">
          <button
            className="btn btn-primary"
            onClick={() => setShowSignin(true)}
          >
            Connect
          </button>
        </div>
      )}
      <div className="container-fluid page-section bg-light p-0">
        <div className="banner">
          <img
            src={supplierDetails.banner}
            className="bannerImg"
            alt="banner"
          />
          <div className="blend"></div>
          <img
            src={supplierDetails.logo}
            className="suppliers-logo"
            alt="logo"
          />
          <div className="supplier-details">
            <h1 className="supplier-name">{supplierDetails.companyName}</h1>
            <h2>{supplierDetails.tagLine}</h2>
          </div>
        </div>
        <div className="container">
          {supplierDetails && supplierDetails.description && (
            <div className="row mt-4">
              <div className="text-center wow fadeInUp">
                <h2 className="title-section">About us</h2>
                <div className="divider mx-auto"></div>
              </div>
              <p className="regular-text pb-3">{supplierDetails.description}</p>
            </div>
          )}

          {productDetails &&
            Array.isArray(productDetails) &&
            productDetails.length > 0 && (
              <div className="row Products">
                <div className="text-center wow fadeInUp">
                  <h2 className="title-section">Choose your Products</h2>
                  <div className="divider mx-auto"></div>
                </div>
                {productDetails.map((product) => {
                  return products.map((prod) => {
                    return (
                      product.publicId === prod.id && (
                        <Product
                          product={{ ...product, img: prod.img || "" }}
                          supplierDetails={supplierDetails}
                          data={prod}
                        />
                      )
                    );
                  });
                })}
              </div>
            )}

          <div className="row company-details">
            <div className="col-md-8 map webmap">
              {Object.keys(supplierDetails).length > 0 && (
                <Map
                  google={google}
                  zoom={8}
                  initialCenter={{
                    lat: supplierDetails?.latitude,
                    lng: supplierDetails?.longitude,
                  }}
                >
                  <Marker
                    position={{
                      lat: supplierDetails?.latitude,
                      lng: supplierDetails?.longitude,
                    }}
                  />
                </Map>
              )}
            </div>
            <div className="col-md-4 address webmap">
              <ul>
                <li>
                  <FiMapPin />{" "}
                  {(supplierDetails && supplierDetails.headOfficeAddress) || ""}
                </li>
                <li>
                  <FiMail />{" "}
                  {(supplierDetails && supplierDetails.tenantEmail) || ""}
                </li>
                <li>
                  <FiPhoneOutgoing />{" "}
                  {(supplierDetails && supplierDetails.tenantPhone) || ""}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBagSNeuLSvSm_lkDfL8RQwl1L6b7KF1tY",
})(Website);
