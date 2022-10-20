import React, { useEffect, useState } from "react";
import "../style/Market.css";
import fetch from "node-fetch";
import MarketCard from "./MarketCard";

const Market = () => {
  let none = ["0"];
  let imgs = [];
  let imgList = [];
  let srcList = [];
  let nameList;
  const [array, setArray] = useState([]);
  let [rst, setrst] = useState([]);
  var axios = require("axios").default;

  const [isLoading, setLoading] = useState(true);
  const [done, setDone] = useState(false);

  //KAS API 호출하는 부분
  var options = {
    method: "GET",
    url: "https://th-api.klaytnapi.com/v2/contract/nft/0x319d5b92de3f496daa7f6ddbda9e1b4be8feff6f/token",
    headers: {
      "Content-Type": "application/json",
      "x-chain-id": "8217",
      Authorization:
        "Basic S0FTS0k4QVhDTkdPWDI5NTZSNVJFRTBEOkthcjczNmxSZnFkaHBxUGZCM1Y1dUF2N2I5QWlLWnJpYllVZndCSTA=",
    },
  };

  //KAS API에서 모든 정보를 들고옴
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  //들고온 정보에서 메타데이터만 골라서 배열에 넣음
  useEffect(() => {
    axios.request(options).then(function (response) {
      //api에서 메타데이터를 받아옴
      for (let i = 0; i < response.data.items.length; i++) {
        imgs.push(
          "https://ipfs.io/ipfs/" + response.data.items[i].tokenUri.substr(0)
        );
      }
      console.log(imgs);
      //메타데이터에서 이미지링크로 바꿈
      for (let i = 0; i < response.data.items.length; i++) {
        fetch(imgs[i])
          .then((res) => res.json())
          .then((out) => {
            array.push("https://ipfs.io/ipfs/" + out.image.substr(7));
          })
          .then(() => {
            if (i == response.data.items.length - 1) {
              setDone(true);
            }
          });
      }
      console.log(array);
    });
  }, []);

  //이미지 링크를 컴포넌트화함
  useEffect(() => {
    if (done == true) {
      for (let i = 0; i < 9; i++) {
        rst.push(<MarketCard name={array[i]} />);
        console.log(rst);
      }
      setLoading(false);
    }
  }, [done]);

  //KAS API에서 불러오는 시간 벌어놓기
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="medal_section">
        {rst}
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
