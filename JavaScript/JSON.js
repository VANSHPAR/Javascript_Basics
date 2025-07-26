  var person={
    fname: "yash",
    age: 28,
   lname:"patel"
}
var jsonobj=JSON.stringify(person);

console.log(jsonobj);
var jsobj=JSON.parse(jsonobj)

console.log(jsobj);