import React, { useState } from "react";
import fetch from "node-fetch";

const MarketCard = (props) => {
  var imgList = "0";

  const handleClick = (event) => {
    var imgList = "0";
    imgList = event.currentTarget.id;
    window.location.href =
      "https://opensea.io/assets/klaytn/0x319d5b92de3f496daa7f6ddbda9e1b4be8feff6f/" +
      imgList;
  };


  const [img_, setImg_] = useState(
    <img
        src={props.name}
        id={props.tokenid}
        className="Market_img"
        onClick={handleClick}
        onError={() => {
          setImg_(
            <img src="img/Egg.png"
            className="Market_img" />
          )}}
      />
  );

  return (
    img_
  );
};

export default MarketCard;
