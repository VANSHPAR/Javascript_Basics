  var person={
    fname: "yash",
    age: 28,
   lname:"patel"
}
for(let key in person){
    console.log(key+": "+person[key]);
}
var a=Object.getOwnPropertyDescriptors(person);
console.log(a);

Object.defineProperty(person,"lname",{
    value:"shah",
    enumerable: false
})
var a=Object.getOwnPropertyDescriptors(person);
console.log(a);
for(let key in person){
    console.log(key+": "+person[key]);
}