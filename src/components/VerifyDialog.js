import React, { useState } from 'react';
import './VerifyDialog.css'; 

const VerifyDialog = ({ isOpen, onClose, onVerify, handleNextandPreviousButtons }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

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
    const otpValue = otp.join('');
    onVerify(otpValue);
    handleNextandPreviousButtons("next")
    onClose();
  };

  return isOpen ? (
    <div className="verify-dialog">
      <div className="verify-dialog-content">
        <h2>OTP VERIFICATION</h2>
        <p>Enter the verification code we just sent to your number</p>
        <div className="otp-input-container">
          {otp.map((digit, index) => (
            <input
            className='otp-input'
              type="text"
              id={`otp-input-${index}`}
              key={index}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              maxLength="1"
            />
          ))}
        </div>
        <p>Didn't receive the code? <a href="" className="resend-link">Resend</a></p>
        <div className="dialog-buttons">
          <button className="verify-button" onClick={handleVerify}>Verify</button>
        </div>
      </div>
    </div>
  ) : null;
};

export default VerifyDialog;
