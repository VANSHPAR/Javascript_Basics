// var person={
//     fname: "vansh",
//     age: 19,
//     city:{
//         cityname:"vadodara",
//         location:"West",
//         pincode: 390019,
//         places:{
//           place1:"pavagadh",
//           place2:"gir",
//           place3:"Dhwaraka"
//         }
//     },
//     height:5.8,
//     skill:["DSA","Backend","c++"],
// }
// console.log(person.city.places.place3)

var person={
    fname: "vansh",
    age: 19,
    city: "vadodara",
    saymyname:function(){
        console.log(this.fname)
    }
}

person.saymyname();

