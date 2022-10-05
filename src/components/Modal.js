import React, { useState } from "react";
import "../style/Modal.css";
import { ReactPainter } from "react-painter";
import { resolve } from "url";
import * as Custom from "../screens/Custom_1.js";
const Egg_Mint = require("../custom_Img/Egg/Egg_Mint.png");

var imgsrc = "blob:http://localhost:3000/15cdf288-d653-4713-842c-4a380e348bc4";

const Modal = ({ modalClose }) => {
  const [Cvs, setCvs] = useState(false);

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

            modalClose();
            if (Cvs == true) {
              setCvs(false);
            } else {
              setCvs(true);
            }
          }}
          render={({
            triggerSave,
            canvas,
            setColor,
            forceReRender,
            setLineWidth,
          }) => (
            // 캔버스
            <div
              style={{
                marginTop: "5%",
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
              {/* 버튼 */}
              <div
                style={{
                  marginTop: "5%",
                  backgroundColor: "gray",
                  borderRadius: "2%",
                  padding: "3%",
                }}
              >
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

                <button className="modal__button" onClick={forceReRender}>
                  Rerender
                </button>
                <button
                  className="modal__button"
                  onClick={() => {
                    triggerSave();
                  }}
                >
                  Save
                </button>
                <input
                  type="range"
                  onChange={(e) => setLineWidth(e.target.value)}
                />
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default Modal;
