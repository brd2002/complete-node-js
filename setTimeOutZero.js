console.log("Hello World");
var a = 10 ; 
var b = 20 ; 
setTimeout(() => {
    console.log("Call after 0 seconds");
}, 0);
// console.log("Hello World");
function multiply(a, b) {
    const result = a * b;
    return result;
}
var c = multiply(a, b);
console.log(c);
