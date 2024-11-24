import React from "react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

const DetailsSection = () => {
  return (
    <div className=" grid grid-cols-12 justify-between items-start gap-6">
      <div className=" lg:col-span-6 col-span-12">
        <ProductImage />
      </div>
      <div className=" lg:col-span-6 col-span-12">
        <ProductInfo />
      </div>
    </div>
  );
};

export default DetailsSection;
