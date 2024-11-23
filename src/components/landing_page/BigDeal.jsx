import React from "react";
import ProductCard from "../utils/ProductCard";
import Slider from "react-slick";
import Arrow from "../utils/Arrow";
import Heading from "../utils/Heading";

const BigDeal = () => {
  const products = [
    {
      img: "/images/product-img-1.png",
      title: "Cotton T-shirt",
      price: "1,500",
    },
    {
      img: "/images/product-img-2.png",
      title: "Cotton T-shirt",
      price: "1,500",
    },
    {
      img: "/images/product-img-3.png",
      title: "Cotton T-shirt",
      price: "1,500",
    },
    {
      img: "/images/product-img-4.png",
      title: "Cotton T-shirt",
      price: "1,500",
    },
    {
      img: "/images/product-img-6.png",
      title: "Cotton T-shirt",
      price: "1,500",
    },
    {
      img: "/images/product-img-7.png",
      title: "Cotton T-shirt",
      price: "1,500",
    },
    {
      img: "/images/product-img-5.png",
      title: "Cotton T-shirt",
      price: "1,500",
    },
    {
      img: "/images/product-img-8.png",
      title: "Cotton T-shirt",
      price: "1,500",
    },
    {
      img: "/images/product-img-2.png",
      title: "Cotton T-shirt",
      price: "1,500",
    },
    {
      img: "/images/product-img-1.png",
      title: "Cotton T-shirt",
      price: "1,500",
    },
  ];
  const settings = {
    dots: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    rows: 2,
    initialSlide: 0,
    nextArrow: <Arrow arrowside={"right"} />,
    prevArrow: <Arrow arrowside={"left"} />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };

  return (
    <div className=" container mt-[71px] relative pl-2 pb-16">
      <Heading title="SUMMER" subtitle="Big Deal" />
      <div className="slider-container mt-6  featured">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className=" m-2 ">
              <ProductCard
                img={product.img}
                title={product.title}
                price={product.price}
                className={"bg-white"}
                off={true}
                rating={true}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className=" text-center mt-6">
        <button className="w-[142px] h-[48px] rounded-lg bg-primary-500 text-text-light font-semibold">
          See More
        </button>
      </div>
    </div>
  );
};

export default BigDeal;
