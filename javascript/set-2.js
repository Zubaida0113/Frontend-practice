//find whether a number is divisible by 2 and 3

const prompt = require("prompt-sync")();

let num=prompt("Enter num: ")
// console.log(divisible(num))
let a=true
function summ(num){
    let sum=0
    let temp=num
    while(temp>0){
        sum+= temp%10 
        temp = Math.floor(temp / 10);
    }
    return sum
}
// number is divisible by 2 and 3
if(num%2==0 && summ(num)%3==0){
    console.log(a)
}
else{
    a=false
    console.log(a)
}
// number is divisible by 2 or 3
let b=true
if(num%2==0 || summ(num)%3==0){
    console.log(b)
}
else{
    b=false
    console.log(b)
}


