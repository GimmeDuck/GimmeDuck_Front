import axios from "axios";
import MINTABI from "../abi/mintABI.json";
const A2P_API_PREPARE_URL = "https://a2a-api.klipwallet.com/v2/a2a/prepare";
const APP_NAME = "GIMMEDUCK";
const to = '0x38596eD0dceaC58632bCf8BD92B5af3854d6A768';
const amount = '0.1';


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
                console.log(`[Result] ${JSON.stringify(res.data.result)}`);
                console.log(res.data.result);
                console.log(res.data);
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
          to : to,  //GIMMEDUCK 지갑주소
          amount : amount, //0.1klay로 설정
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

