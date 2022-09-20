import React, {useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/Tutorial.css';

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
    <div class="slider_div" style={{backgroundColor:"black", color:"white"}}>
      <Slider {...settings}>
        <div className="container"
          onMouseOver={() => setIsHover1(100)}
          onMouseOut={() => setIsHover1(0)}
          >
          <img src='img/tut_1_.png'/>
          <div className="hover">
            <img src='img/tut_1.png' style={{opacity:isHover1}}/>
          </div>
        </div>

        <div className="container"
          onMouseOver={() => setIsHover2(100)}
          onMouseOut={() => setIsHover2(0)}
          >
          <img src='img/tut_2_.png'/>
          <div className="hover">
            <img src='img/tut_2.png' style={{opacity:isHover2}}/>
          </div>
        </div>

        <div className="container"
          onMouseOver={() => setIsHover3(100)}
          onMouseOut={() => setIsHover3(0)}
          >
          <img src='img/tut_3_.png'/>
          <div className="hover">
            <img src='img/tut_3.png' style={{opacity:isHover3}}/>
          </div>
        </div>

        <div className="container"
          onMouseOver={() => setIsHover4(100)}
          onMouseOut={() => setIsHover4(0)}
          >
          <img src='img/tut_4_.png'/>
          <div className="hover">
            <img src='img/tut_4.png' style={{opacity:isHover4}}/>
          </div>
        </div>

        <div className="container"
          onMouseOver={() => setIsHover5(100)}
          onMouseOut={() => setIsHover5(0)}
          >
          <img src='img/tut_5_.png'/>
          <div className="hover">
            <img src='img/tut_5.png' style={{opacity:isHover5}}/>
          </div>
        </div>

        <div className="container"
          onMouseOver={() => setIsHover6(100)}
          onMouseOut={() => setIsHover6(0)}
          >
          <img src='img/tut_6_.png'/>
          <div className="hover">
            <img src='img/tut_6.png' style={{opacity:isHover6}}/>
          </div>
        </div>

        <div className="container"
          onMouseOver={() => setIsHover7(100)}
          onMouseOut={() => setIsHover7(0)}
          >
          <img src='img/tut_7_.png'/>
          <div className="hover">
            <img src='img/tut_7.png' style={{opacity:isHover7}}/>
          </div>
        </div>

        <div className="container"
          onMouseOver={() => setIsHover8(100)}
          onMouseOut={() => setIsHover8(0)}
          >
          <img src='img/tut_8_.png'/>
          <div className="hover">
            <img src='img/tut_8.png' style={{opacity:isHover8}}/>
          </div>
        </div>

        <div className="container"
          onMouseOver={() => setIsHover9(100)}
          onMouseOut={() => setIsHover9(0)}
          >
          <img src='img/tut_9_.png'/>
          <div className="hover">
            <img src='img/tut_9.png' style={{opacity:isHover9}}/>
          </div>
        </div>

        <div className="container"
          onMouseOver={() => setIsHover10(100)}
          onMouseOut={() => setIsHover10(0)}
          >
          <img src='img/tut_10_.png'/>
          <div className="hover">
            <img src='img/tut_10.png' style={{opacity:isHover10}}/>
          </div>
        </div>

        <div className="container"
          onMouseOver={() => setIsHover11(100)}
          onMouseOut={() => setIsHover11(0)}>
          <img src='img/tut_11_.png'/>
          <div className="hover">
            <img src='img/tut_11.png' style={{opacity:isHover11}}/>
          </div>
        </div>

      </Slider>    

    </div>
  )
}

export default Tutorial