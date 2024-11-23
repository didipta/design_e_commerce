import Image from "next/image";
import React from "react";
import Button from "../utils/Button";

const Hero = () => {
  return (
    <div className=" relative h-[500px]">
      <Image
        src="/images/hero.jpg"
        alt="hero"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-[500px] object-cover object-center"
      />
      <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center gap-6 px-2">
        <div className=" space-y-2">
          <h1 className="md:text-h1 text-h4 text-white font-semibold">
            Elevate Your Everyday Style
          </h1>
          <p className="md:text-body text-caption text-text-light">
            Discover the Latest Trends in Sustainable Fashion
          </p>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Hero;
