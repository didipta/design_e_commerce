import Arrow from "@/components/utils/Arrow";
import Heading from "@/components/utils/Heading";
import ProductCard from "@/components/utils/ProductCard";
import React from "react";
import Slider from "react-slick";

const RelatedProducts = () => {
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
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" container mt-[71px] relative pl-2 pb-16">
      <Heading title="" subtitle="Related Products" />
      <div className="slider-container mt-6  featured">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className=" px-2 ">
              <ProductCard
                img={product.img}
                title={product.title}
                price={product.price}
                className={""}
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

export default RelatedProducts;
