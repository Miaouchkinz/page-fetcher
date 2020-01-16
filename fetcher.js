// * Use the request library to make the HTTP request
const request = require('request');
// * Use Node's fs module to write the file
const fs = require('fs');

const input = process.argv.slice(2);
const URL = input[0];
const localFilePath = input[1];


request(URL, (error, response, body) => {
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // Change so it is a function body is saved to local file path
  fs.writeFile('newDownloadedFile.txt', body, (error) => {
    if (error) {
      return console.log('error:', error); // Print the error if one occurred
    }
    console.log(`Downloaded and saved ${fs.statSync('newDownloadedFile.txt').size} bytes to ${localFilePath}newDownloadedFile.txt.`);
  });
});