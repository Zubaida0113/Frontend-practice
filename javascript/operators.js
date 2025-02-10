//Arithmetic operators
let a=10
let b=4
console.log("a+b = ",a+b)
console.log("a-b = ",a-b)
console.log("a/b = ",a/b)
console.log("a*b = ",a*b)
console.log("a**b = ",a**b) //exponential operator
console.log("a%b = ",a%b) //modulo operator
console.log("++a = ",++a)
console.log("a++ = ",a++)
console.log("--a = ",--a)
console.log("a-- = ",a--)
console.log("a = ",a)
console.log("a-- = ",a--)
console.log("--a = ",--a)

//Assignment operators
let c=1
c+=5
console.log(c)
c-=5
console.log(c)
c*=5
console.log(c)
c/=5
console.log(c)
c**=5
console.log(c)
c%=5
console.log(c)

// comparison operators
// == and != check whether two variable have equal values nor not
// === and !== check whether two variable have equal values and equal types or not
// If the values have different types, the values are considered unequal. 17==="17"-->false
// If the values have the same type, are not numbers, and have the same value, they're considered equal. 
// Finally, if both values are numbers, they're considered equal (6===6)
const num = 0;
const obj = new String("0");
const str = "0";

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false

let e=6
let f=6
console.log("ex.1")
console.log(e==f)
console.log(e!=f)
console.log(e===f)
console.log(e!==f)
let ee=7
let ff=6
console.log("ex.2")
console.log(ee==ff)
console.log(ee!=ff)
console.log(ee===ff)
console.log(ee!==ff)
let i=6
let j="6"
console.log("ex.3")
console.log(i==j)
console.log(i!=j)
console.log(i===j)
console.log(i!==j)