const prompt = require('prompt-sync')();

let a = prompt("What is your age? ");
a=Number.parseInt(a) //converting string to number

if(a<0){
    console.log('invalid age');
}
else if(a<18){
    console.log(`Your age is ${a} and you are not eligible to vote`);
}
else if(a>=18){
    console.log(`Your age is ${a} and you are eligible to vote`);
}
else{
    console.log('You can drive');
}

console.log("You can", (a>=18)? "drive":"not drive")

// Switch statement
let b=prompt("Enter num1 :")
b=Number.parseInt(b)
let c=prompt("Enter num2 :")
c=Number.parseInt(c)
const operator=prompt("Enter operator: ")
switch(operator){
    case '+':
        console.log(b ,"+" ,c ,"=",b+c)
        break
    case '-':
        console.log(b ,"-" ,c ,"=",b-c)
        break
    case '/':
        console.log(b ,"/" ,c ,"=",b/c)
        break
    case '*':
        console.log(b ,"*" ,c ,"=",b*c)
        break
    default:
        console.log(`This is an invalid operator = ${operator}.`);
        console.log("This is an invalid operator",operator);
}
// use readline module to take input in node.js terminal
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('What is your age? ', (a) => {
//     console.log(`Your age is ${a}`);
//     rl.close();
// });
