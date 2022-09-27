import React, {useEffect} from "react";
import "../style/Buyegg.css";
import * as KlipAPI from "../screen_js/Buyegg_js";
import Modal from "react-modal";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import axios from "axios";


const Buyegg = () => {
  
  const DEFAULT_QR_CODE = "DEFAULT";
  const DEFAULT_ADDRESS = "0x00000000000000000000000000000";

  const [auth_modalIsOpen, auth_setModalIsOpen] = useState(false);
  const [send_modalIsOpen, send_setModalIsOpen] = useState(false);
  const [qrvalue_auth, setQrvalue_auth] = useState(DEFAULT_QR_CODE);
  const [myAddress, setMyAddress] = useState(DEFAULT_ADDRESS);
  const [qrvalue_send, setQrvalue_send] = useState(DEFAULT_QR_CODE);
  const [egg,setEgg] = useState(0);

  function customBtn(e) {
    window.location.href = "/Custom";
  }
  function wallet_modalOpen() {
    KlipAPI.getAddress(setQrvalue_auth, async (address) => {
      setMyAddress(address)
    });
    auth_setModalIsOpen(true);
   
  }

    useEffect(()=>{
      if(myAddress !== DEFAULT_ADDRESS){
      axios.post('/login', {address : myAddress})
      .then(response => { console.log(response.data.egg);})
      }
    },[myAddress]);
  
  

  function send_modalOpen() {
    KlipAPI.send_klay(setQrvalue_send, setMyAddress);
    send_setModalIsOpen(true);
  }


  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <div className="Frame">
          <img src="img/eggset.png" className="eggset"></img>
          <div style={{ width: "50%" }}>
            <div className="Rightbox">
              <button className="button1" onClick={() => wallet_modalOpen()}>
                Klip 지갑연동
              </button>
              <Modal className="buyegg_popup" isOpen={auth_modalIsOpen}>
                <QRCodeSVG className="qrcode" value={qrvalue_auth} />
                <div
                  className="close"
                  onClick={() => auth_setModalIsOpen(false)}
                ></div>
              </Modal>
              <div className="text1">알 {egg} 개</div>
            </div>
            <div className="Rightbox2">
              <select className="combobox">
                <option value="steak">팬덤 선택</option>
                <option value="에스파">에스파</option>
                <option value="레드벨벳">레드벨벳</option>
              </select>
              <div className="Rightbox3">
                <div className="text1">이름</div>
                <input type="text1" placeholder="이름" className="input" />
              </div>
              <select className="combobox">
                <option value="알 갯수">알 갯수</option>
                <option value="0개">0개</option>
                <option value="1개">1개</option>
              </select>
              <div className="Rightbox3">
                <button className="button1" onClick={() => send_modalOpen()}>
                  Klip 지갑으로 구매
                </button>
                <Modal className="buyegg_popup" isOpen={send_modalIsOpen}>
                  <QRCodeSVG className="qrcode" value={qrvalue_send} />
                  <div
                    className="close"
                    onClick={() => send_setModalIsOpen(false)}
                  ></div>
                </Modal>
                <button
                  onClick={customBtn}
                  className="button1"
                  style={{ backgroundColor: "rgb(191,144,0)" }}
                >
                  구매 없이 커스터마이징
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buyegg;
