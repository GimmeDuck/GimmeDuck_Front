import React from "react";
import "../style/Buyegg.css";
import "../screen_js/Buyegg_js"

const Buyegg = () => {
  function customBtn(e) {
    window.location.href = "/Custom";
  }

  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <div className="Frame">
          <img src="img/eggset.png" className="eggset"></img>
          <div style={{ width: "50%" }}>
            <div className="Rightbox">
              <button className="button1">Klip 지갑연동</button>
              <div className="text1">알 ____ 개</div>
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
                <button className="button1" onClick={() => {}}>
                  Klip 지갑으로 구매
                </button>

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
