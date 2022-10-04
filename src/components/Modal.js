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
    <div className="modal__container">
      <div
        style={{
          width: "70%",
          backgroundColor: "lightgray",
          borderRadius: "5px",
          height: "600px",
          position: "absolute",
          left: "15%",
          top: "8%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <ReactPainter
          width={200}
          height={200}
          onSave={(blob) => {
            imgsrc = URL.createObjectURL(blob);
            if (Cvs == true) {
              setCvs(false);
            } else {
              setCvs(true);
            }
          }}
          // image={"https://aml2610.github.io/avatar.jpeg"}
          render={({ triggerSave, canvas, imageDownloadUrl }) => (
            <div>
              <div>
                <button
                  onClick={() => {
                    triggerSave();
                  }}
                >
                  Save Canvas
                </button>
                {imageDownloadUrl ? (
                  <a href={imageDownloadUrl} download>
                    Download
                  </a>
                ) : null}
              </div>
              <div
                style={{
                  border: "1px solid grey",

                  display: "inline-block",
                  borderRadius: "80% 15% 55% 50% / 55% 15% 80% 50%",
                  backgroundColor: "red",
                }}
              >
                {canvas}
              </div>
            </div>
          )}
        />
        {Cvs && (
          <img src={imgsrc} style={{ height: "100px" }} alt="Blob URL Image" />
        )}
        <button
          className="modal__button"
          onClick={() => {
            Custom.CvsImg(imgsrc);
            modalClose();
          }}
        >
          Modal Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
