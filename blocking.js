const crypto = require('crypto');
console.log("Hello World");
var a = 100 ;
var b = 200 ;
// crypto.pbkdf2 (password base key derivative function)
// Asynchronous function
crypto.pbkdf2('Bharat Ruidas', 'salt', 100000, 64, 'sha512', (derivekey , err) => {
    if (err) {
        console.log(err);
    }
    console.log(derivekey);
    console.log("Hashing is done");
});
// Synchronous function same function 
// this will block the event loop untill it get the data from crypto.pbkdf2Sync 
// it will not allow js engine to do anything else
// this is not a callback function 
// dont use sync function in node js because it will block the event loop
// var key = crypto.pbkdf2Sync('Bharat Ruidas', 'salt', 100000, 64, 'sha512' );
// console.log(key);
// console.log("Hello World");
function multiply(a, b) {
    const result = a * b;   
    return result;
}
var c = multiply(a, b);
console.log(c);

