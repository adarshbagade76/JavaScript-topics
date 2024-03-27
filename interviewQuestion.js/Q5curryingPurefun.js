function add(x){
    return function(y){
        return x+y
    }
}
const currying=add(2)(3)
console.log(currying)

//Pure Function
