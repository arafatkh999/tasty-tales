import React from "react";
import hero from "../../../assets/hero.jpg";
import MovingText from 'react-moving-text'
import Chefs from "../Chefs/Chefs";
import Review from "../Review/Review";
import Status from "../Status/Status";


const Home = () => {
  return (
    <div className="container ">
      <div className="hero min-h-screen">
        <img src={hero} alt="" />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-semibold">Hello there</h1>
            <MovingText
              type="typewriter"
              dataText={[
               'Welcome to Tasty Tales'
              ]}
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="infinite"
              fillMode="none"
            >
            </MovingText>
          </div>
        </div>
      </div>
      <Chefs></Chefs>
      <Review></Review>
      <Status></Status>
    </div>
  );
};

export default Home;
