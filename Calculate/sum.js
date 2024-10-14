// console.log("this is sum module")
// By default modules are protect their variables and functions. But we can export them.
 var x = "Hello world 1";
//  z = "Hello world 2"; // this will not work for es6 with strict mode. but in common js it works.
 function calculateSum(a , b){
    const sum = a +b;
    console.log('sum : ', sum);
}
// using mjs (ES Module)
// export var x = "Hello world 1";
// export function calculateSum(a , b){
//     const sum = a +b;
//     console.log('sum : ', sum);
// }
// module.exports = {calculateSum : calculateSum , x :x}
// console.log(module.exports) // this will return an empty object 
// module.exports.x = x  ;
// module.exports.calculateSum = calculateSum ;
module.exports= {calculateSum}; // new ES6 syntax for exporting multiple things.