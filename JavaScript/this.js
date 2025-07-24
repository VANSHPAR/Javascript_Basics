var person={
    fname: "vansh",
    age: 19,
    saymyage: function(){
        console.log(this.age);
    }
}
var person1={
    fname: "yash",
    age: 28,
    saymyage: person.saymyage
}
person.saymyage();
person1.saymyage();
