import React, { useState, useEffect, useRef } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useForm } from 'react-hook-form';
import "./styles.css"

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    company: "",
    type: "Supplier",
    email: "",
    number: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const handleUserInputs = (e) => {
    const { value, name } = e.target;
    const getUserAddress = {
      ...contactInfo,
      [name]: value,
    };
    setContactInfo(getUserAddress);
  };

  useEffect(() => {
    loadCaptchaEnginge(6, "#d6dbd9");
  }, []);




  const onSubmit = async(data) => {
    console.log(process.env.REACT_APP_BASE_URL, process.env.REACT_APP_STAGE);
    const pushQuotesData = await fetch(
      `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_STAGE}/contact_us`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((json) => setShowSuccess(true))
      .catch((error) => {
        setShowError(true);
        setErrorMessage("Something went wrong : " + error.message);
      });
    reset();
  }
  const { register, handleSubmit, formState: { errors },reset,trigger} = useForm();
  return (
    <div className="page-section-contact page-content top-header">
      <div className="container">
        <div className="text-center wow fadeInUp">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="title-section">Contact us</h2>
            <div className="divider mx-auto"></div>
            <div className="row form text-left">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="fname">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    onChange={handleUserInputs}
                    className={`form-control ${errors.firstName && "invalid"}`}
                    id="fname"
                    {...register("firstName", { required: "FirstName is Required", minLength: { value: 3, message: "Minimum 3 characters is required" }, maxLength: { value: 30, message: "Maximum 30 characters required" } })}
                    onKeyUp={()=>{
                      trigger("firstName");
                    }}
                  />
                  {errors.firstName && (<small className="text-danger">{errors.firstName.message}</small>)}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="lname">Last Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.lastName && "invalid"}`}
                    id="lname"
                    {...register("lastName", { required: "LastName is Required", minLength: { value: 3, message: "Minimum 3 characters required" }, maxLength: { value: 30, message: "Maximum 30 characters required" } })}
                    onKeyUp={()=>{
                      trigger("lastName");
                    }}
                  />
                  {errors.lastName && (<small className="text-danger">{errors.lastName.message}</small>)}
                </div>
              </div>
              <div className="col-md-8">
                <div className="form-group">
                  <label for="company">Company</label>
                  <input
                    type="text"
                    className={`form-control ${errors.company && "invalid"}`}
                    id="company"
                    {...register("company", { required: "Company is Required", minLength: { value: 3, message: "Minimum 3 characters required" }, maxLength: { value: 30, message: "Maximum 30 characters required" } })}
                    onKeyUp={()=>{
                      trigger("company");
                    }}
                  />
                  {errors.company && (<small className="text-danger">{errors.company.message}</small>)}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label for="type">Type</label>
                  <select
                    className="form-control"
                    id="type"
                    {...register("type")}
                  >
                    <option value="Vendor">Supplier</option>
                    <option value="Customer">Buyer</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="col-md-8">
                <div className="form-group">
                  <label for="email">Email Address</label>
                  <input
                    type="text"
                    className={`form-control ${errors.email && "invalid"}`}
                    id="email"
                    {...register("email", {
                      required: "Email is Required",
                      pattern: {
                        value: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                        message: "Invalid Email",
                      }, minLength: { value: 3, message: "Minimum 3 characters required" }, maxLength: { value: 30, message: "Maximum 30 characters required" }
                    })}
                    onKeyUp={()=>{
                      trigger("email");
                    }}
                  />
                  {errors.email && (<small className="text-danger">{errors.email.message}</small>)}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label for="number">Contact Number</label>
                  <input
                    type="text"
                    className={`form-control ${errors.number && "invalid"}`}
                    id="number"
                    {...register("number", {
                      required: "Contact Number is Required", pattern: {
                        value: /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/,
                        message: "Invalid Phone No",
                      },
                    })}
                    onKeyUp={()=>{
                      trigger("number");
                    }}
                  />
                  {errors.number && (<small className="text-danger">{errors.number.message}</small>)}
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label for="message">Message</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="message"
                    {...register("message", { required: "Message is Required", minLength: { value: 3, message: "Minimum 3 characters required" }, maxLength: { value: 30, message: "Maximum 30 characters required" } })}
                  />
                  {errors.message && (<small className="text-danger">{errors.message.message}</small>)}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="captcha">Enter Captcha</label>
                  <input
                    type="text"
                    className={`form-control ${errors.captcha && "invalid"}`}
                    id="captcha"
                    {...register("captcha", { required: "Captcha is Required", })}
                    onKeyUp={()=>{
                      trigger("captcha");
                    }}
                  />
                  {errors.captcha && (<small className="text-danger">{errors.captcha.message}</small>)}
                </div>
              </div>
              <div className="col-md-6 captcha">
                <LoadCanvasTemplate reloadText="⟳" />
              </div>
              <p className="regular-text">
                By clicking on ‘Submit’ I agree to be contacted at the number
                provided with more information or offers about Plant365.
              </p>
            </div>
            <button className="btn btn-small btn-primary" >
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
