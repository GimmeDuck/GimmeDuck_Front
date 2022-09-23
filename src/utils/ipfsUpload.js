const start = async function(image) {

    const { Readable } = require('stream');

    var axios = require('axios');
    var FormData = require('form-data');
    //var fs = require('fs');
    var data = new FormData();
    //data.append('file', fs.createReadStream('first_duck.png'));
    
    var buffer = new Buffer.from(image, 'base64');
    const stream = Readable.from(buffer);

    data.append('file', stream);
    data.append('pinataOptions', '{"cidVersion": 1}');
    data.append('pinataMetadata', '{"name": "MyFile", "keyvalues": {"company": "Pinata"}}');

    var config = {
    method: 'post',
    url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
    headers: { 
        pinata_api_key: '71084a474f5f077b9699',
        pinata_secret_api_key: '5d9f0655f5b4194f2e0bfac0eff6fe0005a242c8af72bed24cf78cb61619d7da',
        ...data.getHeaders()
    },
    data : data
    };


    const res = await axios(config);
    console.log(res.data);

    var data2 = JSON.stringify({
        "pinataOptions": {
          "cidVersion": 1
        },
        "pinataMetadata": {
          "name": "Real_Test",
          "keyvalues": {
            "customKey": "customValue",
            "customKey2": "customValue2"
          }
        },
        "pinataContent": {
            "name":"Gimme_duck_test",
            "description":"Gimme_duck upload practice!",
            "image":"ipfs://"+res.data.IpfsHash,
            "attributes":[{"trait_type": "Unknown","value": "Unknown"}]
        }
      });
      
      var config2 = {
        method: 'post',
        url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
        headers: { 
          'Content-Type': 'application/json', 
          pinata_api_key: '71084a474f5f077b9699',
            pinata_secret_api_key: '5d9f0655f5b4194f2e0bfac0eff6fe0005a242c8af72bed24cf78cb61619d7da'
        },
        data : data2
      };

      
    const res2 = await axios(config2);
    console.log(res2.data);

} 

export default start;






// var i = 2;  //gimme_duck index
// var result_ = '';
// const fs = require('fs');
// const readableStreamForFile = fs.createReadStream('./second_duck.png');

// const options = {
//     pinataMetadata: {
//         name: "GIMMEDUCK_TEST"+i,
//         keyvalues: {
//             customKey: 'gimmeduck_test'+i,
//         }
//     },
//     pinataOptions: {
//         cidVersion: 0
//     }
// };

// pinata.pinFileToIPFS(readableStreamForFile, options).then((result) => {
//     console.log(readableStreamForFile);
//     console.log("File Uploaded!");
//     console.log(result);
//     result_ = result.IpfsHash;

//     /*pin JSON to IPFS*/
//     const body = {
//         "name":"Gimme_duck"+i,
//         "description":"Gimme_duck upload practice!",
//         "image":"ipfs://"+result_,
//         "attributes":[{"trait_type": "Unknown","value": "Unknown"}]
//     };

//     const options2 = {
//         pinataMetadata: {
//             name: "GIMMEDUCK_TEST_JSON"+i,
//             keyvalues: {
//                 customKey: 'gimmeduck_test_json',
//             }
//         },
//         pinataOptions: {
//             cidVersion: 0
//         }
//     };

//     pinata.pinJSONToIPFS(body, options2).then((result2) => {
//         console.log("JSON Uploaded!");
//         console.log(result2);
//     }).catch((err2) => {
//         console.log(err2);
//     });
    
// }).catch((err) => {
//     console.log(err);
// });
