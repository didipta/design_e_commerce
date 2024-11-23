import React from "react";
import SliderCard from "../utils/SliderCard";
import Slider from "react-slick";

const Sliders = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
  return (
    <div className="container my-10">
     <Slider {...settings}>
     <SliderCard
        image="/images/product-img-9.png"
        title="MEN COLLECTION"
        action={false}
      />
      <SliderCard
        image="/images/product-img-11.png"
        title="WOMEN COLLECTION"
        action={true}
      />
      <SliderCard
        image="/images/product-img-12.png"
        title="KID COLLECTION"
        action={false}
      />
      </Slider>
    </div>
  );
};

export default Sliders;
