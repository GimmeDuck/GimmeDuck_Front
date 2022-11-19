import React, { useState } from "react";
import "../style/Home.css";
import Barcht from "../components/charts/ChartBar.js";
import PieCht from "../components/charts/ChartPie.js";
import * as KlipAPI from "../screen_js/Buyegg_js";
import Modal from "react-modal";
import { QRCodeSVG } from "qrcode.react";
import "../style/Buyegg.css";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import * as NavBar from "../components/NavBarElements.js";

export const Home = () => {
  const DEFAULT_QR_CODE = "DEFAULT";
  const DEFAULT_ADDRESS = "0x00000000000000000000000000000";
  let myAddress = DEFAULT_ADDRESS;
  const [qrvalue_auth, setQrvalue_auth] = useState(DEFAULT_QR_CODE);
  const [auth_modalIsOpen, auth_setModalIsOpen] = useState(false);

  function getKlipAddress() {
    KlipAPI.getAddress(setQrvalue_auth, async (address) => {
      myAddress = address;
      console.log(myAddress);
      if (myAddress !== DEFAULT_ADDRESS) {
        window.location.href = `/Custom?ad=${myAddress}`;
      }
    });
    auth_setModalIsOpen(true);
  }

  return (
    <div className="Home_back">
      <BrowserView>
        {/* 위패널 */}
        <div className="Home_main">
          <div className="Home_mainText">
            <h1 style={{ fontWeight: 800, fontSize: "4vmax" }}>
              나만의 NFT 제작하고 <br /> 기부하자!
            </h1>
            <p style={{ fontSize: "1vmax", color: "#AFABAB" }}>
              <br />
              '덕후' 로서의 나를 세상에 하나뿐인 캐릭터로 제작하고,
              <br />
              '팬덤' 이름으로 믿음직한 기부도 하고, <br />
              블록체인에 나의 기부 내역을 남깁니다
              <br />
            </p>
            <button onClick={getKlipAddress} className="Home_button">
              <img
                src="img/Klip.png"
                style={{ width: "8%", marginRight: "2%" }}
              />
              NFT 제작하러 가기
            </button>

            <Modal className="buyegg_popup" isOpen={auth_modalIsOpen}>
              <QRCodeSVG className="qrcode" value={qrvalue_auth} />
              <div
                className="close"
                onClick={() => auth_setModalIsOpen(false)}
              ></div>
              <div className="popup_comment">나의 Klip 지갑 연결</div>
            </Modal>
          </div>
          <div>
            <img className="Home_img_Circle" src="img/Home_circle.png" />
            <img className="Home_img_Coin" src="img/Home_coin.png" />
            <img className="Home_img_Card" src="img/Home_card.png" />
          </div>
        </div>
        {/* 아래패널 */}
        <div className="Home_downDiv">
          <img src="img/Home_blur.png" className="Home_img_Blur" />
          <div className="chartBox">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p style={{ color: "gray" }}>현재 팬덤 기부 현황</p>
            </div>
            <Barcht />
            <PieCht />
          </div>
        </div>
      </BrowserView>

      <MobileView>
         <div style={{textAlign:"center", fontSize:"1.3rem", color:"white",marginTop:"25vh", fontWeight:"lighter" }}>
            <img className="mobile_Home_img_Card" src="img/Home_card.png" />
            <p>
            GIMME-DUCK은 PC접속에 최적화되어있습니다. <br/>
         PC로 다시 만나요! 🐣
            </p>
          </div>
      </MobileView>
      
    </div>
  );
};