var person={
    fname: "yash",
    lname: "patel",
    age: 28,
    saymyage:function(){
        console.log(this.age);
    },
    saymyname: ()=>{
        console.log(this.fname);
    }
  
}
var {fname,age}= person;
console.log(fname);
console.log(age);


  var arr=[3,4,5,7];
  var [a,b]=arr
  console.log(a,b);

