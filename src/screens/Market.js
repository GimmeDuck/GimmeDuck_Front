import React, { useState } from "react";
import "../style/Market.css";
import fetch from "node-fetch";
import MarketCard from "./MarketCard";

const Market = () => {
  let none = ["0"];
  let imgs = [];
  let imgList = [];
  let srcList = [];
  var axios = require("axios").default;

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

  axios
    .request(options)
    .then(function (response) {
      for (let i = 0; i < response.data.items.length; i++) {
        none = imgs.concat("1");
      }
      // for (let i = 0; i < response.data.items.length; i++) {
      //   imgList.concat("https://ipfs.io/ipfs/" + imgs[i].substr(7));
      // }
      //잘된다.
    })
    .catch(function (error) {
      console.error(error);
    });

  // let srcList = imgList.map((name) => <MarketCard name={name} />);
  // console.log(srcList);
  const names = ["갓대희", "김대희", "한대희"];
  console.log(none);
  console.log(names);
  const nameList = names.map((name) => <MarketCard name={name} />);
  console.log(nameList);
  return (
    <>
      <div className="medal_section">
        {/* <MarketCard /> */}
        {/* 
        <div className='second'>
          <div className='rapper'>
            <img className='medal' src = 'img/silver-medal.png'/>
            <img className = 'img' src='img/2.png' />
            <p className='nickname'>BTS_duck</p>
            <p className='klay'>270 Klay</p>
          </div>        
        </div>

        <div className='first'>
          <div className='rapper'>
            <img className='medal' src = 'img/gold-medal.png'/>
            <img className = 'img' src='img/1.png'  />
            <p className='nickname'>IVE_love</p>
            <p className='klay'>280 Klay</p>
          </div>
          
        </div>

        <div className='second'>
          <div className='rapper'>
            <img className='medal' src = 'img/bronze-medal.png'/>
            <img className = 'img' src='img/3.png' />
            <p className='nickname'>NCT_jahyun</p>
            <p className='klay'>250 Klay</p>
          </div>
        </div> */}
      </div>

      {/* <div style={{ height: '70vh' }}>
        <iframe
          src="https://testnets.opensea.io/collection/gimmeduck-token"
          width="100%"
          height="100%"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div> */}
    </>
  );
};

export default Market;
