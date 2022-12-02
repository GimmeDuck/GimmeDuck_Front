import React, { useState, useRef } from "react";
import "../style/RandomNFT.css";
import Swal from "sweetalert2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import exportAsImage from "../utils/exportAsImage";
import axios from "axios";
import * as KlipAPI from "../screen_js/Buyegg_js";
import Modal from "react-modal";
import { QRCodeSVG } from "qrcode.react";

//로딩창
import Loading from "./Loading";
import Waiting from "./Waiting";

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
const Body = [
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
];

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

const Hair = [
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
];
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

const Eye = [
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
];

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
const Egg = [
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
];

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

const Back = [
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
];
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

const Mouth = [
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
];

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
const Idol_Shinee = require("../custom_Img/Idol/샤이니.png");
const Idol_Plus = require("../custom_Img/Idol/Idol_Plus.png");

const Idol = {
  Idol_IGOT7,
  Idol_Bunnies,
  Idol_THEB,
  Idol_MyDay,
  Idol_ReVeluv,
  Idol_FEARNOT,
  Idol_MONBEBE,
  Idol_ARMY,
  Idol_BLINK,
  Idol_CARAT,
  Idol_STAY,
  Idol_SWITH,
  Idol_AROHA,
  Idol_NEVERLAND,
  Idol_DIVE,
  Idol_MY,
  Idol_ATINY,
  Idol_NSWER,
  Idol_NCTzen,
  Idol_ENGENE,
  Idol_NCTzen2,
  Idol_Miracle,
  Idol_UJUNG,
  Idol_TOMOON,
  Idol_RUi,
  Idol_MIDZY,
  Idol_Kep1ian,
  Idol_LUVITY,
  Idol_MOA,
  Idol_tripleS,
  Idol_ONCE,
  Idol_FIX,
  Idol_Plus,
  Idol_Shinee,
};

function RandomNFT() {
  // 지갑주소 달고다니기
  const search = window.location.search; // returns the URL query String
  const params = new URLSearchParams(search);
  const myadd = params.get("ad");
  console.log(myadd);

  // 로딩창
  const [loading, setLoading] = useState(false);
  const [waiting, setWaiting] = useState(false);

  const exportRef = useRef();
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 500,
  };

  const [idol, setIdol] = useState("");
  const [part, setPart] = useState("");

  function ActivateBtn() {
    if (idol === "" || part === "") {
      return (
        <button id="randMint_disabled" disabled>
          아이돌과 기부영역을 선택해주세요
        </button>
      );
    } else {
      return (
        <button id="randMint" onClick={randomBTN}>
          {idol + " 팬덤의 랜덤 NFT 발행"}
        </button>
      );
    }
  }

  // 민팅용 ------------------------------------------------------------------------------

  let img = localStorage.getItem("imgURL");
  let myAddress = "0x00000000000000000000000000000";
  const DEFAULT_QR_CODE = "DEFAULT";
  const DEFAULT_ADDRESS = "0x00000000000000000000000000000";
  const [qrvalue_auth, setQrvalue_auth] = useState(DEFAULT_QR_CODE);
  const [qrvalue_execute, setQrvalue_execute] = useState(DEFAULT_QR_CODE);
  const [auth_modalIsOpen, auth_setModalIsOpen] = useState(false);
  const [send_modalIsOpen, send_setModalIsOpen] = useState(false);

  var imgsaved = false;

  function test() {
    let ipfsHash;
    console.log("니 머하노");

    axios.post("/test", { image: img }).then((response) => {
      // 로딩창
      setLoading(false);

      console.log(response.data);
      ipfsHash = response.data;

      let timerId = setInterval(() => {
        KlipAPI.execute_Contract(
          setQrvalue_execute,
          setWaiting,
          send_setModalIsOpen,
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

  function randomBTN() {
    Swal.fire({
      title: "랜덤 기미덕 민팅",
      text: "기미덕이 곧바로 민팅되니 주의하세요!",
      icon: "warning",

      showCancelButton: true,
      confirmButtonColor: "rgb(191,144,0)",
      cancelButtonColor: "#d33",
      confirmButtonText: "민팅",
      cancelButtonText: "취소",
      reverseButtons: true, // 버튼 순서 거꾸로
    }).then((result) => {
      // 만약 Promise리턴을 받으면,
      if (result.isConfirmed) {
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
    });
  }

  // -----------------------------------------------------------------

  const changePart = () => {
    var e = document.getElementById("RandomNFT_combobox");
    setPart(e.options[e.selectedIndex].text);
  };

  return (
    <div className="background">
      <img src="img/Egg.png" id="randomEgg" alt="" />

      <select id="RandomNFT_combobox" onChange={() => changePart(this)}>
        <option value="steak">영역 선택</option>
        <option value="어린이">어린이 복지</option>
        <option value="노인">노인 복지</option>
        <option value="장애인">장애인 복지</option>
        <option value="환경">환경 복지</option>
      </select>

      <Slider {...settings}>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("ARMY");
          }}
        >
          <img src={Idol.Idol_ARMY} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("AROHA");
          }}
        >
          <img src={Idol.Idol_AROHA} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("ATINY");
          }}
        >
          <img src={Idol.Idol_ATINY} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("BLINK");
          }}
        >
          <img src={Idol.Idol_BLINK} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("Bunnies");
          }}
        >
          <img src={Idol.Idol_Bunnies} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("CARAT");
          }}
        >
          <img src={Idol.Idol_CARAT} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("DIVE");
          }}
        >
          <img src={Idol.Idol_DIVE} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("ENGENE");
          }}
        >
          <img src={Idol.Idol_ENGENE} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("FEARNOT");
          }}
        >
          <img src={Idol.Idol_FEARNOT} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("FIX");
          }}
        >
          <img src={Idol.Idol_FIX} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("IGOT7");
          }}
        >
          <img src={Idol.Idol_IGOT7} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("Kep1ian");
          }}
        >
          <img src={Idol.Idol_Kep1ian} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("LUVITY");
          }}
        >
          <img src={Idol.Idol_LUVITY} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("MIDZY");
          }}
        >
          <img src={Idol.Idol_MIDZY} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("MOA");
          }}
        >
          <img src={Idol.Idol_MOA} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("MONBEBE");
          }}
        >
          <img src={Idol.Idol_MONBEBE} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("MY");
          }}
        >
          <img src={Idol.Idol_MY} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("Miracle");
          }}
        >
          <img src={Idol.Idol_Miracle} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("MyDay");
          }}
        >
          <img src={Idol.Idol_MyDay} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("NCTzen");
          }}
        >
          <img src={Idol.Idol_NCTzen} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("NCTzen");
          }}
        >
          <img src={Idol.Idol_NCTzen2} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("NEVERLAND");
          }}
        >
          <img src={Idol.Idol_NEVERLAND} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("NSWER");
          }}
        >
          <img src={Idol.Idol_NSWER} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("ONCE");
          }}
        >
          <img src={Idol.Idol_ONCE} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("RUi");
          }}
        >
          <img src={Idol.Idol_RUi} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("ReVeluv");
          }}
        >
          <img src={Idol.Idol_ReVeluv} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("STAY");
          }}
        >
          <img src={Idol.Idol_STAY} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("SWITH");
          }}
        >
          <img src={Idol.Idol_SWITH} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("THEB");
          }}
        >
          <img src={Idol.Idol_THEB} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("TOMOON");
          }}
        >
          <img src={Idol.Idol_TOMOON} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("UJUNG");
          }}
        >
          <img src={Idol.Idol_UJUNG} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("tripleS");
          }}
        >
          <img src={Idol.Idol_tripleS} className="slideItem" alt="" />
        </div>
        <div
          className="RandomNFT_item"
          onClick={() => {
            setIdol("Shinee");
          }}
        >
          <img src={Idol.Idol_Shinee} className="slideItem" alt="" />
        </div>
      </Slider>

      <ActivateBtn />

      {loading ? <Loading /> : null}
      {waiting ? <Waiting /> : null}

      <Modal className="buyegg_popup" isOpen={auth_modalIsOpen}>
        <QRCodeSVG className="qrcode" value={qrvalue_auth} />
        <div className="close" onClick={() => auth_setModalIsOpen(false)}></div>
      </Modal>
      <Modal className="buyegg_popup" isOpen={send_modalIsOpen}>
        <QRCodeSVG className="qrcode" value={qrvalue_execute} />
        <div className="close" onClick={() => send_setModalIsOpen(false)}></div>
        <div className="popup_comment">Klip 지갑으로 기부하기</div>
      </Modal>

      <div
        className="Character_back"
        style={{ visibility: "visible", position: "absolute", zIndex: "-1" }}
        ref={exportRef}
      >
        {/* ㅣㅣㅣㅣbackㅣㅣㅣㅣㅣㅣㅣ */}
        <div className="Character-1-card">
          <img style={{ width: "380px" }} src={Back[getRandom(0, 11)]} alt="" />
        </div>
        {/* ㅣㅣㅣㅣBodyㅣㅣㅣㅣㅣㅣㅣ */}
        <div className="Character-1-card">
          <img style={{ width: "380px" }} src={Body[getRandom(0, 14)]} alt="" />
        </div>
        {/* ㅣㅣㅣㅣHairㅣㅣㅣㅣㅣㅣㅣ */}
        <div className="Character-1-card">
          <img style={{ width: "380px" }} src={Hair[getRandom(0, 14)]} alt="" />
        </div>
        {/* ㅣㅣㅣㅣEyeㅣㅣㅣㅣㅣㅣㅣ */}
        <div className="Character-1-card">
          <img style={{ width: "380px" }} src={Eye[getRandom(0, 14)]} alt="" />
        </div>
        {/* ㅣㅣㅣㅣMouthㅣㅣㅣㅣㅣㅣㅣ */}
        <div className="Character-1-card">
          <img
            style={{ width: "380px" }}
            src={Mouth[getRandom(0, 14)]}
            alt=""
          />
        </div>

        {/* ㅣㅣㅣㅣEggㅣㅣㅣㅣㅣㅣㅣ */}
        <div className="Character-1-card">
          <img style={{ width: "380px" }} src={Egg[getRandom(0, 14)]} alt="" />
        </div>

        {/* ㅣㅣㅣㅣIdolㅣㅣㅣㅣㅣㅣㅣ */}
        <div className="Character-1-card">
          <img style={{ width: "380px" }} src={Idol["Idol_" + idol]} alt="" />
        </div>
      </div>
    </div>
  );
}

//"img/Idol_" + idol + ".png"

export default RandomNFT;
