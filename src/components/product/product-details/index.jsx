import React from "react";
import DetailsSection from "./DetailsSection";
import RelatedProducts from "./RelatedProducts";
import SectionTwo from "./ReviewAndRating";

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
        <SectionTwo />
        <RelatedProducts />
      </div>
    </div>
  );
};

export default ProductDetails;
