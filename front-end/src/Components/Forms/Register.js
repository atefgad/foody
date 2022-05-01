import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { register as newRegister } from "../../store/authSlice";

import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

function Register({ active, setActive }) {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(newRegister(data));
    navigate("/menu");
  };

  return (
    <div className={`signup ${!active && "slide-up"}`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="form-title" onClick={() => setActive(!active)}>
          <span>or</span>Sign up
        </h2>
        <div className="form-holder">
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                className="input"
                placeholder="First Name"
                {...register("firstName", {
                  required: true,
                  min: 3,
                  maxLength: 10,
                })}
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                className="input"
                placeholder="Last Name"
                {...register("lastName", {
                  required: true,
                  min: 3,
                  maxLength: 10,
                })}
              />
            </div>
          </div>
          <input
            type="email"
            className="input"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <div className="position-relative">
            <input
              type={!showPassword ? "password" : "text"}
              className="input"
              placeholder="Password"
              {...register("password", {
                required: true,
                min: 8,
                maxLength: 18,
              })}
            />
            <a
              href="#!"
              className="eye_icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
            </a>
          </div>
        </div>
        <button className="submit-btn">Sign up</button>
      </form>
    </div>
  );
}

export default Register;
