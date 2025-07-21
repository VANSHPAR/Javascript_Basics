//type of functions
function add(a,b){
    console.log(a+b);
}
add(100,200);


const minus=function(a,b){
    console.log(a-b);
}
console.log(minus);
minus(20,10);

//arrow function
const sub=(x,y)=>{
  console.log(x-y);
}
sub(10,20);

const hello=()=> "Hello";
console.log(hello());

const addition = (a,b) => a+b;

add(10,5);

//callback function
function greet(a,b){
    console.log("this is greet fun."+a);
    b()
}
greet(10,function(){
    console.log("callback");
})//higher order function


function yes(){
    console.log("yes");
}
yes("No",yes);

//anonymous function
const tell=function(){
    console.log("tell something");
}





