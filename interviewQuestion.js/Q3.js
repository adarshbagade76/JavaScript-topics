// console.log(0 === false)//f
// console.log(undefined === undefined)//t
// console.log(+0 === -0)//t
// console.log('' == false)//t
// console.log(NaN===NaN)//f
// console.log(NaN==NaN)//f
// console.log(0 == NaN)//f
// NaN is a special value in JavaScript representing "Not-a-Number". It's a value returned when a mathematical operation cannot produce a meaningful result.
// In JavaScript, NaN is considered to be unequal to any other value, including itself. This means that NaN == NaN evaluates to false.
// console.log(typeof(null))//object

const array = [1, 2, 3, 4, 3, 5, 6, 5, 1];
const uniqueArray = [];

for (let i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
        uniqueArray.push(array[i]);
    }
}

console.log(uniqueArray)


//factorial 
function factorial(n){
if(n === 0 || n === 1){
    return 1
}else{
    return n* factorial(n-1)
}
}
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
