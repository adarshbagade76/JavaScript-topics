//1)Callback function
function callbackFunction(name,callback){
    console.log("Hello"+"")
    callback()
}
function goodBye(){
    console.log("ITs callback")
}
callbackFunction("Alice",goodBye)


//2) callback Hell
const cart=["shoes","pants","kurta","Shirts"];
api.createOrder(cart,function(){

    api.proceedTopayment(function(){

    api.showOrderSummary( 
        function(){
            api.updateWallet()
        }
    )
    })
})
// use promises to avoid callback hell
// promise chainging
createOrder(cart)
.then((orderId)=>proceedTopayment(orderId))
.then((paymentInfo)=>showOrderSummary(paymentInfo))
.then((paymentInfo)=>updateWallet(paymentInfo))