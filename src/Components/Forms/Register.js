import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { motion } from "framer-motion";

import { register } from "../../store/authSlice";

import { Formik, Form as FORM, Field } from "formik";
import * as Yup from "yup";

import "./styles.scss";
import { closeModal, openModal } from "../../store/modalSlice";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

// Signup Validations
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please Enter Your First Name!"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please Enter Your Last Name!"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please Enter Your Email!"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please Enter Your Password!"),
});

function Register() {
  const [showPassword, setshowPassword] = useState(false);
  const dispatch = useDispatch();

  return (
    <motion.div
      className="register__form"
      variants={animations}
      initial="initial"
      animate="animate"
      transition={{ ease: "easeOut", duration: 1.5 }}
    >
      <div className="text-center mb-3">
        <h3 className="text-dark">Create an account</h3>
        <div className="d-flex justify-content-center">
          <span className="text-muted">Already have an account?</span>
          <a
            className="ms-2 fw-bold border-text"
            href="#!"
            onClick={() => dispatch(openModal("Login"))}
          >
            Sign In
          </a>
        </div>
      </div>
      {/* form fields */}
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          dispatch(register(values));
          dispatch(closeModal());
        }}
      >
        {({ errors, touched }) => (
          <FORM>
            <div className="px-4">
              {/* firstName field */}
              <Form.Group className="mb-3">
                <Form.Label>first Name</Form.Label>
                <Field
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : null
                  }`}
                  name="firstName"
                />
                {errors.firstName && touched.firstName ? (
                  <div className="invalid-feedback">{errors.firstName}</div>
                ) : null}
              </Form.Group>
              {/* lastName field */}
              <Form.Group className="mb-3">
                <Form.Label>last Name</Form.Label>
                <Field
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : null
                  }`}
                  name="lastName"
                />
                {errors.lastName && touched.lastName ? (
                  <div className="invalid-feedback">{errors.lastName}</div>
                ) : null}
              </Form.Group>
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
                    onClick={() => setshowPassword(!showPassword)}
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
                  Create an account
                </button>
              </div>
            </div>
          </FORM>
        )}
      </Formik>
    </motion.div>
  );
}

export default Register;
