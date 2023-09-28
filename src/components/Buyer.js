import React from "react";
// import banner from "../assets/img/Construction-pana.svg";
// import patter from "../assets/img/bg_pattern.svg";
import slide4 from "../assets/img/slide4.jpg";
import constructionSite from "../assets/bg/construction-1.jpg";
import Construction from "../assets/img/Construction-amico.svg";
import map from "../assets/img/map.svg";
import { BsCheckLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import Products from "./Products";

const Buyer = () => {
  return (
    <div className=" tw-bg-background">
      <div className="container-fluid page-section p-0">
        <div
          className="page-banner home-banner"
          style={{ backgroundImage: `url(${constructionSite})` }}
        >
          <div className="row align-items-center supplier-content">
            <div className="col-lg-6 py-3 pr-lg-5 tw-mt-16 wow fadeInUp opac">
              <h1 className="title-section-buyer">
                Streamline Your Procurement
              </h1>
              <br />
              <br />
              {/* <div className="divider-buyer"></div> */}
              {/* <ul className="theme-list theme-list-light text-white">
                  <li>
                    <div className="h5">
                      <BsCheckLg />
                      &nbsp; Order from any Supplier
                    </div>
                  </li>
                  <li>
                    <div className="h5">
                      <BsCheckLg />
                      &nbsp;One account for all Supplier
                    </div>
                  </li>
                  <li>
                    <div className="h5">
                      <BsCheckLg />
                      &nbsp;Track your delivery anytime
                    </div>
                  </li>
                  <li>
                    <div className="h5">
                      <BsCheckLg />
                      &nbsp;Rate your experience
                    </div>
                  </li>
                </ul> */}
              <div></div>
              <p className="text-lg text-grey mb-3 ">
                Are you a contractor who needs construction stuff? Plant365 lets
                you buy everything online from different sellers all in one
                place. Plant365 provides you with direct digital access to the
                top suppliers in your region.
                {/* We Improve construction productivity by simplifying
                the procurement. */}
              </p>
              {/* <p className="text-lg text-grey mb-3">
                  Where is your Contruction site?
                </p>
                <select className="select-box">
                  <option>Select your city</option>
                  <option>Puducherry</option>
                  <option>Chennai</option>
                  <option>Cuddalore</option>
                </select> */}
              <Link to="/products">
                <button className="btn btn-primary explore-btn">
                  Shop Now
                </button>
              </Link>
            </div>
            {/* <div className="col-lg-6 py-3 wow fadeInRight">
                <div className="img-fluid text-center">
                  <img src={banner} alt="" />
                </div>
              </div> */}
          </div>
        </div>
      </div>
      {/* <div className="card-services">
        <div className="page-section-buyer section-2" id="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 py-3 wow fadeInRight">
                <div className="img-fluid py-3 text-center">
                  <img src={Construction} alt="" />
                </div>
              </div>
              <div className="col-lg-6 py-3 wow fadeInUp">
                <h2 className="title-section">
                  Discover the Products and Suppliers
                </h2>

                <ul className="theme-list theme-list-light">
                  <li>
                    <div className="h5">
                      One platform from where Buyers will have the access to all
                      products and multiple suppliers. You will have the
                      privilege to choose the supplier as per your need and as
                      per the specific location and region.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="card-services">
        <div className="page-section-buyer section-2" id="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 py-3 wow ">
                <h2 className="title-section">
                  Track your orders & getting Updates
                </h2>

                <ul className="theme-list theme-list-light">
                  <li>
                    <div className="h5">
                      Meyi Platform can be accessed any where and any time and
                      that Gives the buyers to register orders and track the
                      orders on the go. One platform where buyers can source and
                      order the materials and can get the notifications based on
                      the services opted and this will increase the confidence
                      from your customers to let them know the the order status
                      and delivery timelines
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-5 py-3 wow fadeInRight">
                <div className="img-fluid py-3 text-center">
                  <img src={Construction} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="card-services">
        <div className="page-section-buyer section-2" id="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 py-3 wow fadeInRight">
                <div className="img-fluid py-3 text-center">
                  <img src={Construction} alt="" />
                </div>
              </div>
              <div className="col-lg-6 py-3 wow fadeInUp">
                <h2 className="title-section">
                  Scale and grow with our Features
                </h2>

                <ul className="theme-list theme-list-light">
                  <li>
                    <div className="h5">
                      Digitisation is the feature and by accommodating the
                      digital platform would help to scale your business by
                      managing and punching the order in few clicks and manage
                      the orders in real time and there by increasing your
                      rating which further increase your businesses further.
                    </div>
                  </li>
                  <li>
                    <div className="h5"></div>
                  </li>
                  <li>
                    <div className="h5"></div>
                  </li>
                  <li>
                    <div className="h5"></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div>
        <div className=" tw-mb-20">
          <div className="tw-mx-10 tw-flex tw-justify-center tw-mt-16">
            <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-center md:tw-gap-9 md:tw-max-w-[1340px] md:tw-px-14">
              <img
                className=" tw-h-[300px] md:tw-h-[400px]"
                src={Construction}
                alt=""
              />
              <div className="flex tw-flex-col ">
                <h3 className="title-section tw-text-center tw-my-4 tw-text-heading tw-leading-none">
                  Opportunity to grow fast
                </h3>
                <h5 className=" tw-text-center tw-text-fontGray tw-font-Catamaran tw-text-xl tw-tracking-wider ">
                  Our digital technology from Plant365 will be setting the stage
                  for your procurement to go easy, hassle free, simple and
                  seamless which in turn will support the growth of your
                  business further by having access to our fleet of customers
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="tw-mx-10 tw-flex tw-justify-center tw-mt-16">
          <div className="tw-flex tw-flex-col md:tw-flex-row-reverse tw-items-center tw-justify-center md:tw-gap-9 tw-max-w-[1340px] md:tw-px-14">
            <img
              className=" tw-h-[300px] md:tw-h-[400px]"
              src={Construction}
              alt=""
            />
            <div className="flex tw-flex-col ">
              <h3 className="title-section tw-text-center tw-my-4 tw-leading-none tw-text-heading">
                Easy Tracking of Orders & Logistics
              </h3>
              <h5 className=" tw-text-center tw-text-fontGray tw-font-Catamaran tw-text-xl tw-tracking-wider">
                Tracking of Orders and Managing the Logistics is very easy with
                the platform we built, and you can efficiently manage your
                logistics and increase the productivity to boost your business.
                Order management helps you to increase your customers confidence
                and experience in purchasing from you and in turn will bring you
                more businesses.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className=" tw-mb-20">
        <div className="tw-mx-10 tw-flex tw-justify-center tw-mt-16">
          <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-center md:tw-gap-9 md:tw-max-w-[1340px] md:tw-px-14">
            <img
              className=" tw-h-[300px] md:tw-h-[400px]"
              src={Construction}
              alt=""
            />
            <div className="flex tw-flex-col ">
              <h3 className="title-section tw-text-center tw-my-4 tw-text-heading tw-leading-none">
                Get Your Free Quote Today!
              </h3>
              <h5 className=" tw-text-center tw-text-fontGray tw-font-Catamaran tw-text-xl tw-tracking-wider ">
                Get the construction materials you need with ease. Receive a
                free quote and enjoy the lowest prices available.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <Products initiator={"Buyer"} />
    </div>
  );
};

export default Buyer;
