const request = require("request");
class Market_js {
  constructor() {}
  async hash() {
    const options = {
      method: "GET",
      url: "https://th-api.klaytnapi.com/v2/contract/nft/0xe2f757796478b4ee139589a84d0f9f153f6ac9b1/owner/0xFc0147E706EE3231B8aB521C48C53da7d6a52f22",
      headers: {
        "Content-Type": "application/json",
        "x-chain-id": "1001",
        Authorization:
          "Basic S0FTS0k4QVhDTkdPWDI5NTZSNVJFRTBEOkthcjczNmxSZnFkaHBxUGZCM1Y1dUF2N2I5QWlLWnJpYllVZndCSTA=",
      },
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      console.log(body);
    });
  }
}

export default Market_js;
