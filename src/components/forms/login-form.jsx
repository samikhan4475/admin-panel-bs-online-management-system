import React, { useState, useContext } from "react";
import { TextField } from "../common/reusable";
import { Form, Formik } from "formik";
import { initialValuesLogIn, validationSchemaLogIn } from "../common/schema";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ActiveContext } from "../../App";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const { setIsAuthenticated } = useContext(ActiveContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    setLoading(true);

    // Fake authentication (replace with API call later)
    if (values.email === "admin@gmail.com" && values.password === "1234") {
      const fakeToken = "dummy_token_123";
      const fakeUser = {
        name: "Admin User",
        email: values.email,
        role: "admin",
      };

      // save in localStorage
      localStorage.setItem("token", fakeToken);
      localStorage.setItem("user", JSON.stringify(fakeUser));
      setIsAuthenticated(true);
      toast.success("Login successful!");
      navigate("/dashboard");
    } else {
      toast.error("Invalid credentials!");
    }

    setLoading(false);
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "90vh" }}
    >
      <Row
        className="p-4 shadow-lg rounded-4"
        style={{ backgroundColor: "#f0f8ff", maxWidth: "400px", width: "100%" }}
      >
        <Col>
          <h2 className="text-center mb-4 text-primary">Admin Log In</h2>
          <Formik
            initialValues={initialValuesLogIn}
            validationSchema={validationSchemaLogIn}
            onSubmit={handleSubmit}
          >
            <Form>
              <TextField
                label="Email address"
                type="email"
                placeholder="Enter email"
                name="email"
              />
              <TextField
                label="Password"
                type="password"
                placeholder="Password"
                name="password"
              />
              <Button
                variant="primary"
                className="w-100 mt-3 d-flex justify-content-center align-items-center"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner
                      animation="border"
                      size="sm"
                      role="status"
                      className="me-2"
                    />
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </Form>
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export { LoginForm };
