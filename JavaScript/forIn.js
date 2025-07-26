  var person={
    fname: "yash",
    age: 28,
   lname:"patel"
}
// var key=Object.keys(person)
// console.log(key);

// var value=Object.values(person);
// console.log(value);

var value=Object.entries(person);
console.log(value);
// for(let key in person){
//     console.log(key+": "+person[key]);
// }
// var a=Object.getOwnPropertyDescriptors(person);
// console.log(a);

Object.defineProperty(person,"lname",{
    value:"shah",
    enumerable: false
})
// var key=Object.keys(person)
// console.log(key);
// var value=Object.values(person);
// console.log(value);

var value=Object.entries(person);
console.log(value);

// var a=Object.getOwnPropertyDescriptors(person);
// console.log(a);
// for(let key in person){
//     console.log(key+": "+person[key]);
// }