import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { FiX } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import signin from "../assets/img/logo/white/Meyi-Logo_@2x.png";
import patter from "../assets/img/bg_pattern.svg";
import loader from "../assets/img/Progress-animation/Meyi_medium_animation.gif";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion, AnimatePresence } from "framer-motion";
import { BiLockAlt } from 'react-icons/bi';
import { BsFillEyeFill, BsFillEyeSlashFill,BsShieldCheck } from 'react-icons/bs'



const Login = ({ showSignin, setShowSignin }) => {
  const [signinInfo, setSigninInfo] = useState({
    userName: "",
    password: "",
  });
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    company: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    authCode: "",
  });
  const [forgotPasswordInfo, setForgotPasswordInfo] = useState({
    mobile: "",
    authCode: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showForgotPasswordAuth, setShowForgotPasswordAuth] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    handleModalContent("signup");
    resetUserInputs();
    setShowError(false);
    setErrorMessage("");
  }, [showSignin]);

  const resetUserInputs = () => {
    setSigninInfo({
      userName: "",
      password: "",
    });
    setSignupInfo({
      name: "",
      company: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      authCode: "",
    });
    setForgotPasswordInfo({
      authCode: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleUserInputs = (e, control) => {
    const { name, value } = e.target;
    if (control === "signin") {
      const userData = {
        ...signinInfo,
        [name]: value,
      };
      setSigninInfo(userData);
    } else if (control === "signup") {
      const userData = {
        ...signupInfo,
        [name]: value,
      };
      setSignupInfo(userData);
    } else {
      const userData = {
        ...forgotPasswordInfo,
        [name]: value,
      };
      setForgotPasswordInfo(userData);
    }
  };

  const [loginpassword, setLoginPassword] = useState(false)
  const [pasword, setpassword] = useState(false)
  const [conpasword, setConPasWord] = useState(false)
  const toggleloginBtn = () => {
    setLoginPassword(prevState => !prevState)
  }
  const toglepas = () => {
    setpassword(prevState => !prevState)
  }
  const togleconfirm = () => {
    setConPasWord(prevState => !prevState)
  }



  // const handleClickOutside = (e) => {
  //   if (e.target.className === "signin_contaner") {
  //     setShowSignin(false);
  //   }
  // };
  const handleModalContent = (currentSelectedContent) => {
    setShowError(false);
    if (currentSelectedContent === "signin") {
      setShowSignIn(true);
      setShowSignUp(false);
      setShowForgotPassword(false);
      setShowForgotPasswordAuth(false);
      setShowAuth(false);
    } else if (currentSelectedContent === "signup") {
      setShowSignIn(false);
      setShowSignUp(true);
      setShowForgotPassword(false);
      setShowForgotPasswordAuth(false);
      setShowAuth(false);
    } else if (currentSelectedContent === "auth") {
      setShowSignIn(false);
      setShowSignUp(false);
      setShowForgotPassword(false);
      setShowForgotPasswordAuth(false);
      setShowAuth(true);
    } else {
      setShowSignIn(false);
      setShowSignUp(false);
      setShowForgotPassword(true);
      setShowForgotPasswordAuth(false);
      setShowAuth(false);
    }
  };
  const validateSignUpFields = () => {
    const { name, password, confirmPassword, company, mobile } = signupInfo;
    const passwordPatteren = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#~><!%*?&])[A-Za-z\d@$#~><!%*?&]{8,}$/;
    if (name === "") {
      setErrorMessage("Name cannot be empty");
      return true;
    }
    else if (name.length < 3 || name.length > 30) {
      setErrorMessage("Name must be 3 to 30 Characters.");
      return true;
    } else if (company === "") {
      setErrorMessage("Company cannot be empty");
      return true;
    }
    else if (company.length < 3 || company.length > 30) {
      setErrorMessage("Company must be 3 to 30 Characters.");
      return true;
    } else if (isNaN(mobile) || (mobile.length > 0 && mobile.length < 12)) {
      setErrorMessage("Invalid Mobile number format");
      return true;
    } else if (password === "") {
      setErrorMessage("Password cannot be empty");
      return true;
    } else if (!passwordPatteren.test(password)) {
      if (password.length < 8 || password.length > 14) {
        setErrorMessage("Password length must be 8 to 14 characters");
        return true;
      }
      setErrorMessage("Invalid Password format");
      return true;
    } else if (confirmPassword === "") {
      setErrorMessage("Confirm password filed is required");
      return true;
    }
    else if (confirmPassword.length < 8 || confirmPassword.length > 14) {
      setErrorMessage("Confirm password must be 8 to 14 characters");
      return true;
    }
    else if (password !== confirmPassword) {
      setErrorMessage("Password and confirm password must be same");
      return true;
    } else {
      return false;
    }
  };
  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  const handleSignUp = (e) => {
    const { name, password, company, mobile } = signupInfo;
    const email = "svellaiy@gmail.com"
    e.preventDefault();
    const checkError = validateSignUpFields();
    if (checkError) {
      setShowError(true);
      return;
    }
    setShowError(false);
    setShowLoader(true);
    Auth.signUp({
      username: `+${mobile}`,
      password: password,
      attributes: {
        name,
        email,
        phone_number: `+${mobile}`,
        "custom:company": company,
      },
    })
      .then(() => {
        setShowLoader(false);
        handleModalContent("auth");
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setShowError(true);
        setShowLoader(false);
      });
  };

  const ConfirmSignUp = () => {
    const { mobile, authCode } = signupInfo;
    if (authCode === "") {
      setErrorMessage("Verification code is required");
      setShowError(true);
    } else {
      setShowError(false);
      setShowLoader(true);
      Auth.confirmSignUp(`+${mobile}`, authCode)
        .then(() => {
          setShowLoader(false);
          setSuccessMessage("User Created Successfully");
          setTimeout(() => {
            handleModalContent("signin");
            setSuccessMessage("");
            resetUserInputs();
          }, 500);
        })
        .catch((err) => {
          setErrorMessage(err.message);
          setShowError(true);
          setShowLoader(false);
        });
    }
  };
  const handleResendAuthCode = () => {
    const { mobile } = signupInfo;
    Auth.resendSignUp(`+${mobile}`)
      .then(() => {
        setSuccessMessage("Resent code");
        setTimeout(() => {
          setSuccessMessage("");
        }, 500);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setShowError(true);
      });
  };

  // Sign in user

  const handleSignIn = () => {
    const { userName, password } = signinInfo;
    if (userName === "") {
      setErrorMessage("Username cannot be empty");
      setShowError(true);
    }
    else if (password === "") {
      setErrorMessage("password cannot be empty");
      setShowError(true);
    }
    else if (password.length < 8 || password.length > 14) {
      setErrorMessage("Password must be 8 to 14 Characters");
      setShowError(true);
    }
    else {
      setShowError(false);
      setShowLoader(true);
      Auth.signIn(`+${userName}`, password)
        .then(() => {
          setShowLoader(false);
          setShowSignin(false);
          Auth.currentAuthenticatedUser()
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          setErrorMessage(err.message);
          setShowError(true);
          setShowLoader(false);
        });
    }
  };

  const handleForgotPassword = () => {
    const { mobile } = forgotPasswordInfo;
    if (isNaN(mobile) || (mobile.length > 0 && mobile.length < 12)) {
      setErrorMessage("Invalid Mobile number format");
      setShowError(true);
    } else {
      setShowError(false);
      // Send confirmation code to user's mobile number
      Auth.forgotPassword(`+${mobile}`)
        .then(() => setShowForgotPasswordAuth(true))
        .catch(() => setShowForgotPasswordAuth(false));
    }
  };
  const handleUpdatePassword = () => {
    const {
      mobile,
      authCode,
      newPassword,
      confirmPassword,
    } = forgotPasswordInfo;
    const passwordPatteren = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#~><!%*?&])[A-Za-z\d@$#~><!%*?&]{8,}$/;
    if (authCode === "") {
      setErrorMessage("Verification code is required");
      setShowError(true);
    } else if (!passwordPatteren.test(newPassword)) {
      if (newPassword.length < 8) {
        setErrorMessage("Password length must be atleast 8 characters");
        setShowError(true);
      } else {
        setErrorMessage("Invalid Password format");
        setShowError(true);
      }
    } else if (confirmPassword === "") {
      setErrorMessage("Confirm password filed is required");
      setShowError(true);
    } else if (newPassword !== confirmPassword) {
      setErrorMessage("New Password and confirm password must be same");
      setShowError(true);
    } else {
      setShowError(false);
      setShowLoader(true);
      // Collect confirmation code and new password, then
      Auth.forgotPasswordSubmit(`+${mobile}`, authCode, newPassword)
        .then((data) => {
          setShowLoader(false);
          handleModalContent("signin");
        })
        .catch((err) => {
          setErrorMessage(err.message);
          setShowError(true);
          setShowLoader(false);
        });
    }
  };
  const modalVarient = {
    hidden: {
      y: -1000,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "easeIn",
      },
    },
  };
  const logoVarient = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.3,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  return (
    <AnimatePresence onExitComplete={() => setShowSignIn(false)}>
      {showSignin && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="signin_contaner"
        // onClick={handleClickOutside}
        >
          <motion.div
            variants={modalVarient}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="signin_modal"
          >
            <div
              className="loader"
              style={{ display: `${showLoader ? "flex" : "none"}` }}
            >
              <img src={loader} alt="" />
            </div>
            <div className="close" onClick={() => setShowSignin(false)}>
              <FiX />
            </div>
            <div
              className="left_section"
              style={{ backgroundImage: `url(${patter})` }}
            >
              <motion.img
                variants={logoVarient}
                className="normal-logo"
                src={'https://cdn.dev.meyi.in/common/img/logo/Plant365.png'}
                alt="sign in img"
              />
            </div>
            <div className={`signin_section ${showSignIn ? "active" : ""}`}>
              <h3 className="heading">Login to Your Account</h3>
              <PhoneInput
                country="in"
                onlyCountries={["in"]}
                placeholder="Type your phone here"
                countryCodeEditable={false}

                value={signinInfo.userName}
                onChange={(phone) =>
                  setSigninInfo({ ...signinInfo, userName: phone })
                }
              /><br></br>



              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <span className="input-group-text">  <BiLockAlt /></span>
                </div>
                <input
                  name="password"
                  type={loginpassword ? "text" : "password"}
                  value={signinInfo.password}
                  className="input form-control password "
                  placeholder="Password"
                  required="true"
                  onChange={(e) => handleUserInputs(e, "signin")}
                />
                <div className="input-group-append">
                  <span className="input-group-text" onClick={toggleloginBtn}  >
                    {loginpassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                  </span>
                </div>
              </div>



              <div className="rememberme-section">
                <label className="para">
                  <input type="checkbox" /> Remember me?
                </label>
              </div>
              <div className={`error-container ${showError ? "" : "disable"}`}>
                {errorMessage}
              </div>
              <button className="signin_button" onClick={handleSignIn}>
                {successMessage ? successMessage : "Log in"}
              </button>
              <div className="social-login">

                <button
                  onClick={() => Auth.federatedSignIn({ provider: "Google" })}
                >
                  <FcGoogle /> Sign in with Google
                </button>
              </div>
              <p
                className="para forgot-password"
                onClick={() => handleModalContent("forgot-password")}
              >
                Forgot Password?
              </p>
              <h3 className="heading text-center">New Here?</h3>
              <p className="para">
                Sign up and discover a great amount of new opportunities
              </p>
              <button
                className="signin_button"
                onClick={() => handleModalContent("signup")}
              >
                Sign Up
              </button>
              <p className="para">
                {" "}
                By signing up, you agree to our Terms of Use and Privacy Policy.
              </p>
            </div>
            <div className={`signup_section ${showSignUp ? "active" : ""}`}>
              <h3 className="heading">Sign Up To Plant365</h3>
              <div className="divider mx-auto mb-1 mt-1"></div>
              <input
                type="text"
                name="name"
                value={signupInfo.name}
                placeholder="Name"
                className="email"
                onChange={(e) => handleUserInputs(e, "signup")}
              />
              <input
                type="text"
                name="company"
                value={signupInfo.company}
                placeholder="Company"
                className="email"
                onChange={(e) => handleUserInputs(e, "signup")}
              />

              <PhoneInput
                onlyCountries={["in"]}
                country="in"
                placeholder="Type your phone here"
                countryCodeEditable={false}
                value={signupInfo.mobile}
                onChange={(phone) =>
                  setSignupInfo({ ...signupInfo, mobile: phone })
                }
              />

              <div class="input-group mb-21">
                <div class="input-group-prepend">
                  <span class="input-group-text">  <BiLockAlt /></span>
                </div>

                <input
                  type={pasword ? "text" : "password"}
                  name="password"
                  value={signupInfo.password}
                  placeholder="Password"

                  className="input form-control password"
                  onChange={(e) => handleUserInputs(e, "signup")}



                />
                <div className="input-group-append">
                  <span className="input-group-text" onClick={toglepas}>
                    {pasword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                  </span>
                </div>
              </div>

              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <span className="input-group-text">  <BiLockAlt /></span>
                </div>

                <input
                  type={conpasword ? "text" : "password"}
                  name="confirmPassword"
                  value={signupInfo.confirmPassword}
                  placeholder="Confirm Password"

                  className="input form-control password "
                  onChange={(e) => handleUserInputs(e, "signup")}

                />
                <div className="input-group-append">
                  <span className="input-group-text" onClick={togleconfirm}>
                    {conpasword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                  </span>
                </div>
              </div>


              <div className={`error-container ${showError ? "" : "disable"}`}>
                {errorMessage}
              </div>
              <button className="signin_button" onClick={handleSignUp}>
                Sign Up
              </button>
              <p className="para mb-3">
                {" "}
                By signing up, you agree to our Terms of Use and Privacy Policy.
              </p>
              <p className="para">
                {" "}
                Already have an account?{" "}
                <span
                  className="link"
                  onClick={() => handleModalContent("signin")}
                >
                  Sign in
                </span>
              </p>
            </div>
            <div className={`auth_section ${showAuth ? "active" : ""}`}>
              <p className="para mb-3">
                {signupInfo.mobile
                  ? `We have sent a code by sms to +${signupInfo.mobile
                    .slice(-4)
                    .padStart(12, "*")}. Enter it below to
     confirm your account.`
                  : `We have sent a code by email to ${signupInfo.email}. Enter it below to confirm your account.`}
              </p>
              <input
                type="password"
                name="authCode"
                value={signupInfo.authCode}
                placeholder="Verification Code"
                className="email"
                onChange={(e) => handleUserInputs(e, "signup")}
              />
              <div className={`error-container ${showError ? "" : "disable"}`}>
                {errorMessage}
              </div>
              <button className="signin_button mb-3" onClick={ConfirmSignUp}>
                {successMessage ? successMessage : "Confirm Account"}
              </button>

              <p className="para">
                {" "}
                Didn't receive a code?
                <span className="link" onClick={handleResendAuthCode}>
                  {" "}
                  Resend it
                </span>
              </p>
            </div>
            <div
              className={`forgot_section ${showForgotPassword ? "active" : ""}`}
            >
              <h3 className="heading">Forgot Password</h3>
              <div className="divider mx-auto mb-1 mt-1"></div>
              {showForgotPasswordAuth ? (
                <div className="new-password-auth">
                   <div className="input-group mb-2">
                   <div className="input-group-prepend">
                      <span className="input-group-text">  <BsShieldCheck /></span>
                    </div>
                  <input
                    type="text"
                    name="authCode"
                    value={forgotPasswordInfo.authCode}
                    placeholder="Verification Code"
                    className="input form-control password"
                    autocomplete="off"
                    onChange={(e) => handleUserInputs(e, "forgot-password")}
                  />
                  </div>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <span className="input-group-text">  <BiLockAlt /></span>
                    </div>
                    <input
                      type={showNewPassword ? "text" : "password"}
                      name="newPassword"
                      value={forgotPasswordInfo.newPassword}
                      placeholder="New Password"
                      className="input form-control password"
                      required="true"
                      autocomplete="off"
                      onChange={(e) => handleUserInputs(e, "forgot-password")}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text" style={{ cursor: "pointer" }} onMouseDown={(e) => handleMouseDown(e)} onClick={() => setShowNewPassword(!showNewPassword)}>
                        {showNewPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                      </span>
                    </div>
                  </div>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <span className="input-group-text">  <BiLockAlt /></span>
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={forgotPasswordInfo.confirmPassword}
                      placeholder="Confirm Password"
                      className="input form-control password"
                      autocomplete="off"
                      onChange={(e) => handleUserInputs(e, "forgot-password")}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text" style={{ cursor: "pointer" }} onMouseDown={(e) => handleMouseDown(e)} onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                        {showConfirmPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`error-container ${showError ? "" : "disable"}`}
                  >
                    {errorMessage}
                  </div>
                  <button
                    className="signin_button mb-3"
                    onClick={handleUpdatePassword}
                  >
                    Update Password
                  </button>
                </div>
              ) : (
                <div>
                  <p className="para mb-3">
                    {" "}
                    Enter your mobile number and we'll send you a verification
                    code to reset your password.
                  </p>
                  <PhoneInput
                    country="in"
                    onlyCountries={["in"]}
                    placeholder="Type your phone here"
                    countryCodeEditable={false}
                    value={forgotPasswordInfo.mobile}
                    onChange={(phone) =>
                      setForgotPasswordInfo({
                        ...forgotPasswordInfo,
                        mobile: phone,
                      })
                    }
                  />
                  <div
                    className={`error-container ${showError ? "" : "disable"}`}
                  >
                    {errorMessage}
                  </div>
                  <button
                    className="signin_button mb-3"
                    onClick={handleForgotPassword}
                  >
                    Submit
                  </button>
                </div>
              )}

              <p className="para">
                {" "}
                Already have an account?{" "}
                <span
                  className="link"
                  onClick={() => handleModalContent("signin")}
                >
                  Sign in
                </span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Login;
