  var person={
    fname: "yash",
    age: 28,
   lname:"patel"
}
var value=Object.entries(person);
var obj=Object.fromEntries(value);
console.log(obj);

var person2=Object.assign({},person);
console.log(person2);

var person3=Object.assign({},{a:1,b:2,c:3,...person});
console.log(person3);


// Object.freeze(person);
// person.fname="patil";
// console.log(person);

// Object.seal(person);
// person.lname="patil";
// person.hello="hello";
// delete person.fname;
// console.log(person);

var a=Object.hasOwn(person,"age");
console.log(a);

var b=Object.getOwnPropertyNames(person);
console.log(b);

var c=person.propertyIsEnumerable("fname");
console.log(c);