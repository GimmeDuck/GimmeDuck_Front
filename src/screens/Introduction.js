import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/Introduction.css";

const Introduction = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  
  return (
    <>
    <div class="slider_div">
      <Slider {...settings}>
        <div>
          <img src="img/Introduction-1.png" />
        </div>
        <div>
          <img src="img/Introduction-2.png" />
        </div>
        <div>
          <img src="img/Introduction-3.png" />
        </div>
        <div>
          <img src="img/Introduction-4.png" />
        </div>
        <div>
          <img src="img/Introduction-5.png" />
        </div>
      </Slider>
    </div>
    <div id = "poster_div">
      <img src="img/poster.png" id = "poster_img"/>
    </div>
    </>
  );
};

export default Introduction;
