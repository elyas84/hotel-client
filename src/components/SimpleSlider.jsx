import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './simpleSlider.css'
export default function SimpleSlider({ array }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {array.map((arr, i) => (
          <div className="banner-container" key={i}>
            <div className="banner-image-container">
              <img src={arr.image} alt="" />
            </div>
            <h1>{arr.title}</h1>
          </div>
        ))}
      </Slider>
    </div>
  );
}
