import React from "react";
import Slider from "react-slick";
import {
  bannerimg1,
  bannerimg2,
  bannerimg3,
  bannerimg4,
  bannerimg5,
  bannerimg6,
} from "../assets";

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
    <div className="w-full overflow-hidden">
      <div className="w-full h-full relative">
        <Slider {...settings}>
          <div>
            <img src={bannerimg1} alt="bannerImg1" />
          </div>
          <div>
            <img src={bannerimg2} alt="bannerImg2" />
          </div>
          <div>
            <img src={bannerimg3} alt="bannerImg3" />
          </div>
          <div>
            <img src={bannerimg4} alt="bannerImg4" />
          </div>
          <div>
            <img src={bannerimg5} alt="bannerImg5" />
          </div>
          <div>
            <img src={bannerimg6} alt="bannerImg6" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Banner;
