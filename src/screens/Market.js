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
      //console.log("들고온" + response.data);
    })
    .catch(function (error) {
      //console.error(error);
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
        rst.push(
          <div className="Market_card">
            <MarketCard name={array[i]} tokenid={i + 1} />
            <div style={{ paddingTop: "5%" }}>{i + 1}번째 Gimme-duck</div>
          </div>
        );
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
      <div className="market_Nfts">
        GimmeDuck Collection
        <div style={{ display: "flex", flexWrap: "wrap" }}>{rst}</div>
      </div>
    </div>
  );
};

export default Market;
