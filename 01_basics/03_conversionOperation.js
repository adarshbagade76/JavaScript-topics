let score="33abc";
let valueInNumber=Number(score);
console.log(typeof valueInNumber);
console.log("valueInNumber",valueInNumber)

let score1=null;
let valueInNumber1=Number(score1);
console.log(typeof valueInNumber1);
console.log(valueInNumber1)

let score2=undefined;
console.log("score2", typeof score2)
let valueInNumber2=Number(score2);
console.log(typeof valueInNumber2);
console.log("valueInNumber2",valueInNumber2)


let score3=true;
console.log("score3",typeof score3)
let valueInNumber3=Number(score3);
console.log(typeof valueInNumber3);
console.log("valueInNumber3",valueInNumber3)


let isLoginUser1=true
console.log("isLoginUser1",typeof isLoginUser1)
let isLoginUser2=Boolean(isLoginUser1)
console.log("isLoginUser2",isLoginUser1)

let someNumber=33;
let someNumber1=String(someNumber);
console.log("someNumber1", typeof someNumber1);