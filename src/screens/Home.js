import React from "react";
import "../style/Home.css";
import Barcht from "../components/charts/ChartBar.js";
import PieCht from "../components/charts/ChartPie.js";

const Home = () => {
  function selectNFT(e) {
    window.location.href = "/Custom";
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
<<<<<<< HEAD
      <button onClick={buyBtn} className="home_button">
        알 구매하러 가기
=======
      <button onClick={selectNFT} className="button">
        기부하러 가기
>>>>>>> 0b79367344160495859463035ed69836132f0684
      </button>
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

export default Home;
