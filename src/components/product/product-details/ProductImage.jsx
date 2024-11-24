import Arrow from "@/components/utils/Arrow";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";

const ProductImage = () => {
  const [currentImage, setCurrentImage] = useState(
    "/images/product-img-13.png"
  );
  const images = [
    {
      id: 1,
      src: "/images/product-img-13.png",
    },
    {
      id: 2,
      src: "/images/product-img-14 (1).png",
    },
    {
      id: 3,
      src: "/images/product-img-14 (2).png",
    },
    {
      id: 4,
      src: "/images/product-img-14 (3).png",
    },
    {
      id: 5,
      src: "/images/product-img-17.png",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow arrowside={"right"} />,
    prevArrow: <Arrow arrowside={"left"} />,
  };
  return (
    <div>
      <Slider {...settings} className="w-full h-[519px] productImage">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="w-full h-[519px] overflow-hidden bg-primary-50 pt-7 relative"
          >
            <Image
              src={currentImage}
              alt="product"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-contain object-center"
            />
            <div className="absolute bottom-10 right-5 w-12 h-8 text-caption rounded-full grid justify-center items-center bg-primary-100 z-[1000] lg:hidden">
              {index + 1}/{images.length}
            </div>
          </div>
        ))}
      </Slider>
      <div className="lg:flex justify-center gap-4 mt-4 hidden">
        {images.map((image) => (
          <div
            key={image.id}
            className="w-36 h-36 rounded-md overflow-hidden cursor-pointer bg-primary-100"
            onClick={() => setCurrentImage(image.src)}
          >
            <Image
              src={image.src}
              alt="product"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-contain object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
