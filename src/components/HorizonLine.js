import React from "react";

const HorizonLine = ({ text }) => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        borderBottom: "1px solid rgb(50, 50, 50)",
        lineHeight: "0.1em",
        margin: "10px 0 20px",
        color: "rgb(80, 80, 80)",
      }}
    >
      <span style={{ background: "rgb(31, 31, 31)", padding: "0 10px" }}>
        {text}
      </span>
    </div>
  );
};

export default HorizonLine;
