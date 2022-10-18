import React, {useState} from "react";
import "../style/Market.css";
import fetch from 'node-fetch';
import MarketCard from "./MarketCard";


const Market = () => {
    
  return (
    <>
      <div className="medal_section">
        <MarketCard />
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
