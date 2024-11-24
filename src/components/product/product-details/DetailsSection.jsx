import React from "react";
import ProductImage from "./ProductImage";

const DetailsSection = () => {
  return (
    <div className=" grid grid-cols-12 justify-between items-start gap-4">
      <div className=" lg:col-span-6 col-span-12">
        <ProductImage />
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default DetailsSection;
