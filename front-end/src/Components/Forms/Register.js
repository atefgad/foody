import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { register as newRegister } from "../../store/authSlice";

import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

function Register({ active, setActive }) {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => dispatch(newRegister(data));
  console.log(errors);

  return (
    <div className={`signup ${!active && "slide-up"}`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="form-title" onClick={() => setActive(!active)}>
          <span>or</span>Sign up
        </h2>
        <div className="form-holder">
          <input
            type="text"
            className="input"
            placeholder="Name"
            {...register("name", {
              required: true,
              min: 3,
              maxLength: 18,
            })}
          />
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
