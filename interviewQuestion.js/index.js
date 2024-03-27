const obj={
    name:"Adarsh",
    id:"mcg098"
}
const res=Object.create(obj)
console.log(res)
console.log("Prototype of res:", Object.getPrototypeOf(res)); 

// Function constructor:
function person(name){
    this.name=name;
}
const br=new person("adarsh")
console.log(br)