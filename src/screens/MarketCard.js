import React, {useState} from "react";
import fetch from 'node-fetch';

const MarketCard = () => {
    var axios = require("axios").default;
    var imgList;

    var options = {
      method: "GET",
      url: "https://th-api.klaytnapi.com/v2/contract/nft/0xe2f757796478b4ee139589a84d0f9f153f6ac9b1/token",
      headers: {
        "Content-Type": "application/json",
        "x-chain-id": "1001",
        Authorization:
          "Basic S0FTS0k4QVhDTkdPWDI5NTZSNVJFRTBEOkthcjczNmxSZnFkaHBxUGZCM1Y1dUF2N2I5QWlLWnJpYllVZndCSTA=",
      },
    };

    
    function getImg (url) {
        var image_url="";

        while (true) {
            if (image_url!="") {
                return image_url;
            }
            fetch("https://ipfs.io/ipfs/"+url)
            .then(res => res.json())
            .then((out) => {
                image_url = "https://ipfs.io/ipfs/"+out.image.substr(7);
                console.log(image_url);
            })
            .catch(err => { throw err });  
        }
    }


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

    imgList = ["QmWd2xfQLb9djF7chZ9P1q5dKd3L3Ut78uKJENm7NAF6NR", "QmW7XRmxWFCY2kJiyGFGwtLXvcaTeXZCh4j4c4bo9x6a1t"].map((tokenurl,index) => <li key={index}>{getImg(tokenurl)}</li>);

  return (
    <ul className="Market_card">
        {/* <div className="Market_cardtext">Example</div> */}
        {imgList}
    </ul>
  );
};

export default MarketCard;