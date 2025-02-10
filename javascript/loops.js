//for loop
let sum=0
const prompt=require('prompt-sync')();
let n= prompt("Enter n: ")

for(let i=1;i<=n;i++){
    sum+=i
}
console.log("Sum of first",n,"natural numbers is",sum)
console.log("Sum of first"+n+"natural numbers is"+sum) //all the terms will be string

const obj={
    A:76,
    B:55,
    C:24,
    D:67,
    E:98
}
for(a in obj){
    console.log(a,"=",obj[a])
}
for(a of "Garry"){
    // console.log(a)
    process.stdout.write(a + " ");// horizontally 
}