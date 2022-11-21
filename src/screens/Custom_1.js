import React, { useState, useRef, useEffect } from "react";
import "../style/Custom_1.css";
import CustomModal from "../components/Modal";
import exportAsImage from "../utils/exportAsImage";
//caver
import execute_func from "../screen_js/caver.js";
//로딩창
import Loading from "./Loading";

//민팅 실험중 ------------------------------------------------------------------
import axios from "axios";
import * as KlipAPI from "../screen_js/Buyegg_js";
import Modal from "react-modal";
import { QRCodeSVG } from "qrcode.react";
import { myAddress } from "./Home";

var global = global || window;
global.Buffer = global.Buffer || require("buffer").Buffer;

let CvsImgUrl = [];
let CvsChild = [];
let num = -1;
let CvsSelct = "";
let CvsIdolname = "default";
let CvsUrl;

export function CvsImg(url) {
  CvsUrl = url;
  if (url != undefined) {
    num++;
  }
}
export function CvsIdol(idolname) {
  CvsIdolname = idolname;
}

const empty = require("../custom_Img/empty.png");
const body_snowman = require("../custom_Img/Body/body_snowman.png");
const body_ribbon = require("../custom_Img/Body/body_ribbon.png");
const body_pink = require("../custom_Img/Body/body_pink.png");
const body_green = require("../custom_Img/Body/body_green.png");
const body_mummy = require("../custom_Img/Body/body_mummy.png");
const body_gradation = require("../custom_Img/Body/body_gradation.png");
const body_fur = require("../custom_Img/Body/body_fur.png");
const body_egg = require("../custom_Img/Body/body_egg.png");
const body_dynamic = require("../custom_Img/Body/body_dynamic.png");
const body_dalma = require("../custom_Img/Body/body_dalma.png");
const body_cruella = require("../custom_Img/Body/body_cruella.png");
const body_angel = require("../custom_Img/Body/body_angel.png");
const Body_Yellow = require("../custom_Img/Body/body_yellow.png");
const Body_Blue = require("../custom_Img/Body/body_blue.png");
const Body_White = require("../custom_Img/Body/body_white.png");

const Body = {
  Body_Yellow,
  Body_Blue,
  Body_White,
  body_snowman,
  body_ribbon,
  body_pink,
  body_mummy,
  body_gradation,
  body_fur,
  body_egg,
  body_green,
  body_dynamic,
  body_dalma,
  body_cruella,
  body_angel,
};

const hair_yellow = require("../custom_Img/Hair/hair_yellow.png");
const hair_veret = require("../custom_Img/Hair/hair_veret.png");
const hair_tie = require("../custom_Img/Hair/hair_tie.png");
const hair_horn = require("../custom_Img/Hair/hair_horn.png");
const hair_flower = require("../custom_Img/Hair/hair_flower.png");
const hair_crown = require("../custom_Img/Hair/hair_crown.png");
const hair_cowboy = require("../custom_Img/Hair/hair_cowboy.png");
const hair_construct = require("../custom_Img/Hair/hair_construct.png");
const hair_cap = require("../custom_Img/Hair/hair_cap.png");
const hair_bucket = require("../custom_Img/Hair/hair_bucket.png");
const hair_bluehat = require("../custom_Img/Hair/hair_bluehat.png");
const hair_blackhat = require("../custom_Img/Hair/hair_blackhat.png");
const hair_angel = require("../custom_Img/Hair/hair_angel.png");
const hair_airpod = require("../custom_Img/Hair/hair_airpod.png");
const hair_winter = require("../custom_Img/Hair/hair_winter.png");

const Hair = {
  hair_yellow,
  hair_veret,
  hair_tie,
  hair_horn,
  hair_flower,
  hair_crown,
  hair_cowboy,
  hair_construct,
  hair_cap,
  hair_bucket,
  hair_bluehat,
  hair_blackhat,
  hair_angel,
  hair_airpod,
  hair_winter,
};

const mouth_black = require("../custom_Img/Mouth/mouth_black.png");
const mouth_blue = require("../custom_Img/Mouth/mouth_blue.png");
const mouth_cheek = require("../custom_Img/Mouth/mouth_cheek.png");
const mouth_cigaratte = require("../custom_Img/Mouth/mouth_cigaratte.png");
const mouth_dalma = require("../custom_Img/Mouth/mouth_dalma.png");
const mouth_green = require("../custom_Img/Mouth/mouth_green.png");
const mouth_mask = require("../custom_Img/Mouth/mouth_mask.png");
const mouth_mic = require("../custom_Img/Mouth/mouth_mic.png");
const mouth_piercing = require("../custom_Img/Mouth/mouth_piercing.png");
const mouth_pink = require("../custom_Img/Mouth/mouth_pink.png");
const mouth_red = require("../custom_Img/Mouth/mouth_red.png");
const mouth_rose = require("../custom_Img/Mouth/mouth_rose.png");
const mouth_tongue = require("../custom_Img/Mouth/mouth_tongue.png");
const mouth_white = require("../custom_Img/Mouth/mouth_white.png");
const mouth_yellow = require("../custom_Img/Mouth/mouth_yellow.png");

const Mouth = {
  mouth_black,
  mouth_blue,
  mouth_cheek,
  mouth_cigaratte,
  mouth_dalma,
  mouth_green,
  mouth_mask,
  mouth_mic,
  mouth_piercing,
  mouth_pink,
  mouth_red,
  mouth_rose,
  mouth_tongue,
  mouth_white,
  mouth_yellow,
};

const eye_alien = require("../custom_Img/Eye/eye_alien.png");
const eye_big = require("../custom_Img/Eye/eye_big.png");
const eye_dot = require("../custom_Img/Eye/eye_dot.png");
const eye_glasses = require("../custom_Img/Eye/eye_glasses.png");
const eye_goegle = require("../custom_Img/Eye/eye_goegle.png");
const eye_goong = require("../custom_Img/Eye/eye_goong.png");
const eye_heart = require("../custom_Img/Eye/eye_heart.png");
const eye_lash = require("../custom_Img/Eye/eye_lash.png");
const eye_line = require("../custom_Img/Eye/eye_line.png");
const eye_movie = require("../custom_Img/Eye/eye_movie.png");
const eye_normal = require("../custom_Img/Eye/eye_normal.png");
const eye_patch = require("../custom_Img/Eye/eye_patch.png");
const eye_sparkle = require("../custom_Img/Eye/eye_sparkle.png");
const eye_tears = require("../custom_Img/Eye/eye_tears.png");
const eye_uni = require("../custom_Img/Eye/eye_uni.png");

const Eye = {
  eye_alien,
  eye_big,
  eye_dot,
  eye_glasses,
  eye_goegle,
  eye_goong,
  eye_heart,
  eye_lash,
  eye_line,
  eye_movie,
  eye_normal,
  eye_patch,
  eye_sparkle,
  eye_tears,
  eye_uni,
};

const egg_white = require("../custom_Img/Egg/egg_white.png");
const egg_skyblue = require("../custom_Img/Egg/egg_skyblue.png");
const egg_yellow = require("../custom_Img/Egg/egg_yellow.png");
const egg_pink = require("../custom_Img/Egg/egg_pink.png");
const egg_purple = require("../custom_Img/Egg/egg_purple.png");
const egg_beige = require("../custom_Img/Egg/egg_beige.png");
const egg_black = require("../custom_Img/Egg/egg_black.png");
const egg_blue = require("../custom_Img/Egg/egg_blue.png");
const egg_deepblue = require("../custom_Img/Egg/egg_deepblue.png");
const egg_green = require("../custom_Img/Egg/egg_green.png");
const egg_brown = require("../custom_Img/Egg/egg_brown.png");
const egg_hotpink = require("../custom_Img/Egg/egg_hotpink.png");
const egg_mint = require("../custom_Img/Egg/egg_mint.png");
const egg_orange = require("../custom_Img/Egg/egg_orange.png");
const egg_red = require("../custom_Img/Egg/egg_red.png");
const Egg = {
  egg_white,
  egg_skyblue,
  egg_yellow,
  egg_pink,
  egg_purple,
  egg_beige,
  egg_black,
  egg_blue,
  egg_deepblue,
  egg_green,
  egg_brown,
  egg_hotpink,
  egg_mint,
  egg_orange,
  egg_red,
};


const Idol_IGOT7 = require("../custom_Img/Idol/갓세븐.png");
const Idol_Bunnies = require("../custom_Img/Idol/뉴진스.png");
const Idol_THEB = require("../custom_Img/Idol/더보이즈.png");
const Idol_MyDay = require("../custom_Img/Idol/데이식스.png");
const Idol_ReVeluv = require("../custom_Img/Idol/레드벨벳.png");
const Idol_FEARNOT = require("../custom_Img/Idol/르세라핌.png");
const Idol_MONBEBE = require("../custom_Img/Idol/몬스타엑스.png");
const Idol_ARMY = require("../custom_Img/Idol/방탄.png");
const Idol_BLINK = require("../custom_Img/Idol/블랙핑크.png");
const Idol_CARAT = require("../custom_Img/Idol/세븐틴.png");
const Idol_STAY = require("../custom_Img/Idol/스키즈.png");
const Idol_SWITH = require("../custom_Img/Idol/스테이씨.png");
const Idol_AROHA = require("../custom_Img/Idol/아스트로.png");
const Idol_NEVERLAND = require("../custom_Img/Idol/아이들.png");
const Idol_DIVE = require("../custom_Img/Idol/아이브.png");
const Idol_MY = require("../custom_Img/Idol/에스파.png");
const Idol_ATINY = require("../custom_Img/Idol/에이티즈.png");
const Idol_NSWER = require("../custom_Img/Idol/엔믹스.png");
const Idol_NCTzen = require("../custom_Img/Idol/엔시티127.png");
const Idol_ENGENE = require("../custom_Img/Idol/엔하이픈.png");
const Idol_NCTzen2 = require("../custom_Img/Idol/엥드림.png");
const Idol_Miracle = require("../custom_Img/Idol/오마이걸.png");
const Idol_UJUNG = require("../custom_Img/Idol/우주소녀.png");
const Idol_TOMOON = require("../custom_Img/Idol/원어스.png");
const Idol_RUi = require("../custom_Img/Idol/위아이.png");
const Idol_MIDZY = require("../custom_Img/Idol/있지.png");
const Idol_Kep1ian = require("../custom_Img/Idol/케플러.png");
const Idol_LUVITY = require("../custom_Img/Idol/크래비티.png");
const Idol_MOA = require("../custom_Img/Idol/투바투.png");
const Idol_tripleS = require("../custom_Img/Idol/트리플에스.png");
const Idol_ONCE = require("../custom_Img/Idol/트와이스.png");
const Idol_FIX = require("../custom_Img/Idol/cix.png");

const Idol_Plus = require("../custom_Img/Idol/Idol_Plus.png");

const Idol = { 
  Idol_IGOT7, Idol_Bunnies, Idol_THEB, Idol_MyDay, Idol_ReVeluv,Idol_FEARNOT,  
  Idol_MONBEBE, Idol_ARMY, Idol_BLINK, Idol_CARAT, Idol_STAY, Idol_SWITH, Idol_AROHA, Idol_NEVERLAND, 
  Idol_DIVE, Idol_MY, Idol_ATINY, Idol_NSWER, Idol_NCTzen, Idol_ENGENE, Idol_NCTzen2, Idol_Miracle, Idol_UJUNG, Idol_TOMOON, 
  Idol_RUi, Idol_MIDZY, Idol_Kep1ian, Idol_LUVITY, Idol_MOA, Idol_tripleS, Idol_ONCE, Idol_FIX,
  Idol_Plus 
};




const back_black = require("../custom_Img/Back/back_black.png");
const back_blue = require("../custom_Img/Back/back_blue.png");
const back_bluepurple = require("../custom_Img/Back/back_bluepurple.png");
const back_blueyellow = require("../custom_Img/Back/back_blueyellow.png");
const back_fullYellow = require("../custom_Img/Back/back_fullYellow.png");
const back_green = require("../custom_Img/Back/back_green.png");
const back_whiteyellow = require("../custom_Img/Back/back_whiteyellow.png");
const back_hotpink = require("../custom_Img/Back/back_hotpink.png");
const back_pink = require("../custom_Img/Back/back_pink.png");
const back_pinkgreen = require("../custom_Img/Back/back_pinkgreen.png");
const back_pinkyellow = require("../custom_Img/Back/back_pinkyellow.png");
const back_white = require("../custom_Img/Back/back_white.png");

const Back = {
  back_black,
  back_blue,
  back_bluepurple,
  back_blueyellow,
  back_fullYellow,
  back_green,
  back_whiteyellow,
  back_hotpink,
  back_pink,
  back_pinkgreen,
  back_pinkyellow,
  back_white,
};

const Custom_1 = () => {
  // 지갑주소 달고다니기
  const search = window.location.search; // returns the URL query String
  const params = new URLSearchParams(search);
  const myadd = params.get("ad");

  // 로딩창
  const [loading, setLoading] = useState(false);

  const [idol, setIdol] = useState("");
  const [part, setPart] = useState("");

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

  const handleClick = (event) => {
    // console.log(event.currentTarget.src);
    setIdolSelect(event.currentTarget.src);
    SetCanvasSelect(true);
    setIdol(CvsIdolname);
  };

  //그림판 그림들을 CvsChild 배열에 컴포넌트화
  useEffect(() => {
    if (CvsUrl != undefined) {
      CvsImgUrl.push(CvsUrl);
      // console.log(CvsImgUrl);
      CvsChild.push(
        <img
          src={CvsImgUrl[num]}
          id={num}
          className="Card"
          style={{
            height: "12.5vmax",
            width: "12.5vmax",
          }}
          onClick={handleClick}
        />
      );
    }
    setCvs(true);
    // console.log("true");
  }, [CvsUrl]);

  //그림판 모달 열고 닫음
  const modalClose = () => {
    setModalOpen(!modalOpen);
    // console.log("false");

    setCvs(false);
  };

  //민팅 실험중-----------------------------------------------------------------

  let img = localStorage.getItem("imgURL");

  const DEFAULT_QR_CODE = "DEFAULT";
  const [qrvalue_auth, setQrvalue_auth] = useState(DEFAULT_QR_CODE);
  const [qrvalue_execute, setQrvalue_execute] = useState(DEFAULT_QR_CODE);
  const [auth_modalIsOpen, auth_setModalIsOpen] = useState(false);
  const [send_modalIsOpen, send_setModalIsOpen] = useState(false);
  var imgsaved = false;

  function test() {
    let ipfsHash;
    axios.post("/test", { image: img }).then((response) => {
      // 로딩창
      setLoading(false);

      console.log(response.data);
      ipfsHash = response.data;

      let timerId = setInterval(() => {
        KlipAPI.execute_Contract(
          setQrvalue_execute,
          myadd,
          ipfsHash,
          idol,
          part
        );
        send_setModalIsOpen(true);
        clearInterval(timerId);
      }, 1000);
    });
  }

  function NFTBtn(e) {
    // 로딩창
    setLoading(true);

    exportAsImage(exportRef.current, "test.png", idol, part)
      .then(() => {
        imgsaved = true;
        img = localStorage.getItem("imgURL");
      })
      .then(() => {
        test();
      });
  }

  const changePart = () => {
    var e = document.getElementById("Custom1_combo");
    setPart(e.options[e.selectedIndex].text);
  };

  // 민팅 버튼 활성화/비활성화
  function ActivateBtn() {
    if (idol === "" || part === "") {
      return (
        <button id="Custom1_disabled" disabled>
          아이돌과 기부영역을 선택해주세요
        </button>
      );
    } else {
      return (
        <button id="Custom1_able" onClick={() => NFTBtn()}>
          {idol + " 팬덤의 커스텀 NFT 발행"}
        </button>
      );
    }
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
        style={{ width: "10%", height: "35vmax", marginTop: "7%" }}
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
            console.log(MouthVisible);
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
          {/* ㅣㅣㅣㅣMouthㅣㅣㅣㅣㅣㅣㅣ */}
          <div className="Character-1-card">
            <img style={{ width: "380px" }} src={MouthSelect} />
          </div>{" "}
          {/* ㅣㅣㅣㅣEyeㅣㅣㅣㅣㅣㅣㅣ */}
          <div className="Character-1-card">
            <img style={{ width: "380px" }} src={EyeSelect} />
          </div>
          {/* ㅣㅣㅣㅣHairㅣㅣㅣㅣㅣㅣㅣ */}
          <div className="Character-1-card">
            <img style={{ width: "380px" }} src={HairSelect} />
          </div>
          {/* ㅣㅣㅣㅣEggㅣㅣㅣㅣㅣㅣㅣ */}
          <div className="Character-1-card">
            <img style={{ width: "380px" }} src={EggSelect} />
          </div>
          {/* ㅣㅣㅣㅣIdolㅣㅣㅣㅣㅣㅣㅣ */}
          <div className={IdolCvs}>
            <img style={{ width: IdolCvsSize }} src={IdolSelect} />
          </div>
        </div>

        {/* ㅣㅣㅣㅣ우측선택창ㅣㅣㅣㅣㅣㅣㅣ */}
        {/* ㅣㅣㅣㅣBodyPanelㅣㅣㅣㅣㅣㅣㅣ */}
        {BodyVisible && (
          <div className="RightPanel">
            <div>
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
                src={Body.Body_Blue}
                className="Card"
                onClick={() => {
                  setBodySelect(Body.Body_Blue);
                }}
              />
              <img
                src={Body.body_snowman}
                className="Card"
                onClick={() => {
                  setBodySelect(Body.body_snowman);
                }}
              />
              <img
                src={Body.body_ribbon}
                className="Card"
                onClick={() => {
                  setBodySelect(Body.body_ribbon);
                }}
              />
              <img
                src={Body.body_pink}
                className="Card"
                onClick={() => {
                  setBodySelect(Body.body_pink);
                }}
              />
              <img
                src={Body.body_mummy}
                className="Card"
                onClick={() => {
                  setBodySelect(Body.body_mummy);
                }}
              />
              <img
                src={Body.body_green}
                className="Card"
                onClick={() => {
                  setBodySelect(Body.body_green);
                }}
              />
              <img
                src={Body.body_gradation}
                className="Card"
                onClick={() => {
                  setBodySelect(Body.body_gradation);
                }}
              />
              <img
                src={Body.body_fur}
                className="Card"
                onClick={() => {
                  setBodySelect(Body.body_fur);
                }}
              />
              <img
                src={Body.body_egg}
                className="Card"
                onClick={() => {
                  setBodySelect(Body.body_egg);
                }}
              />
              <img
                src={Body.body_dynamic}
                className="Card"
                onClick={() => {
                  setBodySelect(Body.body_dynamic);
                }}
              />
              <img
                src={Body.body_dalma}
                className="Card"
                onClick={() => {
                  setBodySelect(Body.body_dalma);
                }}
              />
              <img
                src={Body.body_cruella}
                className="Card"
                onClick={() => {
                  setBodySelect(Body.body_cruella);
                }}
              />
              <img
                src={Body.body_angel}
                className="Card"
                onClick={() => {
                  setBodySelect(Body.body_angel);
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
                src={empty}
                className="Card"
                onClick={() => {
                  setHairSelect(empty);
                }}
              />
              <img
                src={Hair.hair_yellow}
                className="Card"
                onClick={() => {
                  setHairSelect(Hair.hair_yellow);
                }}
              />
              <img
                src={Hair.hair_veret}
                className="Card"
                onClick={() => {
                  setHairSelect(Hair.hair_veret);
                }}
              />
              <img
                src={Hair.hair_tie}
                className="Card"
                onClick={() => {
                  setHairSelect(Hair.hair_tie);
                }}
              />
              <img
                src={Hair.hair_horn}
                className="Card"
                onClick={() => {
                  setHairSelect(Hair.hair_horn);
                }}
              />

              <img
                src={Hair.hair_flower}
                className="Card"
                onClick={() => {
                  setHairSelect(Hair.hair_flower);
                }}
              />
              <img
                src={Hair.hair_crown}
                className="Card"
                onClick={() => {
                  setHairSelect(Hair.hair_crown);
                }}
              />
              <img
                src={Hair.hair_cowboy}
                className="Card"
                onClick={() => {
                  setHairSelect(Hair.hair_cowboy);
                }}
              />
              <img
                src={Hair.hair_construct}
                className="Card"
                onClick={() => {
                  setHairSelect(Hair.hair_construct);
                }}
              />
              <img
                src={Hair.hair_cap}
                className="Card"
                onClick={() => {
                  setHairSelect(Hair.hair_cap);
                }}
              />
              <img
                src={Hair.hair_bucket}
                className="Card"
                onClick={() => {
                  setHairSelect(Hair.hair_bucket);
                }}
              />
              <img
                src={Hair.hair_bluehat}
                className="Card"
                onClick={() => {
                  setHairSelect(Hair.hair_bluehat);
                }}
              />
              <img
                src={Hair.hair_blackhat}
                className="Card"
                onClick={() => {
                  setHairSelect(Hair.hair_blackhat);
                }}
              />
              <img
                src={Hair.hair_angel}
                className="Card"
                onClick={() => {
                  setHairSelect(Hair.hair_angel);
                }}
              />
              <img
                src={Hair.hair_airpod}
                className="Card"
                onClick={() => {
                  setHairSelect(Hair.hair_airpod);
                }}
              />
              <img
                src={Hair.hair_winter}
                className="Card"
                onClick={() => {
                  setHairSelect(Hair.hair_winter);
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
                src={empty}
                className="Card"
                onClick={() => {
                  setEyeSelect(empty);
                }}
              />
              <img
                src={Eye.eye_alien}
                className="Card"
                onClick={() => {
                  setEyeSelect(Eye.eye_alien);
                }}
              />
              <img
                src={Eye.eye_big}
                className="Card"
                onClick={() => {
                  setEyeSelect(Eye.eye_big);
                }}
              />
              <img
                src={Eye.eye_dot}
                className="Card"
                onClick={() => {
                  setEyeSelect(Eye.eye_dot);
                }}
              />
              <img
                src={Eye.eye_glasses}
                className="Card"
                onClick={() => {
                  setEyeSelect(Eye.eye_glasses);
                }}
              />
              <img
                src={Eye.eye_goegle}
                className="Card"
                onClick={() => {
                  setEyeSelect(Eye.eye_goegle);
                }}
              />
              <img
                src={Eye.eye_goong}
                className="Card"
                onClick={() => {
                  setEyeSelect(Eye.eye_goong);
                }}
              />
              <img
                src={Eye.eye_heart}
                className="Card"
                onClick={() => {
                  setEyeSelect(Eye.eye_heart);
                }}
              />
              <img
                src={Eye.eye_lash}
                className="Card"
                onClick={() => {
                  setEyeSelect(Eye.eye_lash);
                }}
              />
              <img
                src={Eye.eye_line}
                className="Card"
                onClick={() => {
                  setEyeSelect(Eye.eye_line);
                }}
              />
              <img
                src={Eye.eye_movie}
                className="Card"
                onClick={() => {
                  setEyeSelect(Eye.eye_movie);
                }}
              />
              <img
                src={Eye.eye_normal}
                className="Card"
                onClick={() => {
                  setEyeSelect(Eye.eye_normal);
                }}
              />
              <img
                src={Eye.eye_patch}
                className="Card"
                onClick={() => {
                  setEyeSelect(Eye.eye_patch);
                }}
              />
              <img
                src={Eye.eye_sparkle}
                className="Card"
                onClick={() => {
                  setEyeSelect(Eye.eye_sparkle);
                }}
              />
              <img
                src={Eye.eye_tears}
                className="Card"
                onClick={() => {
                  setEyeSelect(Eye.eye_tears);
                }}
              />
              <img
                src={Eye.eye_uni}
                className="Card"
                onClick={() => {
                  setEyeSelect(Eye.eye_uni);
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
                src={empty}
                className="Card"
                onClick={() => {
                  setMouthSelect(empty);
                }}
              />
              <img
                src={Mouth.mouth_black}
                className="Card"
                onClick={() => {
                  setMouthSelect(Mouth.mouth_black);
                }}
              />
              <img
                src={Mouth.mouth_blue}
                className="Card"
                onClick={() => {
                  setMouthSelect(Mouth.mouth_blue);
                }}
              />
              <img
                src={Mouth.mouth_cheek}
                className="Card"
                onClick={() => {
                  setMouthSelect(Mouth.mouth_cheek);
                }}
              />
              <img
                src={Mouth.mouth_cigaratte}
                className="Card"
                onClick={() => {
                  setMouthSelect(Mouth.mouth_cigaratte);
                }}
              />
              <img
                src={Mouth.mouth_dalma}
                className="Card"
                onClick={() => {
                  setMouthSelect(Mouth.mouth_dalma);
                }}
              />
              <img
                src={Mouth.mouth_green}
                className="Card"
                onClick={() => {
                  setMouthSelect(Mouth.mouth_green);
                }}
              />
              <img
                src={Mouth.mouth_mask}
                className="Card"
                onClick={() => {
                  setMouthSelect(Mouth.mouth_mask);
                }}
              />
              <img
                src={Mouth.mouth_mic}
                className="Card"
                onClick={() => {
                  setMouthSelect(Mouth.mouth_mic);
                }}
              />
              <img
                src={Mouth.mouth_piercing}
                className="Card"
                onClick={() => {
                  setMouthSelect(Mouth.mouth_piercing);
                }}
              />
              <img
                src={Mouth.mouth_pink}
                className="Card"
                onClick={() => {
                  setMouthSelect(Mouth.mouth_pink);
                }}
              />
              <img
                src={Mouth.mouth_red}
                className="Card"
                onClick={() => {
                  setMouthSelect(Mouth.mouth_red);
                }}
              />
              <img
                src={Mouth.mouth_rose}
                className="Card"
                onClick={() => {
                  setMouthSelect(Mouth.mouth_rose);
                }}
              />
              <img
                src={Mouth.mouth_tongue}
                className="Card"
                onClick={() => {
                  setMouthSelect(Mouth.mouth_tongue);
                }}
              />
              <img
                src={Mouth.mouth_white}
                className="Card"
                onClick={() => {
                  setMouthSelect(Mouth.mouth_white);
                }}
              />
              <img
                src={Mouth.mouth_yellow}
                className="Card"
                onClick={() => {
                  setMouthSelect(Mouth.mouth_yellow);
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
                src={Egg.egg_white}
                className="Card"
                onClick={() => {
                  setEggSelect(Egg.egg_white);
                }}
              />
              <img
                src={Egg.egg_skyblue}
                className="Card"
                onClick={() => {
                  setEggSelect(Egg.egg_skyblue);
                }}
              />
              <img
                src={Egg.egg_yellow}
                className="Card"
                onClick={() => {
                  setEggSelect(Egg.egg_yellow);
                }}
              />
              <img
                src={Egg.egg_pink}
                className="Card"
                onClick={() => {
                  setEggSelect(Egg.egg_pink);
                }}
              />
              <img
                src={Egg.egg_purple}
                className="Card"
                onClick={() => {
                  setEggSelect(Egg.egg_purple);
                }}
              />
              <img
                src={Egg.egg_beige}
                className="Card"
                onClick={() => {
                  setEggSelect(Egg.egg_beige);
                }}
              />
              <img
                src={Egg.egg_black}
                className="Card"
                onClick={() => {
                  setEggSelect(Egg.egg_black);
                }}
              />
              <img
                src={Egg.egg_blue}
                className="Card"
                onClick={() => {
                  setEggSelect(Egg.egg_blue);
                }}
              />
              <img
                src={Egg.egg_deepblue}
                className="Card"
                onClick={() => {
                  setEggSelect(Egg.egg_deepblue);
                }}
              />
              <img
                src={Egg.egg_green}
                className="Card"
                onClick={() => {
                  setEggSelect(Egg.egg_green);
                }}
              />{" "}
              <img
                src={Egg.egg_brown}
                className="Card"
                onClick={() => {
                  setEggSelect(Egg.egg_brown);
                }}
              />{" "}
              <img
                src={Egg.egg_hotpink}
                className="Card"
                onClick={() => {
                  setEggSelect(Egg.egg_hotpink);
                }}
              />{" "}
              <img
                src={Egg.egg_mint}
                className="Card"
                onClick={() => {
                  setEggSelect(Egg.egg_mint);
                }}
              />{" "}
              <img
                src={Egg.egg_orange}
                className="Card"
                onClick={() => {
                  setEggSelect(Egg.egg_orange);
                }}
              />{" "}
              <img
                src={Egg.egg_red}
                className="Card"
                onClick={() => {
                  setEggSelect(Egg.egg_red);
                }}
              />
            </div>
          </div>
        )}
        {/* ㅣㅣㅣㅣIdolPanelㅣㅣㅣㅣㅣㅣㅣ */}
        {IdolVisible && (
          <div className="RightPanel">
            <div>
              <img src={Idol.Idol_ARMY} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_ARMY); SetCanvasSelect(false); setIdol("ARMY");}} />
              <img src={Idol.Idol_AROHA} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_AROHA); SetCanvasSelect(false); setIdol("AROHA");}} />
              <img src={Idol.Idol_ATINY} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_ATINY); SetCanvasSelect(false); setIdol("ATINY");}} />
              <img src={Idol.Idol_BLINK} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_BLINK); SetCanvasSelect(false); setIdol("BLINK");}} />
              <img src={Idol.Idol_Bunnies} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_Bunnies); SetCanvasSelect(false); setIdol("Bunnies");}} />
              <img src={Idol.Idol_CARAT} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_CARAT); SetCanvasSelect(false); setIdol("CARAT");}} />
              <img src={Idol.Idol_DIVE} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_DIVE); SetCanvasSelect(false); setIdol("DIVE");}} />
              <img src={Idol.Idol_ENGENE} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_ENGENE); SetCanvasSelect(false); setIdol("ENGENE");}} />
              <img src={Idol.Idol_FEARNOT} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_FEARNOT); SetCanvasSelect(false); setIdol("FEARNOT");}} />
              <img src={Idol.Idol_FIX} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_FIX); SetCanvasSelect(false); setIdol("FIX");}} />
              <img src={Idol.Idol_IGOT7} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_IGOT7); SetCanvasSelect(false); setIdol("IGOT7");}} />
              <img src={Idol.Idol_Kep1ian} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_Kep1ian); SetCanvasSelect(false); setIdol("Kep1ian");}} />
              <img src={Idol.Idol_LUVITY} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_LUVITY); SetCanvasSelect(false); setIdol("LUVITY");}} />
              <img src={Idol.Idol_MIDZY} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_MIDZY); SetCanvasSelect(false); setIdol("MIDZY");}} />
              <img src={Idol.Idol_MOA} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_MOA); SetCanvasSelect(false); setIdol("MOA");}} />
              <img src={Idol.Idol_MONBEBE} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_MONBEBE); SetCanvasSelect(false); setIdol("MONBEBE");}} />
              <img src={Idol.Idol_MY} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_MY); SetCanvasSelect(false); setIdol("MY");}} />
              <img src={Idol.Idol_Miracle} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_Miracle); SetCanvasSelect(false); setIdol("Miracle");}} />
              <img src={Idol.Idol_MyDay} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_MyDay); SetCanvasSelect(false); setIdol("MyDay");}} />
              <img src={Idol.Idol_NCTzen} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_NCTzen); SetCanvasSelect(false); setIdol("NCTzen");}} />
              <img src={Idol.Idol_NCTzen2} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_NCTzen2); SetCanvasSelect(false); setIdol("NCTzen");}} />
              <img src={Idol.Idol_NEVERLAND} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_NEVERLAND); SetCanvasSelect(false); setIdol("NEVERLAND");}} />
              <img src={Idol.Idol_NSWER} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_NSWER); SetCanvasSelect(false); setIdol("NSWER");}} />
              <img src={Idol.Idol_ONCE} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_ONCE); SetCanvasSelect(false); setIdol("ONCE");}} />
              <img src={Idol.Idol_RUi} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_RUi); SetCanvasSelect(false); setIdol("RUi");}} />
              <img src={Idol.Idol_ReVeluv} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_ReVeluv); SetCanvasSelect(false); setIdol("ReVeluv");}} />
              <img src={Idol.Idol_STAY} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_STAY); SetCanvasSelect(false); setIdol("STAY");}} />
              <img src={Idol.Idol_SWITH} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_SWITH); SetCanvasSelect(false); setIdol("SWITH");}} />
              <img src={Idol.Idol_THEB} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_THEB); SetCanvasSelect(false); setIdol("THEB");}} />
              <img src={Idol.Idol_TOMOON} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_TOMOON); SetCanvasSelect(false); setIdol("TOMOON");}} />
              <img src={Idol.Idol_UJUNG} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_UJUNG); SetCanvasSelect(false); setIdol("UJUNG");}} />
              <img src={Idol.Idol_tripleS} className="Card" onClick={() => {
                  setIdolSelect(Idol.Idol_tripleS); SetCanvasSelect(false); setIdol("tripleS");}} />



              {/* 추가된 그림판 사진 */}
              {Cvs && CvsChild}
              {/* 그림판 여는 곳 + */}
              <img src={Idol.Idol_Plus} className="Card" onClick={modalClose} />
              {modalOpen && <CustomModal modalClose={modalClose}></CustomModal>}
            </div>
          </div>
        )}
        {/* ㅣㅣㅣㅣbackPanelㅣㅣㅣㅣㅣㅣㅣ */}
        {BackVisible && (
          <div className="RightPanel">
            <div>
              <img
                src={empty}
                className="Card"
                onClick={() => {
                  setBackSelect(empty);
                }}
              />
              <img
                src={Back.back_black}
                className="Card"
                onClick={() => {
                  setBackSelect(Back.back_black);
                }}
              />
              <img
                src={Back.back_blue}
                className="Card"
                onClick={() => {
                  setBackSelect(Back.back_blue);
                }}
              />
              <img
                src={Back.back_bluepurple}
                className="Card"
                onClick={() => {
                  setBackSelect(Back.back_bluepurple);
                }}
              />
              <img
                src={Back.back_blueyellow}
                className="Card"
                onClick={() => {
                  setBackSelect(Back.back_blueyellow);
                }}
              />
              <img
                src={Back.back_fullYellow}
                className="Card"
                onClick={() => {
                  setBackSelect(Back.back_fullYellow);
                }}
              />
              <img
                src={Back.back_green}
                className="Card"
                onClick={() => {
                  setBackSelect(Back.back_green);
                }}
              />
              <img
                src={Back.back_hotpink}
                className="Card"
                onClick={() => {
                  setBackSelect(Back.back_hotpink);
                }}
              />
              <img
                src={Back.back_pink}
                className="Card"
                onClick={() => {
                  setBackSelect(Back.back_pink);
                }}
              />
              <img
                src={Back.back_pinkgreen}
                className="Card"
                onClick={() => {
                  setBackSelect(Back.back_pinkgreen);
                }}
              />
              <img
                src={Back.back_pinkyellow}
                className="Card"
                onClick={() => {
                  setBackSelect(Back.back_pinkyellow);
                }}
              />
              <img
                src={Back.back_white}
                className="Card"
                onClick={() => {
                  setBackSelect(Back.back_white);
                }}
              />
              <img
                src={Back.back_whiteyellow}
                className="Card"
                onClick={() => {
                  setBackSelect(Back.back_whiteyellow);
                }}
              />
            </div>
          </div>
        )}
        <div
          id="하단 버튼"
          style={{
            marginLeft: "56%",
            marginTop: "44%",
            position: "absolute",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <select id="Custom1_combo" onChange={() => changePart(this)}>
            <option value="steak">영역 선택</option>
            <option value="어린이">어린이 복지</option>
            <option value="노인">노인 복지</option>
            <option value="장애인">장애인 복지</option>
            <option value="환경">환경 복지</option>
          </select>
          <ActivateBtn />

          {/* <Modal className="buyegg_popup" isOpen={auth_modalIsOpen}>
            <QRCodeSVG className="qrcode" value={qrvalue_auth} />
            <div
              className="close"
              onClick={() => auth_setModalIsOpen(false)}
            ></div>
          </Modal> */}
          <Modal className="buyegg_popup" isOpen={send_modalIsOpen}>
            <QRCodeSVG className="qrcode" value={qrvalue_execute} />
            <div
              className="close"
              onClick={() => send_setModalIsOpen(false)}
            ></div>
            <div className="popup_comment">Klip 지갑으로 기부하기</div>
          </Modal>
        </div>
      </div>
      {loading ? <Loading /> : null}
    </div>
  );
};

export default Custom_1;
