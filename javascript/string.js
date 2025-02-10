let a="Javascript"
console.log(a)
console.log(a.length)

for(let i=0;i<a.length;i++){
    // console.log(a[i])
    process.stdout.write(a[i]+" ")
}
// template literals 
const prompt = require('prompt-sync')();` `
console.log(`You are my "special"`)
let names =prompt("Enter name ")
console.log(`My name is ${names}`)