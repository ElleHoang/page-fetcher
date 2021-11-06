// use Node's fs module to write file
const fs = require('fs');
// can use nested callbacks
// fetcher takes 2 CMD LINE ARGS: 1) URL (fetcher[0]) 2) LOCAL FILE PATH (fetcher[1])
const fetcher = process.argv.slice(2);
// need to make HTTP request & wait for response
const request = require('request');
request(fetcher[0], (error, response, data) => { //request URL want to get back (body = data)
  console.log('Error: ', error);
  console.log('StatusCode: ', response && response.statusCode);
  // console.log('Body: ', body); // ===> Body is data
  fs.writeFile(fetcher[1], data, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${data.length} bytes to ./index.html`);
  });

});
// after request complete, need to take data receive & write to file in local fileSys
// return resources downloaded at URL to local path on machine
// should print our messge like: Downloaded and saved 1235 bytes to ./index.html
