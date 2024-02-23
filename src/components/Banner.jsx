import React from "react";
import Slider from "react-slick";

function Banner() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Biss_2023/BISS_GW/GWNEW/GWNEW2/GW_PC_1500x600._CB572878474_.jpg" />
      </div>
    </Slider>
  );
}

export default Banner;
