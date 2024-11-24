import React from "react";
import DetailsSection from "./DetailsSection";

const ProductDetails = () => {
  return (
    <div className=" container py-8">
      <div className=" flex items-center gap-1 text-body font-semibold">
        <span className=" text-text-base">Feature Product</span>
        <span>/</span>
        <span className=" text-purple-600"> New Arrival</span>
      </div>

      <div>
        <DetailsSection />
      </div>
    </div>
  );
};

export default ProductDetails;
