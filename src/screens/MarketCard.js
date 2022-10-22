import React, { useState } from "react";
import fetch from "node-fetch";

const MarketCard = (props) => {
  var imgList = "0";

  const [image_url, setUrl] = useState("");

  const handleClick = (event) => {
    var imgList = "0";
    imgList = event.currentTarget.id;
    console.log(imgList);
    window.location.href =
      "https://opensea.io/assets/klaytn/0x319d5b92de3f496daa7f6ddbda9e1b4be8feff6f/" +
      imgList;
  };
  return (
    <div className="Market_card">
      <img
        alt={"Opensea에서 확인해주세요."}
        src={props.name}
        id={props.tokenid}
        className="Market_img"
        onClick={handleClick}
      />
      <div style={{ paddingTop: "5%" }}>{props.tokenid}번째 Gimme-duck</div>
    </div>
  );
};

export default MarketCard;
