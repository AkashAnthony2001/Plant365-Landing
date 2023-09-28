import React from "react";
import slide1 from "../assets/img/banner1.jpg";
// import slide2 from "../assets/img/banner.jpg";
// import slide3 from "../assets/img/slide3.jpg";
// import slide4 from "../assets/img/slide4.jpg";
import Logistics from "../assets/img/Logistics-bro.svg";
import { BsCheckLg, BsFillArrowLeftSquareFill } from "react-icons/bs";
import map from "../assets/img/map.svg";
import SimpleImageSlider from "react-simple-image-slider";
import dashboard from "../assets/img/icons/realtime1.svg";
import trip from "../assets/img/icons/trip.svg";
import ordermanagement from "../assets/img/icons/order-management.svg";
import automation from "../assets/img/icons/streamline.svg";
import concretesales from "../assets/img/icons/concretesales.svg";
import SuppliersDetails from "./SuppliersDetails";
import { Link } from "react-router-dom";
import banner from "../assets/img/home-page-lite.jpg";

const images = [{ url: slide1 }];
const sliderStyling = {
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: "-1",
};

const Supplier = () => {
  return (
    <div className=" tw-bg-background">
      <div className="container-fluid page-section p-0">
        <div
          className="page-banner home-banner"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="blend darkBlend"></div>
          <div className="row align-items-center supplier-content">
            <div className="col-lg-6 py-3 tw-mt-16 wow fadeInUp opac">
              <h1 className="title-section-buyer">
                Customized for RMC Plants.
              </h1>
              <br></br>

              <div>
                {" "}
                <p className="text-lg text-grey mb-3 ">
                  Get a dispatch portal that's perfect for your unique industry
                  needs. Our platform is tailored to handle the intricacies of
                  complex industries. You can oversee your orders in real-time,
                  plan out deliveries and truck schedules, configure your
                  business location and settings, take charge of customer
                  management, pricing, invoicing, Quotation, and accounts
                  &#8208; all within one streamlined system.
                </p>
              </div>

              <Link to="/contactus">
                {" "}
                <button className="btn btn-primary explore-btn">
                  Partner Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="card-services">
        <div className="page-section-buyer " id="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 py-3 wow fadeInRight">
                <div className="img-fluid py-3 text-center">
                  <img src={Logistics} alt="" />
                </div>
              </div>
              <div className="col-lg-6 py-3 wow fadeInUp">
                <h3 className="title-section">Opportunity to grow fast</h3>
                
                <ul className="theme-list theme-list-light">
                  <li>
                    <h5>
                      Our digital technology from Plant365 will be setting the
                      stage for your procurement to go easy, hassle free,
                      simple and seamless which in turn will support the
                      growth of your business further by having access to
                      our fleet of customers.
                    </h5>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="card-services">
        <div className="page-section-buyer" id="about">
          
            <div className="row align-items-center">

             
              <div className="col-lg-6 py-3 wow fadeInRight">
                <h3 className="title-section">Easy Tracking of Orders & Logistics</h3>
                

                <ul className="theme-list theme-list-light">
                  <li>
                    <h5>
                      Tracking of Orders and Managing the Logistics is
                      very easy with the platform we built and you can
                      efficiently manage your logistics and increase the
                      productivity to boost your business. Order management
                      helps you to increase your customers confidence and
                      experience in purchasing from you and in turn will bring you
                      more businesses.
                    </h5>
                  </li>
                  
                </ul>
              </div>
              <div className="col-lg-4 wow  fadeInRight ">
                <div className="img-fluid rounded-start py-3 text-center">
                  <img src={map} alt="" width="100%" />
                </div>
              </div>
            </div>
          
        </div> 
      </div>
        */}
      {/* <div className="card-services">
        <div className="page-section-buyer" id="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 wow fadeInRight ">
                <div className="img-fluid rounded-start py-3 text-center">
                  <img src={map} alt="" width="100%" />
                </div>
              </div>
              <div className="col-lg-6 py-3 wow fadeInUp">
                <h3 className="title-section">
                  Be first to adopt growing technologies
                </h3>

                <ul className="theme-list theme-list-light ">
                  <li>
                    <h5>
                      World is moving towards Online and Buyers first choice is
                      always to search their requirements online and search cost
                      effective and quality suppliers. Now or Never , be first
                      to adopt the growing technology to compete with the
                      competitors in the market.
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className=" tw-mb-20 tw-font-catamaran">
        <div className="tw-mx-10 tw-flex tw-justify-center tw-mt-16">
          <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-center md:tw-gap-9 md:tw-max-w-[1340px] md:tw-px-14">
            <img
              className=" tw-h-[400px] tw-w-[350px]"
              src={concretesales}
              alt=""
            />
            <div className="flex tw-flex-col ">
              <h3 className="tw-text-center tw-my-4 tw-leading-none tw-text-primary tw-text-heading   tw-font-bold">
                Empowering Building Material suppliers
                <span className="tw-block">
                  with a whitelable App Solution{" "}
                </span>
              </h3>
              <h5 className=" tw-text-center tw-text-fontGray tw-text-xl tw-tracking-wider md:tw-py-6">
                Our digital technology from Plant365 will be setting the stage
                for your procurement to go easy, hassle free, simple and
                seamless which in turn will support the growth of your business
                further by having access to our fleet of customers.
              </h5>
            </div>
          </div>
        </div>
        <div className="tw-mx-10 tw-flex tw-justify-center tw-mt-16">
          <div className="tw-flex tw-flex-col md:tw-flex-row-reverse tw-items-center tw-justify-center md:tw-gap-9 tw-max-w-[1340px] md:tw-px-14">
            <img
              className=" tw-h-[400px] tw-w-[350px]"
              src={ordermanagement}
              alt=""
            />
            <div className="flex tw-flex-col">
              <h3 className="tw-text-center tw-my-4 tw-leading-none tw-text-primary tw-text-heading   tw-font-bold">
                Effortless Order Management
                <span className="tw-block">and Flexible Dispatch</span>
              </h3>
              <h5 className=" tw-text-center tw-text-fontGray tw-text-xl tw-tracking-wider">
                Efficiently handle both phone-in and digital orders using our
                adaptable order management portal. Our dispatch system provides
                you with real-time versatility and independence to oversee
                orders according to your preferences.
              </h5>
            </div>
          </div>
        </div>
        <div className="tw-mx-10 tw-flex tw-justify-center tw-mt-16">
          <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-center md:tw-gap-9 tw-max-w-[1340px] md:tw-px-14">
            <img
              // className=" tw-h-[300px] tw-w-[350px] tw-rounded-xl"
              src={automation}
              alt=""
            />
            <div className="flex tw-flex-col ">
              <h3 className="tw-text-center tw-my-4 tw-leading-none tw-text-primary tw-text-heading   tw-font-bold">
                Streamline Your Business with <span>Automation</span>
              </h3>
              <h5 className=" tw-text-center tw-text-fontGray tw-text-xl tw-tracking-wider">
                World is moving towards Online and Buyers first choice is always
                to search their requirements online and search cost effective
                and quality suppliers. Now or Never , be first to adopt the
                growing technology to compete with the competitors in the
                market.
              </h5>
            </div>
          </div>
        </div>
        <div className="tw-mx-10 tw-flex tw-justify-center tw-mt-16">
          <div className="tw-flex tw-flex-col md:tw-flex-row-reverse tw-items-center tw-justify-center md:tw-gap-9 tw-max-w-[1340px] md:tw-px-14">
            <img src={dashboard} alt="" />
            <div className="flex tw-flex-col">
              <h3 className="tw-text-center tw-my-4 tw-leading-none tw-text-primary tw-text-heading   tw-font-bold">
                Instant Business Insights
              </h3>
              <h5 className=" tw-text-center tw-text-fontGray tw-text-xl tw-tracking-wider">
                Effortlessly access key financial indicators, monitor pending
                amounts, identify top customers, track popular products, and
                visualize your business's flow chart.
              </h5>
            </div>
          </div>
        </div>
        <div className="tw-mx-10 tw-flex tw-justify-center tw-mt-16">
          <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-center md:tw-gap-9 tw-max-w-[1340px] md:tw-px-14">
            <img className=" tw-h-[300px] tw-w-[350px]" src={trip} alt="" />
            <div className="flex tw-flex-col ">
              <h3 className="tw-text-center tw-my-4 tw-leading-none tw-text-primary tw-text-heading  tw-font-bold">
                Truck and
                <span className=" tw-block">delivery management</span>
              </h3>
              <h5 className=" tw-text-center tw-text-fontGray tw-text-xl tw-tracking-wider">
                Configure trucking and delivery settings, integrate GPS, or
                utilize our driver app to pinpoint truck location.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <SuppliersDetails />
    </div>
  );
};

export default Supplier;
