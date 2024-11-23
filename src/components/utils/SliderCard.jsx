import Image from "next/image";
import React from "react";
import Button from "./Button";

const SliderCard = ({ action, image, title }) => {
  return (
    <div className=" grid md:grid-cols-2 grid-cols-1 justify-between items-center pb-10">
      <div className={`relative h-[566px] ${action && "order-1"} `}>
        <div className="absolute bottom-0 w-full h-[481px] bg-[#EEECFB] -z-50"></div>
        <Image
          src={image}
          alt="slider1"
          width={0}
          height={0}
          sizes="100vw"
          className="max-w-[468px] w-full h-[566px] z-50 mx-auto"
        />
      </div>
      <div className={`p-10 space-y-6 grid ${action && "md:justify-end"} `}>
        <h1 className="lg:text-h1 md:text-h2 text-h3 font-semibold text-text-dark">
          {title}
        </h1>
        <Button />
      </div>
    </div>
  );
};

export default SliderCard;
