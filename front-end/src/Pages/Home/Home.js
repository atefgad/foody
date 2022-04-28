import React from "react";
import { useNavigate } from "react-router-dom";
import AppContainer from "../../App/AppContainer";
import Auth from "../Auth";

function Home({ isLoggedIn }) {
  // let navigate = useNavigate();
  // if (!isLoggedIn) {
  //   return <Auth />;
  // }
  return (
    <div className="app__container bg-secondary">
      <AppContainer />
    </div>
  );
}

export default Home;
