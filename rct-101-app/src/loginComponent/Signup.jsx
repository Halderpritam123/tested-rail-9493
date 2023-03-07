import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert,Box,Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/login");
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
        <h2 className="mb-3">Firebase Auth Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          {/* <Form.Group className="mb-3" controlId="formBasicEmail"> */}
            <Input
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          {/* </Form.Group> */}
{/* 
          <Form.Group className="mb-3" controlId="formBasicPassword"> */}
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          {/* </Form.Group> */}

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
};

export default Signup;
