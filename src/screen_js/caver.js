var global = global || window;
global.Buffer = global.Buffer || require("buffer").Buffer;

const Caver = require('caver-js');
const kaikas_key = require("../config/kaikasKey");

//클레이튼 바오밥 네트워크 연결
const caver = new Caver('https://api.baobab.klaytn.net:8651/');

//클레이튼 메인넷 네트워크 연결 ---------------------> 메인넷 연결을 어떻게 하는지 찾아야 함ㅜㅜㅠㅠㅠ
//절대 깃허브에 accountMain 올리면 안됨
const caverMain = new Caver('https://public-node-api.klaytnapi.com/v1/cypress');
let accountMain = caverMain.klay.accounts.createWithAccountKey(kaikas_key.kaikas_address, kaikas_key.kaikas_private_key);
caverMain.klay.accounts.wallet.add(accountMain);

//GIMMEDUCK 지갑 주소 등록
let account = caver.klay.accounts.createWithAccountKey(kaikas_key.kaikas_address, kaikas_key.kaikas_private_key);
caver.klay.accounts.wallet.add(account)

//smartcontract 실행
export function execute_func(baseURI){
    //스마트 컨트랙 함수 중 실행할 함수 설정
    var myContract = new caver.klay.Contract([
        {
            constant: false,
            inputs: [
            {
            internalType: "address",
            name: "user",
            type: "address"
            },{
                internalType: "string",
                name: "_newBaseURI",
                type: "string"
            }
            ],
            name: "publicMint",
            outputs: [],
            payable: true,
            stateMutability: "payable",
            type: "function"
        },
    ]);
    
    myContract.options.address = '0xff3A6bD1A1D97624b067f79A7B6a43b8b47A1E2D';      //배포된 스마트 컨트랙 주소 설정
    myContract.options.gas = '3000000'; 
    myContract.options.gasPrice = parseInt(caver.klay.gasPriceAt("latest"), 16);
    myContract.methods.publicMint("0xFc0147E706EE3231B8aB521C48C53da7d6a52f22",baseURI).send({ 
        from : '0x38596eD0dceaC58632bCf8BD92B5af3854d6A768',
        gasPrice : parseInt(caver.klay.gasPriceAt("latest"), 16),
        gas : '3000000',
        value : caver.utils.toPeb('1','KLAY')
    }).then(function(receipt){
        console.log(receipt);
        window.location.href = "/Donate";
    });

}

//권한 주는 함수
export function giveMinterRole(address){
    //스마트 컨트랙 함수 중 실행할 함수 설정
    var myContract = new caverMain.klay.Contract([
        {
            "constant": false,
            "inputs": [
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "addMinter",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
         },
    ]);
    
    myContract.options.address = '0xcb27E1473A45f033A591Eee0E9c72C0379B5260d';      //배포된 스마트 컨트랙 주소 설정
    myContract.options.gas = '3000000'; 
    myContract.options.gasPrice = parseInt(caverMain.klay.gasPriceAt("latest"), 16);
    myContract.methods.addMinter(address).send({ 
        from : '0x38596eD0dceaC58632bCf8BD92B5af3854d6A768',
        gasPrice : parseInt(caver.klay.gasPriceAt("latest"), 16),
        gas : '3000000',
        value : caverMain.utils.toPeb('0','KLAY')
    }).then(function(receipt){
        console.log(receipt);
    });

}



