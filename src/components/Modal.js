import React from "react";
import "../style/Modal.css";

const Modal = ({ modalClose }) => {
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
        }}
      >
        <button className="modal__button" onClick={modalClose}>
          {" "}
          Modal Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
