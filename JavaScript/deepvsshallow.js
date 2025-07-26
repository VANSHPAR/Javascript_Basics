  var person={
    fname: "yash",
    age: 28,
   lname:"patel"
}
//var person2=person;//shallow copy
var person2=JSON.parse(JSON.stringify(person)); //deep copy
person.age=55;
console.log(person);




 console.log(person2);