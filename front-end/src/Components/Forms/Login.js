import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { motion } from "framer-motion";

import { Formik, Form as FORM, Field } from "formik";
import * as Yup from "yup";

import { login } from "../../store/authSlice";

import { IoEyeOutline, IoEyeOffOutline, IoAlertCircle } from "react-icons/io5";
import "./styles.scss";
import { closeModal, openModal } from "../../store/modalSlice";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

// Signup Validations
const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please Enter Your Email!"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please Enter Your Password!"),
});

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  return (
    <motion.div
      className="register__form"
      variants={animations}
      initial="initial"
      animate="animate"
      transition={{ ease: "easeOut", duration: 1.5 }}
    >
      <div className="text-center mb-5">
        <p className="text-dark">Welcome back!</p>
        <h3 className="text-dark mb-3">Sign in to your account</h3>
        <div className="d-flex justify-content-center">
          <span className="text-muted">Don't have an account?</span>
          <a
            className="ms-2 fw-bold border-text"
            href="#!"
            onClick={() => dispatch(openModal("Register"))}
          >
            Sign Up
          </a>
        </div>

        <small className="d-block mt-3 mb-2 text-start">
          Login with demo account
        </small>
        <div className="alert alert-info d-flex align-items-center fs-md">
          <IoAlertCircle className="fs-xl me-3" />

          <div>
            <strong>Email: </strong> kate@gmail.com
            <strong> Password: </strong> kfejk@*_
          </div>
        </div>
      </div>
      {/* form fields */}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          // console.log(values);
          dispatch(login(values));
          dispatch(closeModal());
        }}
      >
        {({ errors, touched }) => (
          <FORM>
            <div className="px-4">
              {/* Email field */}
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Field
                  className={`form-control ${
                    errors.email ? "is-invalid" : null
                  }`}
                  name="email"
                />
                {errors.email && touched.email ? (
                  <div className="invalid-feedback">{errors.email}</div>
                ) : null}
              </Form.Group>
              {/* password field */}
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <div className="d-flex align-items-center justify-content-center position-relative">
                  <Field
                    className={`form-control ${
                      errors.password
                        ? "is-invalid position-absolute bottom-0"
                        : null
                    }`}
                    name="password"
                    type={!showPassword ? "password" : "text"}
                  />
                  {errors.password && touched.password ? (
                    <div className="invalid-feedback">{errors.password}</div>
                  ) : null}
                  <a
                    href="#!"
                    className="eye_icon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {!showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                  </a>
                </div>
              </Form.Group>
              <div className="text-center mt-5 border-top">
                <button
                  type="submit"
                  className="btn-primary w-100 text-primary text-capitalize fw-bold py-3"
                >
                  Sign In
                </button>
              </div>
            </div>
          </FORM>
        )}
      </Formik>
    </motion.div>
  );
}

export default Login;
