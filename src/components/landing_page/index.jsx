import React from "react";
import Hero from "./Hero";
import Option from "./Option";
import FeatureProduct from "./FeatureProduct";
import BigDeal from "./BigDeal";
import Sliders from "./Slider";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Option />
      <FeatureProduct />
      <Sliders/>
      <BigDeal />
    </div>
  );
};

export default LandingPage;
