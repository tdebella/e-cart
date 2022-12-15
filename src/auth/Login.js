import React, { useState, useRef } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { motion } from "framer-motion";


//In react-router-dom v6 useHistory is replaced by useNavigate & history remains intact with router ('/), no need of push() method. We use useNavigation or useHistory in order to redirect to the dashboard using react router

//Create Signup cmp functionality
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const login = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      history("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
    >
      <Card
        className="mt-5"
        style={{
          marginLeft: 400,
          maxWidth: 400,
          backgroundColor: "goldenrod",
          color: "white",
        }}
      >
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>{" "}
            <br />
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>{" "}
            <br /> <br />
            <Button
              disabled={loading}
              className="w-100"
              type="submit"
              style={{ backgroundColor: "white", color: "black" }}
            >
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password" style={{ color: "black" }}>
              Forgot Password?
            </Link>
          </div>
        </Card.Body>
      </Card>{" "}
      <br />
      <div className="w-100 text-center mb-3">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </motion.div>
  );
};

export default Login;
