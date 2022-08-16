import React, { useState, useRef } from "react";
import "../style/Custom_1.css";

//caver
import execute_func from '../screen_js/caver.js';
import { Buffer } from "buffer";
var global = global || window;
global.Buffer = global.Buffer || require("buffer").Buffer;

//const Back_Mint = require("../custom_Img/Back/Back_Mint.png");

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

const Egg_Mint = require("../custom_Img/Egg/Egg_Mint.png");
const Egg_Pink = require("../custom_Img/Egg/Egg_Pink.png");
const Egg_PurPle = require("../custom_Img/Egg/Egg_Purple.png");
const Egg_White = require("../custom_Img/Egg/Egg_White.png");
const Egg = { Egg_Mint, Egg_Pink, Egg_PurPle, Egg_White };

const Idol_Aespa = require("../custom_Img/Idol/Idol_Aespa.png");
const Idol_Bts = require("../custom_Img/Idol/Idol_Bts.png");
const Idol_Ive = require("../custom_Img/Idol/Idol_Ive.png");
const Idol_Nct = require("../custom_Img/Idol/Idol_Nct.png");
const Idol = { Idol_Aespa, Idol_Bts, Idol_Ive, Idol_Nct };

const Back_Mint = require("../custom_Img/Back/Back_Mint.png");
const Back_Pink = require("../custom_Img/Back/Back_Pink.png");
const Back_Rainbow = require("../custom_Img/Back/Back_Rainbow.png");
const Back_Zebra = require("../custom_Img/Back/Back_Zebra.png");
const Back = { Back_Mint, Back_Pink, Back_Rainbow, Back_Zebra };

const Custom_1 = () => {
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

  function NFTBtn(e) {
    execute_func();
  }

  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vmax",
      }}
    >
      {/* ㅣㅣㅣㅣ오른쪽 버튼ㅣㅣㅣㅣㅣㅣㅣ */}
      <div>//</div>
      <div>//</div>
      <div
        class="SideBtn"
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
        <button class="SideBtnText">Body</button>
      </div>

      <div
        class="SideBtn"
        style={{ marginTop: "7vmax" }}
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
        <button class="SideBtnText">Hair</button>
      </div>

      <div
        class="SideBtn"
        style={{ marginTop: "13vmax" }}
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
        <button class="SideBtnText">Eye</button>
      </div>

      <div
        class="SideBtn"
        style={{ marginTop: "19vmax" }}
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
        <button class="SideBtnText">Mouth</button>
      </div>
      <div
        class="SideBtn"
        style={{ marginTop: "25vmax" }}
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
        <button class="SideBtnText">Egg</button>
      </div>

      <div
        class="SideBtn"
        style={{ marginTop: "31vmax" }}
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
        <button class="SideBtnText">Idol</button>
      </div>

      <div
        class="SideBtn"
        style={{ marginTop: "37vmax" }}
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
        <button class="SideBtnText">back</button>
      </div>

      {/* ㅣㅣㅣㅣ캐릭터ㅣㅣㅣㅣㅣㅣㅣ */}
      <div class="main-Div">
        {/* ㅣㅣㅣㅣbackㅣㅣㅣㅣㅣㅣㅣ */}
        <div className="Character">
          <img
            src={BackSelect}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        {/* ㅣㅣㅣㅣBodyㅣㅣㅣㅣㅣㅣㅣ */}
        <div className="Character-1">
          <img
            src={BodySelect}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        {/* ㅣㅣㅣㅣHairㅣㅣㅣㅣㅣㅣㅣ */}
        <div className="Character-1">
          <img
            src={HairSelect}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        {/* ㅣㅣㅣㅣEyeㅣㅣㅣㅣㅣㅣㅣ */}
        <div className="Character-1">
          <img
            src={EyeSelect}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        {/* ㅣㅣㅣㅣEggㅣㅣㅣㅣㅣㅣㅣ */}
        <div className="Character-1">
          <img
            src={EggSelect}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        {/* ㅣㅣㅣㅣMouthㅣㅣㅣㅣㅣㅣㅣ */}
        <div className="Character-1">
          <img
            src={MouthSelect}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        {/* ㅣㅣㅣㅣIdolㅣㅣㅣㅣㅣㅣㅣ */}
        <div className="Character-1">
          <img
            src={IdolSelect}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>

        {/* ㅣㅣㅣㅣ우측패널ㅣㅣㅣㅣㅣㅣㅣ */}
        {/* ㅣㅣㅣㅣBodyPanelㅣㅣㅣㅣㅣㅣㅣ */}
        {BodyVisible && (
          <div class="RightPanel">
            {/* ㅣㅣㅣㅣ오른쪽ㅣㅣㅣㅣㅣㅣㅣ */}
            <div>
              <img
                src={Body.Body_Black}
                class="Card"
                onClick={() => {
                  setBodySelect(Body.Body_Black);
                }}
              />
              <img
                src={Body.Body_White}
                class="Card"
                onClick={() => {
                  setBodySelect(Body.Body_White);
                }}
              />
              <img
                src={Body.Body_Blue}
                class="Card"
                onClick={() => {
                  setBodySelect(Body.Body_Blue);
                }}
              />
              <img
                src={Body.Body_Black}
                class="Card"
                onClick={() => {
                  setBodySelect(Body.Body_Black);
                }}
              />
              <img
                src={Body.Body_White}
                class="Card"
                onClick={() => {
                  setBodySelect(Body.Body_White);
                }}
              />
            </div>
            {/* ㅣㅣㅣㅣ왼쪽ㅣㅣㅣㅣㅣㅣㅣ */}
            <div>
              <img
                src={Body.Body_Blue}
                class="Card"
                onClick={() => {
                  setBodySelect(Body.Body_Blue);
                }}
              />
              <img
                src={Body.Body_Yellow}
                class="Card"
                onClick={() => {
                  setBodySelect(Body.Body_Yellow);
                }}
              />
              <img
                src={Body.Body_Black}
                class="Card"
                onClick={() => {
                  setBodySelect(Body.Body_Black);
                }}
              />
              <img
                src={Body.Body_Blue}
                class="Card"
                onClick={() => {
                  setBodySelect(Body.Body_Blue);
                }}
              />
              <img
                src={Body.Body_Yellow}
                class="Card"
                onClick={() => {
                  setBodySelect(Body.Body_Yellow);
                }}
              />
            </div>
          </div>
        )}

        {/* ㅣㅣㅣㅣHairPanelㅣㅣㅣㅣㅣㅣㅣ */}
        {HairVisible && (
          <div class="RightPanel">
            <div>
              <img
                src={Hair.Hair_Blue}
                class="Card"
                onClick={() => {
                  setHairSelect(Hair.Hair_Blue);
                }}
              />
              <img
                src={Hair.Hair_Puka}
                class="Card"
                onClick={() => {
                  setHairSelect(Hair.Hair_Puka);
                }}
              />
              <img
                src={Hair.Hair_Blue}
                class="Card"
                onClick={() => {
                  setHairSelect(Hair.Hair_Blue);
                }}
              />
            </div>
            <div>
              <img
                src={Hair.Hair_Short}
                class="Card"
                onClick={() => {
                  setHairSelect(Hair.Hair_Short);
                }}
              />

              <img
                src={Hair.Hair_Short_green}
                class="Card"
                onClick={() => {
                  setHairSelect(Hair.Hair_Short_green);
                }}
              />
              <img
                src={Hair.Hair_Puka}
                class="Card"
                onClick={() => {
                  setHairSelect(Hair.Hair_Puka);
                }}
              />
            </div>
          </div>
        )}

        {/* ㅣㅣㅣㅣEyePanelㅣㅣㅣㅣㅣㅣㅣ */}
        {EyeVisible && (
          <div class="RightPanel">
            <div>
              <img
                src={Eye.Eye_Arch}
                class="Card"
                onClick={() => {
                  setEyeSelect(Eye.Eye_Arch);
                }}
              />
              <img
                src={Eye.Eye_Circle}
                class="Card"
                onClick={() => {
                  setEyeSelect(Eye.Eye_Circle);
                }}
              />
            </div>
            <div>
              <img
                src={Eye.Eye_Glasses}
                class="Card"
                onClick={() => {
                  setEyeSelect(Eye.Eye_Glasses);
                }}
              />
              <img
                src={Eye.Eye_Triangle}
                class="Card"
                onClick={() => {
                  setEyeSelect(Eye.Eye_Triangle);
                }}
              />
            </div>
          </div>
        )}

        {/* ㅣㅣㅣㅣMouthPanelㅣㅣㅣㅣㅣㅣㅣ */}
        {MouthVisible && (
          <div class="RightPanel">
            <div>
              <img
                src={Mouth.Mouth_Blue}
                class="Card"
                onClick={() => {
                  setMouthSelect(Mouth.Mouth_Blue);
                }}
              />
              <img
                src={Mouth.Mouth_Yellow}
                class="Card"
                onClick={() => {
                  setMouthSelect(Mouth.Mouth_Yellow);
                }}
              />
            </div>
            <div>
              <img
                src={Mouth.Mouth_Pink}
                class="Card"
                onClick={() => {
                  setMouthSelect(Mouth.Mouth_Pink);
                }}
              />
              <img
                src={Mouth.Mouth_Red}
                class="Card"
                onClick={() => {
                  setMouthSelect(Mouth.Mouth_Red);
                }}
              />
            </div>
          </div>
        )}
        {/* ㅣㅣㅣㅣEggPanelㅣㅣㅣㅣㅣㅣㅣ */}
        {EggVisible && (
          <div class="RightPanel">
            <div>
              <img
                src={Egg.Egg_Mint}
                class="Card"
                onClick={() => {
                  setEggSelect(Egg.Egg_Mint);
                }}
              />
              <img
                src={Egg.Egg_Pink}
                class="Card"
                onClick={() => {
                  setEggSelect(Egg.Egg_Pink);
                }}
              />
            </div>
            <div>
              <img
                src={Egg.Egg_PurPle}
                class="Card"
                onClick={() => {
                  setEggSelect(Egg.Egg_PurPle);
                }}
              />
              <img
                src={Egg.Egg_White}
                class="Card"
                onClick={() => {
                  setEggSelect(Egg.Egg_White);
                }}
              />
            </div>
          </div>
        )}
        {/* ㅣㅣㅣㅣIdolPanelㅣㅣㅣㅣㅣㅣㅣ */}
        {IdolVisible && (
          <div class="RightPanel">
            <div>
              <img
                src={Idol.Idol_Aespa}
                class="Card"
                onClick={() => {
                  setIdolSelect(Idol.Idol_Aespa);
                }}
              />
              <img
                src={Idol.Idol_Bts}
                class="Card"
                onClick={() => {
                  setIdolSelect(Idol.Idol_Bts);
                }}
              />
            </div>
            <div>
              <img
                src={Idol.Idol_Ive}
                class="Card"
                onClick={() => {
                  setIdolSelect(Idol.Idol_Ive);
                }}
              />
              <img
                src={Idol.Idol_Nct}
                class="Card"
                onClick={() => {
                  setIdolSelect(Idol.Idol_Nct);
                }}
              />
            </div>
          </div>
        )}
        {/* ㅣㅣㅣㅣbackPanelㅣㅣㅣㅣㅣㅣㅣ */}
        {BackVisible && (
          <div class="RightPanel">
            <div>
              <img
                src={Back.Back_Mint}
                class="Card"
                onClick={() => {
                  setBackSelect(Back.Back_Mint);
                }}
              />
              <img
                src={Back.Back_Pink}
                class="Card"
                onClick={() => {
                  setBackSelect(Back.Back_Pink);
                }}
              />
            </div>
            <div>
              <img
                src={Back.Back_Rainbow}
                class="Card"
                onClick={() => {
                  setBackSelect(Back.Back_Rainbow);
                }}
              />
              <img
                src={Back.Back_Zebra}
                class="Card"
                onClick={() => {
                  setBackSelect(Back.Back_Zebra);
                }}
              />
            </div>
          </div>
        )}

        <button class="nftBtn" onClick={NFTBtn}>
          NFT 발행
        </button>
      </div>
    </div>
  );
};

export default Custom_1;
