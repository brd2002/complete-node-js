const fs = require('fs');
const http = require('https');
console.log("Hello World");
var a  = 189 ;
var b = 200 ;
http.get('http://dummyjson.com/image', (res) => {
    console.log("fetching data from url is successfull");
});
setTimeout(() => {
    console.log('Call after 5 seconds');
}, 5000);
// Synchronous function
// this will deliver the js code in libuv but js engine also not move ahead untill it get the data from file because of this is sync function
fs.readFileSync('file.txt', 'utf8', (err, data) => {
    console.log(data);
});
// Asyncfunction
// fs.readFile('file.txt', 'utf8', (err, data) => {
//     // if (err) {
//     //     console.error(err);
//     //     return;
//     // }
//     console.log(data);
// });
function multiply(a, b) {
    return a * b;
}
var c = (multiply(a, b));

console.log(c);


