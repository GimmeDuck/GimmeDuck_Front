import React, { useState } from "react";
import fetch from "node-fetch";

const MarketCard = (props) => {
  var imgList;

  const [image_url, setUrl] = useState("");

  return <img src={props.name} className="Market_card" />;
};

export default MarketCard;
