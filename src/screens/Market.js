import React, { useEffect, useState } from "react";
import "../style/Market.css";
import fetch from "node-fetch";
import MarketCard from "./MarketCard";

const Market = () => {
  let imgs = [];
  const [array, setArray] = useState([]);
  const [nftNum, SetnftNum] = useState("0");
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
      console.log("들고온" + response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  //들고온 정보에서 메타데이터만 골라서 배열에 넣음
  useEffect(() => {
    axios.request(options).then(function (response) {
      //api에서 토큰 URI 링크만 imgs 배열에 넣음
      for (let i = 0; i < response.data.items.length; i++) {
        imgs.push(
          "https://ipfs.io/ipfs/" + response.data.items[i].tokenUri.substr(0)
        );
        SetnftNum(response.data.items.length);
      }
      console.log(imgs);
      //토큰 URI 링크에서 이미지링크를 따서 array 배열에 넣음
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
          })
          .then(() => {
            if (i == response.data.items.length - 1) {
              console.log(array);
            }
          })
          .then(() => {});
      }
    });
  }, []);

  //array 배열의 이미지들을 컴포넌트화하기
  useEffect(() => {
    if (done == true) {
      for (let i = 0; i < nftNum; i++) {
        rst.push(<MarketCard name={array[i]} tokenid={nftNum - i} />);
      }
      setLoading(false);
    }
  }, [done]);

  //KAS API에서 불러오는 시간 벌어놓기
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="market_Back">
      <div className="medal_section">
        <div className="second">
          <div className="rapper">
            <img className="medal" src="img/silver-medal.png" />
            <img className="img" src="img/2.png" />
            <p className="nickname">BTS_duck</p>
            <p className="klay">270 Klay</p>
          </div>
        </div>
        <div className="first">
          <div className="rapper">
            <img className="medal" src="img/gold-medal.png" />
            <img className="img" src="img/1.png" />
            <p className="nickname">IVE_love</p>
            <p className="klay">280 Klay</p>
          </div>
        </div>
        <div className="second">
          <div className="rapper">
            <img className="medal" src="img/bronze-medal.png" />
            <img className="img" src="img/3.png" />
            <p className="nickname">NCT_jahyun</p>
            <p className="klay">250 Klay</p>
          </div>
        </div>
      </div>

      <div className="market_Nfts">
        친구들의 NFT
        <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "5%" }}>
          {rst}
        </div>
      </div>
    </div>
  );
};

export default Market;
