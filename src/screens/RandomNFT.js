import React, {useState} from 'react'
import '../style/RandomNFT.css';
import Swal from 'sweetalert2';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function RandomNFT() {
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
                window.location.href = "/Random";
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
    </div>
  )
}

export default RandomNFT