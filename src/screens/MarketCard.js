import React, { useState } from "react";
import fetch from "node-fetch";

const MarketCard = (props) => {
  var imgList;

  const [image_url, setUrl] = useState("");

  return (
    <ul className="Market_card">
      <div>
        <img src={props.name} />
      </div>
    </ul>
  );
};

export default MarketCard;
