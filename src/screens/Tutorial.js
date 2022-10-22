import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/Tutorial.css";

const Tutorial = () => {
  const [isHover1, setIsHover1] = useState(0);
  const [isHover2, setIsHover2] = useState(0);
  const [isHover3, setIsHover3] = useState(0);
  const [isHover4, setIsHover4] = useState(0);
  const [isHover5, setIsHover5] = useState(0);
  const [isHover6, setIsHover6] = useState(0);
  const [isHover7, setIsHover7] = useState(0);
  const [isHover8, setIsHover8] = useState(0);
  const [isHover9, setIsHover9] = useState(0);
  const [isHover10, setIsHover10] = useState(0);
  const [isHover11, setIsHover11] = useState(0);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      class="Tutorial_slider_div"
      style={{ backgroundColor: "black", color: "white" }}
    >
      <Slider {...settings}>
        <div
          className="Tutorial_container"
          onMouseOver={() => setIsHover1(100)}
          onMouseOut={() => setIsHover1(0)}
        >
          <img src="img/tut_1_.png" class="Tutorial_page_img" alt=""/>
          <div className="hover">
            <img src="img/tut_1.png" class = "Tutorial_hover_img" style={{ opacity: isHover1 }} alt=""/>
          </div>
        </div>

        <div
          className="Tutorial_container"
          onMouseOver={() => setIsHover2(100)}
          onMouseOut={() => setIsHover2(0)}
        >
          <img src="img/tut_2_.png" class="Tutorial_page_img" alt=""/>
          <div className="hover">
            <img src="img/tut_2.png" class = "Tutorial_hover_img" style={{ opacity: isHover2 }} alt=""/>
          </div>
        </div>

        <div
          className="Tutorial_container"
          onMouseOver={() => setIsHover3(100)}
          onMouseOut={() => setIsHover3(0)}
        >
          <img src="img/tut_3_.png" class="Tutorial_page_img"alt=""/>
          <div className="hover">
            <img src="img/tut_3.png" class = "Tutorial_hover_img" style={{ opacity: isHover3 }} alt=""/>
          </div>
        </div>

        <div
          className="Tutorial_container"
          onMouseOver={() => setIsHover4(100)}
          onMouseOut={() => setIsHover4(0)}
        >
          <img src="img/tut_4_.png" class="Tutorial_page_img" alt=""/>
          <div className="hover">
            <img src="img/tut_4.png" class = "Tutorial_hover_img" style={{ opacity: isHover4 }} alt=""/>
          </div>
        </div>

        <div
          className="Tutorial_container"
          onMouseOver={() => setIsHover5(100)}
          onMouseOut={() => setIsHover5(0)}
        >
          <img src="img/tut_5_.png" class="Tutorial_page_img" alt=""/>
          <div className="hover">
            <img src="img/tut_5.png" class = "Tutorial_hover_img" style={{ opacity: isHover5 }} alt=""/>
          </div>
        </div>

        <div
          className="Tutorial_container"
          onMouseOver={() => setIsHover6(100)}
          onMouseOut={() => setIsHover6(0)}
        >
          <img src="img/tut_6_.png" class="Tutorial_page_img" alt=""/>
          <div className="hover">
            <img src="img/tut_6.png" class = "Tutorial_hover_img" style={{ opacity: isHover6 }} alt=""/>
          </div>
        </div>

        <div
          className="Tutorial_container"
          onMouseOver={() => setIsHover7(100)}
          onMouseOut={() => setIsHover7(0)}
        >
          <img src="img/tut_7_.png" class="Tutorial_page_img" alt=""/>
          <div className="hover">
            <img src="img/tut_7.png" class = "Tutorial_hover_img" style={{ opacity: isHover7 }} alt=""/>
          </div>
        </div>

        <div
          className="Tutorial_container"
          onMouseOver={() => setIsHover8(100)}
          onMouseOut={() => setIsHover8(0)}
        >
          <img src="img/tut_8_.png" class="Tutorial_page_img" alt=""/>
          <div className="hover">
            <img src="img/tut_8.png" class = "Tutorial_hover_img" style={{ opacity: isHover8 }} alt=""/>
          </div>
        </div>

        <div
          className="Tutorial_container"
          onMouseOver={() => setIsHover9(100)}
          onMouseOut={() => setIsHover9(0)}
        >
          <img src="img/tut_9_.png" class="Tutorial_page_img" alt=""/>
          <div className="hover">
            <img src="img/tut_9.png" class = "Tutorial_hover_img" style={{ opacity: isHover9 }} alt=""/>
          </div>
        </div>

        <div
          className="Tutorial_container"
          onMouseOver={() => setIsHover10(100)}
          onMouseOut={() => setIsHover10(0)}
        >
          <img src="img/tut_10_.png" class="Tutorial_page_img" alt=""/>
          <div className="hover">
            <img src="img/tut_10.png" class = "Tutorial_hover_img" style={{ opacity: isHover10 }} alt=""/>
          </div>
        </div>

        <div
          className="Tutorial_container"
          onMouseOver={() => setIsHover11(100)}
          onMouseOut={() => setIsHover11(0)}
        >
          <img src="img/tut_11_.png" class="Tutorial_page_img" alt=""/>
          <div className="hover">
            <img src="img/tut_11.png" class = "Tutorial_hover_img" style={{ opacity: isHover11 }} alt=""/>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Tutorial;
