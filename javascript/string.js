// All string methods return a new string. They don't modify the original string.

// let a="Javascript"
// console.log(a)
// console.log(a.length)

// for(let i=0;i<a.length;i++){
//     // console.log(a[i])
//     process.stdout.write(a[i]+" ")
// }
// // template literals 
// const prompt = require('prompt-sync')();` `
// console.log(`You are my "special"`)
// let names =prompt("Enter name ")
// console.log(`My name is ${names}`)

// //escape sequence character 
// let n="It\'s just a \"joke\"."
// let nn='It\'s just a "joke".'
// console.log(n,nn)
// console.log(n.length)
// console.log(nn.length)

// let k="Garry"
// console.log(k[0])
// console.log(k.charAt(2))
// console.log(k.charCodeAt(2))
// console.log(k.at(2)) //It allows the use of negative indexes while charAt() do not.
// console.log(k.at(-5)) // Range of at() -> (-1 to -infinity) fromright to left '

// let text = "Apple, Banana, Kiwi";
// console.log(text.slice(7, 13))
// console.log(text.slice(-12))
// console.log(text.slice(-12,-6))
// // substring() is similar to slice().
// // The difference is that start and end values less than 0 are treated as 0 in substring().
// console.log(text.substring(7, 13))
// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.
// console.log(text.substr(-4))

// let text1 = "5";
// let padded = text1.padStart(4,"0");
// console.log(padded)

// let text2 = "Hello world!";
// let result = text2.repeat(2);
// console.log(result)
let x = 'Having fun?';
console.log(x.length)

// continue with includes, startswith and enDSwith