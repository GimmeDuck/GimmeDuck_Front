import React, {useState} from "react";
import { useEffect } from "react";
import fetch from 'node-fetch';

const MarketCard = () => {
    var axios = require("axios").default;
    var imgList;
    var bool= false;

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

    let image_url;

    let image = [];
   let img;

    const getImg = async(url) => {
        
        const test1 = await fetch("https://ipfs.io/ipfs/"+url);
        const test2 = await test1.json();
        return "https://ipfs.io/ipfs/"+test2.image.substr(7);
        // .then((out) => {
        //     image_url = "https://ipfs.io/ipfs/"+out.image.substr(7);
            
        //     console.log("여기까지 실행--------------");
        //     console.log(image_url);
        //     return image_url;
           
        // })
        // .catch(err => { throw err });  
    }

   const getImageUrl = async (url) => {
    const image_url = await getImg(url);
    console.log(image_url)
    image.push(<li>{image_url}</li>);
    img = image.map(image_url => image_url.props.children);
    // img = image.map((image_url,index) => <li key={index} >{image_url.props.children}</li>);
    console.log(img);

   };
    

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

    imgList = ["QmWd2xfQLb9djF7chZ9P1q5dKd3L3Ut78uKJENm7NAF6NR", "QmW7XRmxWFCY2kJiyGFGwtLXvcaTeXZCh4j4c4bo9x6a1t"].map((tokenurl,index) => <li key={index}>{getImageUrl(tokenurl)}</li>);

    
  return (
    <ul className="Market_card">
        {/* <div className="Market_cardtext">Example</div> */}
      
			  {img}
	
    </ul>
  );
};

export default MarketCard;