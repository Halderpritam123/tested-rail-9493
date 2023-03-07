import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input,Box,Alert,Button } from '@chakra-ui/react';

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../context/UserAuthContext";

const PhoneSignUp = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      navigate("/login_page");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
       <Box h={154}>
        {/* Top empty space */}
     </Box> 
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Phone Auth</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <form className="mb-3" controlId="formBasicEmail">
            <PhoneInput
              defaultCountry="IN"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
            />
            <div id="recaptcha-container"></div>
          </form>
          <div className="button-right">
            <Link to="/login">
              <Button variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="primary">
              Send Otp
            </Button>
          </div>
        </form>

        <form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
          <form className="mb-3" controlId="formBasicOtp">
            <Input
              type="otp"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
            />
          </form>
          <div className="button-right">
            <Link to="/login">
              <Button variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="primary">
              Verify
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PhoneSignUp;