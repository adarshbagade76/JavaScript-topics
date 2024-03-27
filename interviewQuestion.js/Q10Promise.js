//Requirement
const cart=["Shoes","Kurta","Shirts"]
createOrder(cart) //orderId or oderDetail
proceedToPayment(orderId)

//using callback
createOrder(cart,function (orderId){
    proceedToPayment(orderId)     
})

//using promise
const promise=createOrder(cart)
// {data:orderDeatil or orderId}

promise.then(function (orderId){
    proceedToPayment(orderId)     
})
// example1
const GitHUB_API="https://jsonplaceholder.typicode.com/users/1/todos"
const users=fetch(GitHUB_API)
console.log(users)
users.then(function(data){
    console.log(data)
})