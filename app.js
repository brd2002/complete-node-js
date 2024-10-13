var name = "Namaste node js" ;
var a = 10 ;
var b = 20 ;
// console.log(name);
// console.log(a+b);
// console.log(global); // this is in browser is window 
// console.log(this); // this is an empty  object in node js , it is global in brower 
// console.log(globalThis) // same like global
// console.log(globalThis === this ) // false
console.log(global === globalThis ) // true