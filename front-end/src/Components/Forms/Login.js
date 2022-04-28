import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { useForm } from "react-hook-form";

import { login } from "../../store/authSlice";

function Login({ active, setActive }) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => dispatch(login(data));
  console.log(errors);

  return (
    <div className={`login ${active && "slide-up"}`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="center">
          <h2 className="form-title" onClick={() => setActive(!active)}>
            <span>or</span>Log in
          </h2>
          <div className="form-holder">
            <input
              type="email"
              className="input"
              placeholder="Email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            <input
              type="password"
              className="input"
              placeholder="Password"
              {...register("password", {
                required: true,
                min: 8,
                maxLength: 18,
              })}
            />
            {errors.password && "password is required"}
          </div>
          <button type="submit" className="submit-btn">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
