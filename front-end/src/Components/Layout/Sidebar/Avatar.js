import React from "react";
import { avatar } from "../../../constants/images";
import { RiLogoutCircleLine } from "react-icons/ri";
import { logout } from "../../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Avatar({ className }) {
  const {
    user: { name },
    isLoggedIn,
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth");
  };
  return (
    <div className={`avatar  ${className ? className : ""}`}>
      <div className="avatar__img ">
        <img className="zoom-hover" src={avatar} alt="user" />
      </div>

      {isLoggedIn && (
        <React.Fragment>
          <div className="text-center mt-3">
            <h6 className="avatar__name m-0">
              {name.firstname && name.lastname
                ? `${name.firstname} ${name.lastname}`
                : "Atef Gad"}
            </h6>
            <span className="avatar__title text-muted">I'm a cashier 🙂</span>
          </div>
          <button className="logoutBtn btn btn-link " onClick={handleLogout}>
            <RiLogoutCircleLine className="fs-3 fw-bold me-1" />
            <span className="text-muted">Logout</span>
          </button>
        </React.Fragment>
      )}
    </div>
  );
}

export default Avatar;
