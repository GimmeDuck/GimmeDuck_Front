import axios from "axios";
import React , {useState} from 'react';
import MINTABI from "../abi/mintABI.json";
const A2P_API_PREPARE_URL = "https://a2a-api.klipwallet.com/v2/a2a/prepare";
const APP_NAME = "GIMMEDUCK";
const to = "0xbD786cB9eCcD0C285c4e843d7c261c823262F225";  //컨트랙 주소
const amount = "0.001";
const abi = '{ "constant": false, "inputs": [{"internalType": "address", "name": "user","type": "address"},{"internalType": "string","name":"_newBaseURI","type": "string"}],"name": "publicMint","outputs": [],"payable": true,"stateMutability": "payable","type": "function"}';

const getKlipAccessUrl = (request_key) => {
  return `https://klipwallet.com/?target=/a2a?request_key=${request_key}`;
};

//지갑 주소 수집
export const getAddress = (setQrvalue, callback) => {
    axios
      .post(A2P_API_PREPARE_URL, {
        bapp: {
          name: APP_NAME,
        },
        type: "auth",
      })
      .then((response) => {
        const { request_key } = response.data;
        setQrvalue(getKlipAccessUrl(request_key));
        let timerId = setInterval(() => {
          axios
            .get(
              `https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${request_key}`
            )
            .then((res) => {
              if (res.data.result) {
                //console.log(`[Result] ${JSON.stringify(res.data.result)}`);
                // console.log(res.data.result);
                // console.log(res.data);
                callback(res.data.result.klaytn_address);
                clearInterval(timerId);
              }
            });
        }, 1000);
      });
  };

  //klay 전송
  export const send_klay = (setQrvalue, setMyAddress) => {
    axios
      .post(A2P_API_PREPARE_URL, {
        bapp: {
          name: APP_NAME, //GIMMEDUCK
        },
        transaction: {
          from : setMyAddress, // optional, user 지갑주소
          to : "",  //GIMMEDUCK 지갑주소
          amount : amount, //0.001klay로 설정
        },
        type : "send_klay",
      })
      .then((response) => {
        const { request_key } = response.data;
        setQrvalue(getKlipAccessUrl(request_key));
        let timerId = setInterval(() => {
          axios
            .get(
              `https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${request_key}`
            )
            .then((res) => {
              if (res.data.result) {

                clearInterval(timerId);
              };
            });
        }, 1000);
      })
      .catch((err)=>{
        console.log(err);
      });
};


//컨트랙 실행
export const execute_Contract = (setQrvalue, user, baseURI) => {
  axios
  .post(A2P_API_PREPARE_URL , {
    bapp : {
      name: APP_NAME,
    },
    type : "execute_contract",
    transaction : {
      to: to, // contract address
      value: "1000000000000000", // 단위는 peb.
      abi: abi,
      params:`[\"${user}\", \"${baseURI}\"]`,
    },
  })
  .then((response)=>{
    console.log(response);
    const { request_key } = response.data;
    setQrvalue(getKlipAccessUrl(request_key));
    let timerId = setInterval(() => {
      axios
        .get(
          `https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${request_key}`
        )
        .then((res) => {
          if (res.data.result) {
            clearInterval(timerId);
            //window.location.href = "/Donate";
          };
        });
    }, 1000);
  })
  .catch((err)=>{
    console.log(err);
  });
};