// require('./xyz.js') // one module into another 
// var sumFileObject = require('./sum.js') // one module into another
// var {calculateSum , x} = require('./Calculate/sum.js') // using objet destructuring
// var {calculateMultiply} = require('./Calculate/multiply.js')  // using default export
// var name = "Namaste node js" ;
// import { calculateSum  , x } from './sum.js';
const util =require('node:util');
console.log(util);

const {calculateMultiply , calculateSum} = require("./Calculate") // maintain file structure in one folder
const data = require("./data.json") // importing json file
console.log(JSON.stringify(data)) // converting json to string
var a = 10 ;
var b = 20 ;
calculateMultiply(a ,b);
// calculateSum(a ,b);
// calculateSum(a ,b) ;
// console.log("x is : " , x ) ;
// calculateSum(a,b) ;
// console.log(sumFileObject.calculateSum(a,b)) ;
// console.log(sumFileObject.x) ;
// console.log(name);
// console.log(a+b);
// console.log(global); // this is in browser is window 
// console.log(this); // this is an empty  object in node js , it is global in brower 
// console.log(globalThis) // same like global
// console.log(globalThis === this ) // false
// console.log(global === globalThis ) // true