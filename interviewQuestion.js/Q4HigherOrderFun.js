// Earler code
// const radius=[3,1,2,4]

// const calculateArea=(radius)=>{
// const Output=[]
// for(let i=0;i<radius.length;i++){
//     Output.push(Math.PI*radius[i]*radius[i])
// }
// return Output
// }
// console.log(calculateArea(radius))


// const calculateCricumference=(radius)=>{
//     const output=[]
//     for(let i=0;i< radius.length;i++){
//         output.push(2*Math.PI*radius[i])
//     }
//     return output
// }
// console.log(calculateCricumference(radius))


// const calculateDiameter=(radius)=>{
// const output=[]
// for(let i=0;i<radius.length;i++){
//     output.push(2*radius[i])
// }
// return output
// }
// console.log(calculateDiameter(radius))   

//new code
const area=function(radius){
    return Math.PI*radius*radius
};
const cricumference=(radius)=>{
    return 2*Math.PI*radius
}
const diameter=(radius)=>{
return 2*radius
}
const radius=[3,1,2,4]

const calculateArea1=(radius,logic)=>{
const Output=[]
for(let i=0;i<radius.length;i++){
    Output.push(logic(radius[i]))
}
return Output
}
console.log(calculateArea1(radius,area))
console.log(calculateArea1(radius,cricumference))
console.log(calculateArea1( radius,diameter))
