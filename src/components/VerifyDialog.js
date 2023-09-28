import React, { useState } from "react";
import "./VerifyDialog.css";

const VerifyDialog = ({ isOpen, onClose, onVerify, mobileNumber }) => {
  function hideCenterDigits(inputNumber) {
    if (inputNumber.length !== 12) {
      return "Invalid input";
    }

    const firstPart = inputNumber.slice(0, 3);
    const hidePart = "******";
    const lastPart = inputNumber.slice(9);

    return firstPart + hidePart + lastPart;
  }

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleOtpChange = (index, value) => {
    if (!isNaN(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value.length === 1 && index < 5) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleVerify = () => {
    const otpValue = otp && otp.join("");
    onVerify(otpValue);
    handleReset();
    onClose();
  };

  const handleReset = () => {
    setOtp(["", "", "", "", "", ""]);
  };

  return isOpen ? (
    <div className="verify-dialog">
      <div className="verify-dialog-content">
        <h2
          style={{
            fontFamily: "serif",
            color: "#7C8691",
            fontSize: "22px",
            fontWeight: "bold",
            paddingBottom: "20px",
          }}
        >
          OTP VERIFICATION
        </h2>
        <p
          style={{
            fontFamily: "serif",
            color: "#7C8691",
            fontSize: "22px",
            paddingBottom: "20px",
          }}
        >
          Enter the verification code we just sent to your number <br />
          {hideCenterDigits(mobileNumber)}
        </p>
        <div className="otp-input-container">
          {otp &&
            otp?.map((digit, index) => (
              <input
                className="otp-input"
                type="text"
                id={`otp-input-${index}`}
                key={index}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                maxLength="1"
              />
            ))}
        </div>
        <p
          style={{
            fontFamily: "serif",
            color: "#7C8691",
            fontSize: "22px",
            paddingTop: "20px",
          }}
        >
          Didn't receive the code?{" "}
          <a href="" className="resend-link">
            Resend
          </a>
        </p>
        <div className="dialog-buttons">
          <button
            style={{
              fontFamily: "serif",
            }}
            className="verify-button"
            onClick={handleVerify}
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default VerifyDialog;
