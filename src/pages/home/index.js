import React from "react";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import img from "../../img";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <DefaultLayout>
          <h1>Home</h1>
        </DefaultLayout>
        <img className="img_home" src={img.logo1} />
      </div>
    </>
  );
};

export default Home;
