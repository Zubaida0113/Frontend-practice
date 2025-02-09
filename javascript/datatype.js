// Primitive Datatype in Js - N N B B S S U
// Number, Null, String, Symbol, Boolean, BigInt,Undefined
let a = null;
let b= 45;
let c="string"
let d= true
let f=BigInt("43878234")
let e=Symbol("symbol")
let g=undefined 
console.log(a,b,c,d,e,f,g)
console.log(typeof f)

// Non-Primitive Datatype - Objects in Js
// used to create lookUp Pairs/ Maapping for key-value pairs
const item = {
    "Harry": true,
    "Zubaida": false,
    "Rahul": 45,
    "Rohan": undefined
}
console.log(item["Harry"])
console.log(item["Rahul"])