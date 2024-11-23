import React from "react";
import Button from "../utils/Button";
import Image from "next/image";

const Banner = () => {
  return (
    <div className=" container flex items-center justify-between bg-[#EEECFB] my-10">
      <div className=" space-y-4 p-16">
        <span className="text-primary-600 Pacifico">Big Deal</span>
        <p className="text-h1 text-text-dark font-semibold">
          <span className=" text-purple-600">30%</span> Off for New Customers
        </p>
        <Button />
      </div>
      <div className=" pr-20 pt-3">
        <Image
          src="/images/product-img-10.png"
          alt="banner"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Banner;
