import React, {useState} from 'react'
import '../style/RandomNFT.css';
import Swal from 'sweetalert2';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';



const Body_Yellow = require("../custom_Img/Body/Body_Yellow.png");
const Body_Blue = require("../custom_Img/Body/Body_Blue.png");
const Body_Red = require("../custom_Img/Body/Body_Red.png");
const Body_White = require("../custom_Img/Body/Body_White.png");
const Body_Black = require("../custom_Img/Body/Body_black.png");
const Body = [ Body_Yellow, Body_Blue, Body_Red, Body_White, Body_Black ];

const Hair_Long = require("../custom_Img/Hair/Hair_Long.png");
const Hair_Puka = require("../custom_Img/Hair/Hair_Puka.png");
const Hair_Short_green = require("../custom_Img/Hair/Hair_Short_Green.png");
const Hair_Short = require("../custom_Img/Hair/Hair_Short.png");
const Hair_Blue = require("../custom_Img/Hair/Hair_Blue.png");
const Hair = [ Hair_Long, Hair_Puka, Hair_Short_green, Hair_Short, Hair_Blue ];

const Eye_Arch = require("../custom_Img/Eye/Eye_Arch.png");
const Eye_Circle = require("../custom_Img/Eye/Eye_Circle.png");
const Eye_Circle_Green = require("../custom_Img/Eye/Eye_Circle_Green.png");
const Eye_Triangle = require("../custom_Img/Eye/Eye_Triangle.png");
const Eye_Glasses = require("../custom_Img/Eye/Eye_Glasses.png");
const Eye = [
  Eye_Arch,
  Eye_Circle,
  Eye_Circle_Green,
  Eye_Triangle,
  Eye_Glasses,
];

const Mouth_Blue = require("../custom_Img/Mouth/Mouth_Blue.png");
const Mouth_Red = require("../custom_Img/Mouth/Mouth_Red.png");
const Mouth_Pink = require("../custom_Img/Mouth/Mouth_Pink.png");
const Mouth_Yellow = require("../custom_Img/Mouth/Mouth_Yellow.png");
const Mouth = [ Mouth_Blue, Mouth_Pink, Mouth_Red, Mouth_Yellow ];

const Egg_Mint = require("../custom_Img/Egg/Egg_Mint.png");
const Egg_Pink = require("../custom_Img/Egg/Egg_Pink.png");
const Egg_PurPle = require("../custom_Img/Egg/Egg_Purple.png");
const Egg_White = require("../custom_Img/Egg/Egg_White.png");
const Egg = [ Egg_Mint, Egg_Pink, Egg_PurPle, Egg_White ];

const Idol_Aespa = require("../custom_Img/Idol/Idol_Aespa.png");
const Idol_BTS = require("../custom_Img/Idol/Idol_Bts.png");
const Idol_IVE = require("../custom_Img/Idol/Idol_Ive.png");
const Idol_NCT = require("../custom_Img/Idol/Idol_Nct.png");

const Back_Mint = require("../custom_Img/Back/Back_Mint.png");
const Back_Pink = require("../custom_Img/Back/Back_Pink.png");
const Back_Rainbow = require("../custom_Img/Back/Back_Rainbow.png");
const Back_Zebra = require("../custom_Img/Back/Back_Zebra.png");
const Back = [ Back_Mint, Back_Pink, Back_Rainbow, Back_Zebra ];





function RandomNFT() {

  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    speed:500
  };
  
  const [idol, setIdol] = useState("");

  function ActivateBtn() {

    if (idol=="") {
      return (
        <button id="randMint_disabled" disabled>
            {idol + " 팬덤의 랜덤 NFT 발행" }
        </button>
      )
    }
    else {
      return (
        <button id="randMint"
            onClick={randomBTN}>
            {idol + " 팬덤의 랜덤 NFT 발행" }
        </button>
      )
    }
  }

    function randomBTN() {
        Swal.fire({
            title: '랜덤 기미덕 민팅',
            text: '기미덕이 곧바로 민팅되니 주의하세요!',
            icon: 'warning',
            
            showCancelButton: true, 
            confirmButtonColor: 'rgb(191,144,0)', 
            cancelButtonColor: '#d33', 
            confirmButtonText: '민팅', 
            cancelButtonText: '취소', 
            reverseButtons: true, // 버튼 순서 거꾸로
            
         }).then(result => {
            // 만약 Promise리턴을 받으면,
            if (result.isConfirmed) { 
                window.location.href = `/Random?idol=${idol}`;
            }
         });
    }

  return (
    <div className='background'>
        <img src='img/Egg.png' id="randomEgg"/>
        <Slider {...settings}>
          <div className='RandomNFT_item' onClick={() => {setIdol("Aespa")}}><img src="img/Idol_Aespa.png" className="slideItem"/></div>
          <div className='RandomNFT_item' onClick={() => {setIdol("BTS")}}><img src="img/Idol_Bts.png" className="slideItem"/></div>
          <div className='RandomNFT_item' onClick={() => {setIdol("IVE")}}><img src="img/Idol_Ive.png" className="slideItem"/></div>
          <div className='RandomNFT_item' onClick={() => {setIdol("NCT")}}><img src="img/Idol_Nct.png" className="slideItem"/></div>
          <div className='RandomNFT_item' onClick={() => {setIdol("Aespa")}}><img src="img/Idol_Aespa.png" className="slideItem"/></div>
          <div className='RandomNFT_item' onClick={() => {setIdol("BTS")}}><img src="img/Idol_Bts.png" className="slideItem"/></div>
          <div className='RandomNFT_item' onClick={() => {setIdol("IVE")}}><img src="img/Idol_Ive.png" className="slideItem"/></div>
          <div className='RandomNFT_item' onClick={() => {setIdol("NCT")}}><img src="img/Idol_Nct.png" className="slideItem"/></div>
        </Slider>
        <select className="combobox">
            <option value="steak">영역 선택</option>
            <option value="어린이">어린이 복지</option>
            <option value="노인">노인 복지</option>
            <option value="장애인">장애인 복지</option>
            <option value="환경">환경 복지</option>
        </select>
        <ActivateBtn/>




        <div class="Character_back" style={{ visibility: "hidden" }}>
          {/* ㅣㅣㅣㅣbackㅣㅣㅣㅣㅣㅣㅣ */}
          <div className="Character-1-card">
            <img style={{ width: "380px" }} src={Back[getRandom(0, 4)]} />
          </div>
          {/* ㅣㅣㅣㅣBodyㅣㅣㅣㅣㅣㅣㅣ */}
          <div className="Character-1-card">
            <img style={{ width: "380px" }} src={Body[getRandom(0, 5)]} />
          </div>
          {/* ㅣㅣㅣㅣHairㅣㅣㅣㅣㅣㅣㅣ */}
          <div className="Character-1-card">
            <img style={{ width: "380px" }} src={Hair[getRandom(0, 5)]} />
          </div>
          {/* ㅣㅣㅣㅣEyeㅣㅣㅣㅣㅣㅣㅣ */}
          <div className="Character-1-card">
            <img style={{ width: "380px" }} src={Eye[getRandom(0, 5)]} />
          </div>
          {/* ㅣㅣㅣㅣEggㅣㅣㅣㅣㅣㅣㅣ */}
          <div className="Character-1-card">
            <img style={{ width: "380px" }} src={Egg[getRandom(0, 4)]} />
          </div>

          {/* ㅣㅣㅣㅣIdolㅣㅣㅣㅣㅣㅣㅣ */}
          <div className="Character-1-card">
            <img style={{ width: "380px" }} src={"img/Idol_"+idol+".png"} />
          </div>
          {/* ㅣㅣㅣㅣMouthㅣㅣㅣㅣㅣㅣㅣ */}
          <div className="Character-1-card">
            <img style={{ width: "380px" }} src={Mouth[getRandom(0, 4)]} />
          </div>
        </div>

    </div>
  )
}

export default RandomNFT