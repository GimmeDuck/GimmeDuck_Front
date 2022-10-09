import React , {useState} from 'react';
import '../style/Donate.css';
import axios from 'axios';
import execute_func from "../screen_js/caver.js";
import * as KlipAPI from "../screen_js/Buyegg_js";
import Modal from "react-modal";
import { QRCodeSVG } from "qrcode.react";



const Donate = () => {

  const DEFAULT_QR_CODE = "DEFAULT";
  const [qrvalue_execute, setQrvalue_execute] = useState(DEFAULT_QR_CODE);
  const [send_modalIsOpen, send_setModalIsOpen] = useState(false);

  const img = localStorage.getItem("imgURL");

  function test(){
    axios.post('/test', {image : img})
    .then(response => { 
      console.log(response.data);
      KlipAPI.execute_Contract(setQrvalue_execute, "0x38596eD0dceaC58632bCf8BD92B5af3854d6A768", response.data);
      send_setModalIsOpen(true);
    })
  }
  

  function homeBtn(e) {
    window.location.href = "/"
  }

  return (
    <div className='donate'>

      <div className='donate_rapper'>
      <Modal className="buyegg_popup" isOpen={send_modalIsOpen}>
        <QRCodeSVG className="qrcode" value={qrvalue_execute} />
        <div
          className="close"
          onClick={() => send_setModalIsOpen(false)}
        ></div>
      </Modal>
        <div className='donate_rapper_title'>
          <img className='donate_title_balloon'src='img/balloons.png' />
          <h3 style={{fontWeight:700, fontSize:35}}>나만의 김희덕 탄생</h3>
          <img className='donate_title_balloon'src='img/balloons.png' />
        </div>

        <div className = 'donate_rapper_imgrap'>
          <img className='donate_rapper_nft' src = {img}/>
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
        <button onClick= {test} className='donate_home_button'>
          테스트중
        </button>
      </div>
      
    </div>
  )
}

export default Donate