import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BsCheck, BsFillRecordFill } from "react-icons/bs";
import { Country, State } from "country-state-city";
import Select from "react-select";
import GeocodeMap from "./Map";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import VerifyDialog from "./VerifyDialog";
const Orders = ({ google, setShowSignin, isUserLogin, user }) => {
  const location = useLocation();
  const { product, supplierDetails } = location.state;
  const [suppliersDetails, setSupplierDetails] = useState([]);
  const [selectedSupplierIndex, setSelectedSupplierIndex] = useState(null);
  const [selectedSupplier, setSelectedSupplier] = useState({});
  const [currentOrderPage, setCurrentOrderPage] = useState("");
  const [dateRange, setDateRange] = useState([]);
  const [countries, setCountries] = useState(Country.getAllCountries());
  const [country, setCountry] = useState({ label: "India", value: "IN" });
  const [state, setState] = useState(null);
  const pincodeRegExp = /^[0-9]{6}$/;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [userComments, setUserComments] = useState("");

  const [googleCords, setGoogleCords] = useState({
    mapPosition: {
      lat: 18.5204,
      lng: 73.8567,
    },
    markerPosition: {
      lat: 18.5204,
      lng: 73.8567,
    },
  });
  const [userAddress, setUserAddress] = useState({
    primaryAddress: "",
    secondoryAddress: "",
    city: "",
    state: "",
    pinCode: "",
    country: "",
  });
  const [googleAddressField, setGoogleAddressField] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isMarkerDrag, setIsMarkerDrag] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [gradeUnit, setGradeUnit] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [staticMapURL, setStaticMapURL] = useState("");
  const [prodDetails, setProdDetails] = useState({});
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");
  const [isMobileValid, setIsMobileValid] = useState(true);
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);

  useEffect(() => {
    loadDateRange();
  }, []);

  const loadDateRange = () => {
    const dateArray = [];
    let startDate = new Date();
    
    dateArray.push(new Date(startDate));
    setDateRange(dateArray);
  };
  const goToNextDate = () => {
    const newDateArray = [...dateRange];
    let lastDate = new Date(dateRange[dateRange.length - 1]);
    lastDate.setDate(lastDate.getDate() + 1);
    newDateArray.push(new Date(lastDate));
  
    newDateArray.shift();
  
    setDateRange(newDateArray);
    setSelectedDateIndex(selectedDateIndex + 1);
  };
  
  const goToPreviousDate = () => {
    if (selectedDateIndex > 0) {
      const newDateArray = [...dateRange];
      
      newDateArray.pop();
      
      let firstDate = new Date(dateRange[0]);
      firstDate.setDate(firstDate.getDate() - 1);
      
      newDateArray.unshift(new Date(firstDate));
  
      setDateRange(newDateArray);
      setSelectedDateIndex(selectedDateIndex - 1);
    }
  };
  

  const [orderFlow, setOrderFlow] = useState([
    "Select Grade",
    "Address",
    // "Geocoding",
    // "Suppliers",
    // "Schedule",
    "Request Quote",
  ]);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const productSpec = product.Spec || product.spec;

  useEffect(async () => {
    getDateRange();
    setCurrentOrderPage(orderFlow[0]);
    if (supplierDetails && Object.keys(supplierDetails).length > 0) {
      if (orderFlow.includes("Suppliers")) {
        setOrderFlow([
          "Select Grade",
          "Address",
          // "Geocoding",
          // "Schedule",
          "Request Quote",
        ]);
      }
      setSupplierDetails(supplierDetails);
      setSelectedSupplier(supplierDetails);
    } else {
      if (orderFlow.indexOf("Suppliers") === -1) {
        setOrderFlow([
          "Select Grade",
          "Address",
          // "Geocoding",
          // "Suppliers",
          // "Schedule",
          "Request Quote",
        ]);
      }
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_STAGE}/suppliers?publicId=${product?.id}`
      );
      const suppliers = await response.json();
      setSupplierDetails(suppliers);
    }
  }, []);
  useEffect(() => {
    setStaticMapURL(
      `https://maps.googleapis.com/maps/api/staticmap?center=${googleCords.mapPosition.lat},${googleCords.mapPosition.lng}&zoom=15&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${googleCords.markerPosition.lat},${googleCords.markerPosition.lng}&key=AIzaSyBagSNeuLSvSm_lkDfL8RQwl1L6b7KF1tY`
    );
  }, [googleCords]);

  useEffect(() => {
    setUserAddress({
      ...userAddress,
      country: country && country.label ? country.label : "",
      state: state && state.label ? state.label : "",
    });
  }, [country, state]);

  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.isoCode,
  }));
  const updatedStates = (countryId) =>
    State.getStatesOfCountry(countryId).map((state) => ({
      label: state.name,
      value: state.isoCode,
    }));

  const handleUserInputs = (e) => {
    const { value, name } = e.target;
    const getUserAddress = {
      ...userAddress,
      [name]: value,
    };
    setUserAddress(getUserAddress);
  };

  const getDateRange = () => {
    const dateArray = [];
    let startDate = new Date(new Date().setDate(new Date().getDate()));
    let endDate = new Date(new Date().setDate(startDate.getDate() + 8));
    while (startDate < endDate) {
      dateArray.push(new Date(startDate));
      startDate.setDate(startDate.getDate() + 1);
    }
    setDateRange(dateArray);
    setScheduleDate(dateArray[0]);
  };
  const handleDateSelection = (date) => {
    setSelectedDateIndex(dateRange.indexOf(date));
  };
  const validateMobileNumber = (phone) => {
    const phoneRegex = /^[0-9]{12}$/;
    return phoneRegex.test(phone);
  };

  const validateAddressFields = () => {
    const { country, state, city, pinCode, primaryAddress, secondoryAddress } =
      userAddress;
    const pinCodeValid = pincodeRegExp.test(pinCode);
    if (country === "") {
      setErrorMessage("Country field is required");
      return true;
    } else if (state === "") {
      setErrorMessage("State field is required");
      return true;
    } else if (city === "") {
      setErrorMessage("City field is required");
      return true;
    } else if (city.length < 3 || city.length > 30) {
      setErrorMessage("City field must be 3 to 30 characters");
      return true;
    } else if (pinCode === "") {
      setErrorMessage("Pincode field is required");
      return true;
    } else if (!pinCodeValid) {
      setErrorMessage("Invalid Pincode");
      return true;
    } else if (pinCode.length < 3 || pinCode.length > 10) {
      setErrorMessage("PIN Code must be 3 to 10 charactors");
      return true;
    } else if (primaryAddress === "") {
      setErrorMessage("Address Line 1 field is required");
      return true;
    } else if (primaryAddress.length < 3 || primaryAddress.length > 100) {
      setErrorMessage("Address Line 1 field  must be 3 to 100 characters");
      return true;
    } else if (secondoryAddress === "") {
      setErrorMessage("Address Line 2 field is required");
      return true;
    } else if (secondoryAddress.length < 3 || secondoryAddress.length > 100) {
      setErrorMessage("Address Line 2 field  must be 3 to 100 characters");
      return true;
    } else {
      return false;
    }
  };
  const handleNextandPreviousButtons = (handler) => {
    let counter = orderFlow.indexOf(currentOrderPage);
    if (currentOrderPage === "Select Grade" && handler === "popup") {
      localStorage.setItem("otp", Math.floor(100000 + Math.random() * 900000));
      setIsDialogOpen(true);
    }
    if (currentOrderPage === "Select Grade" && handler === "next") {
      if (selectedGrade === null) {
        setErrorMessage("Please select any Grade");
        setShowError(true);
        return;
      } else if (quantity === "" || Number(quantity) === 0) {
        setErrorMessage("Quantity must be greater than 0");
        setShowError(true);
        return;
      } else if (!validateMobileNumber(mobileNumber)) {
        setErrorMessage("Invalid Mobile Number");
        setIsMobileValid(false);
        setShowError(true);
        return;
      }

      setShowError(false);
      setIsMobileValid(true);
    }
    if (currentOrderPage === "Address" && handler === "next") {
      const isAddressInvalid = validateAddressFields();
      if (isAddressInvalid) {
        setShowError(true);
        return;
      }
    }

    if (currentOrderPage === "Schedule" && handler === "next") {
      if (!isUserLogin) {
        setShowSignin(true);
        return;
      }
    }
    if (handler === "next") {
      if (counter < orderFlow.length - 1) {
        counter++;
      } else {
        handleQuoteSubmit();
      }
    } else {
      setShowError(false);
      setShowSuccess(false);
      if (counter > 0) counter--;
    }
    setCurrentOrderPage(orderFlow[counter]);
  };
  const handleGradeSelection = (grade) => {
    if (grade && Object.keys(grade).length > 0) {
      setSelectedGrade(grade);
      if (grade.unit) {
        setGradeUnit(grade.unit[0].Values || grade.unit);
      }
    }
  };

  const handleVerify = (code) => {
    if (localStorage.getItem("otp") === code) {
      handleNextandPreviousButtons("next");
    } else {
      alert("Wrong Otp");
    }
  };
  const handleQuoteSubmit = async () => {
    const { id, Name, productName, shardId, publicId, img } = product;
    const companyNameProp = "custom:company";
    const {
      name,
      [companyNameProp]: companyName,
      phone_number,
      sub,
    } = user.attributes;
    const {
      country,
      state,
      city,
      pinCode: pin,
      primaryAddress,
      secondoryAddress,
    } = userAddress;
    const date = new Date(scheduleDate);
    const deliveryDate = `${date.getFullYear()}-${
      date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    }-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`;
    const quoteDetails = {
      tenantId: shardId || selectedSupplier.tenantId,
      // cognito_id: sub,
      company: companyName,
      contractorName: name,
      contractorPhone: phone_number,
      deliveryAddress: primaryAddress,
      deliverySecAddress: secondoryAddress,
      deliveryCity: city,
      deliveryState: state,
      deliveryCountry: country,
      deliveryPin: pin,
      deliveryGeocodesLat: googleCords.mapPosition.lat,
      deliveryGeocodesLng: googleCords.mapPosition.lng,
      markerLat: googleCords.markerPosition.lat,
      markerLng: googleCords.markerPosition.lng,
      productName: Name || productName,
      productImg: img,
      grade: selectedGrade.Values,
      productId: id || publicId,
      quantity: `${quantity} ${gradeUnit || ""}`,
      deliveryDate,
      quoteComments: userComments,
      quoteStatus: "Created",
    };
    const DashboardGo = () => {
      navigate("/");
    };
    const pushQuotesData = await fetch(
      `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_STAGE}/quote`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(quoteDetails),
      }
    )
      .then((response) => response.json())
      .then((json) => setShowSuccess(true))
      .then(setTimeout(DashboardGo, 5000))
      .catch((error) => {
        setShowError(true);
        setErrorMessage("Something went wrong : " + error.message);
      });
  };
  {
    console.log(currentOrderPage);
  }
  function hideCenterDigits(inputNumber) {
    if (inputNumber.length !== 12) {
      return "Invalid input";
    }

    const firstPart = inputNumber.slice(0, 3);
    const hidePart = "******";
    const lastPart = inputNumber.slice(9);

    return firstPart + hidePart + lastPart;
  }

  return (
    <div
      className="page-section bg-light page-content top-header"
      style={{ width: "100%" }}
    >
      <div className="order-flow">
        <div>
          {/* <div className={`error-container ${showError ? "" : "disable"}`}>
            {errorMessage}
          </div> */}

          <div className={`success-container ${showSuccess ? "" : "disable"}`}>
            Request quote added successfully
          </div>

          <div className="container mt-2">
  {currentOrderPage === "Select Grade" && (
    <div style={{ marginBottom: "40px" }}>
      <div className="tw-flex tw-justify-center tw-gap-28 tw-items-center tw-h-[70vh] tw-flex-col md:tw-flex-row">
        <div
          style={{
            padding: "5px 0px 32px 3px",
            flexDirection: "column",
            alignItems: "center",
            gap: "25px",
          }}
          className="tw-flex tw-flex-col md:tw-flex-row"
        >
          <div
            className="card"
            style={{
              width: "375px",
              maxWidth: "375px",
              border: "2px solid rgba(0, 0, 0, 0.07)",
              boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.25)",
              marginBottom: "20px",
            }}
          >
            <img
              className="card-img-top"
              style={{
                width: "100%",
                height: "auto",
              }}
              src={product.img}
              alt="Card image cap"
            />
            <div className="card-body">
              <h4
                className="card-title tw-text-center sm:text-lg md:text-xl"
                style={{
                  color: "#000",
                  fontFamily: "PT Serif",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                {product.Name}
              </h4>
            </div>
          </div>
        </div>

        <div className="flex flex-col" style={{ marginBottom: "50px" }}>
          <div>
            <h1
              style={{
                color: "#000",
                fontFamily: "PT Serif",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              Mobile <span style={{ color: "#D31717" }}>*</span>
            </h1>
            <br />
            <div className="tw-max-w-xs">
              <PhoneInput
                country={"in"}
                inputStyle={{
                  width: "100%",
                  height: "24px",
                  fontSize: "14px",
                  borderColor: isMobileValid ? "grey" : "red",
                  placeholder: "Enter your phone number",
                }}
                value={mobileNumber}
                onChange={(phone) => {
                  setMobileNumber(phone);
                  setIsMobileValid(true);
                }}
              />
            </div>
            {showError && (
              <div style={{ color: "red" }}>{errorMessage}</div>
            )}
          </div>
          <br />

          <h1
            className="request-header"
            style={{
              color: "#000",
              fontFamily: "PT Serif",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            Grades
          </h1>
          <br />
          <div className="row">
            <div className="tw-grid tw-grid-cols-8">
              {product &&
                Array.isArray(productSpec) &&
                productSpec.map((grade) => (
                  <div
                    className={`grade ${
                      selectedGrade === grade ? "selected-button" : ""
                    }`}
                  >
                    <button
                      className={`tw-w-16 tw-h-10 tw-m-2`}
                      style={{
                        width: "150px",
                        height: "40px",
                        backgroundColor:
                          selectedGrade === grade ? "#27B643" : "#ececec",
                        color: selectedGrade === grade ? "white" : "",
                        margin: "6px",
                        marginBottom: "0px",
                      }}
                      onClick={() => handleGradeSelection(grade)}
                    >
                      {grade.Values}
                    </button>
                  </div>
                ))}
            </div>
          </div>

          {selectedGrade && (
            <div className="select-unit">
              <h1
                className="request-header"
                style={{
                  color: "#000",
                  fontFamily: "PT Serif",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                Quantity
              </h1>
              <div className="quantity-input ">
                <input
                  style={{
                    color: "#000",
                    fontFamily: "PT Serif",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    width: "180px",
                    height: "40px",
                    padding: "5px",
                    borderRadius: ".5px",
                    borderColor: "0.5px solid rgba(0, 0, 0, 0.34)",
                    borderWidth: "1px",
                    outline: "none",
                  }}
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <h5
                  className="ml-2"
                  style={{
                    color: "#000",
                    fontFamily: "PT Serif",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                >
                  {gradeUnit}
                </h5>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )}
</div>


          {currentOrderPage === "Address" && (
            <>
              <div className="container">
                <div className="row schedule">
                  <h1
                    style={{
                      fontFamily: "serif",
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "24px",
                    }}
                  >
                    Schedule Date
                  </h1>
                  <div className="btn btn-group schedule-date flex justify-between items-center">
                    <button
                      style={{
                        width: "55px",
                        height: "80px",
                        fontSize: "54px",
                        color: "#27B643",
                      }}
                      onClick={goToPreviousDate}
                    >
                      &lt;
                    </button>
                    {dateRange.length > 0 &&
                      dateRange.map((date, index) => (
                        <button
                          key={date.getDate()}
                          className={`btn btn-outline-primary ${
                            selectedDateIndex === index ? "activeDate" : ""
                          } m-1`}
                          onClick={() => handleDateSelection(date)}
                        >
                          {weekday[date.getDay()]}
                          <br />
                          {date.getDate()}
                          <br />
                          {months[date.getMonth()]}
                        </button>
                      ))}
                    <button
                      style={{
                        width: "55px",
                        height: "80px",
                        fontSize: "54px",
                        color: "#27B643",
                      }}
                      onClick={goToNextDate}
                    >
                      &gt;
                    </button>
                  </div>
                </div>

                <br />
                <h1
                  className="request-header"
                  style={{
                    fontFamily: "serif",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "24px",
                  }}
                >
                  Delivery Address
                </h1>
                <div className="row">
                  <div className="form">
                    <div className="form-group">
                      <label
                        for="country"
                        style={{
                          fontFamily: "serif",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        Country/region
                      </label>
                      <Select
                        id="country"
                        name="country"
                        className="form-group"
                        label="country"
                        options={updatedCountries}
                        value={country}
                        onChange={(value) => {
                          setCountry(value);
                          setState(null);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        for="address"
                        style={{
                          fontFamily: "serif",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        Address Line 1
                      </label>
                      <input
                        style={{ border: "1px solid #27B643" }}
                        type="text"
                        className="form-control"
                        id="address"
                        name="primaryAddress"
                        value={userAddress.primaryAddress}
                        onChange={handleUserInputs}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        for="address"
                        style={{
                          fontFamily: "serif",

                          color: "black",

                          fontWeight: "bold",
                        }}
                      >
                        Address Line 2
                      </label>
                      <input
                        type="text"
                        style={{ border: "1px solid #27B643" }}
                        className="form-control"
                        id="address"
                        name="secondoryAddress"
                        value={userAddress.secondoryAddress}
                        onChange={handleUserInputs}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label
                        for="city"
                        style={{
                          fontFamily: "serif",

                          color: "black",

                          fontWeight: "bold",
                        }}
                      >
                        City
                      </label>
                      <input
                        type="text"
                        style={{ border: "1px solid #27B643" }}
                        Previous
                        className="form-control"
                        id="city"
                        name="city"
                        value={userAddress.city}
                        onChange={handleUserInputs}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label
                        for="state"
                        style={{
                          fontFamily: "serif",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        State
                      </label>
                      <Select
                        id="state"
                        className="form-group"
                        name="state"
                        label="state"
                        options={updatedStates(country ? country.value : "")}
                        value={state}
                        onChange={(value) => {
                          setState(value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label
                        for="pin"
                        style={{
                          fontFamily: "serif",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        PIN Code
                      </label>
                      <input
                        style={{ border: "1px solid #27B643" }}
                        type="text"
                        className="form-control"
                        id="pin"
                        name="pinCode"
                        value={userAddress.pinCode}
                        onChange={handleUserInputs}
                      />
                    </div>
                  </div>
                  {showError && (
                    <div style={{ color: "red" }}>{errorMessage}</div>
                  )}
                </div>
              </div>
            </>
          )}
          {currentOrderPage === "Request Quote" && (
            <div className="container">
              <h2
                className="request-header"
                style={{
                  color: "black",
                  fontFamily: "PT Serif",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "130%",
                }}
              >
                Summary
              </h2>
              <h1
                style={{
                  color: "#27B643",
                  textAlign: "center",
                  fontFamily: "PT Serif",
                  fontSize: "28px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "130%",
                }}
              >
                You have Successfully placed your order
              </h1>
              <div
                className="row  mt-4 border rounded-3 p-2"
                style={{ padding: "0px", margin: "0" }}
              >
                <div className="col-md-4 request-box border-right">
                  <div className="request-quote">
                    <h1
                      className="request-header"
                      style={{
                        color: "black",
                        fontFamily: "PT Serif",
                        fontSize: "24px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "130%",
                      }}
                    >
                      Product Details
                    </h1>
                    <div className="request-grade">
                      <img
                        className="request-img"
                        src={product && product.img}
                        alt={product && (product.Name || product.productName)}
                        style={{
                          width: "300px",
                          height: "230.645px",
                          flexShrink: 0,
                        }}
                      />
                    </div>
                    <div
                      className="text-center"
                      style={{
                        color: "rgba(0, 0, 0, 0.79)",
                        fontFamily: "PT Serif",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "130%",
                      }}
                    >
                      {product && product.Name}
                    </div>
                    <div className="request-grade">
                      <h1
                        className="request-header p-0"
                        style={{
                          color: "#000",
                          fontFamily: "PT Serif",
                          fontSize: "18px",
                          fontStyle: "normal",
                          fontWeight: 700,
                          lineHeight: "130%",
                        }}
                      >
                        Grade
                      </h1>

                      <p
                        className="text-secondary p-0 m-0"
                        style={{
                          color: "rgba(0, 0, 0, 0.63)",
                          fontFamily: "PT Serif",
                          fontSize: "18px",
                          fontStyle: "normal",
                          fontWeight: 700,
                          lineHeight: "130%",
                        }}
                      >
                        {selectedGrade.Values || selectedGrade}
                      </p>
                    </div>
                    <div className="request-grade">
                      <h1
                        className="request-header p-0"
                        style={{
                          color: "#000",
                          fontFamily: "PT Serif",
                          fontSize: "18px",
                          fontStyle: "normal",
                          fontWeight: 700,
                          lineHeight: "130%",
                        }}
                      >
                        Quantity
                      </h1>
                      <p
                        className="text-secondary p-0 m-0"
                        style={{
                          color: "rgba(0, 0, 0, 0.63)",
                          fontFamily: "PT Serif",
                          fontSize: "18px",
                          fontStyle: "normal",
                          fontWeight: 700,
                          lineHeight: "130%",
                        }}
                      >{`${quantity} ${gradeUnit || ""}`}</p>
                    </div>
                    <div className="request-grade">
                      <h1
                        className="request-header"
                        style={{
                          color: "#000",
                          fontFamily: "PT Serif",
                          fontSize: "18px",
                          fontStyle: "normal",
                          fontWeight: 700,
                          lineHeight: "130%",
                        }}
                      >
                        Delivery Date
                      </h1>
                      <p
                        style={{
                          color: "rgba(0, 0, 0, 0.63)",
                          fontFamily: "PT Serif",
                          fontSize: "20px",
                          fontStyle: "normal",
                          fontWeight: 700,
                          lineHeight: "130%",
                        }}
                      >
                        {scheduleDate &&
                          `${scheduleDate
                            .getDate()
                            .toString()
                            .padStart(2, "0")} ${
                            months[scheduleDate.getMonth()]
                          } ${scheduleDate.getFullYear()}`}
                      </p>
                    </div>
                  </div>
                </div>

                {user && Object.keys(user).length > 0 && (
                  <div className="col-md-6 request-box ">
                    <div className="request-quote">
                      <h1
                        className="request-header"
                        style={{
                          color: "black",
                          fontFamily: "PT Serif",
                          fontSize: "24px",
                          fontStyle: "normal",
                          fontWeight: 700,
                          lineHeight: "130%",
                        }}
                      >
                        Customer Details
                      </h1>
                      <div className="request-grade">
                        <h1
                          className="request-header p-0"
                          style={{
                            color: "#000",
                            fontFamily: "PT Serif",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: 700,
                            lineHeight: "130%",
                          }}
                        >
                          Name
                        </h1>

                        <p
                          className="text-secondary p-0 m-0"
                          style={{
                            color: "rgba(0, 0, 0, 0.63)",
                            fontFamily: "PT Serif",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: 700,
                            lineHeight: "130%",
                          }}
                        >
                          {(user.attributes && user.attributes.name) || ""}
                        </p>
                      </div>
                      <div className="request-grade">
                        <h1
                          className="request-header p-0"
                          style={{
                            color: "#000",
                            fontFamily: "PT Serif",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: 700,
                            lineHeight: "130%",
                          }}
                        >
                          Company
                        </h1>
                        <p
                          className="text-secondary p-0 m-0"
                          style={{
                            color: "rgba(0, 0, 0, 0.63)",
                            fontFamily: "PT Serif",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: 700,
                            lineHeight: "130%",
                          }}
                        >
                          {(user.attributes &&
                            user.attributes["custom:company"]) ||
                            ""}
                        </p>
                      </div>
                      <div className="request-grade">
                        <h1
                          className="request-header p-0"
                          style={{
                            color: "#000",
                            fontFamily: "PT Serif",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: 700,
                            lineHeight: "130%",
                          }}
                        >
                          Address
                        </h1>
                        <p
                          className="text-secondary p-0 m-0"
                          style={{
                            color: "rgba(0, 0, 0, 0.63)",
                            fontFamily: "PT Serif",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: 700,
                            lineHeight: "130%",
                          }}
                        >
                          <p>
                            {userAddress.primaryAddress}
                            {userAddress.secondoryAddress}
                            {userAddress.city}
                          </p>
                          <p>
                            {`${userAddress.state}`},{" "}
                            {`Pin Code: ${userAddress.pinCode}`}
                          </p>
                        </p>
                      </div>
                      <div className="request-grade">
                        <h1
                          className="request-header p-0"
                          style={{
                            color: "#000",
                            fontFamily: "PT Serif",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: 700,
                            lineHeight: "130%",
                          }}
                        >
                          Mobile
                        </h1>
                        <p
                          className="text-secondary p-0 m-0"
                          style={{
                            color: "rgba(0, 0, 0, 0.63)",
                            fontFamily: "PT Serif",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: 700,
                            lineHeight: "130%",
                          }}
                        >
                          {hideCenterDigits(mobileNumber)}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="container mt-3">
        <div className="float-left ">
          <div>
            <button
              className="btn btn-primary m-1"
              style={{
                display: currentOrderPage === "Address" ? "inline" : "none",
              }}
              onClick={() => handleNextandPreviousButtons("previous")}
            >
              Previous
            </button>
          </div>
        </div>

        <div className="float-right">
          <div className="next-quantity-wrapper">
            <div className="ml-auto">
              <button
                className="btn btn-primary m-1"
                style={{
                  flexGrow: 1,
                }}
                onClick={
                  mobileNumber.length &&
                  quantity.length &&
                  selectedGrade &&
                  currentOrderPage === "Select Grade"
                    ? () => handleNextandPreviousButtons("popup")
                    : () => handleNextandPreviousButtons("next")
                }
              >
                {currentOrderPage === "Request Quote"
                  ? "Continue Shopping"
                  : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <VerifyDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onVerify={handleVerify}
        mobileNumber={mobileNumber}
      />
    </div>
  );
};
export default Orders;
