import React, { useState } from "react";
import fetch from "node-fetch";

const MarketCard = (props) => {
  var imgList;

  const [image_url, setUrl] = useState("");

  // const getImg = (url) => {
  //   fetch("https://ipfs.io/ipfs/" + url)
  //     .then((res) => res.json())
  //     .then((out) => {
  //       setUrl("https://ipfs.io/ipfs/" + out.image.substr(7));
  //     })
  //     .catch((err) => {
  //       throw err;
  //     });
  //   return image_url;
  // };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //         var tokens = response.data.items;
  //         var tokenList = tokens.map(token => token.tokenUri.substr(7));

  //         imgList = tokenList.map(tokenurl => <li>{getImg(tokenurl)}</li>)
  //         //<img className="Market_cardimg" src={getImg(tokenurl)} width="300px"/>
  //     })
  //     .catch(function (error) {
  //     console.error(error);
  //     });

  // imgList = [
  //   "QmWd2xfQLb9djF7chZ9P1q5dKd3L3Ut78uKJENm7NAF6NR",
  //   "QmW7XRmxWFCY2kJiyGFGwtLXvcaTeXZCh4j4c4bo9x6a1t",
  // ].map((tokenurl, index) => <li key={index}>{getImg(tokenurl)}</li>);

  return (
    <ul className="Market_card">
      <div>
        <h3>안녕하세요. {props.name}</h3>
      </div>
    </ul>
  );
};

export default MarketCard;
