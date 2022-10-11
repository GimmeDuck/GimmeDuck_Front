import React, { useState, useRef, useEffect } from "react";
import "../style/Custom_1.css";
import Modal from "../components/Modal";
import exportAsImage from "../utils/exportAsImage";
import * as Donate from "../screens/Donate.js";
//caver
import execute_func from "../screen_js/caver.js";
var global = global || window;
global.Buffer = global.Buffer || require("buffer").Buffer;

let CvsImgUrl = "default";

export function CvsImg(url) {
  CvsImgUrl = url;
}

const Body_Yellow = require("../custom_Img/Body/Body_Yellow.png");
const Body_Blue = require("../custom_Img/Body/Body_Blue.png");
const Body_Red = require("../custom_Img/Body/Body_Red.png");
const Body_White = require("../custom_Img/Body/Body_White.png");
const Body_Black = require("../custom_Img/Body/Body_black.png");
const Body = { Body_Yellow, Body_Blue, Body_Red, Body_White, Body_Black };

const Hair_Long = require("../custom_Img/Hair/Hair_Long.png");
const Hair_Puka = require("../custom_Img/Hair/Hair_Puka.png");
const Hair_Short_green = require("../custom_Img/Hair/Hair_Short_Green.png");
const Hair_Short = require("../custom_Img/Hair/Hair_Short.png");
const Hair_Blue = require("../custom_Img/Hair/Hair_Blue.png");
const Hair = { Hair_Long, Hair_Puka, Hair_Short_green, Hair_Short, Hair_Blue };

const Eye_Arch = require("../custom_Img/Eye/Eye_Arch.png");
const Eye_Circle = require("../custom_Img/Eye/Eye_Circle.png");
const Eye_Circle_Green = require("../custom_Img/Eye/Eye_Circle_Green.png");
const Eye_Triangle = require("../custom_Img/Eye/Eye_Triangle.png");
const Eye_Glasses = require("../custom_Img/Eye/Eye_Glasses.png");
const Eye = {
  Eye_Arch,
  Eye_Circle,
  Eye_Circle_Green,
  Eye_Triangle,
  Eye_Glasses,
};

const Mouth_Blue = require("../custom_Img/Mouth/Mouth_Blue.png");
const Mouth_Red = require("../custom_Img/Mouth/Mouth_Red.png");
const Mouth_Pink = require("../custom_Img/Mouth/Mouth_Pink.png");
const Mouth_Yellow = require("../custom_Img/Mouth/Mouth_Yellow.png");
const Mouth = { Mouth_Blue, Mouth_Pink, Mouth_Red, Mouth_Yellow };

var Egg_Mint = require("../custom_Img/Egg/Egg_Mint.png");
const Egg_Pink = require("../custom_Img/Egg/Egg_Pink.png");
const Egg_PurPle = require("../custom_Img/Egg/Egg_Purple.png");
const Egg_White = require("../custom_Img/Egg/Egg_White.png");
const Egg = { Egg_Mint, Egg_Pink, Egg_PurPle, Egg_White };

const Idol_Aespa = require("../custom_Img/Idol/Idol_Aespa.png");
const Idol_Bts = require("../custom_Img/Idol/Idol_Bts.png");
const Idol_Ive = require("../custom_Img/Idol/Idol_Ive.png");
const Idol_Nct = require("../custom_Img/Idol/Idol_Nct.png");
const Idol_Plus = require("../custom_Img/Idol/Idol_Plus.png");
const Idol = { Idol_Aespa, Idol_Bts, Idol_Ive, Idol_Nct, Idol_Plus };

const Back_Mint = require("../custom_Img/Back/Back_Mint.png");
const Back_Pink = require("../custom_Img/Back/Back_Pink.png");
const Back_Rainbow = require("../custom_Img/Back/Back_Rainbow.png");
const Back_Zebra = require("../custom_Img/Back/Back_Zebra.png");
const Back = { Back_Mint, Back_Pink, Back_Rainbow, Back_Zebra };

const Custom_1 = () => {

  const [Idol, selectIdol] = useState("");
  const [part, selectPart] = useState("");

  const [BodySelect, setBodySelect] = useState(Body.Body_White);
  const [HairSelect, setHairSelect] = useState();
  const [EyeSelect, setEyeSelect] = useState();
  const [MouthSelect, setMouthSelect] = useState();
  const [EggSelect, setEggSelect] = useState();
  const [IdolSelect, setIdolSelect] = useState();
  const [BackSelect, setBackSelect] = useState();

  const [BodyVisible, setBodyVisible] = React.useState(true);
  const [HairVisible, setHairVisible] = React.useState(false);
  const [EyeVisible, setEyeVisible] = React.useState(false);
  const [MouthVisible, setMouthVisible] = React.useState(false);
  const [EggVisible, setEggVisible] = React.useState(false);
  const [IdolVisible, setIdolVisible] = React.useState(false);
  const [BackVisible, setBackVisible] = React.useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  //모달 열고 닫음
  const modalClose = () => {
    setModalOpen(!modalOpen);
    if (modalOpen == true) {
      setCvs(true);
    }
  };

  //Idol 기본 스타일은 Character-1-card으로
  const [IdolCvs, SetIdolCvs] = useState("Character-1-card");
  const [IdolCvsSize, SetIdolCvsSize] = useState("380px");
  const [canvasSelect, SetCanvasSelect] = useState(false);

  //그림판 그림 선택됐을 때 Idol style 바꿔줌
  useEffect(() => {
    if (canvasSelect == true) {
      SetIdolCvs("Character-1-Cvs");
      SetIdolCvsSize("125px");
    } else {
      SetIdolCvs("Character-1-card");
      SetIdolCvsSize("380px");
    }
  });
  const exportRef = useRef();
  const [Cvs, setCvs] = useState(false);

  function NFTBtn(e) {
    //Donate.Fandom("규방");
    exportAsImage(exportRef.current, "test.png");

    //execute_func();
  }
  // 여기부터 시작///////////////////////////////////////////////////////
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "92vh",
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "2%",
      }}
    >
      {/* ㅣㅣㅣㅣ오른쪽 버튼ㅣㅣㅣㅣㅣㅣㅣ */}
      <div
        class="btn-group-vertical"
        style={{ width: "10%", height: "35vmax" }}
      >
        <button
          className="SideBtnText"
          onClick={() => {
            setBodyVisible(true);
            setHairVisible(false);
            setEyeVisible(false);
            setMouthVisible(false);
            setEggVisible(false);
            setIdolVisible(false);
            setBackVisible(false);
          }}
        >
          Body
        </button>

        <button
          className="SideBtnText"
          onClick={() => {
            setBodyVisible(false);
            setHairVisible(true);
            setEyeVisible(false);
            setMouthVisible(false);
            setEggVisible(false);
            setIdolVisible(false);
            setBackVisible(false);
          }}
        >
          Hair
        </button>

        <button
          className="SideBtnText"
          onClick={() => {
            setBodyVisible(false);
            setHairVisible(false);
            setEyeVisible(true);
            setMouthVisible(false);
            setEggVisible(false);
            setIdolVisible(false);
            setBackVisible(false);
          }}
        >
          Eye
        </button>

        <button
          className="SideBtnText"
          onClick={() => {
            setBodyVisible(false);
            setHairVisible(false);
            setEyeVisible(false);
            setMouthVisible(true);
            setEggVisible(false);
            setIdolVisible(false);
            setBackVisible(false);
          }}
        >
          Mouth
        </button>

        <button
          className="SideBtnText"
          onClick={() => {
            setBodyVisible(false);
            setHairVisible(false);
            setEyeVisible(false);
            setMouthVisible(false);
            setEggVisible(true);
            setIdolVisible(false);
            setBackVisible(false);
          }}
        >
          Egg
        </button>

        <button
          className="SideBtnText"
          onClick={() => {
            setBodyVisible(false);
            setHairVisible(false);
            setEyeVisible(false);
            setMouthVisible(false);
            setEggVisible(false);
            setIdolVisible(true);
            setBackVisible(false);
          }}
        >
          Idol
        </button>

        <button
          className="SideBtnText"
          onClick={() => {
            setBodyVisible(false);
            setHairVisible(false);
            setEyeVisible(false);
            setMouthVisible(false);
            setEggVisible(false);
            setIdolVisible(false);
            setBackVisible(true);
          }}
        >
          back
        </button>
      </div>

      {/* ㅣㅣㅣㅣ캐릭터ㅣㅣㅣㅣㅣㅣㅣ */}
      <div className="main-Div">
        <div class="Character_back" ref={exportRef}>
          {/* ㅣㅣㅣㅣbackㅣㅣㅣㅣㅣㅣㅣ */}
          <div className="Character-1-card">
            <img style={{ width: "380px" }} src={BackSelect} />
          </div>
          {/* ㅣㅣㅣㅣBodyㅣㅣㅣㅣㅣㅣㅣ */}
          <div className="Character-1-card">
            <img style={{ width: "380px" }} src={BodySelect} />
          </div>
          {/* ㅣㅣㅣㅣHairㅣㅣㅣㅣㅣㅣㅣ */}
          <div className="Character-1-card">
            <img style={{ width: "380px" }} src={HairSelect} />
          </div>
          {/* ㅣㅣㅣㅣEyeㅣㅣㅣㅣㅣㅣㅣ */}
          <div className="Character-1-card">
            <img style={{ width: "380px" }} src={EyeSelect} />
          </div>
          {/* ㅣㅣㅣㅣEggㅣㅣㅣㅣㅣㅣㅣ */}
          <div className="Character-1-card">
            <img style={{ width: "380px" }} src={EggSelect} />
          </div>

          {/* ㅣㅣㅣㅣIdolㅣㅣㅣㅣㅣㅣㅣ */}
          <div className={IdolCvs}>
            <img style={{ width: IdolCvsSize }} src={IdolSelect} />
          </div>
          {/* ㅣㅣㅣㅣMouthㅣㅣㅣㅣㅣㅣㅣ */}
          <div className="Character-1-card">
            <img style={{ width: "380px" }} src={MouthSelect} />
          </div>
        </div>

        {/* ㅣㅣㅣㅣ우측선택창ㅣㅣㅣㅣㅣㅣㅣ */}
        {/* ㅣㅣㅣㅣBodyPanelㅣㅣㅣㅣㅣㅣㅣ */}
        {BodyVisible && (
          <div className="RightPanel">
            <div>
              <img
                src={Body.Body_Black}
                className="Card"
                onClick={() => {
                  setBodySelect(Body.Body_Black);
                }}
              />
              <img
                src={Body.Body_White}
                className="Card"
                onClick={() => {
                  setBodySelect(Body.Body_White);
                }}
              />
              <img
                src={Body.Body_Blue}
                className="Card"
                onClick={() => {
                  setBodySelect(Body.Body_Blue);
                }}
              />
              <img
                src={Body.Body_Yellow}
                className="Card"
                onClick={() => {
                  setBodySelect(Body.Body_Yellow);
                }}
              />
              <img
                src={Body.Body_White}
                className="Card"
                onClick={() => {
                  setBodySelect(Body.Body_White);
                }}
              />
              <img
                src={Body.Body_Black}
                className="Card"
                onClick={() => {
                  setBodySelect(Body.Body_Black);
                }}
              />
              <img
                src={Body.Body_White}
                className="Card"
                onClick={() => {
                  setBodySelect(Body.Body_White);
                }}
              />
              <img
                src={Body.Body_Blue}
                className="Card"
                onClick={() => {
                  setBodySelect(Body.Body_Blue);
                }}
              />
              <img
                src={Body.Body_Black}
                className="Card"
                onClick={() => {
                  setBodySelect(Body.Body_Black);
                }}
              />
            </div>
          </div>
        )}

        {/* ㅣㅣㅣㅣHairPanelㅣㅣㅣㅣㅣㅣㅣ */}
        {HairVisible && (
          <div className="RightPanel">
            <div>
              <img
                src={Hair.Hair_Blue}
                className="Card"
                onClick={() => {
                  setHairSelect(Hair.Hair_Blue);
                }}
              />
              <img
                src={Hair.Hair_Puka}
                className="Card"
                onClick={() => {
                  setHairSelect(Hair.Hair_Puka);
                }}
              />
              <img
                src={Hair.Hair_Blue}
                className="Card"
                onClick={() => {
                  setHairSelect(Hair.Hair_Blue);
                }}
              />
              <img
                src={Hair.Hair_Short}
                className="Card"
                onClick={() => {
                  setHairSelect(Hair.Hair_Short);
                }}
              />

              <img
                src={Hair.Hair_Short_green}
                className="Card"
                onClick={() => {
                  setHairSelect(Hair.Hair_Short_green);
                }}
              />
              <img
                src={Hair.Hair_Puka}
                className="Card"
                onClick={() => {
                  setHairSelect(Hair.Hair_Puka);
                }}
              />
              <img
                src={Hair.Hair_Puka}
                className="Card"
                onClick={() => {
                  setHairSelect(Hair.Hair_Puka);
                }}
              />
              <img
                src={Hair.Hair_Blue}
                className="Card"
                onClick={() => {
                  setHairSelect(Hair.Hair_Blue);
                }}
              />
              <img
                src={Hair.Hair_Short}
                className="Card"
                onClick={() => {
                  setHairSelect(Hair.Hair_Short);
                }}
              />
            </div>
          </div>
        )}

        {/* ㅣㅣㅣㅣEyePanelㅣㅣㅣㅣㅣㅣㅣ */}
        {EyeVisible && (
          <div className="RightPanel">
            <div>
              <img
                src={Eye.Eye_Arch}
                className="Card"
                onClick={() => {
                  setEyeSelect(Eye.Eye_Arch);
                }}
              />
              <img
                src={Eye.Eye_Circle}
                className="Card"
                onClick={() => {
                  setEyeSelect(Eye.Eye_Circle);
                }}
              />
              <img
                src={Eye.Eye_Glasses}
                className="Card"
                onClick={() => {
                  setEyeSelect(Eye.Eye_Glasses);
                }}
              />
              <img
                src={Eye.Eye_Triangle}
                className="Card"
                onClick={() => {
                  setEyeSelect(Eye.Eye_Triangle);
                }}
              />
              <img
                src={Eye.Eye_Arch}
                className="Card"
                onClick={() => {
                  setEyeSelect(Eye.Eye_Arch);
                }}
              />
              <img
                src={Eye.Eye_Circle}
                className="Card"
                onClick={() => {
                  setEyeSelect(Eye.Eye_Circle);
                }}
              />
              <img
                src={Eye.Eye_Glasses}
                className="Card"
                onClick={() => {
                  setEyeSelect(Eye.Eye_Glasses);
                }}
              />
              <img
                src={Eye.Eye_Triangle}
                className="Card"
                onClick={() => {
                  setEyeSelect(Eye.Eye_Triangle);
                }}
              />
              <img
                src={Eye.Eye_Triangle}
                className="Card"
                onClick={() => {
                  setEyeSelect(Eye.Eye_Triangle);
                }}
              />
            </div>
          </div>
        )}

        {/* ㅣㅣㅣㅣMouthPanelㅣㅣㅣㅣㅣㅣㅣ */}
        {MouthVisible && (
          <div className="RightPanel">
            <div>
              <img
                src={Mouth.Mouth_Blue}
                className="Card"
                onClick={() => {
                  setMouthSelect(Mouth.Mouth_Blue);
                }}
              />
              <img
                src={Mouth.Mouth_Yellow}
                className="Card"
                onClick={() => {
                  setMouthSelect(Mouth.Mouth_Yellow);
                }}
              />
              <img
                src={Mouth.Mouth_Pink}
                className="Card"
                onClick={() => {
                  setMouthSelect(Mouth.Mouth_Pink);
                }}
              />
              <img
                src={Mouth.Mouth_Red}
                className="Card"
                onClick={() => {
                  setMouthSelect(Mouth.Mouth_Red);
                }}
              />
              <img
                src={Mouth.Mouth_Blue}
                className="Card"
                onClick={() => {
                  setMouthSelect(Mouth.Mouth_Blue);
                }}
              />
              <img
                src={Mouth.Mouth_Yellow}
                className="Card"
                onClick={() => {
                  setMouthSelect(Mouth.Mouth_Yellow);
                }}
              />
              <img
                src={Mouth.Mouth_Pink}
                className="Card"
                onClick={() => {
                  setMouthSelect(Mouth.Mouth_Pink);
                }}
              />
              <img
                src={Mouth.Mouth_Red}
                className="Card"
                onClick={() => {
                  setMouthSelect(Mouth.Mouth_Red);
                }}
              />
              <img
                src={Mouth.Mouth_Red}
                className="Card"
                onClick={() => {
                  setMouthSelect(Mouth.Mouth_Red);
                }}
              />
            </div>
          </div>
        )}
        {/* ㅣㅣㅣㅣEggPanelㅣㅣㅣㅣㅣㅣㅣ */}
        {EggVisible && (
          <div className="RightPanel">
            <div>
              <img
                src={Egg.Egg_Mint}
                className="Card"
                onClick={() => {
                  setEggSelect(Egg.Egg_Mint);
                }}
              />
              <img
                src={Egg.Egg_Pink}
                className="Card"
                onClick={() => {
                  setEggSelect(Egg.Egg_Pink);
                }}
              />
              <img
                src={Egg.Egg_PurPle}
                className="Card"
                onClick={() => {
                  setEggSelect(Egg.Egg_PurPle);
                }}
              />
              <img
                src={Egg.Egg_White}
                className="Card"
                onClick={() => {
                  setEggSelect(Egg.Egg_White);
                }}
              />
              <img
                src={Egg.Egg_Mint}
                className="Card"
                onClick={() => {
                  setEggSelect(Egg.Egg_Mint);
                }}
              />
              <img
                src={Egg.Egg_Pink}
                className="Card"
                onClick={() => {
                  setEggSelect(Egg.Egg_Pink);
                }}
              />
              <img
                src={Egg.Egg_PurPle}
                className="Card"
                onClick={() => {
                  setEggSelect(Egg.Egg_PurPle);
                }}
              />
              <img
                src={Egg.Egg_White}
                className="Card"
                onClick={() => {
                  setEggSelect(Egg.Egg_White);
                }}
              />
              <img
                src={Egg.Egg_White}
                className="Card"
                onClick={() => {
                  setEggSelect(Egg.Egg_White);
                }}
              />
            </div>
          </div>
        )}
        {/* ㅣㅣㅣㅣIdolPanelㅣㅣㅣㅣㅣㅣㅣ */}
        {IdolVisible && (
          <div className="RightPanel">
            <div>
              <img
                src={Idol.Idol_Aespa}
                className="Card"
                onClick={() => {
                  setIdolSelect(Idol.Idol_Aespa);
                  SetCanvasSelect(false);
                }}
              />
              <img
                src={Idol.Idol_Bts}
                className="Card"
                onClick={() => {
                  setIdolSelect(Idol.Idol_Bts);
                  SetCanvasSelect(false);
                }}
              />
              <img
                src={Idol.Idol_Bts}
                className="Card"
                onClick={() => {
                  setIdolSelect(Idol.Idol_Bts);
                  SetCanvasSelect(false);
                }}
              />
              <img
                src={Idol.Idol_Ive}
                className="Card"
                onClick={() => {
                  setIdolSelect(Idol.Idol_Ive);
                  SetCanvasSelect(false);
                }}
              />
              <img
                src={Idol.Idol_Nct}
                className="Card"
                onClick={() => {
                  setIdolSelect(Idol.Idol_Nct);
                  SetCanvasSelect(false);
                }}
              />
              {/* 추가된 그림판 사진 */}
              {Cvs && (
                <img
                  src={CvsImgUrl}
                  className="Card"
                  style={{ height: "11vmax" }}
                  onClick={() => {
                    setIdolSelect(CvsImgUrl);
                    SetCanvasSelect(true);
                  }}
                />
              )}
              {/* 그림판 여는 곳 */}
              <img src={Idol.Idol_Plus} className="Card" onClick={modalClose} />
              {modalOpen && <Modal modalClose={modalClose}></Modal>}
            </div>
          </div>
        )}
        {/* ㅣㅣㅣㅣbackPanelㅣㅣㅣㅣㅣㅣㅣ */}
        {BackVisible && (
          <div className="RightPanel">
            <div>
              <img
                src={Back.Back_Mint}
                className="Card"
                onClick={() => {
                  setBackSelect(Back.Back_Mint);
                }}
              />
              <img
                src={Back.Back_Pink}
                className="Card"
                onClick={() => {
                  setBackSelect(Back.Back_Pink);
                }}
              />
              <img
                src={Back.Back_Rainbow}
                className="Card"
                onClick={() => {
                  setBackSelect(Back.Back_Rainbow);
                }}
              />
              <img
                src={Back.Back_Zebra}
                className="Card"
                onClick={() => {
                  setBackSelect(Back.Back_Zebra);
                }}
              />
              <img
                src={Back.Back_Mint}
                className="Card"
                onClick={() => {
                  setBackSelect(Back.Back_Mint);
                }}
              />
              <img
                src={Back.Back_Pink}
                className="Card"
                onClick={() => {
                  setBackSelect(Back.Back_Pink);
                }}
              />
              <img
                src={Back.Back_Rainbow}
                className="Card"
                onClick={() => {
                  setBackSelect(Back.Back_Rainbow);
                }}
              />
              <img
                src={Back.Back_Zebra}
                className="Card"
                onClick={() => {
                  setBackSelect(Back.Back_Zebra);
                }}
              />
              <img
                src={Back.Back_Rainbow}
                className="Card"
                onClick={() => {
                  setBackSelect(Back.Back_Rainbow);
                }}
              />
            </div>
          </div>
        )}
        <div
          id="하단 버튼"
          style={{
            marginLeft: "56%",
            marginTop: "36%",
            position: "absolute",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <select className="combo">
            <option value="steak">팬덤 선택</option>
            <option value="에스파">에스파</option>
            <option value="레드벨벳">레드벨벳</option>
            <option value="레드벨벳">규방</option>
            <option value="레드벨벳">숭이</option>
          </select>
          <button className="nftBtn" onClick={() => NFTBtn()}>
            NFT 발행
          </button>
        </div>
      </div>
    </div>
  );
};

export default Custom_1;
