import React,{ useState } from "react";
import "../style/Home.css";
import Barcht from "../components/charts/ChartBar.js";
import PieCht from "../components/charts/ChartPie.js";

import * as KlipAPI from "../screen_js/Buyegg_js";
import Modal from "react-modal";
import { QRCodeSVG } from "qrcode.react";




export const Home = () => {
  const DEFAULT_QR_CODE = "DEFAULT";
  const DEFAULT_ADDRESS = "0x00000000000000000000000000000"
  let myAddress = DEFAULT_ADDRESS;
  const [qrvalue_auth, setQrvalue_auth] = useState(DEFAULT_QR_CODE);
  const [auth_modalIsOpen, auth_setModalIsOpen] = useState(false);

  function getKlipAddress(){
    KlipAPI.getAddress(setQrvalue_auth, async (address) => {
      myAddress = address;
      console.log(myAddress);
      if(myAddress!==DEFAULT_ADDRESS){
        window.location.href = `/Custom?ad=${myAddress}`;
      }

    });
    auth_setModalIsOpen(true);
  }

  return (
    <div
      style={{
        backgroundColor: "black",
        paddingTop: 70,
        textAlign: "center",
      }}
    >
      <div className="text">
        <h1 style={{ fontWeight: 800 }}>나만의 NFT 제작하고 기부하자!</h1>
        <p>
          '덕후'로서의 나를 세상에 하나뿐인 캐릭터로 제작하고,
          <br />
          '팬덤'이름으로 믿음직한 기부도 하고, <br />
          블록체인에 나의 기부 내역을 남깁니다
          <br />
        </p>
        <div className="img">
          <img src="img/home.PNG" />
        </div>
      </div>
      <button onClick={getKlipAddress} className="button">
        지갑 연동하기
      </button>
      <Modal className="buyegg_popup" isOpen={auth_modalIsOpen}>
        <QRCodeSVG className="qrcode" value={qrvalue_auth} />
        <div
          className="close"
          onClick={() => auth_setModalIsOpen(false)}
        ></div>
      </Modal>
      <div className="chartBox">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p style={{ color: "gray" }}>현재 팬덤 기부 현황</p>
        </div>
        <Barcht />
        <PieCht />
      </div>
    </div>
  );
};

