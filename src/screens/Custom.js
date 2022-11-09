import React, { useRef } from "react";
import "../style/Custom.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Custom = () => {
  // 지갑주소 달고다니기
  const search = window.location.search; // returns the URL query String
  const params = new URLSearchParams(search);
  const myadd = params.get("ad");

  const randomBtn = () => {
    window.location.href = `/RandomNFT?ad=${myadd}`;
  };

  const customBtn = () => {
    window.location.href = `/Custom_1?ad=${myadd}`;
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <div id="Custom_background">
      <Slider
        style={{ backgroundColor: "black", width: "100%", paddingTop: "5%" }}
        {...settings}
      >
        <div>
          <img src="img/1.png" className="slideItem" />
        </div>
        <div>
          <img src="img/2.png" className="slideItem" />
        </div>
        <div>
          <img src="img/3.png" className="slideItem" />
        </div>
        <div>
          <img src="img/4.png" className="slideItem" />
        </div>
        <div>
          <img src="img/5.png" className="slideItem" />
        </div>
        <div>
          <img src="img/6.png" className="slideItem" />
        </div>
        <div>
          <img src="img/7.png" className="slideItem" />
        </div>
        <div>
          <img src="img/1.png" className="slideItem" />
        </div>
        <div>
          <img src="img/2.png" className="slideItem" />
        </div>
        <div>
          <img src="img/3.png" className="slideItem" />
        </div>
        <div>
          <img src="img/4.png" className="slideItem" />
        </div>
        <div>
          <img src="img/5.png" className="slideItem" />
        </div>
        <div>
          <img src="img/6.png" className="slideItem" />
        </div>
        <div>
          <img src="img/7.png" className="slideItem" />
        </div>
      </Slider>
      <div className="Custom_downDiv">
        <div className="Custom_Select1Div">
          <div className="Custom_title1"> 랜덤으로 발행 </div>
          <div className="Custom_box">
            직접 커스터마이징 하지 않고, 랜덤 아이템으로 내 캐릭터를 만듭니다.
            <br />
            <span style={{ color: "#be8e00" }}>
              # 희소성이 높은 아이템이 포함될 수 있습니다!
            </span>
            <button className="Custom_button" onClick={randomBtn}>
              랜덤 발행
            </button>
          </div>
        </div>
        <div className="Custom_Select2Div">
          <div className="Custom_title2">커스터마이징하여 발행</div>
          <div className="Custom_box">
            내가 원하는 아이템으로 나만의 캐릭터를 만듭니다.
            <br />
            <span style={{ color: "lightgoldenrodyellow" }}>
              # 다양한 아이템들을 고를 수 있습니다!
            </span>
            <button className="Custom_button" onClick={customBtn}>
              커스터마이징 발행
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom;

{
  /* <div id="Custom_container1">
<div className="Custom_title"> 랜덤으로 발행 </div>
<div className="Custom_box">
  직접 커스터마이징 하지 않고, 랜덤 아이템으로 내 캐릭터를 만듭니다.
  <br />
  <span style={{ color: "lightgoldenrodyellow" }}>
    # 희소성이 높은 아이템이 포함될 수 있습니다!
  </span>
  <button className="Custom_button" onClick={randomBtn}>
    랜덤으로 발행
  </button>
</div>
</div>

<div id="Custom_container2">
<div className="Custom_title">커스터마이징하여 발행</div>
<div className="Custom_box">
  직접 커스터마이징 하지 않고, 랜덤 아이템으로 내 캐릭터를 만듭니다.
  <br />
  <span style={{ color: "lightgoldenrodyellow" }}>
    # 희소성이 높은 아이템이 포함될 수 있습니다!
  </span>
  <button className="Custom_button" onClick={customBtn}>
    나만의 NFT 발행
  </button>
</div>
</div> */
}
