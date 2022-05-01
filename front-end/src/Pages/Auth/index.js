import React, { useState } from "react";
import { Login, Register } from "../../Components";
import Home from "../Home/Home";
import "./styles.scss";

//  navigate("/menu");

function Auth({ isLoggedIn }) {
  const [active, setActive] = useState(false);

  if (isLoggedIn) return <Home />;
  return (
    <div className="auth__container">
      <div className="form-container">
        {/* Register Form */}
        <Register active={active} setActive={setActive} />

        {/* Login Form */}
        <Login active={active} setActive={setActive} />
      </div>
    </div>
  );
}

export default Auth;
