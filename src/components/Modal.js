import React, { useEffect, useState } from "react";
import "../style/Modal.css";
import { ReactPainter } from "react-painter";
import HorizonLine from "./HorizonLine";
import * as Custom from "../screens/Custom_1.js";
const egg_mint = require("../custom_Img/Egg/egg_mint.png");

var imgsrc = "blob:http://localhost:3000/15cdf288-d653-4713-842c-4a380e348bc4";

const CustomModal = ({ modalClose }) => {
  const [Cvs, setCvs] = useState(false);
  const [IdolText, setIdolText] = useState("");
  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    if (IdolText.trim().length != 0) {
      setIsTrue(false);
    } else {
      setIsTrue(true);
    }
  }, [IdolText]);
  return (
    <div
      className="modal__container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* 흰색배경 */}
      <div className="modalbox">
        <ReactPainter
          width={200}
          height={270}
          onSave={(blob) => {
            imgsrc = URL.createObjectURL(blob);
            Custom.CvsImg(imgsrc);
            Custom.CvsIdol(IdolText);
            modalClose();
          }}
          render={({
            getCanvasProps,
            triggerSave,
            canvas,
            setColor,
            setLineWidth,
          }) => (
            // 캔버스
            <div
              style={{
                marginTop: "2%",
                display: "flex",
                alignItems: "center",

                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              {/* 알캔버스 */}
              <div
                style={{
                  border: "2px solid grey",
                  display: "inline-block",
                  borderRadius: "50% 50% 50% 50% / 60% 60% 50% 50%",
                  // backgroundColor: "red",
                  height: "35%",
                  backgroundColor: "lightgray",
                }}
              >
                {canvas}
              </div>
              <HorizonLine text={"색상 선택"} />
              {/* 버튼 */}
              <div style={{ margin: "2%" }}>
                <button
                  className="color_Btn"
                  style={{ backgroundColor: "#cc5959" }}
                  onClick={() => setColor("#cc5959")}
                ></button>
                <button
                  className="color_Btn"
                  style={{ backgroundColor: "#530e80" }}
                  onClick={() => setColor("#530e80")}
                ></button>
                <button
                  className="color_Btn"
                  style={{ backgroundColor: "#93c47d" }}
                  onClick={() => setColor("#93c47d")}
                ></button>
                <button
                  className="color_Btn"
                  style={{ backgroundColor: "#8da2bc" }}
                  onClick={() => setColor("#8da2bc")}
                ></button>
                <button
                  className="color_Btn"
                  style={{ backgroundColor: "#ffc16f" }}
                  onClick={() => setColor("#ffc16f")}
                ></button>

                <input
                  className="input"
                  type="color"
                  onChange={(e) => setColor(e.target.value)}
                />

                <input
                  type="range"
                  onChange={(e) => setLineWidth(e.target.value)}
                />
              </div>
              <HorizonLine text={"팬덤입력"} />
              <input
                name="idolname"
                type="text"
                placeholder="팬덤명을 입력하세요"
                onChange={(e) => setIdolText(e.target.value)}
              />
              <div style={{ margin: "1.2%", display: "flex" }}>
                <button
                  disabled={isTrue}
                  className={isTrue ? "modal_unactivebtn" : "modal_activebtn"}
                  onClick={() => {
                    triggerSave();
                  }}
                >
                  Save
                </button>

                <button
                  style={{ backgroundColor: "gray" }}
                  className="modal_activebtn"
                  onClick={() => {
                    Custom.CvsImg(undefined);
                    modalClose();
                  }}
                >
                  close
                </button>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default CustomModal;
