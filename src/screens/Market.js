import React, {useState} from "react";
import "../style/Market.css";
import fetch from 'node-fetch';
import MarketCard from "./MarketCard";


const Market = () => {
<<<<<<< HEAD
    
  return (
    <>
      <div className="medal_section">
        <MarketCard />
=======
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

  return (
    <>
      <div className="medal_section">
        <button
          id="load_button"
          onClick={() => {
            axios
              .request(options)
              .then(function (response) {
                console.log(response.data);
              })
              .catch(function (error) {
                console.error(error);
              });
            // Market_js;이거 없애면 market_js 창 완성 안돼서 오류남
          }}
        >
          눌러봥
        </button>
>>>>>>> 3eec5ce8095bcba13b17dd18eccb9d2ba401a58b
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
