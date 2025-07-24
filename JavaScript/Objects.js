var person={
    fname: "vansh",
    age: 19,
    city: "vadodara"
}
console.log(person);
console.log(person.fname);
console.log(person["age"]);
person.height=5.8;
console.log(person.height)
delete person.city;
console.log(person);