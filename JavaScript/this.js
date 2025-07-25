function saymyage(){
    console.log(this.age)
}
var person={
    fname: "vansh",
    age: 19,
    saymyage:saymyage
    // saymyage: function(){
    //     console.log(this.age);
    // }
}
var person1={
    fname: "yash",
    age: 28,
    saymyage:saymyage,
    // saymyage: person.saymyage
    saymyname: ()=>{
        console.log(this.fname);
    }
}
person.saymyage();
person1.saymyage();
person1.saymyname();
