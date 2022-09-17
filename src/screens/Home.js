import React from "react";
import "../style/Home.css";

const Home = () => {
  function buyBtn(e) {
    window.location.href = "/Buyegg";
  }

  function customBtn(e) {
    window.location.href = "/Custom";
  }

  return (
    <div
      style={{ backgroundColor: "black", paddingTop: 70, textAlign: "center" }}
    >
      <button onClick={customBtn}>커스터마이징창</button>
      <div className="text">
        <h1 style={{ fontWeight: 700 }}>나만의 NFT 제작하고 기부하자!</h1>
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
      <button onClick={buyBtn} className="button">
        알 구매하러 가기
      </button>
    </div>
  );
};

export default Home;
