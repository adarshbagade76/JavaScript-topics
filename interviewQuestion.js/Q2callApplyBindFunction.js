//call function
let userDetails0={
    name:"Jas",
    Age:26,
    Designation:"Software Engineer",
    printDetails:function(){
        console.log(this)
    }
}
userDetails0.printDetails()



//general function
let printDetails=function(state,country){
    console.log(this.name+" "+state +" "+country)
}
let userDetails={
    name:"Adarsh",
    Age:26,
    Designation:"Software Engineer",
  
}
printDetails.call(userDetails,"Karnataka","India")

let userDetails2={
    name:"Sahil",
    Age:24,
    Designation:"Software Engineer",
}
printDetails.call(userDetails2 ,"Karnataka","India")

let userDetails3={
    name:"Sam",
    Age:22,
    Designation:"Software Engineer",
}
printDetails.call(userDetails3,"Delhi","India")


// Apply function= pass argument in array instead of one by one
let userDetails31={
    name:"Sam1",
    Age:22,
    Designation:"Software Engineer",
}
printDetails.apply(userDetails31,["Delhi","India"])

//Bind function
let userDetails41={
    name:"Sam41",
    Age:20,
    Designation:"Software Engineer",
}
let newfun=printDetails.bind(userDetails41,["Delhi","India"]);
newfun()
