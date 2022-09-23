import React from 'react';
import '../style/Donate.css';
import start from "../utils/ipfsUpload";


const Donate = () => {


  const image = localStorage.getItem("imgURL");
  console.log(image);
  // start(image);

  function homeBtn(e) {
    window.location.href = "/"
  }

  return (
    <div className='donate'>

      <div className='donate_rapper'>

        <div className='donate_rapper_title'>
          <img className='donate_title_balloon'src='img/balloons.png' />
          <h3 style={{fontWeight:700, fontSize:35}}>나만의 김희덕 탄생</h3>
          <img className='donate_title_balloon'src='img/balloons.png' />
        </div>

        <div className = 'donate_rapper_imgrap'>
          <img className='donate_rapper_nft' src = {image}/>
          <div className='donate_rapper_img' >
            <img src = 'img/donateComplete.png'/>
            <div className = 'donate_rapper_text'>
              <div style={{fontSize:"30px"}}>DIVE</div><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20KLAY<br/><br/>
              팬들이 참여하는 따뜻한 나눔은<br/>
              소외된 이웃에게 행복과 희망을 가져다주며<br/>
              더 나아가 우리 모두가 함께하는 세상을<br/>
              만드는데에 참여하셨습니다<br/>
              이에 감사의 마음을 담아 <br/>
              이 증서를 드립니다<br/><br/><br/><br/>
            </div>
            <img src = 'img/eggset.png' id="donate_rapper_img"/>
          </div>
        </div>

      </div>
      <div className='donate_button_rapper'>
        <button onClick= {homeBtn} className='donate_home_button'>
          홈
        </button>
      </div>
      
    </div>
  )
}

export default Donate