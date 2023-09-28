import React from "react";
import Products from "./Products";
import SuppliersDetails from "./SuppliersDetails";
import { FiChevronsRight } from "react-icons/fi";
import { BiRightArrowAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import growth from "../assets/img/icons/growth.svg";
import finance from "../assets/img/icons/finance.svg";
import customers from "../assets/img/icons/customers.svg";
import reduce from "../assets/img/icons/reducedcalls.svg";
import purchase from "../assets/img/icons/purchase.svg";
import experience from "../assets/img/icons/customer-exp.svg";
import overcome from "../assets/img/icons/overcome.svg";
import realtime from "../assets/img/icons/realtime.svg";
import delivery from "../assets/img/icons/delivery.svg";
import store from "../assets/img/icons/store.svg";
import leadtime from "../assets/img/icons/leadtime.svg";
import pricing from "../assets/img/icons/best-pricing.svg";
import quote from "../assets/img/icons/quote.svg";
import home from "../assets/img/home.jpg";

import "./styles.css";

const Home = () => {
  function scrollWin() {
    window.scrollBy(0, 1000);
  }
  return (
    <div className=" tw-bg-background">
      <div className="container-fluid page-section p-0">
        <div
          className="page-banner home-banner"
          style={{
            backgroundImage: `url(${home})`,
          }}
        >
          <div className="blend darkBlend"></div>
          <div className="row align-items-center supplier-content">
            <div className="col-lg-6 py-3 pr-lg-5 tw-mt-16 wow fadeInUp opac">
              <h1 className="title-section-buyer">
                We designed for your success
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
              <p className="text-lg text-grey mb-3 tw-font-catamaran">
                At our core, we are dedicated to supporting a wide spectrum of
                construction-related businesses &#8208; suppliers, producers,
                distributors, and manufacturers. Our mission revolves around the
                seamless integration of digital solutions into their operations,
                paving the way for process automation, cost reduction, and an
                impressive surge in sales. Welcome to the realm of sophisticated
                commerce tailored to the construction industry.
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
              <div className=" tw-flex tw-gap-4 md:tw-gap-0 tw-flex-col md:tw-flex-row">
                <Link to="/buyers">
                  <button className="btn btn-primary explore-btn">
                    For Buyers &#10132;
                  </button>
                </Link>
                <Link to="/suppliers">
                  <button className="btn btn-primary explore-btn">
                    For Suppliers &#10132;
                  </button>
                </Link>
              </div>
            </div>
            {/* <div className="col-lg-6 py-3 wow fadeInRight">
                <div className="img-fluid text-center">
                  <img src={banner} alt="" />
                </div>
              </div> */}
            <div className="scrollss">Scroll</div>
            <div className="scroll" onClick={scrollWin}>
              <div className="scroller"></div>
              {/* <a href="#" className="btn-scroll" onClick={scrollWin}>
            <span className="mai-arrow-down"></span>
          </a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="page-section">
        <div className="container">
          <div className="wow fadeInUp flex tw-justify-center tw-items-center">
            {/* <h1 className="title-section">Who we are</h1> */}
            <br></br>
            {/* <p className=" tw-text-heading tw-font-bold tw-text-primary tw-text-center tw-leading-none tw-mb-5">
              Empowering Building Material Suppliers with a White-Label App
              Solution
            </p>
            <p className="tw-text-center tw-text-white tw-text-lg tw-mb-14">
              Plant365 is an e-commerce platform specifically designed for the
              RMC plants. Our primary objective at Plant365 is to efficiently
              address the requirements within the RMC industry. We achieve this
              by understanding your needs, providing suitable recommendations,
              and using technology to monitor the progress of deliveries. In
              doing so, we aim to establish a robust ecosystem that fosters
              strong collaboration between Contractors and RMC Suppliers.
            </p> */}
            <p className="tw-text-heading tw-font-bold tw-text-primary tw-text-center tw-leading-none tw-mb-5">
              Selling concrete online has never been this easy
            </p>
            <p className="tw-text-center tw-text-white tw-text-lg tw-mb-6">
              Join the Plant365 ecosystem and start selling building materials
              online without the need for a tech team. Our platform offers a
              hassle-free solution designed for your industry. It's coding-free,
              customizable and enables you to start quickly and easily.
            </p>
            <br></br>
            <div>
              {/* <div className="tw-flex tw-justify-center tw-mb-10">
                <h3 className=" tw-py-2 tw-border-b-2 tw-border-spacing-y-0.5 tw-text-2xl tw-text-primary tw-font-semibold tw-border-primary tw-tracking-wider">
                  For Suppliers
                </h3>
              </div> */}
              {/* <div className="col-md-12">
                <div className="whatwedo_section">
               
                  <h3 className="blog-head">For Suppliers</h3>
                 
                  <div className="divider dvd"></div><br></br>
                  <ul className="list-items">
                    <div className="col"> 
                    <li>
                    <div className="col">
                      </div>
                    <div className="col">
                      <img src={"https://cdn-icons-png.flaticon.com/512/4911/4911016.png"} className="imgst" alt="logo" />
                      </div>
                      <div className="st">
                    Get new customers from our Market place
                      </div>
                    </li>
                    </div>
                    <div className="col"><li>
                    <div className="col">
                      <img src={"https://cdn-icons-png.flaticon.com/512/4910/4910715.png"} className="imgst" alt="logo" />
                      </div>

                       Order & Vehicle tracking management
                    </li></div>
                    <div className="col"><li>
                    <div className="col">
                      <img src={"https://cdn-icons-png.flaticon.com/512/568/568095.png"} className="imgs" alt="logo" />
                      </div>

                      &nbsp;Multi plant management
                    </li></div>




                  </ul>
                </div>
              </div> */}
              {/* <div className="col-md-12">
                <div className="whatwedo_section">
                  <ul className="list-items">
                    <div className="col"><li>
                    <div className="col">
                      <img src={"https://cdn-icons-png.flaticon.com/512/579/579391.png"} className="imgst" alt="logo" />
                      </div>

                      <div className="st">Customer tracking & management</div>
                      &nbsp;
                    </li></div>
                    <div className="col"><li>
                    <div className="col">
                      <img src={"https://cdn-icons-png.flaticon.com/512/1804/1804257.png"} className="imgst" alt="logo" />
                      </div> &nbsp;&nbsp;
                      &nbsp;Scale your business - go digital
                    </li></div>
                  
                    <div className="col"><li>
                    <div className="col">
                      <img src={"https://cdn-icons-png.flaticon.com/512/3515/3515213.png"} className="imgs" alt="logo" />
                      </div> &nbsp;&nbsp;
                      &nbsp;&nbsp;Get your own website
                    </li></div>



                  </ul>
                </div>
              </div> */}
              {/* <div className="col-md-12">
                <div className="whatwedo_section">
                  <ul className="list-items">
                    <div className="col"> <li>
                    <div className="col">
                      <img src={img7} className="imgs" alt="logo" />
                      </div>
                      &nbsp;Customer Tracking
                    </li></div>
                    <div className="col"><li>
                    <div className="col">
                      <img src={img8} className="imgs" alt="logo" />
                      </div>
                      &nbsp;Get new market place
                    </li></div>
                    <div className="col"><li>
                    <div className="col">
                      <img src={img6} className="imgs imgst" alt="logo" />
                      </div>
                      &nbsp;Set your own brand
                    </li></div>
                    
                  </ul>
                </div>
              </div> */}
              {/* <div className="col-md-12">
                <div className="whatwedo_section">
                  <ul className="list-items">
                  
                  <li>
                    <div className="col">
                      <img src={img3} className="imgs" alt="logo" />
                      </div>
                      &nbsp;Customer management
                    </li>
                    </ul>
                    </div>
              </div> */}
              <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6 tw-mb-12">
                <div className="tw-flex tw-flex-col tw-px-5 tw-py-4 hover:tw-bg-accent hover:tw-shadow-lg hover:tw-text-black tw-text-white tw-items-center md:tw-items-start tw-rounded-2xl tw-duration-300 tw-ease-in-out ">
                  <img
                    className="tw-h-14 tw-w-14 tw-self-center md:tw-self-start tw-my-2"
                    src={finance}
                    // "https://cdn-icons-png.flaticon.com/512/1804/1804257.png"
                  />
                  <p className="tw-text-xl tw-py-4">
                    Explore Our Finance Solutions
                  </p>
                  <p className="tw-text-center md:tw-text-left tw-font-medium tw-text-gray-400">
                    Discover a comprehensive range of finance tools designed to
                    streamline your invoicing, Quotation, payment reminder,
                    payment processing, and accounting tasks.
                  </p>
                </div>
                <div className="tw-flex tw-flex-col tw-px-5 tw-py-4 hover:tw-bg-accent hover:tw-shadow-lg hover:tw-text-black tw-text-white tw-items-center md:tw-items-start tw-rounded-2xl tw-duration-300 tw-ease-in-out ">
                  <img
                    className="tw-h-14 tw-self-center md:tw-self-start tw-my-2"
                    src={reduce}
                    // "https://cdn-icons-png.flaticon.com/512/4910/4910715.png"
                  />
                  <p className=" tw-text-xl tw-py-4">
                    Reduce phone calls by up to 90%.
                  </p>
                  <p className="tw-text-center md:tw-text-left tw-text-gray-400">
                    Reduce the number of phone calls by as much as 90% by
                    pre-ordering and streamlining post-delivery processes.. This
                    saves time for you and your employees and prevents confusion
                    during product delivery.
                  </p>
                </div>
                <div className="tw-flex tw-flex-col tw-px-5 tw-py-4 hover:tw-bg-accent hover:tw-shadow-lg hover:tw-text-black tw-text-white tw-items-center md:tw-items-start tw-rounded-2xl tw-duration-300 tw-ease-in-out ">
                  <img
                    className="tw-h-14 tw-self-center md:tw-self-start tw-my-2"
                    src={customers}
                    // "https://cdn-icons-png.flaticon.com/512/568/568095.png"
                  />
                  <p className=" tw-text-xl tw-py-4">Get new business</p>
                  <p className="tw-text-center md:tw-text-left tw-text-gray-400">
                    Get new customers from our Market place. Take advantage of
                    our joint marketing campaign with Plant365 to gain new
                    leads.
                  </p>
                </div>
                <div className="tw-flex tw-flex-col tw-px-5 tw-py-4 hover:tw-bg-accent hover:tw-shadow-lg hover:tw-text-black tw-text-white tw-items-center md:tw-items-start tw-rounded-2xl tw-duration-300 tw-ease-in-out ">
                  <img
                    className="tw-h-14 tw-self-center md:tw-self-start tw-my-2 "
                    src={growth}

                    // "https://cdn-icons-png.flaticon.com/512/4911/4911016.png"
                  />
                  <p className=" tw-text-xl tw-py-4">Grow Revenues</p>
                  <p className=" tw-text-center md:tw-text-left tw-text-gray-400">
                    Our technology gives your brand the opportunity to increase
                    and earn additional revenue. By making the purchasing
                    process more convenient, intuitive and simple, you can
                    significantly improve your contractor's experience, which,
                    in turn, positively impacts sales.
                  </p>
                </div>
                <div className="tw-flex tw-flex-col tw-px-5 tw-py-4 hover:tw-bg-accent hover:tw-shadow-lg hover:tw-text-black tw-text-white tw-items-center md:tw-items-start tw-rounded-2xl tw-duration-300 tw-ease-in-out">
                  <img
                    className="tw-h-14 tw-w-14 tw-self-center md:tw-self-start tw-my-2"
                    src={overcome}
                    // "https://cdn-icons-png.flaticon.com/512/579/579391.png"
                  />
                  <p className=" tw-text-xl tw-py-4">Overcome Opposition</p>
                  <p className="tw-text-center md:tw-text-left tw-text-gray-400">
                    In a rapidly evolving business landscape, emerging companies
                    are strategically utilizing technology to secure their
                    position in the market and achieve swift expansion. Plant365
                    is playing a pivotal role in this scenario by providing
                    equivalent capabilities, enabling small and medium-sized
                    suppliers to assert their presence and compete effectively.
                  </p>
                </div>
                <div className="tw-flex tw-flex-col tw-px-5 tw-py-4 hover:tw-bg-accent hover:tw-shadow-lg hover:tw-text-black tw-text-white tw-items-center md:tw-items-start tw-rounded-2xl tw-duration-300 tw-ease-in-out">
                  <img
                    className="tw-h-14 tw-w-14 tw-self-center md:tw-self-start tw-my-2"
                    src={experience}
                    // "https://cdn-icons-png.flaticon.com/512/3515/3515213.png"
                  />
                  <p className=" tw-text-xl tw-py-4">
                    Improved Customer Experience
                  </p>
                  <p className="tw-text-center md:tw-text-left tw-text-gray-400">
                    Offer your customers a more convenient way to get quote,
                    order tracking, manage orders, Real-time delivery status,
                    updates and notifications with your company - with easily
                    accessible information right at their fingertips. As a
                    result, your brand is right in the palm of your customers’
                    hand.
                  </p>
                </div>
              </div>
              {/* <div className="col-md-12">
                <div className="whatwedo_section">
                  <h4 className="blog-head">For Contractors</h4>
                  <div className="divider dvd"></div>
                  <br></br>
                  <ul className="list-items">
                    <div className="col">
                      <li>
                        <div className="col">
                          <img
                            src={
                              "https://cdn-icons-png.flaticon.com/512/5787/5787744.png"
                            }
                            className="imgst"
                            alt="logo"
                          />
                        </div>
                        &nbsp;Save your material purchasing lead time
                      </li>
                    </div>

                    <div className="col">
                      <li>
                        <div className="col">
                          <img
                            src={
                              "https://cdn-icons-png.flaticon.com/512/1803/1803362.png"
                            }
                            className="imgst "
                            alt="logo"
                          />
                        </div>{" "}
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;Real time tracking
                        of Orders
                      </li>
                    </div>
                    <div className="col">
                      <li>
                        <div className="col">
                          <img
                            src={
                              "https://cdn-icons-png.flaticon.com/512/3515/3515379.png"
                            }
                            className="imgs"
                            alt="logo"
                          />
                        </div>
                        &nbsp;One place for all products
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="col-md-12">
                <div className="whatwedo_section">
                  <ul className="list-items">
                    <div className="col">
                      <li>
                        <div className="col">
                          <img
                            src={
                              "https://cdn-icons-png.flaticon.com/512/3209/3209300.png"
                            }
                            className="imgst"
                            alt="logo"
                          />
                        </div>
                        &nbsp;Best and Suitable pricing options
                      </li>
                    </div>
                    <div className="col">
                      <li>
                        <div className="col">
                          <img
                            src={
                              "https://cdn-icons-png.flaticon.com/512/4017/4017784.png"
                            }
                            className="imgst"
                            alt="logo"
                          />
                        </div>{" "}
                        &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;Free quote and lowest
                        price
                      </li>
                    </div>
                    <div className="col">
                    <li>
                        <div className="col">
                        <img
                            src={
                              "https://cdn-icons-png.flaticon.com/512/5787/5787759.png"
                            }
                            className="imgs"
                            alt="logo"
                            />
                            </div>
                            &nbsp;Order and delivery updates
                            </li>
                            </div>
                            </ul>
                            </div>
                          </div> */}
              <div className="tw-text-center tw-mb-10">
                <h3 className="tw-text-heading tw-text-primary tw-font-bold tw-py-2 ">
                  Purchase from your preferred suppliers effortlessly using a
                  single platform.
                </h3>
                <p className="pb-3  tw-text-white tw-text-lg">
                  Simplify your construction material procurement process by
                  utilizing one platform for sourcing, ordering, payment, and
                  management. With Plant365, you gain convenient digital access
                  to top suppliers in your area.
                </p>
              </div>
              <div className=" tw-grid tw-grid-cols-1 tw-items-center md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4 tw-mb-10">
                <div className="tw-flex tw-flex-col tw-gap-2 tw-px-5 tw-py-4 hover:tw-bg-accent hover:tw-shadow-lg hover:tw-text-black tw-text-white tw-items-center md:tw-items-start tw-rounded-2xl tw-duration-300 tw-ease-in-out">
                  <img
                    className="tw-h-14 tw-w-14 tw-self-center md:tw-self-start tw-my-2"
                    src={pricing}
                    // "https://cdn-icons-png.flaticon.com/512/3209/3209300.png"
                  />
                  <p className=" tw-text-xl tw-text-center md:tw-text-left tw-py-4 ">
                    Best and Suitable Pricing Options
                  </p>
                  <p className="tw-text-center md:tw-text-left tw-text-gray-400">
                    Discover the perfect pricing fit for you with our
                    application's comprehensive range of 'Best and Suitable
                    Pricing Options' tailored for contractors.
                  </p>
                </div>
                <div className="tw-flex tw-flex-col tw-gap-2 tw-px-5 tw-py-4 hover:tw-bg-accent hover:tw-shadow-lg hover:tw-text-black tw-text-white tw-items-center md:tw-items-start tw-rounded-2xl tw-duration-300 tw-ease-in-out">
                  <img
                    className="tw-h-14 tw-self-center md:tw-self-start tw-my-2"
                    src={realtime}
                    // "https://cdn-icons-png.flaticon.com/512/1803/1803362.png"
                  />
                  <p className=" tw-text-xl tw-text-center md:tw-text-left tw-py-4">
                    Real time tracking of Orders
                  </p>
                  <p className="tw-text-center md:tw-text-left tw-text-gray-400">
                    ​ Efficiently monitor order progress with our application's
                    real-time tracking feature. Track your orders in live mode,
                    ensuring transparency and timely updates.
                  </p>
                </div>
                <div className="tw-flex tw-flex-col tw-gap-2 tw-px-5 tw-py-4 hover:tw-bg-accent hover:tw-shadow-lg hover:tw-text-black tw-text-white tw-items-center md:tw-items-start tw-rounded-2xl tw-duration-300 tw-ease-in-out">
                  <img
                    className="tw-h-14 tw-self-center md:tw-self-start tw-my-2"
                    src={store}
                    // "https://cdn-icons-png.flaticon.com/512/3515/3515379.png"
                  />
                  <p className=" tw-text-xl tw-text-center md:tw-text-left tw-py-4">
                    One place for all products
                  </p>
                  <p className="tw-text-center md:tw-text-left tw-text-gray-400">
                    Elevate your shopping routine with our platform, designed to
                    be the ultimate destination, gathering all products under
                    one roof for your ease.
                  </p>
                </div>
                <div className="tw-flex tw-flex-col tw-gap-2 tw-px-5 tw-py-4 hover:tw-bg-accent hover:tw-shadow-lg hover:tw-text-black tw-text-white tw-items-center md:tw-items-start tw-rounded-2xl tw-duration-300 tw-ease-in-out">
                  <img
                    className="tw-h-14 tw-w-14 tw-self-center md:tw-self-start tw-my-2"
                    src={quote}
                    // "https://cdn-icons-png.flaticon.com/512/4017/4017784.png"
                  />
                  <p className=" tw-text-xl tw-text-center md:tw-text-left tw-py-4">
                    Free quote and lowest price
                  </p>
                  <p className="tw-text-center md:tw-text-left tw-text-gray-400">
                    Get your project started with a complimentary quote and
                    access the best rates in the market.
                  </p>
                </div>
                <div className="tw-flex tw-flex-col tw-gap-2 tw-px-5 tw-py-4 hover:tw-bg-accent hover:tw-shadow-lg hover:tw-text-black tw-text-white tw-items-center md:tw-items-start tw-rounded-2xl tw-duration-300 tw-ease-in-out">
                  <img
                    className="tw-h-14 tw-self-center md:tw-self-start tw-my-2"
                    src={leadtime}
                    // "https://cdn-icons-png.flaticon.com/512/5787/5787744.png"
                  />
                  <p className=" tw-text-xl tw-text-center md:tw-text-left tw-py-4">
                    Minimize Material Lead Time
                  </p>
                  <p className="tw-text-center md:tw-text-left tw-text-gray-400">
                    Expedite contractor material purchasing through our app,
                    minimizing lead times and project delays.
                  </p>
                </div>
                <div className="tw-flex tw-flex-col tw-gap-2 tw-px-5 tw-py-4 hover:tw-bg-accent hover:tw-shadow-lg hover:tw-text-black tw-text-white tw-items-center md:tw-items-start tw-rounded-2xl tw-duration-300 tw-ease-in-out">
                  <img
                    className="tw-h-14 tw-w-14 tw-self-center md:tw-self-start tw-my-2"
                    src={delivery}
                    // "https://cdn-icons-png.flaticon.com/512/5787/5787759.png"
                  />
                  <p className=" tw-text-xl tw-text-center md:tw-text-left tw-py-4">
                    Order and delivery updates
                  </p>
                  <p className="tw-text-center md:tw-text-left tw-text-gray-400">
                    Keep up to date on your orders' progress and delivery times
                    with your convenient application.
                  </p>
                </div>
              </div>
              {/* <div className="col-md-12">
                <div className="whatwedo_section st2">
                  
                  <ul className="list-items">
                  
                  <div className="col"><li>
                  <div className="col">
                      <img src={img12} className="imgs" alt="logo" />
                      </div>
                      &nbsp;Save your material purchasing lead time
                    </li></div>
                    
                    <div className="col"><li>
                    <div className="col">
                      <img src={img15} className="imgs" alt="logo" />
                      </div>
                      &nbsp;Browse your favourite suppliers
                    </li></div>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="card flex-row"><img className="card-img-left example-card-img-responsive" src={Laptop} width="50%" height="50%"/>
  <div className="card-body">
  <h4 className="card-title h5 h4-sm">Left image</h4>
  <p className="card-text">Example text</p>
  </div>
</div> */}

      <SuppliersDetails initiator={"Home"} />
      <Products initiator={"Home"} />
    </div>
  );
};

export default Home;
