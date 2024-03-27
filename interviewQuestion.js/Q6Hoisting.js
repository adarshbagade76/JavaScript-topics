
// var a=7;
// function getName(){
//     console.log("Hi Sam")
// }
// getName();
// console.log(a)

// step 2

// getName();
// console.log(a)

// var a=7;
// function getName(){
//     console.log("Hi Sam")
// }
let sum=0;
const calc=(n)=>{
    for(let i=0;i<=n;i++){
       sum+=i;
    }
    return sum
}
console.log(calc(5))

//5*4*3*2*1
const factorial=(n)=>{
if(n === 0 || n === 1){
    return 1
}else{
    return n *factorial(n-1)
}
}
console.log(factorial(5))
console.log(factorial(16))
console.log(factorial(0))
console.log(factorial(1))
